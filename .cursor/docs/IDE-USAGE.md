# Using This Setup with Cursor, Claude Code, and Other IDEs

This project uses a PM → Implementation workflow with specs, plans, and git conventions. Here's how to use it in different environments.

---

## Cursor

### Invoking the Workflow

1. **PM phase** — When scoping a feature, say:
   - "Write a spec for [feature]" or "Scope [feature]"
   - Mention `@pm-mode` to load the PM rule
   - The agent writes to `.cursor/specs/` and commits when aligned

2. **Implementation phase** — After the spec exists:
   - "Implement the spec in [file]" or "Build [feature]"
   - Mention `@implementation` to load the implementation rule
   - The agent creates a plan in `.cursor/plans/`, then implements step by step

### Rules and Context

- **Rules** live in `.cursor/rules/` — Cursor applies them when you @-mention or when they match (e.g. `agent-plans.mdc` for plan files)
- **AGENTS.md** — Read by agents for project conventions
- **Plan mode** (Shift+Tab) — Use to create or edit plans; keep them in `.cursor/plans/` per the workflow

### Git

- Agents will commit specs (`docs: add spec for X`) and plans (`docs: add plan for X`) per the rules
- For implementation, expect incremental commits (`feat:`, `fix:`, `test:`)
- Run `npm test` and lint before committing

---

## Claude Code (Claude in VS Code / Cursor)

Claude Code uses the same project files. Point it at this repo and:

1. **Specs** — "Read `.cursor/specs/` and write a spec for [X]" — it will follow the spec template if you share it
2. **Plans** — "Read `.cursor/plans/_template.md` and create a plan for [feature]"
3. **Implementation** — "Implement according to `.cursor/specs/[spec].md` and `.cursor/plans/[plan].md`"

Claude Code doesn't have Cursor's @-mention rules, so you need to reference files explicitly (e.g. "follow the structure in `.cursor/rules/implementation.mdc`").

---

## Other IDEs (VS Code, etc.)

The setup is file-based, so any editor works:

- **Specs** → `.cursor/specs/*.md`
- **Plans** → `.cursor/plans/*.md`
- **Conventions** → `AGENTS.md`, `.cursor/rules/*.mdc`

If using an AI assistant without Cursor rules:

1. Share `AGENTS.md` for project context
2. Share `.cursor/specs/[name].md` for requirements
3. Share `.cursor/plans/[name].md` for the implementation plan
4. Ask it to follow the git conventions in the rules

---

## Quick Reference

| Action | Cursor | Claude Code / Other |
|--------|--------|---------------------|
| Write spec | `@pm-mode` + "Write spec for X" | "Write spec for X, use `.cursor/specs/` template" |
| Create plan | `@implementation` + "Plan for X" | "Create plan from `.cursor/plans/_template.md`" |
| Implement | `@implementation` + "Implement X" | "Implement per spec and plan" |
| Git | Automatic per rules | Manual; follow conventions in rules |
