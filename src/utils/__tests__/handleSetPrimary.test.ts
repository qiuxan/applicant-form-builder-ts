import { handleSetPrimary } from '../handleSetPrimary';
import { type Applicant } from '../../components/UsersTable';

describe('handleSetPrimary', () => {
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

  it('should set the specified applicant as primary', () => {
    handleSetPrimary('2', applicants, mockSetApplicants);

    expect(mockSetApplicants).toHaveBeenCalledWith([
      {
        ...applicants[0],
        isPrimary: false,
      },
      {
        ...applicants[1],
        isPrimary: true,
      },
      {
        ...applicants[2],
        isPrimary: false,
      },
    ]);
  });

  it('should unset all other applicants as primary', () => {
    handleSetPrimary('3', applicants, mockSetApplicants);

    const result = mockSetApplicants.mock.calls[0][0];
    
    expect(result[0].isPrimary).toBe(false);
    expect(result[1].isPrimary).toBe(false);
    expect(result[2].isPrimary).toBe(true);
  });

  it('should work when changing primary from one to another', () => {
    handleSetPrimary('3', applicants, mockSetApplicants);

    const result = mockSetApplicants.mock.calls[0][0];
    const primaryCount = result.filter((a: Applicant) => a.isPrimary).length;
    
    expect(primaryCount).toBe(1);
    expect(result[2].isPrimary).toBe(true);
  });

  it('should keep the same applicant as primary if called with same id', () => {
    handleSetPrimary('1', applicants, mockSetApplicants);

    expect(mockSetApplicants).toHaveBeenCalledWith([
      {
        ...applicants[0],
        isPrimary: true,
      },
      {
        ...applicants[1],
        isPrimary: false,
      },
      {
        ...applicants[2],
        isPrimary: false,
      },
    ]);
  });

  it('should set all isPrimary to false if id does not exist', () => {
    handleSetPrimary('non-existent-id', applicants, mockSetApplicants);

    const result = mockSetApplicants.mock.calls[0][0];
    const primaryCount = result.filter((a: Applicant) => a.isPrimary).length;
    
    expect(primaryCount).toBe(0);
  });

  it('should not mutate the original applicants array', () => {
    const originalApplicants = JSON.parse(JSON.stringify(applicants));
    
    handleSetPrimary('2', applicants, mockSetApplicants);

    expect(applicants).toEqual(originalApplicants);
  });

  it('should preserve all other applicant properties', () => {
    handleSetPrimary('2', applicants, mockSetApplicants);

    const result = mockSetApplicants.mock.calls[0][0];
    
    expect(result[1].firstName).toBe('Jane');
    expect(result[1].lastName).toBe('Smith');
    expect(result[1].email).toBe('jane@example.com');
    expect(result[1].mobile).toBe('0987654321');
    expect(result[1].id).toBe('2');
  });

  it('should work with a single applicant', () => {
    const singleApplicant = [applicants[0]];
    
    handleSetPrimary('1', singleApplicant, mockSetApplicants);

    expect(mockSetApplicants).toHaveBeenCalledWith([
      {
        ...singleApplicant[0],
        isPrimary: true,
      },
    ]);
  });
});
