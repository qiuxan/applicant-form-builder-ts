import './ApplicantForm.css';

const ApplicantForm = () => {
    return (
        <div className="applicant-form-container">
            <form className="applicant-form">
                <div className="form-field">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        required 
                    />
                </div>
                
                <div className="form-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        required 
                    />
                </div>
                
                <div className="form-field">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input 
                        type="tel" 
                        id="mobile" 
                        name="mobile" 
                        required 
                    />
                </div>
                
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                    />
                </div>
                
                <button type="submit" className="submit-button">Add</button>
            </form>
        </div>
    );
}
export default ApplicantForm;