import isEmpty from 'is-empty';
import {
  COMPLETE_REGISTRATION,
  SET_COMPLETE_REGISTRATION_ERROR,
  DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE,
  IS_LOADING
} from '../../actions/types';

const initialState = {
  success: false,
  otpDetails: {},
  error: '',
  loading: false
};

const verifyUserOtp = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_REGISTRATION:
      return {
        ...state,
        success: !isEmpty(action.completeRegistration),
        otpDetails: action.completeRegistration,
        loading: false
      };
    case SET_COMPLETE_REGISTRATION_ERROR:
      return {
        ...state,
        success: false,
        otpDetails: {},
        error: action.error,
        loading: false
      };
    case DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE:
      return {
        error: '',
        loading: false
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default verifyUserOtp;
