import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_SAVING_PLANS } from '../types';
import logoutAction from '../auth.actions/logout.action';

const getSavingPlans = savingPlans => ({
  type: GET_SAVING_PLANS,
  savingPlans
});

const fetchSavingPlans = () => (dispatch) => {
  const token = Cookie.get('jwtToken');
  if (token === undefined) {
    dispatch(logoutAction());
    window.location.href = '/';
  }
  const decodeUser = jwt.decode(token);
  const { customerId } = decodeUser;

  const customerDetails = {
    customerId: Number(customerId)
  };
  return axios.post(
    `${config.apiUrl}${routes.GETSAVINGPLANS}`,
    customerDetails,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  ).then((response) => {
    const { data } = response;
    dispatch(getSavingPlans(data));
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

export default fetchSavingPlans;
