import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_WALLET_BALANCE } from '../types';
import logoutAction from '../auth.actions/logout.action';

const walletBalance = balance => ({
  type: GET_WALLET_BALANCE,
  balance
});

const getWalletBalance = () => (dispatch) => {
  const token = Cookie.get('jwtToken');
  const decodeUser = jwt.decode(token);
  const { customerId } = decodeUser;
  const customerDetails = {
    customerId: Number(customerId)
  };
  return axios.post(`${config.apiUrl}${routes.WALLETBALANCE}`,
    customerDetails,
    {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
    const { data } = response;
    dispatch(walletBalance(data));
  }).catch((error) => {
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    if (error.response.status === 401) {
      const { status } = error.response;
      dispatch(logoutAction(status));
    }
    throw error;
  });
};

export default getWalletBalance;
