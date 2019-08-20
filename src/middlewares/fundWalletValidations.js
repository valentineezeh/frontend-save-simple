/* eslint-disable no-restricted-globals */
import isEmpty from 'is-empty';

const fundWalletValidationInput = (data) => {
  const errors = {};
  if (data.amount === '' || !data.amount || data.amount.trim().length === 0) {
    errors.amount = 'This field is required.';
  }
  if (isNaN(data.amount)) {
    errors.amount = 'Invalid input.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default fundWalletValidationInput;
