import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import alertify from 'alertifyjs';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  TREAT_GROUP_SCHEME_NOTIFICATION_INVITATION,
  TREAT_GROUP_SCHEME_INVITATION_LOADING
} from '../types';
import logoutAction from '../auth.actions/logout.action';

const treatGroupSchemeNotification = groupScheme => ({
  type: TREAT_GROUP_SCHEME_NOTIFICATION_INVITATION,
  groupScheme
});

const treatGroupSchemeLoading = () => ({
  type: TREAT_GROUP_SCHEME_INVITATION_LOADING
});

const postTreatGroupSchemeNotification = (inviteDetails, history) => (dispatch) => {
  dispatch(treatGroupSchemeLoading());
  const token = Cookie.get('jwtToken');
  const decodeUser = jwt.decode(token);
  const { customerId } = decodeUser;
  const groupSchemeInvitationDetails = {
    ...inviteDetails,
    customerId: Number(customerId)
  };
  return axios.post(`${config.apiUrl}${routes.TREATGROUPSCHEMEINVITE}`, groupSchemeInvitationDetails, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    dispatch(treatGroupSchemeLoading());
    const { data } = response;
    dispatch(treatGroupSchemeNotification(data));
    if (!data.isSuccessful) {
      const message = data.responseMessage;
      toastr.info(message);
    }
    if (data.isSuccessful) {
      const message = data.responseMessage;
      alertify.alert(message, () => {
        alertify.success('OK').setHeader('<em style="color: green; font-size: 18px; font-weight: bold;"> Success!!! </em> ');
      });
      return history.push('/user-dashboard');
    }
  }).catch((error) => {
    dispatch(treatGroupSchemeLoading());
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

export default postTreatGroupSchemeNotification;
