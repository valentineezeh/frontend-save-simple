import isEmpty from 'is-empty';
// eslint-disable-next-line import/no-extraneous-dependencies
import validator from 'validator';


const ValidateUserLoginInput = (data) => {
  const errors = {};
  if (data.userName === '' || !data.userName || data.userName.trim().length === 0) {
    errors.userName = 'This field is required.';
  }
  // if (data.user && !validator.isEmail(data.email)) {
  //   errors.email = 'Invalid Email Input.';
  // }
  if (data.password === '' || !data.password || data.password.trim().length === 0) {
    errors.password = 'This field is required.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default ValidateUserLoginInput;
