import axios from 'axios';
import Cookie from 'cookies-js';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_ALL_BANKS } from '../types';
import logoutAction from '../auth.actions/logout.action';


export const getAllBanks = allBanks => ({
  type: GET_ALL_BANKS,
  allBanks
});

const getAllBanksRequest = () => (dispatch) => {
  const token = Cookie.get('jwtToken');
  return axios.get(`${config.apiUrl}${routes.GETALLBANK}`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    const { banks } = response.data;
    dispatch(getAllBanks(banks));
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

export default getAllBanksRequest;
