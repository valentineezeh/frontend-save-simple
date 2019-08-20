import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_CUSTOMER_ACCOUNT } from '../types';
import logoutAction from '../auth.actions/logout.action';

const getAccount = account => ({
  type: GET_CUSTOMER_ACCOUNT,
  account
});

const getCustomerAccounts = () => (dispatch) => {
  const token = Cookie.get('jwtToken');
  const decodeToken = jwt.decode(token);
  const { customerId } = decodeToken;
  return axios.post(`${config.apiUrl}${routes.GETCUSTOMERACCT}`,
    {
      customerId: Number(customerId)
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
    const { data } = response;
    dispatch(getAccount(data));
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

export default getCustomerAccounts;
