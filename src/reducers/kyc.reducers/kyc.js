import isEmpty from 'is-empty';
import {
  UPDATE_KYC,
  SET_UPDATE_KYC_ERROR,
  DELETE_UPDATE_KYC_ERROR
} from '../../actions/types';

const initialState = {
  success: false,
  error: '',
  kyc: {}
};

const kyc = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_KYC:
      return {
        ...state,
        success: !isEmpty(action.kyc),
        kyc: action.kyc
      };
    case SET_UPDATE_KYC_ERROR:
      return {
        ...state,
        success: false,
        kyc: {},
        error: action.error
      };
    case DELETE_UPDATE_KYC_ERROR:
      return {
        error: ''
      };
    default: return state;
  }
};

export default kyc;
