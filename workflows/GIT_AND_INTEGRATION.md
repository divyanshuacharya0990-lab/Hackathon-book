# Git, contracts, testing, integration

## Start

Select repo, base branch and applicable protection policy, branch names and ownership. Separate machines/checkouts provide working-directory isolation but still need branch discipline. Agents automatically verify needed access, branch/status and relevant commands before the task. A dirty checkout is not automatically a blocker: preserve existing work and isolate edits safely. Remote access is needed for publication, not every local task. A branch alone does not isolate a shared working directory; use separate worktrees/checkouts when concurrent edits need isolation.

## Shared contracts first

For each producer/consumer boundary document: path/method or callable name; auth/session; request/response data and errors; normalization/canonical encoding; date/time rules; version; example fixtures; security and failure behavior; golden vectors for cryptographic cross-language data; exact producer and consumer test names. Use OpenAPI/JSON Schema/TypeScript types/ABI where applicable; descriptive Markdown is a guide, not enforcement.

Consumer-driven contract tests should run early and regularly. For example, Backend A produces canonical evidence fixture with commitment; Backend B consumes **exact fixture** and proves equivalent commitment—not an independently invented fixture.

## Developer cycle

`inspect owned diff → small patch → targeted tests → contract checks → checkpoint update → commit`. Commit messages describe behavior. Never edit directly on a collaborator's worktree. Avoid giant PRs; PR descriptions include test evidence and limitations.

## Integration owner cycle

1. Identify exact branches/SHAs; verify remote refs rather than assuming a local commit is published.
2. Check shared interfaces and migrations first.
3. Merge/rebase according to project policy; resolve conflicts with domain owners, not unilateral edits of cryptography/auth.
4. Run production build, API contract tests, negative security cases, browser/CLI vertical-slice smoke.
5. Verify required startup/config from a clean environment.
6. Report PASS/FAIL/NOT RUN and integration SHA. Protect stable checkpoint/tag.

## CI baseline (adapt commands to stack)

- Format/typecheck/lint (fast).
- Unit tests for changed modules.
- Interface schema and golden-vector tests.
- Auth/authorization and regression negatives.
- Build/compile.
- At integration gate: end-to-end smoke on the actual assembled app.

Never blindly add generic commands if framework isn't configured. Record exact working commands, runtime prerequisites and configuration names in the filled project checkpoint or existing setup guide. Do not invent a TESTING_AND_RELEASE.md dependency or duplicate an existing guide.

## If credentials or Git push fail

Preserve working tree and local commits; report local SHA, target remote, auth failure, attempted command and whether PR head advanced. Never imply successful publication based on an agent summary. Do not force-push to "fix" routine auth problems.

## Safe command pattern (optional)

From the verified repository, inspect `git status --short`, `git branch --show-current`, `git remote -v` and `git diff`. Redact embedded credentials in remote URLs before reporting. Select specific intended paths for `git add <paths>`; inspect `git diff --cached` and run relevant checks before `git commit`. Use a new branch/worktree per concurrent writer according to project policy. Do not run reset/clean, blanket staging or a destructive database reset to make the checkout clean.

For authorized publication, verify remote owner, repository, branch and visibility; push without force. Read the remote branch SHA and contents/tree back and compare with the tested local revision. Review CI results separately; a push does not mean CI passed. If creating a new repository, check for collisions and never overwrite an existing one. Use private visibility unless public sharing is authorized.

Review ignored and tracked files for secrets before commit: .gitignore does not remove files already tracked. Restore configuration via secure provisioning and committed examples with names/placeholders only. Follow the project policy for shared-history rebases; prefer preserving published history. Reference: [Git worktrees](https://git-scm.com/docs/git-worktree), [Git ignore behavior](https://git-scm.com/docs/gitignore) and [OpenAPI 3.1.1](https://spec.openapis.org/oas/v3.1.1.html) for applicable HTTP schemas. OpenAPI describes an interface; configured validation/tests enforce it.
