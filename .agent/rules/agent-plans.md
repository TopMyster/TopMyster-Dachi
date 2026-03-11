# Agent Plans

Use this rule when planning or executing multi-step work.

## When to Create a Plan

- Tasks with 3+ distinct steps
- Features spanning multiple files or modules
- Refactors that touch several areas
- When the user asks for a plan or breakdown

## Plan Structure

Store plans in `.agent/plans/` as markdown. Use this template:

```markdown
# [Feature/Task Name]

## Goal
One-sentence description of what we're building.

## Steps
1. [Step 1] - [Brief outcome]
2. [Step 2] - [Brief outcome]
3. [Step 3] - [Brief outcome]

## Dependencies
- [What must exist first]

## Verification
- [ ] [How to verify step 1]
- [ ] [How to verify step 2]
```

## Execution

1. Create the plan file before coding
2. Work through steps in order; mark complete as you go
3. Update the plan if scope changes
4. Run tests after each major step

## Plan Naming

Use kebab-case: `feature-user-auth.md`, `refactor-api-layer.md`
