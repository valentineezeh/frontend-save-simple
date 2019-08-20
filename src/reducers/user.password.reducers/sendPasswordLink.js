import isEmpty from 'is-empty';
import {
  RESET_PASSWORD,
  SET_RESET_PASSWORD_ERROR,
  DELETE_RESET_PASSWORD_ERROR
} from '../../actions/types';

const initialState = {
  success: false,
  error: '',
  resetPassword: {}
};

const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        success: !isEmpty(action.PasswordReset),
        resetPassword: action.PasswordReset
      };
    case SET_RESET_PASSWORD_ERROR:
      return {
        ...state,
        success: false,
        resetPassword: {},
        error: action.error
      };
    case DELETE_RESET_PASSWORD_ERROR:
      return {
        error: ''
      };
    default: return state;
  }
};

export default resetPassword;
