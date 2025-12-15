import './ApplicantForm.css';
import { Form, Field } from 'react-final-form';

interface FormValues {
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
}

const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};
    
    if (!values.firstName) {
        errors.firstName = 'First name is required';
    }
    
    if (!values.lastName) {
        errors.lastName = 'Last name is required';
    }
    
    if (!values.mobile) {
        errors.mobile = 'Mobile number is required';
    } else {
        // Remove all non-digit characters for validation
        const cleanMobile = values.mobile.replace(/\D/g, '');
        
        // Australian mobile numbers: must start with 04 and be 10 digits total
        // Or start with +614 and be 11 digits total (including country code)
        if (cleanMobile.startsWith('614') && cleanMobile.length === 11) {
            // Valid format: +61 4XX XXX XXX
        } else if (cleanMobile.startsWith('04') && cleanMobile.length === 10) {
            // Valid format: 04XX XXX XXX
        } else {
            errors.mobile = 'Invalid Australian mobile number. Must start with 04 or +614';
        }
    }
    
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    
    return errors;
};

const ApplicantForm = ({ 
    onAddApplicant, 
    onFieldFocus 
}: { 
    onAddApplicant: (applicant: FormValues) => void;
    onFieldFocus?: () => void;
}) => {
    const onSubmit = (values: FormValues) => {
        console.log('Form submitted:', values);
        onAddApplicant(values);
        // Handle form submission here
    };

    return (
        <div className="applicant-form-container">
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, submitting }) => (
                    <form className="applicant-form" onSubmit={handleSubmit}>
                        <Field name="firstName">
                            {({ input, meta }) => (
                                <div className="form-field">
                                    <label htmlFor="firstName">First Name</label>
                                    <input 
                                        {...input}
                                        type="text" 
                                        id="firstName"
                                        placeholder="Enter first name"
                                        onFocus={(e) => {
                                            input.onFocus(e);
                                            onFieldFocus?.();
                                        }}
                                    />
                                    {meta.error && meta.touched && (
                                        <span className="error-message">{meta.error}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                        
                        <Field name="lastName">
                            {({ input, meta }) => (
                                <div className="form-field">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input 
                                        {...input}
                                        type="text" 
                                        id="lastName"
                                        placeholder="Enter last name"
                                        onFocus={(e) => {
                                            input.onFocus(e);
                                            onFieldFocus?.();
                                        }}
                                    />
                                    {meta.error && meta.touched && (
                                        <span className="error-message">{meta.error}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                        
                        <Field name="mobile">
                            {({ input, meta }) => (
                                <div className="form-field">
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <input 
                                        {...input}
                                        type="tel" 
                                        id="mobile"
                                        placeholder="Enter mobile number"
                                        onFocus={(e) => {
                                            input.onFocus(e);
                                            onFieldFocus?.();
                                        }}
                                    />
                                    {meta.error && meta.touched && (
                                        <span className="error-message">{meta.error}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                        
                        <Field name="email">
                            {({ input, meta }) => (
                                <div className="form-field">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        {...input}
                                        type="email" 
                                        id="email"
                                        placeholder="Enter email address"
                                        onFocus={(e) => {
                                            input.onFocus(e);
                                            onFieldFocus?.();
                                        }}
                                    />
                                    {meta.error && meta.touched && (
                                        <span className="error-message">{meta.error}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                        
                        <button type="submit" className="submit-button" disabled={submitting}>
                            Add
                        </button>
                    </form>
                )}
            />
        </div>
    );
}
export default ApplicantForm;