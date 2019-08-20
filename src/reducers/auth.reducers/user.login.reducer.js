import isEmpty from 'is-empty';
import {
  DELETE_ERROR_MESSAGE,
  LOGIN_USER,
  SET_CURRENT_USER_ERROR,
  LOGOUT_USER,
  DELETE_WARNING_MESSAGE,
  SET_WARNING_MESSAGE,
  IS_LOADING
} from '../../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: '',
  warningMessage: '',
  loading: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.LoginUser),
        user: action.LoginUser,
        loading: false
      };
    case SET_CURRENT_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: action.error,
        loading: false
      };
    case DELETE_ERROR_MESSAGE:
      return {
        error: ''
      };
    case LOGOUT_USER:
      return {
        ...state,
        ...initialState
      };
    case SET_WARNING_MESSAGE:
      return {
        ...state,
        warningMessage: action.message,
        loading: false
      };
    case DELETE_WARNING_MESSAGE:
      return {
        ...state,
        warningMessage: '',
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

export default loginReducer;
