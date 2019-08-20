import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import { ADD_BANK_ACCOUNT } from '../types';
import logoutAction from '../auth.actions/logout.action';

export const addBankDetails = addBank => ({
  type: ADD_BANK_ACCOUNT,
  addBank
});

const addBankDetailsRequest = bankDetails => (dispatch) => {
  return axios.post(`${config.apiUrl}${routes.ADDBANKACCOUNT}`, bankDetails).then((response) => {
    const { responseMessage } = response.data;
    console.log(response)
    dispatch(addBankDetails(response.data));
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

export default addBankDetailsRequest;
