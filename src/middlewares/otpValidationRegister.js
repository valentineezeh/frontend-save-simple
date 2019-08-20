import isEmpty from 'is-empty';


const otpValidateInput = (data) => {
  const errors = {};
  if (data.otp === '' || !data.otp || data.otp.trim().length === 0) {
    errors.otp = 'This field is required.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default otpValidateInput;
