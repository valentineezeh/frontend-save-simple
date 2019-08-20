import isEmpty from 'is-empty';
import {
  ADD_CARD_DETAILS_OTP_SUCCESS,
  ADD_CARD_DETAILS_OTP_ERROR,
  DELETE_ADD_CARD_DETAILS_OTP_ERROR,
  ADD_CARD_OTP_IS_LOADING
} from '../../actions/types';

const initialState = {
  success: false,
  addCardOtpObj: {},
  error: '',
  addCardOtploading: false
};

const addCardOtp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_DETAILS_OTP_SUCCESS:
      return {
        ...state,
        success: !isEmpty(action.otpDetails),
        addCardOtpObj: action.otpDetails,
        addCardOtploading: false
      };
    case ADD_CARD_DETAILS_OTP_ERROR:
      return {
        ...state,
        error: action.error,
        addCardOtploading: false
      };
    case DELETE_ADD_CARD_DETAILS_OTP_ERROR:
      return {
        ...state,
        error: ''
      };
    case ADD_CARD_OTP_IS_LOADING:
      return {
        ...state,
        addCardOtploading: true
      };
    default: return state;
  }
};

export default addCardOtp;
