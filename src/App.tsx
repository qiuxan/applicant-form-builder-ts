import { useState } from 'react';
import './App.css'
import ApplicantForm from './components/ApplicantForm'
import UsersTable, { type Applicant } from './components/UsersTable'
import { handleAddApplicant, handleRemoveApplicant, handleSetPrimary, clearError } from './utils'

function App() {

  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <>
      <h1>Applicant Form Builder</h1>
      <UsersTable 
        applicants={applicants} 
        onRemove={(id) => handleRemoveApplicant(id, applicants, setApplicants)} 
        onSetPrimary={(id) => handleSetPrimary(id, applicants, setApplicants)} 
      />
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
      <ApplicantForm 
        onAddApplicant={(applicant) => handleAddApplicant(applicant, applicants, setApplicants, setErrorMessage)} 
        onFieldFocus={() => clearError(setErrorMessage)} 
      />
      
    </>
  )
}

export default App
