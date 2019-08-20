import axios from 'axios';
import Cookie from 'cookies-js';
import { GET_RECENT_TRANSACTIONS, IS_LOADING } from '../types';
import topUpWallet from '../wallet.actions/walletTopUp';
import createFixedTargetSavings from '../savings.actions/createTargetSavings';
import buyMoneyMarketMutualFund from '../mutualFunds.actions/moneyMarketMutualFund';

export const RecentTransactions = recentTransact => ({
  type: GET_RECENT_TRANSACTIONS,
  recentTransact
});

const isLoading = () => ({
  type: IS_LOADING
});

const getRecentTransaction = (fundWalletDetails, history, FixedSavingsObject, MutualFundPayload) => (dispatch) => {
  const ref = Cookie.get('ref');
  dispatch(isLoading());
  return axios.get(`${process.env.REACT_APP_INNSTA_PAY_URL}/transactions/${ref}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_INNSTA_PAY_TOKEN}`
    }
  }).then((response) => {
    dispatch(isLoading());
    const { creditCard } = response.data.data;

    // Remove variables stored in cookie
    Cookie.expire('ref');
    Cookie.expire('actionType');
    Cookie.expire('amt');
    Cookie.expire('fundingSource');

    // Wallet on save Card payload
    const walletPayloadOnSaveCard = {
      ...fundWalletDetails,
      cardToken: creditCard.token,
      lastFourDigit: creditCard.last4,
      cardType: creditCard.brand,
      cardBin: creditCard.bin,
      expiry: `${creditCard.expiryMonth}/${creditCard.expiryYear}`,
    };

    // Add new Card payload
    const addNewcardPayLoad = {
      ...fundWalletDetails,
      cardToken: creditCard.token,
      lastFourDigit: creditCard.last4,
      cardType: creditCard.brand,
      cardBin: creditCard.bin,
      expiry: `${creditCard.expiryMonth}/${creditCard.expiryYear}`,
    }


    // Fixed Savings details
    const fixedSavingsPayload = {
      ...FixedSavingsObject,
      cardToken: creditCard.token,
      lastFourDigit: creditCard.last4,
      cardType: creditCard.brand,
      cardBin: creditCard.bin,
      expiry: `${creditCard.expiryMonth}/${creditCard.expiryYear}`,
    };

    //  Ethical Savings details
    const ethicalSavingsPayload = {
      ...FixedSavingsObject,
      cardToken: creditCard.token,
      lastFourDigit: creditCard.last4,
      cardType: creditCard.brand,
      cardBin: creditCard.bin,
      expiry: `${creditCard.expiryMonth}/${creditCard.expiryYear}`,
    };

    // Mutual Fund Payload
    const mutualFundPayload = {
      ...MutualFundPayload,
      cardToken: creditCard.token,
      lastFourDigit: creditCard.last4,
      cardType: creditCard.brand,
      cardBin: creditCard.bin,
      expiry: `${creditCard.expiryMonth}/${creditCard.expiryYear}`,
    }
    

    dispatch(RecentTransactions(response.data.data));
    if (walletPayloadOnSaveCard.saveCardToken && walletPayloadOnSaveCard.actionType === 'wallet') {
      dispatch(topUpWallet(walletPayloadOnSaveCard, history));
    }
    if (fixedSavingsPayload.saveCardToken && fixedSavingsPayload.actionType === 'fixedSavings') {
      dispatch(createFixedTargetSavings(fixedSavingsPayload, history));
    }
    if (addNewcardPayLoad.actionType === 'addNewCard') {
      dispatch(topUpWallet(addNewcardPayLoad, history));
    }
    if (ethicalSavingsPayload.actionType === 'ethicalSavings') {
      dispatch(createFixedTargetSavings(ethicalSavingsPayload, history));
    }
    if (mutualFundPayload.actionType === 'mutualFund') {
      dispatch(buyMoneyMarketMutualFund(mutualFundPayload, history));
    }
  }).catch((error) => {
    throw error;
  });
};

export default getRecentTransaction;
