/* eslint-disable no-restricted-globals */
import isEmpty from 'is-empty';
import moment from 'moment';
import validator from 'validator';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';

const enterSavingDetails = (data) => {
  const errors = {};
  if (data.title === '' || !data.title || data.title.trim().length === 0) {
    errors.title = 'This field is required.';
  }
  if (data.description === '' || !data.description || data.description.trim().length === 0) {
    errors.description = 'This field is required.';
  }
  if (data.targetAmount === '' || !data.targetAmount || data.targetAmount.trim().length === 0) {
    errors.targetAmount = 'This field is required.';
  }
  if (isNaN(data.targetAmount)) {
    errors.targetAmount = 'Invalid input.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const validateUserInput = (data) => {
  const errors = {};
  const startDate = moment(data.startDate).format('YYYY-MM-DD');
  const futureDateDaily = moment().format('YYYY-MM-DD');
  if (data.savingInterval <= 0) {
    errors.savingInterval = 'This field is required.';
  }
  if (data.duration === '' || !data.duration || data.duration.trim().length === 0) {
    errors.duration = 'This field is required.';
  }
  if (startDate < futureDateDaily) {
    errors.startDate = 'Start Date should not be in the past to the current date.';
  }
  if (data.startDate === '' || !data.startDate || data.startDate.trim().length === 0) {
    errors.startDate = 'This field is required.';
  }

  if (data.savingInterval === '7') {
    if (data.savingsDay < 1) {
      errors.savingsDay = 'Please pick a weekday.';
    }
  }

  if (data.savingInterval === '30') {
    if (data.savingsDay < 1) {
      errors.savingsDay = 'Please pick a date in the month';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const validateStartDate = (data) => {
  const errors = {};
  const startDate = moment(data.startDate).format('YYYY-MM-DD');
  const futureDateDaily = moment().format('YYYY-MM-DD');
  if (startDate < futureDateDaily) {
    errors.startDate = 'Start Date should not be in the past to the current date.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const groupSavingValidateInput = (data) => {
  const errors = {};
  const startDate = moment(data.startDate).format('YYYY-MM-DD');
  const futureDateMonth = moment().add('days', 30).format('YYYY-MM-DD');
  const futureDateWeek = moment().add('days', 7).format('YYYY-MM-DD');
  const futureDateDaily = moment().format('YYYY-MM-DD');
  if (data.savingsInterval === '30') {
    if (startDate < futureDateMonth) {
      errors.startDate = 'Date should be 30 days or more in the future.';
    } else {
      errors.startDate = '';
    }
  }
  if (data.savingsInterval === '7') {
    if (startDate < futureDateWeek) {
      errors.startDate = 'Date should be 7 days in the future.';
    } else {
      errors.startDate = '';
    }
  }
  if (data.savingsInterval === '1') {
    if (startDate < futureDateDaily) {
      errors.startDate = 'Date should not be in the past to current date';
    } else {
      errors.startDate = '';
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const groupSavingInputValidateFront = (data) => {
  const errors = {};
  if (data.title === '' || !data.title || data.title.trim().length === 0) {
    errors.title = 'This field is required.';
  }
  if (data.description === '' || !data.description || data.description.trim().length === 0) {
    errors.description = 'This field is required.';
  }
  if (data.targetAmount === '' || !data.targetAmount || data.targetAmount.trim().length === 0) {
    errors.targetAmount = 'This field is required.';
  }
  if (isNaN(data.targetAmount)) {
    errors.targetAmount = 'Only numbers are required.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const groupSavingsEmailInput = (data) => {
  const errors = {};
  const token = Cookie.get('jwtToken');
  const decodeUser = jwt.decode(token);
  const creatorEmail = decodeUser.email;
  const userEmail = data.email.trim().toLowerCase();
  const { participants } = data;
  participants.map((mail) => {
    if (mail === userEmail) {
      errors.email = 'You cant enter the same email twice.';
    }
    return null;
  });

  if (userEmail === creatorEmail) {
    errors.email = 'Creator email should not be added.';
  }

  if (userEmail && !validator.isEmail(userEmail)) {
    errors.email = 'Invalid Email Input.';
  }

  if (userEmail === '' || !userEmail || userEmail.trim().length === 0) {
    errors.email = 'This field is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const fundingSourceCard = (data) => {
  const errors = {};
  if (data.cardId === '' || !data.cardId || data.cardId.trim().length === 0) {
    errors.cardId = 'You are yet to choose a funding source.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const destinationAccount = (data) => {
  const errors = {};
  if (data.accountId === '' || !data.accountId || data.accountId.trim().length === 0) {
    errors.accountId = 'You are yet to choose a destination account.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const groupContributorySchemeOne = (data) => {
  const errors = {};
  if (data.schemeName === '' || !data.schemeName || data.schemeName.trim().length === 0) {
    errors.schemeName = 'This field is required.';
  }
  if (data.schemeName.trim().length < 2) {
    errors.schemeName = 'Group name must be greater than two characters.';
  }
  if (data.description === '' || !data.description || data.description.trim().length === 0) {
    errors.description = 'This field is required.';
  }
  if (data.description.trim().length < 2) {
    errors.description = 'Description must be greater than two characters.';
  }
  if (data.amount === '' || !data.amount || data.amount.trim().length === 0) {
    errors.amount = 'This field is required.';
  }
  if (isNaN(data.amount)) {
    errors.amount = 'Invalid input.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const groupContributorySchemeFour = (data) => {
  const errors = {};
  if (data.contributionInterval === '' || !data.contributionInterval || data.contributionInterval.trim().length === 0) {
    errors.contributionInterval = 'This field is required.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const groupContributorySchemeThree = (data) => {
  const errors = {};
  if (data.contributionInterval <= 0) {
    errors.contributionInterval = 'This field is required.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const groupContributoryEmailInput = (data) => {
  const errors = {};
  const userEmail = data.email.trim().toLowerCase();
  const { contributors } = data;
  contributors.map((mail) => {
    if (mail.email === userEmail) {
      errors.email = 'You cant enter the same email twice.';
    }
    return null;
  });

  if (userEmail && !validator.isEmail(userEmail)) {
    errors.email = 'Invalid Email Input.';
  }

  if (userEmail === '' || !userEmail || userEmail.trim().length === 0) {
    errors.email = 'This field is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const groupFundingSourceCard = (data) => {
  const errors = {};
  if (data.creatorCardId === '' || !data.creatorCardId || data.creatorCardId.trim().length === 0) {
    errors.creatorCardId = 'You are yet to choose a funding source.';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const validateDuration = (data) => {
  const errors = {};
  if (data.duration === '' || !data.duration || data.duration.trim().length === 0) {
    errors.duration = 'This field is required.';
  }
  if (data.savingsInterval <= 0) {
    errors.savingsInterval = 'This field is required.';
  }
  if (data.savingsInterval === '7') {
    if (data.savingsDay < 1) {
      errors.savingsDay = 'Please pick a weekday.';
    }
  }

  if (data.savingsInterval === '30') {
    if (data.savingsDay < 1) {
      errors.savingsDay = 'Please pick a date in the month';
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export {
  enterSavingDetails,
  validateUserInput,
  groupSavingValidateInput,
  groupSavingInputValidateFront,
  fundingSourceCard,
  destinationAccount,
  groupSavingsEmailInput,
  groupContributorySchemeOne,
  groupContributorySchemeThree,
  groupContributorySchemeFour,
  validateDuration,
  validateStartDate,
  groupContributoryEmailInput,
  groupFundingSourceCard
};
