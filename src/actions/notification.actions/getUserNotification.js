import axios from 'axios';
import Cookie from 'cookies-js';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_USER_NOTIFICATION } from '../types';
import logoutAction from '../auth.actions/logout.action';

const getUserNotification = allNotification => ({
  type: GET_USER_NOTIFICATION,
  allNotification
});

const fetchUserNotification = userEmail => (dispatch) => {
  const token = Cookie.get('jwtToken');
  return axios.post(`${config.apiUrl}${routes.GETUSERNOTIFICATION}`, userEmail, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    const { notifications } = response.data;
    dispatch(getUserNotification(notifications));
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

export default fetchUserNotification;
