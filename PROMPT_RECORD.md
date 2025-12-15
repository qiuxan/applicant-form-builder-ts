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

---

## Date: December 15, 2025

### Prompt 4:
"Block the default submit action of the form.

Use react-final-form to handle the form varify and error message"

### Changes Made:
1. Installed dependencies:
   - `final-form`
   - `react-final-form`

2. Updated `ApplicantForm/index.tsx`:
   - Imported `Form` and `Field` from react-final-form
   - Created `FormValues` interface for type safety
   - Implemented `validate` function with validation rules:
     - Required field validation for all fields
     - Mobile number format validation (accepts digits, spaces, hyphens, parentheses, and + prefix)
     - Email format validation (regex pattern)
   - Wrapped form with react-final-form's `Form` component
   - Converted all inputs to `Field` components
   - Added `onSubmit` handler that prevents default and logs form values
   - Added error message display below each field (shown when field is touched and has error)
   - Added placeholder text to all input fields
   - Disabled submit button while form is submitting

3. Updated `ApplicantForm.css`:
   - Added `.error-message` styling with red color (#ff6b6b)
   - Set error message font size to 0.875rem
   - Added margin and font weight for better visibility

### Form Validation Rules:
- **First Name**: Required
- **Last Name**: Required
- **Mobile Number**: Required, must match phone number pattern
- **Email**: Required, must be valid email format
- Errors display only after field is touched
- Submit button disabled during submission

---

## Date: December 15, 2025

### Prompt 5:
"make the mobile varify follow the australia mobile rule"

### Changes Made:
1. Updated `ApplicantForm/index.tsx` mobile validation:
   - Modified validation logic to enforce Australian mobile number format
   - Accepts two formats:
     - `04XX XXX XXX` (10 digits starting with 04)
     - `+61 4XX XXX XXX` (+614 followed by 8 digits, 11 total)
   - Strips all non-digit characters before validation
   - Allows spaces, hyphens, and parentheses in input for user-friendly formatting
   - Shows specific error message: "Invalid Australian mobile number. Must start with 04 or +614"

### Australian Mobile Number Rules:
- Must start with `04` (domestic format) or `+614` (international format)
- Domestic: 10 digits total (e.g., 0412 345 678, 0423-456-789)
- International: 11 digits total with country code (e.g., +61 412 345 678)
- Formatting characters (spaces, hyphens, parentheses) are allowed but ignored during validation

---

## Date: December 15, 2025

### Prompt 6:
"make a seperate function out of it and make sure email and mobile should be unique

email and mobile should be unique is an assumption, update it in the README.MD"

### Changes Made:
1. Updated `App.tsx`:
   - Created `handleAddApplicant` function to replace inline lambda
   - Added email uniqueness check (case-insensitive comparison)
   - Added mobile uniqueness check (normalized by removing non-digit characters)
   - Shows alert messages when duplicate email or mobile is detected
   - Only adds applicant if both email and mobile are unique

2. Updated `README.md`:
   - Added new section "Data Validation Rules"
   - Documented email uniqueness requirement (case-insensitive)
   - Documented mobile uniqueness requirement (normalized comparison)
   - Documented Australian mobile format requirement

### Validation Logic:
- **Email Uniqueness**: Converts to lowercase for comparison to prevent case-sensitive duplicates
- **Mobile Uniqueness**: Strips all non-digit characters before comparison (e.g., "0412 345 678" and "0412-345-678" are treated as the same)
- **User Feedback**: Alert dialogs inform users when they attempt to add duplicate data
- **Prevents Addition**: Duplicate applicants are not added to the list

---

## Date: December 15, 2025

### Prompt 7:
"make error message in the App.tsx instead of alert"

### Changes Made:
1. Updated `App.tsx`:
   - Added `errorMessage` state to store error messages
   - Replaced `alert()` calls with `setErrorMessage()` 
   - Added error message display component with styled div
   - Error message appears between title and form with red styling
   - Reordered components: form appears before table
   - Error clears automatically on next submission attempt

### Error Message Styling:
- Max-width: 500px (matches form width)
- Light red background (#fee)
- Red border (#ff6b6b)
- Rounded corners (8px)
- Bold red text (#c92a2a)
- Appears inline above the form

---

## Date: December 15, 2025

### Prompt 8:
"If any filed of the ApplicationForm Focused, the error message will disappear"

### Changes Made:
1. Updated `App.tsx`:
   - Created `clearError` function to reset error message state
   - Passed `onFieldFocus` callback prop to ApplicantForm component

2. Updated `ApplicantForm/index.tsx`:
   - Added optional `onFieldFocus` prop to component interface
   - Added custom `onFocus` handlers to all four input fields (firstName, lastName, mobile, email)
   - Each handler calls both the field's original `onFocus` and the `onFieldFocus` callback
   - Used optional chaining (`?.()`) to safely call callback

### User Experience Improvement:
- Error message clears immediately when user focuses any form field
- Provides instant feedback that user is taking corrective action
- Reduces visual clutter while user is editing
- Works with all four form fields consistently

---

## Date: December 15, 2025

### Prompt 9:
"make the remove btn work!"

### Changes Made:
1. Updated `UsersTable/index.tsx`:
   - Added `id: string` field to `Applicant` interface
   - Added `onRemove: (id: string) => void` prop to `UsersTableProps` interface
   - Changed map key from array index to `applicant.id` for proper React reconciliation
   - Added `onClick` handler to Remove button that calls `onRemove(applicant.id)`
   - Updated component signature to accept `onRemove` prop

2. Updated `App.tsx`:
   - Modified `handleAddApplicant` to accept `Omit<Applicant, 'id'>` (applicant without id)
   - Added unique ID generation using `crypto.randomUUID()` when creating new applicants
   - Created `handleRemoveApplicant` function that filters applicants by ID
   - Passed `handleRemoveApplicant` as `onRemove` prop to UsersTable component

### Implementation Details:
- **Unique IDs**: Each applicant gets a UUID generated with `crypto.randomUUID()`
- **Remove Logic**: Filters the applicants array to exclude the matching ID
- **React Keys**: Using unique IDs as keys improves rendering performance
- **Type Safety**: TypeScript ensures ID is always present when needed
- **State Update**: Immutable array filtering creates new state reference

---

## Date: December 15, 2025

### Prompt 10:
"Include a checkbox to nominate the primary applicant
Ensure there is always one, and only one, primary applicant 

-- add  the first user and they user will become the primary applicant (add this to readme Assumption section)

-- clicking other users's checkebox will swap primary applicant"

### Changes Made:
1. Updated `UsersTable/index.tsx`:
   - Added `isPrimary: boolean` field to `Applicant` interface
   - Added `onSetPrimary: (id: string) => void` prop to `UsersTableProps`
   - Added "Primary" column to table header
   - Added checkbox input in first column for each applicant row
   - Checkbox is checked when `applicant.isPrimary` is true
   - Checkbox onChange calls `onSetPrimary(applicant.id)` to swap primary status
   - Styled checkbox with cursor pointer and larger size (20x20px)

2. Updated `App.tsx`:
   - Modified `handleAddApplicant` to accept `Omit<Applicant, 'id' | 'isPrimary'>`
   - Set `isPrimary: applicants.length === 0` when creating new applicant (first user is primary)
   - Created `handleSetPrimary` function that maps through applicants and sets `isPrimary` to true only for the selected ID
   - Passed `handleSetPrimary` to UsersTable as `onSetPrimary` prop

3. Updated `README.md`:
   - Added new section "Primary Applicant Rules" under assumptions
   - Documented that first applicant automatically becomes primary
   - Documented single primary constraint
   - Documented checkbox swap behavior

### Primary Applicant Logic:
- **First User Default**: When `applicants.length === 0`, new applicant gets `isPrimary: true`
- **Single Primary Enforcement**: `handleSetPrimary` sets all applicants to `isPrimary: false` except the selected one
- **Swap Mechanism**: Clicking any checkbox transfers primary status to that applicant
- **Visual Indicator**: Checkbox shows checked state for primary applicant
- **Always One Primary**: System ensures exactly one primary applicant at all times

---

## Date: December 15, 2025

### Prompt 11:
"primary applicant cannot be removed and its remove btn will become disable (both function and color) (add this to readme) . 

when a disabled remove btn being hover. a little message will float up saying 'Cannot remove the primary applicant'"

### Changes Made:
1. Updated `UsersTable/index.tsx`:
   - Wrapped remove button in a `remove-button-container` div for tooltip positioning
   - Added conditional `disabled` class to remove button when `applicant.isPrimary` is true
   - Added `disabled` attribute to button when primary
   - Modified onClick to check `!applicant.isPrimary` before calling onRemove
   - Added conditional tooltip span that displays only when `applicant.isPrimary` is true
   - Tooltip text: "Cannot remove the primary applicant"

2. Updated `UsersTable.css`:
   - Added `.remove-button-container` with relative positioning for tooltip
   - Added `.remove-button.disabled` style with gray gradient and reduced opacity
   - Disabled button has `cursor: not-allowed` and no hover effects
   - Added `.tooltip` styling with absolute positioning above button
   - Tooltip positioned with `bottom: 125%` and centered with transform
   - Added tooltip arrow using `::after` pseudo-element
   - Tooltip visibility controlled by hovering over container
   - Smooth fade-in transition for tooltip appearance

3. Updated `README.md`:
   - Added "Primary cannot be removed" rule to Primary Applicant Rules section
   - Added "Tooltip on hover" description explaining the disabled state message

### UI/UX Features:
- **Visual Distinction**: Disabled button has gray gradient instead of red
- **Cursor Feedback**: Changes to not-allowed cursor on disabled button
- **Hover Tooltip**: Appears above button on hover with explanation
- **Tooltip Arrow**: Points down to the button for clear association
- **Smooth Animation**: Fade-in effect for professional appearance
- **Functional Prevention**: onClick handler checks isPrimary before executing

---

## Date: December 15, 2025

### Prompt 12:
"the 4 Field s can be a hight-level component so that the code can be dryer"

### Changes Made:
1. Created reusable `FormField` component in `ApplicantForm/index.tsx`:
   - Defined `FormFieldProps` interface with name, label, type, placeholder, and optional onFieldFocus
   - Extracted repetitive Field rendering logic into single component
   - Component handles input rendering, label, error display, and focus events
   - Reduced code duplication from ~100 lines to ~40 lines for form fields

2. Refactored form to use `FormField` component:
   - Replaced four separate Field implementations with FormField calls
   - Each field now uses consistent props: name, label, type, placeholder, onFieldFocus
   - Maintained all existing functionality (validation, error display, focus clearing)

### Code Improvements:
- **DRY Principle**: Eliminated repetitive code for form fields
- **Maintainability**: Changes to field rendering now only need to be made in one place
- **Consistency**: All fields render identically with same behavior
- **Type Safety**: Props interface ensures correct usage of component

---

## Date: December 15, 2025

### Prompt 13:
"make it an individual file called FormField/index.tsx under ApplicantForm folder"

### Changes Made:
1. Created new file `ApplicantForm/FormField/index.tsx`:
   - Moved FormField component to separate file
   - Exported FormField as default export
   - Imported Field from react-final-form in new file
   - Changed name prop type from `keyof FormValues` to `string` for flexibility

2. Updated `ApplicantForm/index.tsx`:
   - Removed FormField component definition
   - Removed FormFieldProps interface
   - Added import: `import FormField from './FormField'`
   - Removed Field import from react-final-form (no longer needed)
   - Form now uses imported FormField component

### Project Structure Benefits:
- **Separation of Concerns**: FormField has its own module
- **Reusability**: Can be imported by other forms if needed
- **Better Organization**: Follows component-per-file pattern
- **Easier Testing**: Component can be tested independently
- **Cleaner Imports**: ApplicantForm file is more focused

---

## Date: December 15, 2025

### Prompt 14:
"Add clear the form btn next to the Add btn"

### Changes Made:
1. Updated `ApplicantForm/index.tsx`:
   - Added `form` to render props destructuring to access form API
   - Wrapped buttons in a div with flexbox layout (display: flex, gap: 1rem)
   - Added Clear button with type="button" to prevent form submission
   - Clear button calls `form.reset()` onClick to reset form values

2. Updated `ApplicantForm.css`:
   - Added `.clear-button` styling with gray gradient (matching secondary action pattern)
   - Gray gradient: linear-gradient(135deg, #6c757d 0%, #495057 100%)
   - Same dimensions and hover effects as submit button
   - Consistent animation: translateY(-2px) on hover with shadow

### UI Features:
- **Button Layout**: Side-by-side buttons with 1rem gap
- **Clear Functionality**: Resets all form fields to empty state
- **Consistent Styling**: Matches form's design language with different color
- **Type Safety**: type="button" prevents accidental form submission

---

## Date: December 15, 2025

### Prompt 15:
"clear form cannot activate the validation error"

**Issue**: Validation errors (First name is required, Last name is required, etc.) were showing up after clicking Clear button.

### Changes Made:
1. Updated Clear button onClick handler in `ApplicantForm/index.tsx`:
   - Added `form.resetFieldState('firstName')` after form.reset()
   - Added `form.resetFieldState('lastName')` after form.reset()
   - Added `form.resetFieldState('mobile')` after form.reset()
   - Added `form.resetFieldState('email')` after form.reset()

### Technical Solution:
- **Root Cause**: `form.reset()` clears values but validation can still run on empty fields
- **Fix**: `form.resetFieldState()` clears touched state and validation errors for each field
- **Result**: No validation errors display after clearing the form
- **User Experience**: Clean slate when clicking Clear, no red error messages

### Form State Management:
- `form.reset()` - Resets values to initial state (empty)
- `form.resetFieldState(fieldName)` - Clears touched, error, and modified states per field
- Combined approach ensures complete form reset without triggering validation display

---

## Date: December 16, 2025

### Prompt 16:
"move functions to src/utils/ folder and use src/utils/index.ts to export it"

### Changes Made:
1. Created `src/utils/` folder structure with individual function files:
   - `handleAddApplicant.ts` - Validates uniqueness (email/mobile) and adds applicant with UUID
   - `handleRemoveApplicant.ts` - Removes applicant by ID
   - `handleSetPrimary.ts` - Sets primary applicant by swapping isPrimary flag
   - `clearError.ts` - Clears error message state

2. Created `src/utils/index.ts`:
   - Centralized export point for all utility functions
   - Exports: `handleAddApplicant`, `handleRemoveApplicant`, `handleSetPrimary`, `clearError`

3. Updated `src/App.tsx`:
   - Changed import from local functions to `import { ... } from './utils'`
   - Updated function calls to pass required parameters (applicants, setApplicants, setErrorMessage)
   - Wrapped handlers in arrow functions for props: `onRemove={(id) => handleRemoveApplicant(id, applicants, setApplicants)}`

### Architecture Benefits:
- **Separation of Concerns**: Business logic separated from UI component
- **Reusability**: Functions can be imported and used in other components
- **Testability**: Utility functions can be unit tested independently
- **Maintainability**: Centralized location for all applicant-related business logic
- **Type Safety**: All functions properly typed with Applicant interface

---

### Prompt 17:
"Each function will be one file"

### Changes Made:
Split the single `applicantHandlers.ts` file into individual files:

1. **`src/utils/handleAddApplicant.ts`**:
   - Contains add applicant logic with email/mobile uniqueness validation
   - Generates UUID for new applicants
   - Sets isPrimary flag for first applicant

2. **`src/utils/handleRemoveApplicant.ts`**:
   - Contains remove applicant logic
   - Filters applicants array by ID

3. **`src/utils/handleSetPrimary.ts`**:
   - Contains set primary logic
   - Maps through applicants and updates isPrimary flag

4. **`src/utils/clearError.ts`**:
   - Contains clear error message logic
   - Simple setter wrapper

5. Updated `src/utils/index.ts`:
   - Changed from single file export to individual file exports
   - `export { handleAddApplicant } from './handleAddApplicant';` pattern

### Code Organization:
- **One Function Per File**: Each file contains exactly one exported function
- **Single Responsibility**: Each file has a single, well-defined purpose
- **Easy Navigation**: Function name matches file name for easy discovery
- **Granular Imports**: Can import specific functions without unused code

---

### Prompt 18:
"store errorMessage into an individual component under components folder"

### Changes Made:
1. Created `src/components/ErrorMessage/index.tsx`:
   - New component to display error messages
   - Takes `message` prop of type string
   - Returns null if message is empty (conditional rendering)
   - Contains inline styles for error display (red background, border, padding)

2. Updated `src/App.tsx`:
   - Added import: `import ErrorMessage from './components/ErrorMessage'`
   - Replaced inline JSX error display with `<ErrorMessage message={errorMessage} />`
   - Removed conditional rendering logic from App component

### Component Structure:
```tsx
interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;
  return <div style={{...}}>>{message}</div>;
};
```

### Benefits:
- **Reusability**: ErrorMessage component can be used in other parts of the app
- **Separation of Concerns**: Error display logic separated from main App component
- **Cleaner Code**: App.tsx is more readable without inline styling
- **Type Safety**: Props properly typed with TypeScript interface

---

### Prompt 19:
"use localstorage to store the applicants state. 

when loading if localstorage applicants data exist use it as default state value;

whenever state applicants change update the localstorage using useEffect

pack these actions into an customised hook under src/hooks"

### Changes Made:
1. Created `src/hooks/useLocalStorageApplicants.ts`:
   - Custom React hook that manages applicants state with localStorage persistence
   - Uses lazy initialization in useState to load from localStorage on mount
   - Retrieves data from localStorage using key 'applicants'
   - Parses JSON data if it exists, otherwise returns empty array
   - Includes try-catch error handling for localStorage operations
   - Returns tuple: `[applicants, setApplicants]` with `as const` for type inference

2. Implemented `useEffect` for automatic persistence:
   - Watches `applicants` state for changes
   - Automatically saves to localStorage on every state update
   - Serializes applicants array to JSON before storing
   - Includes error handling for storage failures

3. Updated `src/App.tsx`:
   - Added import: `import { useLocalStorageApplicants } from './hooks/useLocalStorageApplicants'`
   - Replaced `useState<Applicant[]>([])` with `useLocalStorageApplicants()`
   - Removed unused `Applicant` type import (no longer needed)

4. Created `src/constants/index.ts`:
   - Exported `APPLICANTS_STORAGE_KEY = 'applicants'`
   - Centralized storage key constant for reusability

5. Updated hook to use constant:
   - Imported `APPLICANTS_STORAGE_KEY` from constants
   - Used constant instead of hardcoded string

### Hook Implementation:
```tsx
export const useLocalStorageApplicants = () => {
  const [applicants, setApplicants] = useState<Applicant[]>(() => {
    try {
      const storedData = localStorage.getItem(APPLICANTS_STORAGE_KEY);
      if (storedData) return JSON.parse(storedData);
    } catch (error) {
      console.error('Error loading applicants from localStorage:', error);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(APPLICANTS_STORAGE_KEY, JSON.stringify(applicants));
    } catch (error) {
      console.error('Error saving applicants to localStorage:', error);
    }
  }, [applicants]);

  return [applicants, setApplicants] as const;
};
```

### Features:
- **Persistent State**: Applicants survive page refreshes
- **Lazy Initialization**: Only reads localStorage once on mount
- **Automatic Sync**: Every state change triggers localStorage update
- **Error Handling**: Gracefully handles localStorage failures (quota exceeded, disabled, etc.)
- **Type Safety**: Hook returns properly typed tuple
- **Reusable**: Can be used in any component that needs applicants state
- **Constants**: Storage key centralized in constants folder

