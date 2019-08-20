import axios from 'axios';
import toastr from 'toastr';
import Cookie from 'cookies-js';
import config from '../../config/index';
import routes from '../../constants/routes';
import { RESET_PASSWORD, SET_RESET_PASSWORD_ERROR, DELETE_RESET_PASSWORD_ERROR } from '../types';


export const resetPassword = PasswordReset => ({
  type: RESET_PASSWORD,
  PasswordReset
});

export const setResetPasswordError = error => ({
  type: SET_RESET_PASSWORD_ERROR,
  error
});

export const deleteResetPasswordError = () => ({
  type: DELETE_RESET_PASSWORD_ERROR
});

const userResetPassword = userDetails => (dispatch) => {
  const resetPasswordDetails = userDetails;
  return axios.post(`${config.apiUrl}${routes.RESETPASSWORD}`, { email: resetPasswordDetails }).then((response) => {
    const { responseMessage } = response.data;
    Cookie.set('email', resetPasswordDetails);
    dispatch(resetPassword(response.data));
    toastr.success(responseMessage);
  }).catch((error) => {
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    const { responseMessage } = error.response.data;
    dispatch(setResetPasswordError(responseMessage));
  });
};

export default userResetPassword;
