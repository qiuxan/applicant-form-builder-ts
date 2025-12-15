import './App.css'
import ApplicantForm from './components/ApplicantForm'
import UsersTable, { type Applicant } from './components/UsersTable'

function App() {
  const exampleApplicants: Applicant[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      mobile: '+1234567890',
      email: 'john.doe@example.com'
    },
     {
      firstName: 'John',
      lastName: 'Doe',
      mobile: '+1234567890',
      email: 'john.doe@example.com'
    },
     {
      firstName: 'John',
      lastName: 'Doe',
      mobile: '+1234567890',
      email: 'john.doe@example.com'
    }
  ];

  return (
    <>
      <h1>Applicant Form Builder</h1>
      <UsersTable applicants={exampleApplicants} />
      <ApplicantForm />
    </>
  )
}

export default App
