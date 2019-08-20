import axios from 'axios';
import Cookie from 'cookies-js';
import alertify from 'alertifyjs';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  CREATE_GROUP_CONTRIBUTORY_SAVINGS,
  CREATE_GROUP_CONTRIBUTORY_SAVINGS_ERROR,
  GROUP_CONTRIBUTORY_IS_LOADING,
  DELETE_GROUP_CONTRIBUTORY_SAVINGS_ERROR
} from '../types';
import logoutAction from '../auth.actions/logout.action';

const postGroupContributeSavings = groupSaving => ({
  type: CREATE_GROUP_CONTRIBUTORY_SAVINGS,
  groupSaving
});

const postGroupContributeSavingsError = error => ({
  type: CREATE_GROUP_CONTRIBUTORY_SAVINGS_ERROR,
  error
});

export const deleteGroupContributeSavingsError = () => ({
  type: DELETE_GROUP_CONTRIBUTORY_SAVINGS_ERROR
});

const groupContributeSavingsIsLoading = () => ({
  type: GROUP_CONTRIBUTORY_IS_LOADING
});

const createGroupContributoryScheme = groupDetails => (dispatch) => {
  dispatch(groupContributeSavingsIsLoading());
  const token = Cookie.get('jwtToken');
  return axios.post(
    `${config.apiUrl}${routes.CREATEGROUPSCHEME}`, groupDetails, {
      headers: { Authorization: `Bearer ${token}` }
    }
  ).then((response) => {
    dispatch(groupContributeSavingsIsLoading());
    const { data } = response;
    dispatch(postGroupContributeSavings(data));
    alertify
      .alert(`Congratulations!! You have succeded in creating ${groupDetails.schemeName} Group Contributory Scheme.`, () => {
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
    dispatch(groupContributeSavingsIsLoading());
    const { data } = error.response;
    dispatch(postGroupContributeSavingsError(data));
  });
};

export default createGroupContributoryScheme;
