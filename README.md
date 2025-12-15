# Applicant Form Builder

A React application for capturing information about one or more applicants.

## Project Requirements

This application is built to meet the following specifications:

### Form Functionality
- Capture applicant information including:
- First name
- Last name
- Mobile number
- Email
- Allow users to add and remove applicants
- Maintain at least one applicant at all times
- Include a checkbox to nominate the primary applicant
- Ensure there is always one, and only one, primary applicant

### Data Validation Rules Assumption
- **Email addresses must be unique**: No two applicants can have the same email address (case-insensitive)
- **Mobile numbers must be unique**: No two applicants can have the same mobile number (normalized comparison, ignoring formatting characters)
- **Australian mobile format**: Mobile numbers must follow Australian format (04XX XXX XXX or +61 4XX XXX XXX)

### Primary Applicant Rules Assumption
- **First applicant is primary**: The first applicant added automatically becomes the primary applicant
- **Single primary only**: Only one applicant can be primary at any time
- **Primary swap**: Clicking another applicant's checkbox automatically transfers primary status to that applicant
- **Primary cannot be removed**: The primary applicant's remove button is disabled with a grayed-out appearance
- **Tooltip on hover**: Hovering over a disabled remove button displays "Cannot remove the primary applicant"

## Tech Stack

- React
- Vite
- TypeScript
- Jest (Testing Framework)
- React Final Form (Form Management)

## Development

### Commit Message Format

This project uses Conventional Commits to maintain a clear and standardized commit history. All commits must follow this format:

```
<type>: <description>

[optional body]

[optional footer(s)]
```

#### Allowed Types:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (formatting, whitespace, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

#### Examples:
```bash
# Good commits
git commit -m "feat: add user registration form"
git commit -m "fix: resolve validation error on email field"
git commit -m "docs: update README with setup instructions"
git commit -m "refactor: simplify form state management"

# Bad commits (will be rejected)
git commit -m "updated files"           # Missing type
git commit -m "FEAT: add feature"       # Type must be lowercase
git commit -m "feat:missing space"      # Missing space after colon
```

Commits not following this standard will be automatically rejected by the pre-commit hook.

## Testing

This project includes comprehensive unit tests for all utility functions.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Test Coverage

All utility functions in `src/utils/` have 100% test coverage:
- `handleAddApplicant` - Tests for adding applicants, uniqueness validation, and primary assignment
- `handleRemoveApplicant` - Tests for removing applicants by ID
- `handleSetPrimary` - Tests for setting and swapping primary applicant
- `clearError` - Tests for clearing error messages

Test files are organized in `src/utils/__tests__/` folder following Jest conventions.