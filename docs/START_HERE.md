# Quick Start — developers and AI agents

## Begin with one request

Use [Bootstrap](../prompts/01_BOOTSTRAP.md) with your repository location, responsibility and intended outcome. Existing project: point to relevant filled documents and latest checkpoint if they exist. New project: describe the outcome, constraints and deadline; the agent drafts missing context and begins safe work without demanding every template.

The agent verifies repository/file access, branch/status, task dependencies and needed capabilities automatically. If something essential is inaccessible, it requests only that dependency. A chat-only assistant can reason about attached files but cannot claim to edit or run tests without those capabilities. Developers provide access when requested, not a manual environment checklist before every task.

## Adopt the kit safely

Keep this as the repository root for a new playbook repository, or copy selected guidance into an existing project. Review collisions before copying: merge the project's existing AGENTS.md and docs rather than overwriting them. If the kit is stored in a subfolder, tell the agent its location; automatic discovery varies by tool.

For filled project records, suggested paths are `docs/PROJECT_BRIEF.md`, `docs/OWNERSHIP.md`, `docs/CONTRACT.md`, `docs/MILESTONE.md` and `docs/CHECKPOINT.md`. These are generated project documents, not missing package files. Point the agent to actual paths if your project uses different names. Templates stay blank and do not authorize tasks. A short brief and checkpoint can contain the needed ownership and milestone details; separate documents are optional. Use multiple contract files only for actual shared boundaries.

## Work independently

Read the [prompt router](PROMPT_ROUTER.md), copy the relevant prompt and replace placeholders you know. Say unknown for the rest; the agent discovers accessible facts and asks only indispensable questions. Your own agent can also select and fill a prompt. A prompt coach is optional.

For teams, name an integration owner and component owners; one person may hold several roles. Agree shared contracts and fixtures before parallel implementations diverge. Coordinate edits to overlapping files; routine compatible fixes do not require new approval. For solo projects, do not invent teammates or review bureaucracy.

Define one observable slice: for example, create an item through the UI/API, persist it and retrieve it after reload. Run a relevant failure case. Record which dependencies are real, local or simulated. Expand after the necessary layers work together; a mock-only demonstration does not establish real integration.

## Agent's automatic work loop

1. Inspect current accessible state once; read relevant rules/specifications and reconcile stale checkpoint claims with actual files and Git. Verify changed prerequisites again when needed.
2. Choose the next testable authorized outcome. If clear, implement now. Preserve existing work; make ordinary engineering choices autonomously.
3. Run risk-appropriate checks. Escalate only material decisions or essential missing dependencies; continue independent work.
4. Save concise evidence and next action after meaningful progress. On migration, check access and capabilities again; do not assume old paths or unpushed work transferred.

## Terms

- **Vertical slice:** a narrow observable journey crossing necessary layers; disclose simulated dependencies.
- **Contract:** versioned interface behavior, formats, auth, errors and fixtures backed by executable checks where applicable.
- **Acceptance:** a repeatable check of the requested behavior, proportional to risk.
- **Checkpoint:** concise verified state plus limitations and next action, not proof merely because it is written.
- **Integration owner:** coordinates assembled-system compatibility and readiness, not everyone else's prompts.

The [core rules](../AGENTS.md) define safeguards and escalation. The [quality guide](QUALITY_GATES.md) explains what the evidence supports. Use the [runbook](../workflows/HACKATHON_RUNBOOK.md) only when deadline planning helps.
