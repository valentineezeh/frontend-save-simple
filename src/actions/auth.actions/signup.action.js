import axios from 'axios';
import Cookie from 'cookies-js';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  SET_CURRENT_USER,
  SIGN_UP_ERRORS,
  DELETE_ERROR_MESSAGE,
  IS_LOADING
} from '../types';

/**
   * Action to Register a user and return a JWT token
   * @param {*} user - Response object
   * @returns {user} setCurrentUser - to store
   */
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

const isLoading = () => ({
  type: IS_LOADING
});

export const signUpError = error => ({
  type: SIGN_UP_ERRORS,
  error
});

export const deleteErrorMessage = () => ({
  type: DELETE_ERROR_MESSAGE,
});

/**
   * Register a user and return a JWT token
   * @param {*} userData - Response object
   * @param {*} history - Next function
   * @param {*} done - Next function
   * @returns {token} token - JWT token
   */
export const userSignUpRequest = userData => (dispatch) => {
  dispatch(isLoading());
  return axios.post(`${config.apiUrl}${routes.SIGNUP}`, userData).then(
    (response) => {
      const {
        otpRef,
        customerId,
        statusCode,
        responseMessage
      } = response.data;
      const getBvn = 'null';
      Cookie.set('otpRef', otpRef);
      Cookie.set('customerId', customerId);
      Cookie.set('getB', getBvn);
      if (statusCode === 202) {
        toastr.info('Kindly check your mail for a verification otp.');
        return dispatch(signUpError(responseMessage));
      }
      dispatch(setCurrentUser(response.data));
    }
  )
    .catch((error) => {
      dispatch(isLoading());
      if (error.response === undefined) {
        window.location.href = '/error';
      }
      const { responseMessage } = error.response.data;
      dispatch(signUpError(responseMessage));
      throw error;
    });
};
