import isEmpty from 'is-empty';
import validator from 'validator';


const passwordLinkValidateInput = (data) => {
  const errors = {};
  if (data.email === '' || !data.email || data.email.trim().length === 0) {
    errors.email = 'This field is required.';
  }
  if (data.email && !validator.isEmail(data.email)) {
    errors.email = 'Invalid Email Input.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default passwordLinkValidateInput;
