import { useState, useEffect } from 'react';
import { type Applicant } from '../components/UsersTable';
import { APPLICANTS_STORAGE_KEY } from '../constants';

export const useLocalStorageApplicants = () => {
  const [applicants, setApplicants] = useState<Applicant[]>(() => {
    // Initialize from localStorage if data exists
    try {
      const storedData = localStorage.getItem(APPLICANTS_STORAGE_KEY);
      if (storedData) {
        return JSON.parse(storedData);
      }
    } catch (error) {
      console.error('Error loading applicants from localStorage:', error);
    }
    return [];
  });

  // Update localStorage whenever applicants change
  useEffect(() => {
    try {
      localStorage.setItem(APPLICANTS_STORAGE_KEY, JSON.stringify(applicants));
    } catch (error) {
      console.error('Error saving applicants to localStorage:', error);
    }
  }, [applicants]);

  return [applicants, setApplicants] as const;
};
