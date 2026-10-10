#!/usr/bin/env node
'use strict';
// Offline package checks, not an application test or a proof of semantic accuracy.
const fs=require('node:fs'), path=require('node:path'), crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name==='.git'?[]:e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk(root).map(p=>path.relative(root,p).split(path.sep).join('/')).sort();
const errors=[], warnings=[]; let links=0, refs=0;
const generated=new Set(['docs/PROJECT_BRIEF.md','docs/OWNERSHIP.md','docs/CONTRACT.md','docs/MILESTONE.md','docs/CHECKPOINT.md']);
const known=new Set(files);
function check(condition,message){if(!condition)errors.push(message);}
for(const f of files){
 const buf=fs.readFileSync(path.join(root,f));
 check(buf.length>0,'Empty file: '+f);
 check(Buffer.from(buf.toString('utf8'),'utf8').equals(buf),'Invalid UTF-8: '+f);
 const s=buf.toString('utf8');
 const suspicious=[/gh[pousr]_[A-Za-z0-9]{30,}/,/github_pat_[A-Za-z0-9_]{30,}/,/AKIA[0-9A-Z]{16}/,/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/];
 for(const re of suspicious)check(!re.test(s),'Potential credential: '+f);
 if(!f.endsWith('.md'))continue;
 check(!s.includes('\uFFFD'),'Replacement character: '+f);
 check(!/^(<<<<<<<|=======|>>>>>>>)/m.test(s),'Conflict marker: '+f);
 check((s.match(/^```/gm)||[]).length%2===0,'Unbalanced code fence: '+f);
 for(const m of s.matchAll(/\[[^\]\n]+\]\(([^)\s]+)\)/g)){
  const target=m[1]; links++;
  if(/^https?:\/\//.test(target)){check(target.startsWith('https://'),'Non-HTTPS URL: '+target);continue;}
  const [p,anchor]=target.split('#');
  const resolved=path.resolve(path.dirname(path.join(root,f)),decodeURIComponent(p||'.'));
  check(resolved===root||resolved.startsWith(root+path.sep),'Escaping link: '+f+' '+target);
  check(fs.existsSync(resolved),'Broken link: '+f+' '+target);
  if(anchor)warnings.push('Anchor requires manual review: '+f+' '+target);
 }
 for(const m of s.matchAll(/`((?:docs|templates|prompts|workflows|examples|scripts)\/[^`\s]+\.(?:md|cjs))`/g)){
  refs++;check(known.has(m[1])||generated.has(m[1]),'Unknown file reference: '+f+' '+m[1]);
 }
}
const prompts=files.filter(f=>/^prompts\/\d{2}_.*\.md$/.test(f));
check(prompts.length===13,'Expected 13 preserved lifecycle prompts');
check(files.filter(f=>f.startsWith('templates/')&&f.endsWith('.md')).length===8,'Expected 8 preserved templates');
for(const f of prompts){check(fs.readFileSync(path.join(root,f),'utf8').includes('COPY / PASTE'),'Missing prompt label: '+f);check(fs.readFileSync(path.join(root,'docs/PROMPT_ROUTER.md'),'utf8').includes('../'+f),'Prompt absent from router: '+f);}
for(const f of ['AGENTS.md','README.md','docs/START_HERE.md','docs/PROMPT_ROUTER.md','docs/AGENT_OPERATIONS.md','docs/QUALITY_GATES.md','docs/SECURITY_AND_TRUTH.md','AUDIT.md','.gitignore','.gitattributes'])check(known.has(f),'Missing package file: '+f);
for(const phrase of ['Level 1','Level 2','Level 3'])check(fs.readFileSync(path.join(root,'README.md'),'utf8').includes(phrase),'Missing navigation: '+phrase);
const manifestFile=path.join(root,'FILE_MANIFEST.json');
if(fs.existsSync(manifestFile)){
 const manifest=JSON.parse(fs.readFileSync(manifestFile,'utf8'));
 const entries=manifest.files;
 check(Array.isArray(entries),'Invalid manifest');
 if(Array.isArray(entries)){
  const expected=files.filter(f=>f!=='FILE_MANIFEST.json');
  check(entries.length===expected.length,'Manifest count mismatch');
  check(new Set(entries.map(e=>e.path)).size===entries.length,'Duplicate manifest entries');
  for(const f of expected){const e=entries.find(e=>e.path===f);check(!!e,'Not inventoried: '+f);if(e){const b=fs.readFileSync(path.join(root,f));check(e.sha256===crypto.createHash('sha256').update(b).digest('hex')&&e.bytes===b.length,'Manifest content mismatch: '+f);}}
 }
}else warnings.push('Manifest absent: integrity checks not run');
console.log(JSON.stringify({status:errors.length?'FAIL':'PASS',files:files.length,markdown:files.filter(f=>f.endsWith('.md')).length,prompts:prompts.length,templates:8,links,fileReferences:refs,generatedProjectReferences:[...generated],errors,warnings,limitations:['No application code is supplied or tested.','External URL availability and semantic accuracy require separate review.','Credential-pattern checks are a limited heuristic, not comprehensive secret detection.','Usability scenarios are reasoning-based assessments, not tests run by new developers.']},null,2));
process.exitCode=errors.length?1:0;
