import axios from 'axios';
import Cookie from 'cookies-js';
import alertify from 'alertifyjs';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  WALLET_TOP_UP,
  WALLET_TOP_UP_ERROR,
  DELETE_WALLET_TOP_UP_ERROR,
  TOP_WALLET_IS_LOADING
} from '../types';
import logoutAction from '../auth.actions/logout.action';

const walletTopUp = topWallet => ({
  type: WALLET_TOP_UP,
  topWallet
});

const walletTopUpError = error => ({
  type: WALLET_TOP_UP_ERROR,
  error
});

export const deleteWalletTopUpError = () => ({
  type: DELETE_WALLET_TOP_UP_ERROR
});

const topWalletIsLoading = () => ({
  type: TOP_WALLET_IS_LOADING
});

const topUpWallet = cardDetails => (dispatch) => {
  dispatch(topWalletIsLoading());
  const walletTopUpDetails = cardDetails;
  const token = Cookie.get('jwtToken');
  return axios.post(`${config.apiUrl}${routes.WALLETTOPUP}`,
    walletTopUpDetails,
    {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
    dispatch(topWalletIsLoading());
    const { data } = response;
    dispatch(walletTopUp(data));
    Cookie.expire('ref');
    Cookie.expire('actionType');
    Cookie.expire('amt');
    Cookie.expire('fundingSource');
    if (data.isSuccessful === true) {
      alertify
        .alert(`Your Wallet top up of ₦${cardDetails.amount} was Successful.`, () => {
          alertify.success('OK');
        }).setHeader('<em style="color: green; font-size: 18px; font-weight: bold;"> Success!!! </em> ');
      window.location.href = '/user-dashboard';
    } else {
      const message = data.responseMessage;
      dispatch(walletTopUpError(message));
    }
  }).catch((error) => {
    dispatch(topWalletIsLoading());
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    if (error.response.status === 401) {
      const { status } = error.response;
      dispatch(logoutAction(status));
    }
    const message = 'Kindly select a card or click add card.';
    dispatch(walletTopUpError(message));
    throw error;
  });
};

export default topUpWallet;
