import axios from 'axios';
import Cookie from 'cookies-js';
import { SINGLE_FIXED_SAVING_DETAILS } from '../types';
import config from '../../config/index';
import routes from '../../constants/routes';
import logoutAction from '../auth.actions/logout.action';

const singleFixedSavingDetails = savingFixedDetails => ({
  type: SINGLE_FIXED_SAVING_DETAILS,
  savingFixedDetails
});

const fetchSingleFixedSavingDetails = savingId => (dispatch) => {
  const token = Cookie.get('jwtToken');
  const fixedSavingDetails = {
    savingsId: Number(savingId)
  };
  return axios.post(
    `${config.apiUrl}${routes.GETSINGLEFIXEDDETAILS}`,
    fixedSavingDetails,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  ).then((response) => {
    const { data } = response;
    dispatch(singleFixedSavingDetails(data));
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

export default fetchSingleFixedSavingDetails;
