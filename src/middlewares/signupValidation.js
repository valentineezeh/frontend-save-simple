/* eslint-disable max-len */
import isEmpty from 'is-empty';
// eslint-disable-next-line import/no-extraneous-dependencies
import validator from 'validator';
import passwordValidator from 'password-validator';


const ValidateUserSignupInput = (data) => {
  const errors = {};
  const email = data.email.trim().toLowerCase();
  let validatePassword = new passwordValidator();
  validatePassword
    .is().min(6)
    .is().max(100)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits()
    .has()
    .not()
    .spaces()
    .is()
    .not()
    .oneOf(['Passw0rd', 'Password123']);

  if (data.firstname === '' || !data.firstname || data.firstname.trim().length === 0) {
    errors.firstname = 'This field is required.';
  }
  if (data.lastname === '' || !data.lastname || data.lastname.trim().length === 0) {
    errors.lastname = 'This field is required.';
  }
  if (email === '' || !email || email.trim().length === 0) {
    errors.email = 'This field is required.';
  }
  if (email && !validator.isEmail(email)) {
    errors.email = 'Invalid Email Input.';
  }
  if (data.phoneNumber === '' || !data.phoneNumber || data.phoneNumber.trim().length === 0) {
    errors.phoneNumber = 'This field is required.';
  }
  if (data.phoneNumber.trim().length > 0 && data.phoneNumber.trim().length !== 11 && data.phoneNumber !== Number) {
    errors.phoneNumber = 'Phone number should be 11 digits';
  }
  if (data.password === '' || !data.password || data.password.trim().length === 0) {
    errors.password = 'This field is required.';
  }
  if (data.password < 6) {
    errors.password = 'Password should be greater than 6 characters';
  }
  if (!validatePassword.validate(data.password)) {
    errors.password = 'Password must have uppercase, lowercase, number, no space and must not start with password';
  }
  if (data.confirmpassword === '' || !data.confirmpassword || data.confirmpassword.trim().length === 0) {
    errors.confirmpassword = 'This field is required.';
  }
  if (data.password && data.confirmpassword && data.confirmpassword !== data.password) {
    errors.confirmpassword = 'Mismatch password. Try Again!';
  }
  if (data.password.trim().length > 0 && data.password.trim().length < 6) {
    errors.password = 'Password should be greater than 6 characters';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default ValidateUserSignupInput;
