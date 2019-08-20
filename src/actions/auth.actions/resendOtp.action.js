import axios from 'axios';
import Cookie from 'cookies-js';
import toastr from 'toastr';
import config from '../../config';
import routes from '../../constants/routes';
import { RESEND_OTP } from '../types';

/**
   * Action to Register a user and return a JWT token
   * @param {*} resendOtpDetails - Response object
   * @returns {resendOtpDetails} resendOtpDetails - to store
   */
export const resendOtp = resendOtpDetails => ({
  type: RESEND_OTP,
  resendOtpDetails
});

const userResendOtp = resendOtpDetails => (dispatch) => {
  axios.post(`${config.apiUrl}${routes.RESENDOTP}`, { customerId: resendOtpDetails }).then((response) => {
    const { otpRef } = response.data;
    Cookie.set('otpRef', otpRef);
    toastr.success('A new OTP has been sent to your email.');
    dispatch(resendOtp(response.data));
  });
};

export default userResendOtp;
