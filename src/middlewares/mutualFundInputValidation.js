/* eslint-disable no-restricted-globals */
import isEmpty from 'is-empty';

const validateInput = (data) => {
  const errors = {};
  if (data.amount === '' || !data.amount || data.amount.trim().length === 0) {
    errors.amount = 'This field is required.';
  }
  if (isNaN(data.amount)) {
    errors.amount = 'Invalid input.';
  }
  if (data.fundingSource === '' || !data.fundingSource || data.fundingSource.trim().length === 0) {
    errors.fundingSource = 'This field is required.';
  }
  
  if (data.fundingSource !== '5') {
    if (data.accountId === '' || !data.accountId || data.accountId.trim().length === 0) {
      errors.accountId = 'This field is required.';
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateInput;
