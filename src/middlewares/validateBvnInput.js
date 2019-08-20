import isEmpty from 'is-empty';

const verifyBvnValidateInput = (data) => {
  const errors = {};
  if (data.bvn === '' || !data.bvn || data.bvn.trim().length === 0) {
    errors.bvn = 'This field is required.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default verifyBvnValidateInput;
