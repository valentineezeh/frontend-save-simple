import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import { ADD_BVN_DETAILS } from '../types';
import logoutAction from '../auth.actions/logout.action';

export const addBvnDetail = AddBvnDetails => ({
  type: ADD_BVN_DETAILS,
  AddBvnDetails
});

const addBvnDetailsRequest = addBvnDetails => (dispatch) => {
  return axios.post(`${config.apiUrl}${routes.ADDBVN}`, addBvnDetails).then((response) => {
    const { responseMessage } = response.data;
    dispatch(addBvnDetail(response.data));
    toastr.success(responseMessage);
  }).catch((error) => {
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

export default addBvnDetailsRequest;
