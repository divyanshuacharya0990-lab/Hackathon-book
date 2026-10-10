# AI-Assisted Development Playbook v1.1

**A portable, vendor-neutral operating system for hackathons and small software teams.** Built from a retrospective on GigVault. It is not a promise of error-free AI development: humans remain accountable and tests establish what works.

## Level 1 — Quick Start

1. Open [START HERE](docs/START_HERE.md). Give your agent the repository or attach the required files, your task and its observable acceptance criteria.
2. Copy [Bootstrap](prompts/01_BOOTSTRAP.md) into your own AI tool. The agent checks access, state and capabilities automatically and starts when ready.
3. For a new project, have the agent draft the minimal brief and next task from your request. Name ownership and integration responsibility when multiple people contribute; one person may hold several roles. Add contracts for actual shared boundaries.
4. Verify an early narrow end-to-end journey before expanding disconnected components. Preserve concise evidence and the next action for resumption.

## Level 2 — Core Rules and Prompts

- [AGENTS.md](AGENTS.md): mandatory safeguards and ordinary engineering autonomy.
- [Prompt router and independent prompting guide](docs/PROMPT_ROUTER.md): choose, adapt and use prompts without a central prompt writer.
- [Agent operations](docs/AGENT_OPERATIONS.md): work loop, context, quotas and automatic continuity.
- [Quality gates](docs/QUALITY_GATES.md) and [Security and truth](docs/SECURITY_AND_TRUTH.md): apply checks according to task risk and claims.

For a new chat, model, tool or machine, use [Handoff and migration](prompts/06_HANDOFF_AND_MIGRATION.md). Accessible prerequisites permit immediate progress; missing dependencies trigger a focused request.

## Level 3 — Optional References

- [Git and integration](workflows/GIT_AND_INTEGRATION.md) for branches, contracts, CI and publication.
- [Hackathon runbook](workflows/HACKATHON_RUNBOOK.md) for deadlines, scope and demo preparation.
- [GigVault retrospective](examples/GIGVAULT_RETROSPECTIVE.md) for lessons and evidence limits.
- [Project brief](templates/PROJECT_BRIEF.md), [Ownership](templates/OWNERSHIP.md), [Contract](templates/CONTRACT.md), [Milestone](templates/MILESTONE.md), [Checkpoint](templates/CHECKPOINT.md), [Decision](templates/DECISION.md), [Release checklist](templates/RELEASE_CHECKLIST.md) and [Status report](templates/STATUS_REPORT.md). Use only what helps; combine short records rather than duplicating them.
- [Audit results](AUDIT.md) and the optional package check: `node scripts/verify-playbook.cjs`. Node is needed only for this check, not for reading or using the playbook.

These files describe a reusable kit. They are not a filled project plan or an executable application. No past conversation, account or service is required to use them.

## Non-negotiable principles

- **Working behavior beats impressive-looking completion reports.** A rendered page is not a functional user journey.
- **Plans guide scope and can improve with evidence.** Make compatible implementation improvements autonomously; escalate material scope, architecture, security or shared compatibility changes.
- **Parallelize independent work, not unverified assumptions.** Define interfaces, fixture data and integration tests early.
- **Each developer directs their own agent.** Solo developers can hold all roles; multi-agent work remains optional and requires clear boundaries.
- **Never claim a test was run if it wasn't.** Mark unverifiable outcomes as `UNVERIFIED`.
- **Use existing local tools before adding MCP or cloud infrastructure.** Cloud and plugins are optional, not mandatory.
- **A checkpoint is evidence, not a self-asserted source of truth.** Reconcile it with Git and executable checks.

## Compatibility

These are **repository documents**, not configuration that every product auto-discovers. `AGENTS.md` is supported by some coding tools, but other clients require manual attachment or their own rules file. Use the bootstrap prompt for any model; verify it actually read the files. Never assume a chat AI has access to a private repository merely because you named it.

## Distribution

Distribute this entire directory as a ZIP or committed Git folder. Keep a version/tag; update the retrospective after projects. Remove secrets, credentials, private logs, customer records and personal details before sharing.
