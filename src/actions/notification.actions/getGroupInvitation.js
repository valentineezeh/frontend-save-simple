import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_GROUP_INVITATION, GET_GROUP_INVITATION_LOADING } from '../types';
import logoutAction from '../auth.actions/logout.action';

const getGroupInvitation = groupInvitation => ({
  type: GET_GROUP_INVITATION,
  groupInvitation
});

const getGroupInvitationIsLoading = () => ({
  type: GET_GROUP_INVITATION_LOADING
});

const fetchGroupInvitation = planId => (dispatch) => {
  dispatch(getGroupInvitationIsLoading());
  const token = Cookie.get('jwtToken');
  const decodeUser = jwt.decode(token);
  const { email } = decodeUser;
  const userEmail = {
    email,
    targetSavingsId: planId
  };
  return axios.post(`${config.apiUrl}${routes.GETGROUPNOTIFICATION}`, userEmail, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    dispatch(getGroupInvitationIsLoading());
    const { groupTargetSavingsInvitation } = response.data;
    dispatch(getGroupInvitation(groupTargetSavingsInvitation));
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

export default fetchGroupInvitation;
