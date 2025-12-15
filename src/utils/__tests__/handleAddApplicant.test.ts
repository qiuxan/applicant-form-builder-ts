import { handleAddApplicant } from '../handleAddApplicant';
import { type Applicant } from '../../components/UsersTable';

// Mock crypto.randomUUID
const mockUUID = '123e4567-e89b-12d3-a456-426614174000';
Object.defineProperty(globalThis, 'crypto', {
  value: {
    randomUUID: jest.fn(() => mockUUID),
  },
  writable: true,
});

describe('handleAddApplicant', () => {
  let mockSetApplicants: jest.Mock;
  let mockSetErrorMessage: jest.Mock;
  let existingApplicants: Applicant[];

  beforeEach(() => {
    mockSetApplicants = jest.fn();
    mockSetErrorMessage = jest.fn();
    existingApplicants = [
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
    ];
    jest.clearAllMocks();
  });

  it('should add a new applicant when email and mobile are unique', () => {
    const newApplicant = {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice@example.com',
      mobile: '5555555555',
    };

    handleAddApplicant(
      newApplicant,
      existingApplicants,
      mockSetApplicants,
      mockSetErrorMessage
    );

    expect(mockSetErrorMessage).toHaveBeenCalledWith('');
    expect(mockSetApplicants).toHaveBeenCalledWith([
      ...existingApplicants,
      {
        ...newApplicant,
        id: mockUUID,
        isPrimary: false,
      },
    ]);
  });

  it('should set isPrimary to true for the first applicant', () => {
    const firstApplicant = {
      firstName: 'First',
      lastName: 'User',
      email: 'first@example.com',
      mobile: '1111111111',
    };

    handleAddApplicant(
      firstApplicant,
      [],
      mockSetApplicants,
      mockSetErrorMessage
    );

    expect(mockSetApplicants).toHaveBeenCalledWith([
      {
        ...firstApplicant,
        id: mockUUID,
        isPrimary: true,
      },
    ]);
  });

  it('should show error when email already exists (case-insensitive)', () => {
    const duplicateEmailApplicant = {
      firstName: 'Duplicate',
      lastName: 'Email',
      email: 'JOHN@EXAMPLE.COM',
      mobile: '9999999999',
    };

    handleAddApplicant(
      duplicateEmailApplicant,
      existingApplicants,
      mockSetApplicants,
      mockSetErrorMessage
    );

    expect(mockSetErrorMessage).toHaveBeenCalledWith(
      'An applicant with this email already exists!'
    );
    expect(mockSetApplicants).not.toHaveBeenCalled();
  });

  it('should show error when mobile already exists', () => {
    const duplicateMobileApplicant = {
      firstName: 'Duplicate',
      lastName: 'Mobile',
      email: 'unique@example.com',
      mobile: '1234567890',
    };

    handleAddApplicant(
      duplicateMobileApplicant,
      existingApplicants,
      mockSetApplicants,
      mockSetErrorMessage
    );

    expect(mockSetErrorMessage).toHaveBeenCalledWith(
      'An applicant with this mobile number already exists!'
    );
    expect(mockSetApplicants).not.toHaveBeenCalled();
  });

  it('should normalize mobile numbers by removing non-digit characters', () => {
    const existingWithFormatted = [
      {
        ...existingApplicants[0],
        mobile: '(123) 456-7890',
      },
    ];

    const duplicateUnformatted = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      mobile: '1234567890',
    };

    handleAddApplicant(
      duplicateUnformatted,
      existingWithFormatted,
      mockSetApplicants,
      mockSetErrorMessage
    );

    expect(mockSetErrorMessage).toHaveBeenCalledWith(
      'An applicant with this mobile number already exists!'
    );
    expect(mockSetApplicants).not.toHaveBeenCalled();
  });

  it('should clear error message before validation', () => {
    const newApplicant = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      mobile: '1111111111',
    };

    handleAddApplicant(
      newApplicant,
      existingApplicants,
      mockSetApplicants,
      mockSetErrorMessage
    );

    expect(mockSetErrorMessage).toHaveBeenCalledWith('');
  });

  it('should prioritize email error over mobile error', () => {
    const duplicateBoth = {
      firstName: 'Duplicate',
      lastName: 'Both',
      email: 'john@example.com',
      mobile: '1234567890',
    };

    handleAddApplicant(
      duplicateBoth,
      existingApplicants,
      mockSetApplicants,
      mockSetErrorMessage
    );

    expect(mockSetErrorMessage).toHaveBeenCalledWith(
      'An applicant with this email already exists!'
    );
    expect(mockSetApplicants).not.toHaveBeenCalled();
  });
});
