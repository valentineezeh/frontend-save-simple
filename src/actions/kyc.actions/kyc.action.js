import axios from 'axios';
import Cookie from 'cookies-js';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  UPDATE_KYC,
  SET_UPDATE_KYC_ERROR,
  DELETE_UPDATE_KYC_ERROR
} from '../types';
import { uploadPhoto } from './productImage.action';

export const kyc = Kyc => ({
  type: UPDATE_KYC,
  Kyc
});

export const setKycError = error => ({
  type: SET_UPDATE_KYC_ERROR,
  error
});

export const deleteKycError = () => ({
  type: DELETE_UPDATE_KYC_ERROR
});

const kycRequest = kycDetails => async (dispatch) => {
  try {
    let signatureURL, meansOfIdentificationURL;
    if (kycDetails.signatureURL) {
      signatureURL = await dispatch(uploadPhoto(kycDetails.signatureURL));
    }
    if (kycDetails.meansOfIdentificationURL) {
      meansOfIdentificationURL = await dispatch(uploadPhoto(kycDetails.meansOfIdentificationURL));
    }

    const updatedkycDetails = { ...kycDetails, signatureURL, meansOfIdentificationURL };
    const token = Cookie.get('jwtToken');

    const response = await axios.post(`${config.apiUrl}${routes.KYCFORM}`, updatedkycDetails, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const { responseMessage } = response.data;
    dispatch(kyc(response.data));
    toastr.success(responseMessage);
  } catch (error) {
    const { responseMessage } = error.response.data;
    dispatch(setKycError(responseMessage));
    throw error;
  }
};

export default kycRequest;
