# Hackathon execution runbook

## Before the clock starts (or first hour)

Agree on **judging criteria, hard deadline, team availability, budget, allowed services, offline constraints, demo hardware and actual skill/tool access**. Convert full product vision into three tiers: (1) must demonstrably work; (2) architecturally credible but not necessarily feature-complete; (3) explicitly deferred. Do not conflate credible architecture with implemented behavior.

Write **one minimal end-to-end vertical slice** in user-action language and define its test, e.g., 'new user registers → submits an item → gets a real persisted result → sees it after reload.' Agree on APIs + sample fixtures *before* independent modules diverge. Assign human owners, branches and an integration lead. Record decisions and escalation path.

## A practical 24-hour default (adapt, never blindly copy)

| Hours | Goal | Exit evidence |
|---|---|---|
| 0–2 | Scope, interface contracts, ownership, build environment | Each dev can run baseline; API schema and first slice agreed |
| 2–6 | Implement smallest vertical slice across UI/backend/dependency | **Real browser/CLI user journey works**, including one failure case |
| 6–14 | Expand high-value flows in bounded milestones | Contract tests, checkpoint commits, integration every 2–3 hours |
| 14–18 | Full-system integration, negative cases, accessibility/basic polish | Critical user paths and fresh-state smoke tests |
| 18–22 | Freeze nonessential features; resolve blockers, fallback safely | Reproducible build, no fake success, tested demo route |
| 22–24 | Presentation, video/submission/rehearsal, backup | Working demo and backup plan |

A hard checkpoint arriving earlier overrides this example. If the initial slice is not working by its checkpoint, propose narrowing feature breadth and prioritize its blocking path. Escalate material MVP changes; continue compatible in-scope repairs. Never sacrifice security or data integrity to meet the clock.

## Integration sync (10–15 minutes each)

Each dev shares: current SHA, exact contract version, tests run, blockers, changes other owners must consume. Integration owner verifies assembled behavior at useful checkpoints; routine progress within scope needs no new approval. A red shared test is a priority defect, not an end-of-hackathon surprise.

## Scope-fallback ladder

A. Real, narrow complete journey. B. Narrower journey with fewer policies/roles but valid trust boundaries. C. Reproducible CLI/service journey with honestly disclosed missing UI. D. Static explainer clearly labeled as nonfunctional. **Never** fabricate a working loan, identity verification, payment or proof.

## Demo checkpoint

Clean browser/session, known startup commands, fresh isolated test data (never reset shared/production data without authorization and recovery), offline/network contingencies, rehearsed actual clicks, real output evidence, backup recording if allowed. Present mocked components as mocks. Never wait until final hour to discover who can run the app.
