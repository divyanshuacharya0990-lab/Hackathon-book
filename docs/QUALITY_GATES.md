# Verification and release gates

A product feature is **not** complete because the agent says it is, the UI renders, unit tests pass, a screenshot exists, or a local mock responds 200.

## Apply according to risk and the claim

The gates below are a menu for the relevant task, not six compulsory ceremonies for every edit. A documentation fix may need link/content inspection; a logic change needs targeted behavior checks; a shared API change needs producer/consumer compatibility; auth, data migrations and money paths need appropriate negative, rollback and integrity checks. Whole-product or release claims require assembled-system evidence. Existing authorization covers routine work; material risks escalate under [AGENTS.md](../AGENTS.md).

## Gate 0 — workspace

Repository access confirmed, correct branch and owner, commands documented, no unexamined overwritten changes, dependencies and budget known.

## Gate 1 — contract

Approved interface version, schema and canonical data, auth/authorization rules, errors, fixtures and consumer/producers tests. If multiple modules use the same hash/signature, add golden vectors cross-checked across implementations.

## Gate 2 — functional slice

One real end-to-end user path executed from actual entry point to persisted/outbound state, with negative and retry paths. One UI screenshot isn't sufficient; verify actual network calls, backend decisions, state changes, transactions or receipts where applicable.

## Gate 3 — security and truthfulness

- Authentication identity checked server-side; authorization on **each protected resource**.
- Secrets and sensitive data not in code, logs, prompts or commits.
- Nonces, signatures, roles, trust roots and consent tested against replay/forgery/cross-user access where relevant.
- External provider claims match reality. Synthetic identity, OTP, financial data, mock tokens and local chains clearly distinguished without misleading end-user UX.
- No hidden 'success' fallback when remote integration fails.

## Gate 4 — integration regression

Cross-team contracts tested in same build. Negative tests stay enforced; failure isn't silenced via skipped cases. Required checks pass. A named owner may accept a documented noncritical testing limitation; that does not convert an unrun check into a pass or waive security, privacy, data integrity or explicit constraints. For blockchain/ZK tasks, require actual proof and verifier calls where feasible, not just isolated circuit compilation.

## Gate 5 — delivery

For an authorized release: build reproducible from documented commands, relevant target environment works, review follows project policy, and published SHA/content are verified. Rehearsal and fallback apply to demos; deployment and PRs apply only when in scope. A local commit is **not** a remote PR update.

## Status language

- `COMPLETE — VERIFIED`: agreed gate evidence actually exists.
- `IMPLEMENTED — UNVERIFIED`: code exists; one or more required checks not run.
- `PARTIAL`: requirements not fully implemented.
- `BLOCKED`: cannot proceed without decision, access or dependency.
- `NOT STARTED`: no implementation work.

## Acceptance test design

Every critical user journey should include **first use**, **returning use**, **failure**, **cross-account denial**, **persistence across restart**, and **real versus simulated trust boundary** as applicable. Keep expensive full-suite tests at milestone gates and quick targeted checks after small edits.
