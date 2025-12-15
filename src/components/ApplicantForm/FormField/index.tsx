import { Field } from 'react-final-form';

interface FormFieldProps {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    onFieldFocus?: () => void;
}

const FormField = ({ name, label, type, placeholder, onFieldFocus }: FormFieldProps) => (
    <Field name={name}>
        {({ input, meta }) => (
            <div className="form-field">
                <label htmlFor={name}>{label}</label>
                <input 
                    {...input}
                    type={type} 
                    id={name}
                    placeholder={placeholder}
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
);

export default FormField;
