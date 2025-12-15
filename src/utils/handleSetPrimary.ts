import { type Applicant } from '../components/UsersTable';

export const handleSetPrimary = (
  id: string,
  applicants: Applicant[],
  setApplicants: (applicants: Applicant[]) => void
) => {
  setApplicants(applicants.map(applicant => ({
    ...applicant,
    isPrimary: applicant.id === id
  })));
};
