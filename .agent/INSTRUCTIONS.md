# TopMyster — Agent Instructions

## Project

- **Purpose**: SEND API (send.app) — transaction crafting for global money transfer ("Like Cash"). Focus: building, signing, and validating transactions.
- **Stack**: Node.js, TypeScript, Express

## Commands

```bash
npm install       # Install deps
npm run dev       # Dev server with hot reload (tsx watch)
npm run build     # Compile to dist/
npm start         # Run compiled build
npm test          # Run tests
```

## Code Conventions

- Follow existing patterns in the codebase
- Prefer small, focused changes over large refactors
- Handle errors explicitly; avoid silent failures
- Log errors with useful context for debugging
- Run lint and tests before committing

## Git

- Commit messages: `<type>: <description>` — `feat:`, `fix:`, `test:`, `refactor:`, `docs:`
- One commit per logical step
- Reference issues or tickets when applicable

## Workflow

This project uses a two-phase workflow: **PM** (planning) → **Implementation** (building).

- **Specs** go in `.agent/specs/` (template: `.agent/specs/_template.md`)
- **Plans** go in `.agent/plans/` (template: `.agent/plans/_template.md`)
- Read `.agent/rules/pm-mode.md` when scoping features
- Read `.agent/rules/implementation.md` when building features
- Read `.agent/rules/agent-plans.md` for plan structure
- Full workflow: `.agent/rules/pm-impl-workflow.md`
