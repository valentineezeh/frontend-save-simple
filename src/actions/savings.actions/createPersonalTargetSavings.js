import axios from 'axios';
import Cookie from 'cookies-js';
import alertify from 'alertifyjs';
import '../../../node_modules/alertifyjs/build/css/alertify.css';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  CREATE_PERSONAL_TARGET_SAVINGS,
  CREATE_PERSONAL_TARGET_SAVINGS_ERROR,
  IS_LOADING,
  DELETE_PERSONAL_TARGET_SAVINGS_ERROR
} from '../types';
import logoutAction from '../auth.actions/logout.action';

const postFixedSavings = fixedSaving => ({
  type: CREATE_PERSONAL_TARGET_SAVINGS,
  fixedSaving
});

const postFixedSavingsError = error => ({
  type: CREATE_PERSONAL_TARGET_SAVINGS_ERROR,
  error
});

export const deletePostPersonalTargetSavingsError = () => ({
  type: DELETE_PERSONAL_TARGET_SAVINGS_ERROR
});

const isLoading = () => ({
  type: IS_LOADING
});

const createPersonalTargetSavings = savingDetails => (dispatch) => {
  dispatch(isLoading());
  const fixedSavingDetails = savingDetails;
  const token = Cookie.get('jwtToken');
  return axios.post(`${config.apiUrl}${routes.CREATEPERSONALTARGETSAVINGS}`, fixedSavingDetails, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    dispatch(isLoading());
    const { data } = response;
    dispatch(postFixedSavings(data));
    alertify
      .alert(`Your personal fixed saving plans for ₦${fixedSavingDetails.targetAmount} was a success. You will be debitted at the stated intervals.`, () => {
        alertify.success('OK');
      }).setHeader('<em style="color: green; font-size: 18px; font-weight: bold;"> Success!!! </em> ');
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
    dispatch(postFixedSavingsError(data));
  });
};

export default createPersonalTargetSavings;