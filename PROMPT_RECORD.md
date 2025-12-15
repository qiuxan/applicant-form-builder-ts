# Prompt Record

## Date: December 15, 2025

### Prompt 1:
"Use css to make the form looks prettier and make a record of the prompt"

### Changes Made:
1. Created `ApplicantForm.css` with modern styling including:
   - Centered form container with max-width and shadow
   - Styled form fields with proper spacing
   - Input fields with focus states and hover effects
   - Gradient submit button with hover animations
   
2. Updated `ApplicantForm/index.tsx`:
   - Added CSS import
   - Applied className attributes to all elements
   - Maintained all existing functionality

### Styling Features:
- Clean, modern design with rounded corners
- Smooth transitions and animations
- Focus states for better accessibility
- Gradient button with hover effects
- Responsive layout with proper spacing

---

## Date: December 15, 2025

### Prompt 2:
"Configure Husky and Commitlint to block commits that do not follow the Conventional Commits standard. Include package.json, commitlint config, and Husky hook examples."

### Changes Made:
1. Installed dependencies:
   - `husky@^9.1.7`
   - `@commitlint/cli@^20.2.0`
   - `@commitlint/config-conventional@^20.2.0`

2. Updated `package.json`:
   - Added `"prepare": "husky"` script to initialize Husky on npm install

3. Created `commitlint.config.js`:
   - Extended `@commitlint/config-conventional`
   - Configured commit types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
   - Set rules for subject case, empty checks, and type validation

4. Created `.husky/commit-msg` hook:
   - Runs commitlint on every commit
   - Blocks commits that don't follow Conventional Commits standard

### Conventional Commits Format:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Valid Commit Examples:
- `feat: add user authentication`
- `fix: resolve login button styling issue`
- `docs: update README with setup instructions`
- `refactor: simplify form validation logic`
- `test: add unit tests for applicant form`

### Invalid Commits (will be blocked):
- `updated files` (no type)
- `FEAT: add feature` (uppercase type)
- `fix:missing space after colon`
- `random: invalid type`

---

## Date: December 15, 2025

### Prompt 3:
"Create a user table to and it will receive a prop of an array of object : Applicant  and Applicant will contain {First name,Last name,Mobile number,Email}

Create a css for the table to make it fit the current form style.

Create a Remove btn for each Applicant, but do not assign any function to it yet.

Call it in App.tsx and passing in an example data of an array of one Applicant object"

### Changes Made:
1. Created `UsersTable` component (`src/components/UsersTable/index.tsx`):
   - Exported TypeScript `Applicant` interface with properties: firstName, lastName, mobile, email
   - Created `UsersTableProps` interface accepting `applicants: Applicant[]`
   - Implemented table with thead (First Name, Last Name, Mobile Number, Email, Actions)
   - Mapped through applicants array to render table rows
   - Added Remove button for each row (no onClick handler yet)

2. Created `UsersTable.css` matching form design:
   - Max-width container (900px) with white background, rounded corners, shadow
   - Gradient header matching form's purple gradient theme
   - Row hover effects with light gray background
   - Styled Remove button with red gradient and hover animations
   - Responsive overflow for mobile devices

3. Updated `App.tsx`:
   - Imported UsersTable component and Applicant interface
   - Created example data array with one applicant (John Doe)
   - Rendered UsersTable below ApplicantForm

### Component Features:
- TypeScript type safety with interfaces
- Consistent styling with existing form
- Gradient themed header and buttons
- Smooth hover transitions
- Remove button placeholder for future functionality
