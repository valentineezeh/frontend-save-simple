/* eslint-disable no-restricted-globals */
import isEmpty from 'is-empty';

const validateAddCardDetails = (data) => {
  const errors = {};
  const cardNo = data.no.replace(/ /g, '');
  if (cardNo === '' || !cardNo || cardNo.trim().length === 0) {
    errors.no = 'This field is required.';
  }
  if (isNaN(cardNo)) {
    errors.no = 'Invalid input.';
  }

  if (data.cvv === '' || !data.cvv || data.cvv.trim().length === 0) {
    errors.cvv = 'This field is required.';
  }
  if (isNaN(data.cvv)) {
    errors.no = 'Invalid input.';
  }

  if (data.dateString === '' || !data.dateString || data.dateString.trim().length === 0 || data.dateString === '__/__') {
    errors.dateString = 'This field is required.';
  }

  if (data.pin === '' || !data.pin || data.pin.trim().length === 0) {
    errors.pin = 'This field is required.';
  }
  if (isNaN(data.pin)) {
    errors.pin = 'Invalid input.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateAddCardDetails;
