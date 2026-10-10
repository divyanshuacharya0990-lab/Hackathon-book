# Which prompt should I use?

**You do not need to invent prompts.** Pick your situation, open the corresponding file, copy it, fill known `[PLACEHOLDERS]`, and send it to *your own* agent. Unknown facts can be discovered by the agent; missing optional details must not block work. The agent may read the repo only if it actually has access. For a chat-only assistant, attach only necessary project files.

| Your situation | Copy this |
|---|---|
| First task / new teammate / new AI tool | [01_BOOTSTRAP.md](../prompts/01_BOOTSTRAP.md) |
| Build a feature or milestone | [02_IMPLEMENT_FEATURE.md](../prompts/02_IMPLEMENT_FEATURE.md) |
| Error, test failure or broken app | [03_DEBUG_ROOT_CAUSE.md](../prompts/03_DEBUG_ROOT_CAUSE.md) |
| Another developer's change or contract mismatch | [04_CROSS_TEAM_INTEGRATION.md](../prompts/04_CROSS_TEAM_INTEGRATION.md) |
| Require objective review / challenge claims | [05_INDEPENDENT_REVIEW.md](../prompts/05_INDEPENDENT_REVIEW.md) |
| Switch chat, model, machine; nearing quota | [06_HANDOFF_AND_MIGRATION.md](../prompts/06_HANDOFF_AND_MIGRATION.md) |
| Agent asks to change architecture or shared plan | [07_PLAN_CONFLICT.md](../prompts/07_PLAN_CONFLICT.md) |
| Feature looks functional but might be fake/static | [08_END_TO_END_UI_CHECK.md](../prompts/08_END_TO_END_UI_CHECK.md) |
| Deadline approaching / agent is slow | [09_SCOPE_FREEZE.md](../prompts/09_SCOPE_FREEZE.md) |
| Need PR, delivery and demo preparation | [10_RELEASE_AND_DEMO.md](../prompts/10_RELEASE_AND_DEMO.md) |
| Agent stuck looping or rereading repo | [11_RECOVER_AGENT.md](../prompts/11_RECOVER_AGENT.md) |
| Need a plan for a new product | [12_INITIAL_PROJECT_PLANNING.md](../prompts/12_INITIAL_PROJECT_PLANNING.md) |
| Ask a separate AI assistant to help you prompt another AI | [13_PROMPT_COACH.md](../prompts/13_PROMPT_COACH.md) |

**Prompt format:** state task, files/contract, observable acceptance, scope boundary, verification, deliverable. Don't reproduce the master plan in every message.

**If you are uncertain:** Use `01_BOOTSTRAP` at the beginning, `02_IMPLEMENT_FEATURE` for normal progress, `03_DEBUG_ROOT_CAUSE` for failures, and `06_HANDOFF_AND_MIGRATION` to switch tools. Ask your own AI to choose among these based on the situation and show why in one sentence.

## Independent prompting in practice

Start with one outcome, relevant files if known, acceptance and constraints. The agent fills implementation details from evidence; you do not need a perfect prompt. Prompts are starting points, not extra approval gates. Combine feature/debug/integration instructions when a task crosses those situations; use the coach only if it helps.

Example request: “In this repository, make creating an item persist through reload. Follow the project rules; discover the relevant files, preserve other work, test saving, reload and a failing request, then record results and the next action. Proceed on routine decisions; ask only for missing access or a material decision.” This is illustrative, not a feature built by this kit.
