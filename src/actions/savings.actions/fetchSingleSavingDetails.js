import axios from 'axios';
import Cookie from 'cookies-js';
import { SINGLE_SAVING_DETAILS } from '../types';
import config from '../../config/index';
import routes from '../../constants/routes';
import logoutAction from '../auth.actions/logout.action';

const singleSavingDetails = savingDetails => ({
  type: SINGLE_SAVING_DETAILS,
  savingDetails
});

const fetchSingleSavingDetails = savingId => (dispatch) => {
  const token = Cookie.get('jwtToken');
  return axios.post(
    `${config.apiUrl}${routes.GETSINGLESAVING}`,
    savingId,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  ).then((response) => {
    const { data } = response;
    dispatch(singleSavingDetails(data));
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

export default fetchSingleSavingDetails;
