import axios from 'axios';
import Cookie from 'cookies-js';
import {
  ADD_CARD_DETAILS_SUCCESS,
  ADD_CARD_DETAILS_ERROR,
  DELETE_ADD_CARD_DETAILS_ERROR,
  ADD_IS_LOADING
} from '../types';
import logoutAction from '../auth.actions/logout.action';

export const addCardDetailsSuccess = addCardDetails => ({
  type: ADD_CARD_DETAILS_SUCCESS,
  addCardDetails
});

export const addCardDetailsError = error => ({
  type: ADD_CARD_DETAILS_ERROR,
  error
});

export const deleteAddCardDetailError = () => ({
  type: DELETE_ADD_CARD_DETAILS_ERROR
});

const addCardisLoading = () => ({
  type: ADD_IS_LOADING
});

const addCardDetails = (cardDetails, history) => (dispatch) => {
  dispatch(addCardisLoading());
  return axios.post(`${process.env.REACT_APP_INNSTA_PAY_URL}/card/charge`, cardDetails, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_INNSTA_PAY_TOKEN}`
    }
  }).then((response) => {
    dispatch(addCardisLoading());
    Cookie.set('ref', response.data.ref);
    const mutualFundActionType = Cookie.get('actionType');
    const { action } = response.data;
    const {
      saveCardToken,
      title,
      description,
      interestType,
      maturityDate,
      isEthical,
      customerId,
      fundingSource,
      amount,
      actionType,
      mutualFundType,
      accountId
    } = cardDetails;

    // Wallet payload from add card
    const fundWalletDetails = {
      amount,
      customerId,
      fundingSource,
      actionType,
      saveCardToken
    };
    // Fixed Savings payload
    const FixedSavingsObject = {
      saveCardToken,
      title,
      description,
      interestType,
      maturityDate,
      isEthical,
      customerId,
      fundingSource,
      amount,
      actionType
    };

    // Ethical Savings Payload
    const EthicalSavingsObject = {
      saveCardToken,
      title,
      description,
      interestType,
      maturityDate,
      isEthical,
      customerId,
      fundingSource,
      amount,
      actionType
    };

    // Mutual fund payload
    const MutualFunds = {
      saveCardToken,
      amount,
      mutualFundType,
      accountId,
      customerId,
      fundingSource,
      actionType
    };

    if (action === 'otp' && fundWalletDetails.actionType === 'wallet' && fundWalletDetails.saveCardToken === 'true') {
      return history.push('/add-card-otp');
    }
    if (action === 'otp' && fundWalletDetails.actionType === 'wallet' && !fundWalletDetails.saveCardToken) {
      return history.push('/add-card-otp');
    }
    if (action === 'otp' && FixedSavingsObject.actionType === 'fixedSavings' && FixedSavingsObject.saveCardToken === 'true') {
      return history.push('/add-card-otp');
    }
    if (action === 'otp' && FixedSavingsObject.actionType === 'fixedSavings' && !FixedSavingsObject.saveCardToken) {
      return history.push('/add-card-otp');
    }
    if (action === 'otp' && FixedSavingsObject.actionType !== 'fixedSavings' && fundWalletDetails.actionType !== 'wallet' && mutualFundActionType !== 'mutualFund' && cardDetails.saveCardToken === 'true') {
      return history.push('/add-card-otp');
    }
    // On ethical savings
    if (action === 'otp' && EthicalSavingsObject.actionType === 'ethicalSavings' && EthicalSavingsObject.saveCardToken === 'true') {
      return history.push('/add-card-otp');
    }
    if (action === 'otp' && EthicalSavingsObject.actionType === 'ethicalSavings' && !EthicalSavingsObject.saveCardToken) {
      return history.push('/add-card-otp');
    }

    // on buy Mutual fund
    if (action === 'otp' && MutualFunds.actionType === 'mutualFund') {
      return history.push('/add-card-otp');
    }
  }).catch((error) => {
    dispatch(addCardisLoading());
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    if (error.response.status === 401) {
      const { status } = error.response;
      dispatch(logoutAction(status));
    }
    const { data } = error.response;
    dispatch(addCardDetailsError(data));
    throw error;
  });
};

export default addCardDetails;
