# Using This Setup with Any AI Agent

This project uses a PM → Implementation workflow with specs, plans, and git conventions. The setup is file-based and works with any AI coding agent.

---

## Architecture

All instructions live in `.agent/INSTRUCTIONS.md`. Each agent has a thin entry-point file that auto-loads and points there:

| Agent | Entry-point file | Auto-loaded? |
|-------|-----------------|--------------|
| Claude Code | `CLAUDE.md` | Yes |
| Codex / ChatGPT | `AGENTS.md` | Yes |
| Cursor | `.cursorrules` | Yes |
| Windsurf | `.windsurfrules` | Yes |
| GitHub Copilot | `.github/copilot-instructions.md` | Yes |
| Cline / Roo Code | `.clinerules` | Yes |

All entry-point files contain the same thing: *"Read `.agent/INSTRUCTIONS.md`"*. This means you maintain instructions in one place and every agent picks them up.

---

## Directory Structure

```
.agent/
├── INSTRUCTIONS.md          # Shared instructions (single source of truth)
├── rules/
│   ├── core.md              # Always-on standards
│   ├── pm-mode.md           # PM / spec-writing behavior
│   ├── implementation.md    # Implementation engineer behavior
│   ├── agent-plans.md       # How to create and execute plans
│   └── pm-impl-workflow.md  # When to use PM vs implementation
├── specs/
│   ├── _template.md         # Spec template
│   └── README.md
├── plans/
│   ├── _template.md         # Plan template
│   └── README.md
└── docs/
    ├── USAGE.md             # This file
    └── claude-chrome-network.md
```

---

## Workflow Overview

```
User request → PM (spec) → Align → Implementation (plan + code) → Verify
```

- **Specs** → `.agent/specs/` — requirements, acceptance criteria
- **Plans** → `.agent/plans/` — ordered steps, verification checklist
- **Rules** → `.agent/rules/` — agent behavior guidelines

---

## PM Phase (planning)

Use when scoping a new feature:

1. Ask the agent to write a spec: *"Write a spec for [feature]"*
2. The agent writes to `.agent/specs/[name].md` using the template
3. Review and align on scope before implementation starts
4. Commit: `docs: add spec for [feature]`

See: `.agent/rules/pm-mode.md`

---

## Implementation Phase (building)

Use after a spec exists:

1. Ask the agent to implement: *"Implement the spec in `.agent/specs/[name].md`"*
2. The agent creates a plan in `.agent/plans/[name].md`
3. Agent implements step by step, commits incrementally
4. Verifies against spec acceptance criteria

See: `.agent/rules/implementation.md`

---

## Quick Reference

| Action | Prompt |
|--------|--------|
| Write spec | "Write a spec for X" (saves to `.agent/specs/`) |
| Create plan | "Create a plan for X" (uses `.agent/plans/_template.md`) |
| Implement | "Implement per `.agent/specs/[name].md`" |
| Git | `docs:` for specs/plans, `feat:`/`fix:`/`test:` for code |

---

## Adding a New Agent

If a new AI tool comes along:

1. Find out what file it auto-loads (check its docs)
2. Create that file in the project root
3. Add one line: `Read and follow .agent/INSTRUCTIONS.md for all project conventions, commands, and workflow.`
