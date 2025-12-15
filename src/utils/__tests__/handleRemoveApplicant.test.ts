import { handleRemoveApplicant } from '../handleRemoveApplicant';
import { type Applicant } from '../../components/UsersTable';

describe('handleRemoveApplicant', () => {
  let mockSetApplicants: jest.Mock;
  let applicants: Applicant[];

  beforeEach(() => {
    mockSetApplicants = jest.fn();
    applicants = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        mobile: '1234567890',
        isPrimary: true,
      },
      {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        mobile: '0987654321',
        isPrimary: false,
      },
      {
        id: '3',
        firstName: 'Bob',
        lastName: 'Johnson',
        email: 'bob@example.com',
        mobile: '5555555555',
        isPrimary: false,
      },
    ];
    jest.clearAllMocks();
  });

  it('should remove an applicant by id', () => {
    handleRemoveApplicant('2', applicants, mockSetApplicants);

    expect(mockSetApplicants).toHaveBeenCalledWith([
      applicants[0],
      applicants[2],
    ]);
  });

  it('should remove the first applicant', () => {
    handleRemoveApplicant('1', applicants, mockSetApplicants);

    expect(mockSetApplicants).toHaveBeenCalledWith([
      applicants[1],
      applicants[2],
    ]);
  });

  it('should remove the last applicant', () => {
    handleRemoveApplicant('3', applicants, mockSetApplicants);

    expect(mockSetApplicants).toHaveBeenCalledWith([
      applicants[0],
      applicants[1],
    ]);
  });

  it('should return empty array when removing the only applicant', () => {
    const singleApplicant = [applicants[0]];
    
    handleRemoveApplicant('1', singleApplicant, mockSetApplicants);

    expect(mockSetApplicants).toHaveBeenCalledWith([]);
  });

  it('should not modify array if id does not exist', () => {
    handleRemoveApplicant('non-existent-id', applicants, mockSetApplicants);

    expect(mockSetApplicants).toHaveBeenCalledWith(applicants);
  });

  it('should not mutate the original applicants array', () => {
    const originalApplicants = [...applicants];
    
    handleRemoveApplicant('2', applicants, mockSetApplicants);

    expect(applicants).toEqual(originalApplicants);
  });
});
