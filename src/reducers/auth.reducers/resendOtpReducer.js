import isEmpty from 'is-empty';
import { RESEND_OTP } from '../../actions/types';

const initialState = {
  success: false,
  resendOtpDetails: {},
};

const resendOtpReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESEND_OTP:
      return {
        ...state,
        success: !isEmpty(action.resendOtpDetails),
        resendOtpDetails: action.resendOtpDetails
      };
    default:
      return state;
  }
};

export default resendOtpReducer;
