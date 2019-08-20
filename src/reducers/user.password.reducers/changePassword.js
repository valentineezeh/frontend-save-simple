import isEmpty from 'is-empty';
import {
  CHANGE_PASSWORD,
  SET_CHANGE_PASSWORD_ERROR,
  DELETE_CHANGE_PASSWORD_ERROR
} from '../../actions/types';

const initialState = {
  success: false,
  error: '',
  changePassword: {}
};

const changePassword = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return {
        ...state,
        success: !isEmpty(action.PasswordChange),
        changePassword: action.PasswordChange
      };
    case SET_CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        success: false,
        changePassword: {},
        error: action.error
      };
    case DELETE_CHANGE_PASSWORD_ERROR:
      return {
        error: ''
      };
    default: return state;
  }
};

export default changePassword;
