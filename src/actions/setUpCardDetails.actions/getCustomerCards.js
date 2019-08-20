import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_CUSTOMER_CARDS } from '../types';
import logoutAction from '../auth.actions/logout.action';

const getCards = cards => ({
  type: GET_CUSTOMER_CARDS,
  cards
});

const getCustomerCards = () => (dispatch) => {
  const token = Cookie.get('jwtToken');
  const decodeToken = jwt.decode(token);
  const { customerId } = decodeToken;
  return axios.post(`${config.apiUrl}${routes.GETCUSTOMERCARDS}`,
    {
      customerId: Number(customerId)
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
    const { data } = response;
    dispatch(getCards(data));
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

export default getCustomerCards;
