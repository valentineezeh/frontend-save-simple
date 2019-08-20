import axios from 'axios';
import Cookie from 'js-cookie';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  LOGIN_USER,
  SET_CURRENT_USER_ERROR,
  DELETE_ERROR_MESSAGE,
  DELETE_WARNING_MESSAGE,
  SET_WARNING_MESSAGE,
  IS_LOADING
} from '../types';

export const LoginCurrentUser = LoginUser => ({
  type: LOGIN_USER,
  LoginUser
});

const isLoading = () => ({
  type: IS_LOADING
});

export const setCurrentUserError = error => ({
  type: SET_CURRENT_USER_ERROR,
  error
});

export const deleteErrorMessages = () => ({
  type: DELETE_ERROR_MESSAGE
});

export const setWarningMessage = message => ({
  type: SET_WARNING_MESSAGE,
  message
});

export const deleteWarningMessages = () => ({
  type: DELETE_WARNING_MESSAGE,
});


const UserLoginRequest = LoginDetails => (dispatch) => {
  dispatch(isLoading());
  axios
    .post(`${config.apiUrl}${routes.SIGN_IN}`, LoginDetails)
    .then((response) => {
      dispatch(isLoading());
      const { token } = response.headers;
      const {
        bvn,
        firstname,
        isCardSetup,
        isAccountSetup
      } = response.data;
      const message = `Hi ${firstname}, You are yet to set up your card`;
      Cookie.set('getB', isCardSetup);
      Cookie.set('isA', isAccountSetup);
      Cookie.set('jwtToken', token);
      Cookie.set('action', 'login');
      Cookie.set('username', `${firstname}`);
      dispatch(LoginCurrentUser(response.data));
      if (bvn === null) {
        dispatch(setWarningMessage(message));
      }
    })
    .catch((error) => {
      dispatch(isLoading());
      if (error.response === undefined) {
        window.location.href = '/error';
      } else {
        const { responseMessage } = error.response.data;
        dispatch(setCurrentUserError(responseMessage));
      }

      throw error;
    });
};

export default UserLoginRequest;
