import axios from 'axios';
import Cookie from 'cookies-js';
import alertify from 'alertifyjs';
import '../../../node_modules/alertifyjs/build/css/alertify.css';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  CREATE_GROUP_TARGET_SAVINGS,
  CREATE_GROUP_TARGET_SAVINGS_ERROR,
  GROUP_TARGET_IS_LOADING,
  DELETE_GROUP_TARGET_SAVINGS_ERROR
} from '../types';
import logoutAction from '../auth.actions/logout.action';

const postGroupTargetSavings = groupTargetSaving => ({
  type: CREATE_GROUP_TARGET_SAVINGS,
  groupTargetSaving
});

const postGroupTargetSavingsError = error => ({
  type: CREATE_GROUP_TARGET_SAVINGS_ERROR,
  error
});

export const deleteGroupTargetSavingsError = () => ({
  type: DELETE_GROUP_TARGET_SAVINGS_ERROR
});

const groupTargetSavingsIsLoading = () => ({
  type: GROUP_TARGET_IS_LOADING
});

const createGroupTargetSavings = groupTargetSavingDetails => (dispatch) => {
  dispatch(groupTargetSavingsIsLoading());
  const token = Cookie.get('jwtToken');
  return axios.post(`${config.apiUrl}${routes.CREATEGROUPTARGETSAVINGS}`, groupTargetSavingDetails, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    dispatch(groupTargetSavingsIsLoading());
    const { data } = response;
    dispatch(postGroupTargetSavings(data));
    alertify
      .alert(`Congratulations!! You have succeded in creating a Group Target Saving plan for ₦${groupTargetSavingDetails.targetAmount}.`, () => {
        alertify.success('OK');
      }).setHeader('<em style="color: green; font-size: 18px; font-weight: bold;"> Success!!! </em> ');
  }).catch((error) => {
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    if (error.response.status === 401) {
      const { status } = error.response;
      dispatch(logoutAction(status));
    }
    dispatch(groupTargetSavingsIsLoading());
    const { data } = error.response;
    dispatch(postGroupTargetSavingsError(data));
  });
};

export default createGroupTargetSavings;
