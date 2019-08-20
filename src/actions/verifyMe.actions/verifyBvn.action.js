import axios from 'axios';
import toastr from 'toastr';
import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  VERIFY_BVN,
  SET_VERIFY_BVN_ERROR,
  DELETE_VERIFY_BVN_ERROR
} from '../types';
import logoutAction from '../auth.actions/logout.action';

export const verifyBvn = VerifyBvn => ({
  type: VERIFY_BVN,
  VerifyBvn
});

export const setVerifyBvnError = error => ({
  type: SET_VERIFY_BVN_ERROR,
  error
});

export const deleteVerifyBvnError = () => ({
  type: DELETE_VERIFY_BVN_ERROR
});

const verifyBvnRequest = bvnDetails => (dispatch) => {
  const token = Cookie.get('jwtToken');
  const decodeUser = jwt.decode(token);
  const { customerId } = decodeUser;
  const BvnDetails = {
    bvn: bvnDetails,
    customerId: Number(customerId)
  };
  console.log(BvnDetails);
  return axios.post(`${config.apiUrl}${routes.VERIFYBVN}`, BvnDetails, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    const { responseMessage, isSuccessful } = response.data;
    if (isSuccessful) {
      dispatch(verifyBvn(response.data));
      toastr.success(responseMessage);
    } else {
      dispatch(setVerifyBvnError(responseMessage));
    }
  }).catch((error) => {
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    if (error.response.status === 401) {
      const { status } = error.response;
      dispatch(logoutAction(status));
    }
    const { Bvn } = error.response.data;
    dispatch(setVerifyBvnError(Bvn[0]));
    throw error;
  });
};

export default verifyBvnRequest;
