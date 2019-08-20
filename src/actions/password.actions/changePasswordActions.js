import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import { CHANGE_PASSWORD, SET_CHANGE_PASSWORD_ERROR, DELETE_CHANGE_PASSWORD_ERROR } from '../types';
import logoutAction from '../auth.actions/logout.action';

export const changePassword = PasswordChange => ({
  type: CHANGE_PASSWORD,
  PasswordChange
});

export const setChangePasswordError = error => ({
  type: SET_CHANGE_PASSWORD_ERROR,
  error
});

export const deleteChangePasswordError = () => ({
  type: DELETE_CHANGE_PASSWORD_ERROR
});

const userChangePassword = changePasswordDetails => (dispatch) => {
  return axios.post(`${config.apiUrl}${routes.CHANGEPASSWORD}`, changePasswordDetails).then((response) => {
    const { responseMessage } = response.data;
    dispatch(changePassword(response.data));
    toastr.success(responseMessage);
  }).catch((error) => {
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    if (error.response.status === 401) {
      const { status } = error.response;
      dispatch(logoutAction(status));
    }
    const { responseMessage } = error.response.data;
    dispatch(setChangePasswordError(responseMessage));
  });
};

export default userChangePassword;
