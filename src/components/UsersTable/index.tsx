import './UsersTable.css';

export interface Applicant {
    id: string;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    isPrimary: boolean;
}

interface UsersTableProps {
    applicants: Applicant[];
    onRemove: (id: string) => void;
    onSetPrimary: (id: string) => void;
}

const UsersTable = ({ applicants, onRemove, onSetPrimary }: UsersTableProps) => {
    return (
        <div className="users-table-container">
            <table className="users-table">
                <thead>
                    <tr>
                        <th>Primary</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applicants.map((applicant) => (
                        <tr key={applicant.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={applicant.isPrimary}
                                    onChange={() => onSetPrimary(applicant.id)}
                                    style={{ cursor: 'pointer', width: '20px', height: '20px' }}
                                />
                            </td>
                            <td>{applicant.firstName}</td>
                            <td>{applicant.lastName}</td>
                            <td>{applicant.mobile}</td>
                            <td>{applicant.email}</td>
                            <td>
                                <div className="remove-button-container">
                                    <button 
                                        className={`remove-button ${applicant.isPrimary ? 'disabled' : ''}`}
                                        onClick={() => !applicant.isPrimary && onRemove(applicant.id)}
                                        disabled={applicant.isPrimary}
                                    >
                                        Remove
                                    </button>
                                    {applicant.isPrimary && (
                                        <span className="tooltip">Cannot remove the primary applicant</span>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
