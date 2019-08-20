import isEmpty from 'is-empty';
import {
  VERIFY_BVN,
  SET_VERIFY_BVN_ERROR,
  DELETE_VERIFY_BVN_ERROR
} from '../../actions/types';

const initialState = {
  success: false,
  error: '',
  verifyBvn: {}
};

const verifyBvn = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_BVN:
      return {
        ...state,
        success: !isEmpty(action.VerifyBvn),
        verifyBvn: action.VerifyBvn
      };
    case SET_VERIFY_BVN_ERROR:
      return {
        ...state,
        success: false,
        verifyBvn: {},
        error: action.error
      };
    case DELETE_VERIFY_BVN_ERROR:
      return {
        error: ''
      };
    default: return state;
  }
};

export default verifyBvn;
