/* eslint-disable no-restricted-globals */
import isEmpty from 'is-empty';

const validateAddCardOtp = (data) => {
  const errors = {};
  if (data.otp === '' || !data.otp || data.otp.trim().length === 0) {
    errors.otp = 'This field is required.';
  }
  if (isNaN(data.otp)) {
    errors.otp = 'Invalid input.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateAddCardOtp;
