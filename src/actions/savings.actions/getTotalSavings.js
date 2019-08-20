import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_TOTAL_SAVINGS } from '../types';
import logoutAction from '../auth.actions/logout.action';

export const getTotalSavings = allSavings => ({
  type: GET_TOTAL_SAVINGS,
  allSavings
});

const getTotalSavingsRequest = () => (dispatch) => {
  const token = Cookie.get('jwtToken');
  const decodeUser = jwt.decode(token);
  const { customerId } = decodeUser;
  const userDetails = {
    customerId: Number(customerId)
  };
  return axios.post(`${config.apiUrl}${routes.TOTALSAVINGS}`, userDetails,
    {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
    const { totalSavings } = response.data;
    dispatch(getTotalSavings(totalSavings));
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

export default getTotalSavingsRequest;
