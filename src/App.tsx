import { useState } from 'react';
import './App.css'
import ApplicantForm from './components/ApplicantForm'
import UsersTable, { type Applicant } from './components/UsersTable'

function App() {

  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleAddApplicant = (applicant: Omit<Applicant, 'id'>) => {
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
    const newApplicant: Applicant = {
      ...applicant,
      id: crypto.randomUUID()
    };
    setApplicants([...applicants, newApplicant]);
  };

  const handleRemoveApplicant = (id: string) => {
    setApplicants(applicants.filter(applicant => applicant.id !== id));
  };

  const clearError = () => {
    setErrorMessage('');
  };

  return (
    <>
      <h1>Applicant Form Builder</h1>
      <UsersTable applicants={applicants} onRemove={handleRemoveApplicant} />
      {errorMessage && (
        <div style={{
          maxWidth: '500px',
          margin: '0 auto 1rem',
          padding: '1rem',
          backgroundColor: '#fee',
          border: '2px solid #ff6b6b',
          borderRadius: '8px',
          color: '#c92a2a',
          fontWeight: '600'
        }}>
          {errorMessage}
        </div>
      )}
      <ApplicantForm onAddApplicant={handleAddApplicant} onFieldFocus={clearError} />
      
    </>
  )
}

export default App
