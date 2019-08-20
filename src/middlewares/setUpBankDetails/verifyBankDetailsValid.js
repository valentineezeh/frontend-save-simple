import isEmpty from 'is-empty';


const ValidateInput = (data) => {
  const errors = {};
  if (data.accountNo === '' || !data.accountNo || data.accountNo.trim().length === 0) {
    errors.accountNo = 'This field is required.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default ValidateInput;
