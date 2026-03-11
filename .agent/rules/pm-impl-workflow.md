# PM + Implementation Workflow

This project uses a two-phase workflow: **PM** (planning) then **Implementation** (building).

## When to Use PM Mode

Adopt PM mode when the user asks to:
- "Write a spec for X"
- "What are the requirements for Y?"
- "Scope this feature"
- "Define acceptance criteria"
- Before any non-trivial feature

See: `.agent/rules/pm-mode.md`

## When to Use Implementation Mode

Adopt Implementation mode when the user asks to:
- "Implement the spec in X"
- "Build feature Y"
- "Execute this plan"
- After spec/plan exists

See: `.agent/rules/implementation.md`

## Flow

```
User request → PM (spec) → Align → Implementation (plan + code) → Verify
```

- **Specs** → `.agent/specs/`
- **Plans** → `.agent/plans/`
- Implementation follows spec acceptance criteria
