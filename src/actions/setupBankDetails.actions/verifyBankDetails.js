import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  VERIFY_BANK_DETAILS,
  SET_VERIFY_BANK_DETAILS_ERROR,
  DELETE_VERIFY_BANK_DETAILS_ERROR
} from '../types';
import logoutAction from '../auth.actions/logout.action';

export const verifyBankAccount = verifyBank => ({
  type: VERIFY_BANK_DETAILS,
  verifyBank
});

export const setVerifyBankAccountError = error => ({
  type: SET_VERIFY_BANK_DETAILS_ERROR,
  error
});

export const deleteVerifyBankError = () => ({
  type: DELETE_VERIFY_BANK_DETAILS_ERROR
});

const verifyBankAccountDetails = accountDetails => (dispatch) => {
 return axios.post(`${config.apiUrl}${routes.VERIFYBANKDETAILS}`, accountDetails).then((response) => {
    dispatch(verifyBankAccount(response.data));
    toastr.success('Bank details verification Successful.');
  }).catch((error) => {
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    if (error.response.status === 401) {
      const { status } = error.response;
      dispatch(logoutAction(status));
    }
    const { responseMessage } = error.response.data;
    dispatch(setVerifyBankAccountError(responseMessage));
    throw error;
  });
};

export default verifyBankAccountDetails;
