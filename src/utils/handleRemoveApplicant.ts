import { type Applicant } from '../components/UsersTable';

export const handleRemoveApplicant = (
  id: string,
  applicants: Applicant[],
  setApplicants: (applicants: Applicant[]) => void
) => {
  setApplicants(applicants.filter(applicant => applicant.id !== id));
};
