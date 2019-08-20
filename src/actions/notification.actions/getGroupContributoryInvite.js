import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_GROUP_CONTRIBUTORY_INVITATION } from '../types';
import logoutAction from '../auth.actions/logout.action';

const getGroupContributoryInvitation = groupContributeInvitation => ({
  type: GET_GROUP_CONTRIBUTORY_INVITATION,
  groupContributeInvitation
});

const fetchGroupContributeInvitation = id => (dispatch) => {
  const token = Cookie.get('jwtToken');
  const decodeUser = jwt.decode(token);
  const { email } = decodeUser;
  const groupDetails = {
    email,
    schemeId: id
  };
  return axios.post(`${config.apiUrl}${routes.GETGROUPCONTRIBUTEINVITE}`, groupDetails, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    const { data } = response;
    dispatch(getGroupContributoryInvitation(data));
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

export default fetchGroupContributeInvitation;
