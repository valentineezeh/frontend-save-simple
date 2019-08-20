import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import alertify from 'alertifyjs';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  TREAT_GROUP_NOTIFICATION_INVITATION,
  TREAT_GROUP_INVITATION_LOADING
} from '../types';
import logoutAction from '../auth.actions/logout.action';

const treatGroupInvitation = GroupInvitation => ({
  type: TREAT_GROUP_NOTIFICATION_INVITATION,
  GroupInvitation
});

const treatGroupLoading = () => ({
  type: TREAT_GROUP_INVITATION_LOADING
});

const postTreatGroupNotification = (inviteDetails, history) => (dispatch) => {
  dispatch(treatGroupLoading());
  const token = Cookie.get('jwtToken');
  const decodeUser = jwt.decode(token);
  const { customerId } = decodeUser;
  const groupInvitationDetails = {
    ...inviteDetails,
    customerId: Number(customerId)
  };
  return axios.post(`${config.apiUrl}${routes.TREATGROUPINVITATION}`, groupInvitationDetails, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    dispatch(treatGroupLoading());
    const { data } = response;
    dispatch(treatGroupInvitation(data));
    if (!inviteDetails.isAccepted) {
      const message = 'Success! You have decline to join this Group.';
      alertify.alert(message, () => {
        alertify.success('OK').setHeader('<em style="color: green; font-size: 18px; font-weight: bold;"> Success!!! </em> ');
      });
      window.location.href = '/user-dashboard';
    }
    if (inviteDetails.isAccepted) {
      const message = 'Success! You have accepted to join this Group.';
      alertify.alert(message, () => {
        alertify.success('OK').setHeader('<em style="color: green; font-size: 18px; font-weight: bold;"> Success!!! </em> ');
      });
      window.location.href = '/user-dashboard';
    }
  }).catch((error) => {
    dispatch(treatGroupLoading());
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

export default postTreatGroupNotification;
