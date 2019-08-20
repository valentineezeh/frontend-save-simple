import axios from 'axios';
import {
  ADD_CARD_DETAILS_OTP_SUCCESS,
  ADD_CARD_DETAILS_OTP_ERROR,
  DELETE_ADD_CARD_DETAILS_OTP_ERROR,
  ADD_CARD_OTP_IS_LOADING
} from '../types';
import getRecentTransaction from '../transactions.actions/recentTransaction';
import topUpWallet from '../wallet.actions/walletTopUp';
import createFixedTargetSavings from '../savings.actions/createTargetSavings';
import logoutAction from '../auth.actions/logout.action';
import buyMoneyMarketMutualFund from '../mutualFunds.actions/moneyMarketMutualFund';

const addCardDetailsOtpSuccess = otpDetails => ({
  type: ADD_CARD_DETAILS_OTP_SUCCESS,
  otpDetails
});

const addCardDetailsOtpError = error => ({
  type: ADD_CARD_DETAILS_OTP_ERROR,
  error
});

export const deleteAddCardOtpError = () => ({
  type: DELETE_ADD_CARD_DETAILS_OTP_ERROR,
});

const addCardOtpIsLoading = () => ({
  type: ADD_CARD_OTP_IS_LOADING
});

const postCardDetailsOtp = (otpDetails, history) => (dispatch) => {
  dispatch(addCardOtpIsLoading());

  const {
    customerId,
    actionType,
    action,
    saveCardToken,
    amount,
    fundingSource,
    interestType,
    maturityDate,
    isEthical,
    title,
    description,
    value,
    ref,
    accountId,
    mutualFundType
  } = otpDetails;
  const continueCardDetails = {
    value,
    action,
    ref,
    fingerprint: ''
  };
  return axios.post(`${process.env.REACT_APP_INNSTA_PAY_URL}/card/charge/continue`,
    continueCardDetails,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_INNSTA_PAY_TOKEN}`
      }
    }).then((response) => {
    dispatch(addCardOtpIsLoading());
    const { data } = response;
    dispatch(addCardDetailsOtpSuccess(data));

    const fundWalletDetails = {
      amount,
      customerId,
      actionType,
      action,
      saveCardToken,
      fundingSource
    };

    const addNewCardObject = {
      amount,
      customerId,
      actionType,
      action,
      saveCardToken,
      fundingSource
    };

    const FixedSavingsObject = {
      customerId,
      amount,
      fundingSource,
      saveCardToken,
      interestType,
      isEthical,
      maturityDate,
      actionType,
      title,
      description
    };

    const EthicalSavingsObject = {
      customerId,
      amount,
      fundingSource,
      saveCardToken,
      interestType,
      isEthical,
      maturityDate,
      actionType,
      title,
      description
    };

    const MutualFundPayload = {
      customerId,
      amount,
      accountId,
      fundingSource,
      saveCardToken,
      mutualFundType,
      actionType
    };

    // Fund wallet on save card
    if (otpDetails.actionType === 'wallet' && fundWalletDetails.saveCardToken === 'true') {
      dispatch(getRecentTransaction(fundWalletDetails, history, FixedSavingsObject));
    }
    // fund wallet while not saving card
    if (otpDetails.actionType === 'wallet' && fundWalletDetails.saveCardToken === 'false') {
      dispatch(topUpWallet(fundWalletDetails, history));
    }
    // create fixed savings on save card
    if (FixedSavingsObject.actionType === 'fixedSavings' && FixedSavingsObject.saveCardToken) {
      dispatch(getRecentTransaction(fundWalletDetails, history, FixedSavingsObject));
    }
    // Create fixed saving without saving card
    if (FixedSavingsObject.actionType === 'fixedSavings' && !FixedSavingsObject.saveCardToken) {
      dispatch(createFixedTargetSavings(FixedSavingsObject, history));
    }

    // Add new card
    if (addNewCardObject.actionType === 'addNewCard') {
      dispatch(getRecentTransaction(addNewCardObject, history));
    }

    // Ethical Savings on Save card
    if (EthicalSavingsObject.actionType === 'ethicalSavings' && EthicalSavingsObject.saveCardToken) {
      dispatch(getRecentTransaction(fundWalletDetails, history, EthicalSavingsObject));
    }

    // Ethical Savings without saving card
    if (EthicalSavingsObject.actionType === 'ethicalSavings' && !EthicalSavingsObject.saveCardToken) {
      dispatch(createFixedTargetSavings(EthicalSavingsObject, history));
    }

    // Mutual Fund
    if (MutualFundPayload.actionType === 'mutualFund' && MutualFundPayload.saveCardToken === 'true') {
      dispatch(getRecentTransaction(fundWalletDetails, history, EthicalSavingsObject, MutualFundPayload));
    }

    if (MutualFundPayload.actionType === 'mutualFund' && !MutualFundPayload.saveCardToken) {
      dispatch(buyMoneyMarketMutualFund(MutualFundPayload, history));
    }
  }).catch((error) => {
    dispatch(addCardOtpIsLoading());
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    if (error.response.status === 401) {
      const { status } = error.response;
      dispatch(logoutAction(status));
    }
    const { message } = error.response.data;
    dispatch(addCardDetailsOtpError(message));
    return error;
  });
};

export default postCardDetailsOtp;
