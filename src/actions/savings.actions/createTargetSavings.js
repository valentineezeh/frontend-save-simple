import axios from 'axios';
import Cookie from 'cookies-js';
import alertify from 'alertifyjs';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  CREATE_TARGET_SAVINGS,
  CREATE_TARGET_SAVINGS_ERROR,
  IS_LOADING,
  DELETE_TARGET_SAVINGS_ERROR
} from '../types';
import logoutAction from '../auth.actions/logout.action';

const postTargetSavings = targetSaving => ({
  type: CREATE_TARGET_SAVINGS,
  targetSaving
});

const postTargetSavingsError = error => ({
  type: CREATE_TARGET_SAVINGS_ERROR,
  error
});

export const deletePostTargetSavingsError = () => ({
  type: DELETE_TARGET_SAVINGS_ERROR
});

const isLoading = () => ({
  type: IS_LOADING
});

const createFixedTargetSavings = (fixedTargetDetails, history) => (dispatch) => {
  dispatch(isLoading());
  const token = Cookie.get('jwtToken');
  return axios.post(`${config.apiUrl}${routes.CREATEFIXEDSAVINGS}`, fixedTargetDetails, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    dispatch(isLoading());
    const { data } = response;
    dispatch(postTargetSavings(data));
    if (!data.isSuccessful) {
      dispatch(postTargetSavingsError(data.responseMessage));
    } else {
      alertify
        .alert(`Your saving plans for ₦${fixedTargetDetails.amount} was a success. You will be debitted at the stated intervals.`, () => {
          alertify.success('OK');
        }).setHeader('<em style="color: green; font-size: 18px; font-weight: bold;"> Success!!! </em> ');
      return history.push('/user-dashboard');
    }
  }).catch((error) => {
    dispatch(isLoading());
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    if (error.response.status === 401) {
      const { status } = error.response;
      dispatch(logoutAction(status));
    }
    const { data } = error.response;
    dispatch(postTargetSavingsError(data.responseMessage));
    toastr.error(data.responseMessage);
    throw error;
  });
};

export default createFixedTargetSavings;
