import isEmpty from 'is-empty';
import {
  VERIFY_BANK_DETAILS,
  SET_VERIFY_BANK_DETAILS_ERROR,
  DELETE_VERIFY_BANK_DETAILS_ERROR
} from '../../actions/types';

const initialState = {
  success: false,
  error: '',
  verifyBank: {}
};

const verifyBankDetails = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_BANK_DETAILS:
      return {
        ...state,
        success: !isEmpty(action.verifyBank),
        verifyBank: action.verifyBank
      };
    case SET_VERIFY_BANK_DETAILS_ERROR:
      return {
        ...state,
        success: false,
        verifyBank: {},
        error: action.error
      };
    case DELETE_VERIFY_BANK_DETAILS_ERROR:
      return {
        error: ''
      };
    default: return state;
  }
};

export default verifyBankDetails;
