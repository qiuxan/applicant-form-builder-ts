import { clearError } from '../clearError';

describe('clearError', () => {
  it('should call setErrorMessage with an empty string', () => {
    const mockSetErrorMessage = jest.fn();

    clearError(mockSetErrorMessage);

    expect(mockSetErrorMessage).toHaveBeenCalledWith('');
    expect(mockSetErrorMessage).toHaveBeenCalledTimes(1);
  });

  it('should clear error message regardless of previous state', () => {
    const mockSetErrorMessage = jest.fn();

    clearError(mockSetErrorMessage);

    expect(mockSetErrorMessage).toHaveBeenCalledWith('');
  });
});
