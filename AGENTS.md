# Agent Instructions

Instructions for AI coding agents working on this project.

## Project Overview

- **Project**: TopMyster
- **Purpose**: SEND API ([send.app](https://send.app/)) — transaction crafting for global money transfer ("Like Cash"). Focus: building, signing, and validating transactions.
- **Stack**: Node.js, TypeScript, Express

## Dev Environment

- Run `npm install` before making changes
- Use `npm run dev` for development (tsx watch)

## Build & Run

```bash
npm install
npm run dev      # Dev server with hot reload
npm run build    # Compile to dist/
npm start        # Run compiled build
```

## Testing

- Run tests before committing: `npm test` (or equivalent)
- Add or update tests for code you change
- Fix any failing tests before merging

## Code Conventions

- Follow existing patterns in the codebase
- Keep changes focused and scoped
- Prefer small, incremental commits over large ones

## PR / Commit Guidelines

- Use clear, descriptive commit messages
- Run lint and test before committing
- Reference issues or tickets when applicable

## Planning & Agent Workflow

- Use `.cursor/plans/` for multi-step implementation plans
- Break large tasks into smaller, verifiable steps
- See `.cursor/rules/agent-plans.mdc` for plan structure guidance

## PM + Implementation Setup

Two-phase workflow for features:

| Phase | Rule | Output |
|-------|------|--------|
| **PM** | `@pm-mode` | Specs in `.cursor/specs/` — requirements, acceptance criteria |
| **Implementation** | `@implementation` | Plans in `.cursor/plans/` + code |

**Flow**: Spec first → align scope → then implement from spec.
