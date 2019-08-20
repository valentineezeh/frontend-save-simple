import axios from 'axios';
import toastr from 'toastr';
import Cookie from 'cookies-js';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  COMPLETE_REGISTRATION,
  SET_COMPLETE_REGISTRATION_ERROR,
  DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE,
  IS_LOADING
} from '../types';

export const completeUserRegistration = completeRegistration => ({
  type: COMPLETE_REGISTRATION,
  completeRegistration
});

export const setCompleteRegistartionError = error => ({
  type: SET_COMPLETE_REGISTRATION_ERROR,
  error
});

export const deleteCompleteRegistrationErrorMessages = () => ({
  type: DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE
});

const isLoading = () => ({
  type: IS_LOADING
});

const CompleteUserRegistration = otpDetails => (dispatch) => {
  dispatch(isLoading());
  return axios.post(`${config.apiUrl}${routes.COMPLETEUSERREGISTRATION}`, otpDetails).then((response) => {
    const { token } = response.headers;
    toastr.success('Success! Your Registration is now complete. ');
    Cookie.set('jwtToken', token);
    dispatch(completeUserRegistration(response));
  }).catch((error) => {
    dispatch(isLoading());
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    const { responseMessage } = error.response.data;
    dispatch(setCompleteRegistartionError(responseMessage));
  });
};

export default CompleteUserRegistration;
