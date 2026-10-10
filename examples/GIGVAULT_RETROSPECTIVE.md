# GigVault retrospective — lessons, not a blame document

## Outcome

The original playbook reports that the team **won** the hackathon; this package audit did not independently verify the result. The precise weighting of presentation, problem framing, technical work and live functionality in the judging is not independently established. Winning and having execution gaps can both be true.

## Reported observations and evidence limits

These are the original retrospective's reported lessons, not newly reproduced project tests. The local GigVault audit dated 9 October 2026 also records source inspection and selected reproduced frontend defects separately from older test reports. Private project evidence is intentionally not bundled, and using this kit does not require it.

- Detailed master/locked plans and task division existed for Backend A (identity/evidence) and Backend B (ZK/blockchain), plus frontend efforts.
- Developers and agents worked across separate machines and branches; interface/security reconciliation was significant.
- Shared BN254-related field arithmetic and identity-trust boundary defects were identified during cross-backend reviews. The tests and corrections were valuable, not necessarily waste.
- The initial browser product experience lagged behind backend modules; later integration audits recorded reachable frontend verification fallbacks and owner-binding failures alongside useful backend work. Screenshots alone cannot establish functional or security defects; code inspection and reproduced checks carry stronger evidence.
- The developer responsible for Backend B also had to coordinate and send prompts for Dev A's Antigravity; developer/agent independence was therefore incomplete.
- Antigravity performed repository inspections. Repeated scanning *may* have consumed unnecessary time/usage, but no metered measurement proves full rereads on each prompt.
- Integration and Git publication reports were not always equivalent to verified remote PR state.
- Time/usage limits and final checkpoints constrained the amount of fully working product demonstrated.

## Likely process causes (inferences, not proven measurement)

1. Plan quality exceeded deadline-optimized implementation sequencing.
2. Work was split by technical subsystem more than by early complete user journey.
3. Shared contracts lacked sufficient early automated consumer parity tests.
4. Prompt creation and cross-agent coordination became centralized in one developer.
5. Large prompts and broad inspections likely added overhead; no exact quota attribution available.
6. Functional frontend acceptance gates and protected integration time were late.

## Corrective controls

- First verified vertical slice by checkpoint 1.
- Each developer independently owns their coding agent, checkpoint, tests and normal prompting.
- Reusable prompt router + prompt coach; no single human must write everyone else's prompts.
- Shared versioned contracts, fixture parity tests and cross-team gate from project start.
- Frontend and backend journeys verified against live app, not counts of isolated test passes.
- Short checkpoint; targeted files; new chat/migration protocol.
- Scope freeze, honest fallback and demonstration rehearsal before deadline.

## Do not overlearn

Do **not** infer that more MCP, more cloud agents, one-endpoint-per-thread, or less testing would automatically have improved the result. Tools can increase usage and risk. Measure actual time/usage and test outcomes in future projects.

Apply these lessons proportionally: early assembled integration, executable shared contracts, independent prompting, focused discovery, functional frontend checks, honest claims and portable checkpoints. They do not mandate a particular tool, cryptographic stack, number of roles or process schedule. The general playbook can be used without accepting every historical inference.
