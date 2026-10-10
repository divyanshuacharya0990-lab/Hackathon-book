# Developer/AI operating manual

## Responsibilities

- **Human developer:** owns decisions and evidence for assigned module, runs agent, checks user-visible behavior, updates status and escalates cross-team issues.
- **Coding agent:** implements assigned milestones, inspects code, runs available tests, records evidence and autonomously advances work within the authorized objective, including routine decomposition and evidence-based implementation improvements.
- **Integration owner:** manages merged integration branch, compatibility gates, full end-to-end smoke tests, final freeze and release readiness.
- **Project lead:** decides MVP, prioritization, scope tradeoffs, conflicting requirements and delivery.
- **Prompt coach (optional):** helps developer interpret instructions and formulate bounded requests. Has no authority to change contracts or attest tests it didn't run.

## Agent loop (repeat without writing a new mega-prompt)

1. Read checkpoint and current approved milestone, then inspect relevant code.
2. Verify prerequisites. If missing, surface one precise blocking dependency.
3. Implement smallest coherent unit. Tests can cover multiple endpoints; don't arbitrarily split into 'one endpoint per conversation'.
4. Run targeted tests and relevant cross-module contract tests.
5. Report implemented behavior, test result and next action in under a page.
6. Update concise state after meaningful progress and continue within the authorized objective, while watching time and scope. Use one shared checkpoint/status record when practical.

## Prevent unnecessary context usage

- Reuse current session if its context remains correct and efficient; start fresh when a session becomes confused, expensive or truncated, or when separation helps.
- Short status file lists SHA, owned files, contract versions, tests and blockers. **Never** paste entire historical logs into every prompt.
- Selective reading is preferred; code changes, unknown dependencies and security concerns can justify rereading broad context.
- Do not assume editor indexing equals full model-context ingestion: tool behavior and billing vary. Check actual usage/activity reports if available.
- Avoid simultaneous agents rewriting the same directory/branch. More parallelism can **increase** total usage even if wall-clock improves.

## Tool selection (avoid unnecessary infrastructure)

- IDE + filesystem/terminal tools: default for code, tests and local logs.
- GitHub connector or CLI: useful for issues, PRs and remote state when local agent lacks access.
- MCP: use only for a missing supported external capability. Scope permissions, authenticate safely, inspect third-party package/version, and do not pass secrets to arbitrary servers. Filesystem MCP is usually redundant when the agent already reads local files.
- Parallel subagents: use for bounded independent tasks, such as test fixture review or documentation; each must have clear ownership and return artifacts/evidence. Do not launch many without usage budget and review capacity.
- Cloud agents: optional for resource-intensive isolated work; review repository access, secrets, data egress, cost and whether local state is available remotely.
- Browser automation: best for end-to-end UX acceptance when testable; screenshots alone are not authorization or transaction evidence.

## Agent progress loop / runaway protection

After roughly two unproductive cycles, pause the failing approach and use [Recover agent](../prompts/11_RECOVER_AGENT.md) to isolate evidence and select a different measurable diagnostic. This is a heuristic, not a mandatory halt after two attempts or a demand that every edit have an automated test. Continue independently when a useful next experiment is available. Check actual quotas if accessible; reserve enough time/context to checkpoint before exhaustion. If blocked by a tool, preserve work and use an available equivalent capability within existing authorization. If near deadline, use scope freeze.

## Concise evidence reporting

Use [Status report](../templates/STATUS_REPORT.md) when useful, or combine it with the checkpoint. Mark checks `PASS` or `FAIL` when executed, and `NOT RUN` or `NOT ACCESSIBLE` otherwise. Include the command, result, observed revision and relevant environment for significant checks. Distinguish actual browser-wallet auth from development test-key signing; simulated provider data from real provider access; local chain from deployed chain.

## Automatic continuity across tools and machines

The incoming agent checks the supplied repository/location and filled checkpoint, current Git state, relevant files and task-specific capabilities (edit, terminal/runtime, browser, network and remote access as needed). Verify dependencies for the next task rather than reinstalling everything or rediscovering the entire repository. Reuse established state when it still matches current evidence.

Proceed immediately if ready. If not, ask only for the missing repository access, file, patch, configuration name or decision; do not request credentials in chat. Clone only with authorized access and into a safe new location. Uncommitted or unpushed changes require an actual patch, bundle, archive or local transfer; a remote SHA cannot transfer them. Preserve the source environment's work and compare received files/revision to the handoff. For chat-only tools, provide reasoning or proposed edits and mark execution unavailable. See [Handoff and migration](../prompts/06_HANDOFF_AND_MIGRATION.md).
