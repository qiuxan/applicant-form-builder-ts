import { type Applicant } from '../components/UsersTable';

export const handleAddApplicant = (
  applicant: Omit<Applicant, 'id' | 'isPrimary'>,
  applicants: Applicant[],
  setApplicants: (applicants: Applicant[]) => void,
  setErrorMessage: (message: string) => void
) => {
  // Clear any previous error
  setErrorMessage('');

  // Check if email already exists
  const emailExists = applicants.some(existing => 
    existing.email.toLowerCase() === applicant.email.toLowerCase()
  );
  
  if (emailExists) {
    setErrorMessage('An applicant with this email already exists!');
    return;
  }

  // Check if mobile already exists (normalize by removing non-digits)
  const normalizedMobile = applicant.mobile.replace(/\D/g, '');
  const mobileExists = applicants.some(existing => 
    existing.mobile.replace(/\D/g, '') === normalizedMobile
  );
  
  if (mobileExists) {
    setErrorMessage('An applicant with this mobile number already exists!');
    return;
  }

  // Add applicant with generated ID if both email and mobile are unique
  // First applicant becomes primary by default
  const newApplicant: Applicant = {
    ...applicant,
    id: crypto.randomUUID(),
    isPrimary: applicants.length === 0
  };
  setApplicants([...applicants, newApplicant]);
};
