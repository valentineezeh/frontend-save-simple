import isEmpty from 'is-empty';
import {
  SET_CURRENT_USER,
  SIGN_UP_ERRORS,
  LOGOUT_USER,
  DELETE_ERROR_MESSAGE,
  SET_CURRENT_USER_FAIL,
  IS_LOADING
} from '../../actions/types';


const initialState = {
  isAuthenticated: false,
  user: {},
  error: '',
  loading: false,
  isVerified: true
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
        loading: false
      };

    case SET_CURRENT_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: action.error,
        loading: false
      };

    case SIGN_UP_ERRORS:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: action.error,
        loading: false,
        isVerified: false
      };

    case DELETE_ERROR_MESSAGE:
      return {
        error: '',
      };

    case LOGOUT_USER:
      return {
        ...state,
        ...initialState
      };

    case IS_LOADING:
      return {
        ...state,
        loading: true
      };
    default: return state;
  }
};

export default signupReducer;
