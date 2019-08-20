import isEmpty from 'is-empty';


const changePasswordValidateInput = (data) => {
  const errors = {};
  if (data.newPassword === '' || !data.newPassword || data.newPassword.trim().length === 0) {
    errors.newPassword = 'This field is required.';
  }
  if (data.confirmPassword === '' || !data.confirmPassword || data.confirmPassword.trim().length === 0) {
    errors.confirmPassword = 'This field is required.';
  }
  if (data.newPassword && data.confirmPassword && data.confirmPassword !== data.newPassword) {
    errors.confirmPassword = 'Mismatch password. Try Again!';
  }
  if (data.newPassword.trim().length > 0 && data.newPassword.trim().length < 6) {
    errors.newPassword = 'Password should be greater than 6 characters';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default changePasswordValidateInput;
