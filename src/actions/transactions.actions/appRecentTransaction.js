import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_APP_RECENT_TRANSACTION } from '../types';
import logoutAction from '../auth.actions/logout.action';

const getAppRecentTransaction = transact => ({
  type: GET_APP_RECENT_TRANSACTION,
  transact
});

const inAppRecentTransaction = () => (dispatch) => {
  const token = Cookie.get('jwtToken');
  if (token === undefined) {
    dispatch(logoutAction());
    window.location.href = '/';
  }
  const decodeToken = jwt.decode(token);
  const { customerId } = decodeToken;
  return axios.post(`${config.apiUrl}${routes.RECENTTRANSACT}`,
    {
      customerId: Number(customerId)
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
    const { data } = response;
    dispatch(getAppRecentTransaction(data));
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

export default inAppRecentTransaction;
