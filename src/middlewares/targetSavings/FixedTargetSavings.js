/* eslint-disable no-restricted-globals */
import isEmpty from 'is-empty';
import moment from 'moment';

const fixedTargetSavingsValidationInput = (data) => {
  const errors = {};
  const maturityDate = moment(data.maturityDate).format('YYYY-MM-DD');
  const futureDate = moment().add('days', 30).format('YYYY-MM-DD');
  if (data.title === '' || !data.title || data.title.trim().length === 0) {
    errors.title = 'This field is required.';
  }
  if (data.description === '' || !data.description || data.description.trim().length === 0) {
    errors.description = 'This field is required.';
  }
  if (data.maturityDate === '' || !data.maturityDate || data.maturityDate.trim().length === 0) {
    errors.maturityDate = 'This field is required.';
  }
  if (data.amount === '' || !data.amount || data.amount.trim().length === 0) {
    errors.amount = 'This field is required.';
  }
  if (isNaN(data.amount)) {
    errors.amount = 'Amount must be in numbers.';
  }
  if (data.fundingSource === '' || !data.fundingSource || data.fundingSource.trim().length === 0) {
    errors.fundingSource = 'This field is required.';
  }
  if (maturityDate < futureDate) {
    errors.maturityDate = 'Date should be 30 days in the future.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const validateCardInput = (data) => {
  const errors = {};
  if (data.cardId === '' || !data.cardId || data.cardId.trim().length === 0) {
    errors.cardId = 'This field is required.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export {
  fixedTargetSavingsValidationInput,
  validateCardInput
};
