import { useState } from 'react';
import './App.css'
import ApplicantForm from './components/ApplicantForm'
import UsersTable, { type Applicant } from './components/UsersTable'
import ErrorMessage from './components/ErrorMessage'
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
      <ErrorMessage message={errorMessage} />
      <ApplicantForm 
        onAddApplicant={(applicant) => handleAddApplicant(applicant, applicants, setApplicants, setErrorMessage)} 
        onFieldFocus={() => clearError(setErrorMessage)} 
      />
      
    </>
  )
}

export default App
