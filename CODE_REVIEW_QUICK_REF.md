# Code Review Quick Reference

## For Code Authors

### Before Submitting PR
```bash
# 1. Run linter
npm run lint

# 2. Check TypeScript types (create mock amplify_outputs.json if needed)
echo '{}' > amplify_outputs.json
npx tsc --noEmit

# 3. Build the project
npm run build
```

### PR Checklist
- [ ] Code is self-documenting or includes comments
- [ ] No console.log or debugging code
- [ ] TypeScript types are properly defined
- [ ] React hooks follow Rules of Hooks
- [ ] Error handling is in place
- [ ] Changes are minimal and focused

## For Reviewers

### Quick Review Steps
1. **Read**: Understand the PR description and goal
2. **Run**: Pull the code and run `npm run lint`
3. **Check**: Look for the items in the review checklist
4. **Test**: Run the code locally if possible
5. **Feedback**: Provide specific, actionable comments

### Priority Issues (Must Fix)
- Security vulnerabilities
- Breaking changes without discussion
- Code that doesn't compile/build
- Missing error handling on critical paths
- Hardcoded credentials or secrets

### Nice-to-Have Improvements (Suggestions)
- Better variable names
- Additional comments
- Performance optimizations
- Code style preferences

## Common Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Check linting
npm run lint

# Build project
npm run build

# Type check only
npx tsc --noEmit
```

## Review Comments Examples

### Good Comment
```
**Issue**: Missing null check could cause runtime error
**Location**: src/App.tsx:25
**Fix**: Add null check before accessing todo.content
**Severity**: High - Could cause app crash
```

### Bad Comment
```
This is wrong.
```

## Tools

- **ESLint**: Checks code style and common issues
- **TypeScript**: Provides type safety
- **GitHub Actions**: Automatically runs checks on PRs

## Resources

- Full guide: [CODE_REVIEW.md](CODE_REVIEW.md)
- Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)
- AWS Amplify Docs: https://docs.amplify.aws/

---
*Keep reviews constructive, specific, and timely!*
