# Code Review Guide

This guide helps reviewers and contributors conduct effective code reviews for the AWS Amplify React+Vite Template project.

## Quick Start for Reviewers

### Pre-Review Checklist

Before reviewing code changes, ensure the following automated checks pass:

1. **Linting**: Run `npm run lint` to check code style and quality
2. **Type Checking**: TypeScript compilation happens during build
3. **Build**: Run `npm run build` to verify the code compiles (note: requires Amplify setup)

### What to Look For

#### Code Quality
- [ ] Code follows TypeScript best practices
- [ ] Variables and functions have descriptive names
- [ ] Complex logic includes comments explaining the "why"
- [ ] No commented-out code (unless temporarily needed with explanation)
- [ ] No console.log statements in production code

#### React & TypeScript Specific
- [ ] Components use appropriate hooks (useState, useEffect, etc.)
- [ ] Props are properly typed with TypeScript interfaces/types
- [ ] No `any` types unless absolutely necessary (with explanation)
- [ ] Functional components are used consistently
- [ ] React hooks follow the Rules of Hooks
- [ ] Dependencies in useEffect are correctly specified

#### AWS Amplify Patterns
- [ ] Amplify client is properly initialized
- [ ] GraphQL queries/mutations use generated types
- [ ] Authentication flows follow Amplify best practices
- [ ] API calls include proper error handling
- [ ] Subscriptions are cleaned up on component unmount

#### Security & Best Practices
- [ ] No hardcoded credentials or API keys
- [ ] User inputs are validated and sanitized
- [ ] Sensitive data is not logged
- [ ] External data sources are properly validated
- [ ] CORS and security headers are appropriate

#### Performance
- [ ] No unnecessary re-renders
- [ ] Large lists use proper virtualization if needed
- [ ] Images are optimized
- [ ] useCallback/useMemo used where appropriate
- [ ] No memory leaks (subscriptions/listeners cleaned up)

#### Testing (when applicable)
- [ ] New features include appropriate tests
- [ ] Edge cases are tested
- [ ] Mock data is realistic
- [ ] Tests are readable and maintainable

## Review Process

### 1. Understand the Context
- Read the PR description and linked issues
- Understand what problem is being solved
- Review the overall approach before diving into code

### 2. Run the Code Locally
```bash
# Install dependencies
npm install

# Run linter
npm run lint

# Start development server (if Amplify is configured)
npm run dev

# Build the project
npm run build
```

### 3. Review the Changes
- Start with high-level architecture and design
- Then review implementation details
- Check for potential bugs and edge cases
- Verify error handling

### 4. Provide Constructive Feedback
- Be specific and actionable
- Explain the "why" behind suggestions
- Distinguish between blocking issues and nice-to-haves
- Use positive language and appreciate good work

### Example Feedback Format
```markdown
**Issue**: Variable name is not descriptive
**Location**: src/App.tsx, line 15
**Suggestion**: Rename `x` to `todoContent` for clarity
**Severity**: Minor
```

## Common Issues to Watch For

### TypeScript Issues
- Missing type annotations on function parameters
- Overuse of `any` type
- Type assertions without justification
- Missing null/undefined checks

### React Issues
- Missing cleanup in useEffect
- Incorrect dependency arrays
- Prop drilling instead of context
- State updates not using functional form when depending on previous state

### Amplify Issues
- Missing error handling on API calls
- Not using generated types from schema
- Subscriptions without cleanup
- Improper authentication checks

## Using ESLint

The project uses ESLint with TypeScript support. Common rules enforced:

- No unused variables
- React hooks rules
- TypeScript recommended rules
- React Refresh best practices

To run the linter:
```bash
npm run lint
```

## Automated Checks

This repository uses GitHub Actions to automatically run checks on pull requests:

1. **Lint Check**: Ensures code follows style guidelines
2. **Type Check**: Verifies TypeScript types are correct
3. **Build Check**: Confirms the project builds successfully

These checks must pass before merging.

## Resources

- [React Best Practices](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Code Review Best Practices](https://google.github.io/eng-practices/review/)

## Questions?

If you have questions about code review practices:
1. Check existing PR reviews for examples
2. Refer to CONTRIBUTING.md for general guidelines
3. Open a discussion in GitHub Discussions
4. Reach out to project maintainers

---

*Remember*: Code review is a collaborative process. The goal is to maintain code quality while fostering learning and team growth.
