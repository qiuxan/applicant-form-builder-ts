import './UsersTable.css';

export interface Applicant {
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
}

interface UsersTableProps {
    applicants: Applicant[];
}

const UsersTable = ({ applicants }: UsersTableProps) => {
    return (
        <div className="users-table-container">
            <table className="users-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applicants.map((applicant, index) => (
                        <tr key={index}>
                            <td>{applicant.firstName}</td>
                            <td>{applicant.lastName}</td>
                            <td>{applicant.mobile}</td>
                            <td>{applicant.email}</td>
                            <td>
                                <button className="remove-button">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
