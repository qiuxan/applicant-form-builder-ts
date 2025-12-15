interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;

  return (
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
      {message}
    </div>
  );
};

export default ErrorMessage;
