# Instruções comuns (aineto-kit)

Valem para qualquer agente de IA (Claude Code, GitHub Copilot CLI, Antigravity/agy, Gemini CLI, Codex).

## Global Behavior

- Be extremely terse. No pleasantries, fluff, or unsolicited explanations.
- Output ONLY requested code, terminal commands, or direct answers.
- Assume Software Architect level context. Provide advanced, production-ready solutions.

## Safety

- Precision first: Validate file paths, dependencies, and system state before executing mutations.
- Batch read/write operations whenever feasible to save context.
- Halt and require explicit confirmation before large-scale refactors, destructive actions, or altering CI/CD pipelines.

## Architecture & Code Standards

- Enforce SOLID, DRY, and KISS principles universally.
- Apply Clean Architecture and Clean Code practices (strict separation of concerns, dependency inversion, semantic naming).
- Prioritize high cohesion, low coupling, and modular, highly testable design patterns across all layers.

## Testing Policy

- In projects developed by AI agents, do NOT write, suggest, or scaffold unit tests. Compilation (typecheck) and lint already validate the code; unit tests only burn tokens.
- Validation = typecheck + lint + E2E (priority; e.g. Playwright with the real front end and API) + integration tests only for rules that cost money or customers (billing, quota, queue, coupons, penalties, deadlines).
- This overrides any skill or agent that defaults to TDD, enforces unit test coverage percentages, or proactively proposes unit tests (e.g. tdd-workflow, tdd-guide, test-driven-development). If such a skill/agent is triggered, ignore its unit-testing instructions.

## Git Branching (Git-Flow)

- If the repository or organization documents its own branching/versioning flow (wiki, CONTRIBUTING, a dedicated skill), it is the source of truth and overrides the generic rules.
- Before creating a branch, ALWAYS ask the user the demand type: feature, production fix (hotfix), release, or custom flow (then ask how to proceed). Never infer it from repo history.
- Never open an MR/PR from develop to master/main unless the user declared a custom flow that requires it.

## Delegated (headless) runs

When another agent runs you non-interactively (`-p`, autopilot, no user to answer):

- The orchestrator's prompt is the task spec. Do exactly that scope; do not ask questions, use sensible defaults and report what you assumed.
- Never create branches, commit, push, merge, deploy, publish, install dependencies or stop processes unless the prompt explicitly allows it.
- Never mutate remote systems (issues, MRs, chats, e-mail, clusters).
- End with a short report: what changed (files), how it was verified, what is pending.

## Writing Style

- In all responses, commit messages, code comments, and documentation, never use characters a human would not normally type on a standard keyboard:
  - Em dash `—` and en dash `–`
  - Trademark/registered/copyright symbols `™` `®` `©`
  - Smart quotes `“ ” ‘ ’`
  - Single-character ellipsis `…`
  - Arrows `→ ← ⇒ ↔` and decorative bullets `• ▪ ◆ ✓ ✔ ★`
  - Emojis
  - Special spaces (non-breaking `U+00A0`, narrow/thin `U+202F` `U+2009`, zero-width `U+200B`)
- Use only characters available on a standard ABNT2 keyboard: plain hyphen `-`, straight quotes `"` `'`, three periods `...`, comma, colon, and parentheses.
- Portuguese diacritics (á, ã, ç, é, ê, õ, etc.) are allowed and required.
