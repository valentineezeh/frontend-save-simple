import isEmpty from 'is-empty';
import {
  CREATE_PERSONAL_TARGET_SAVINGS,
  CREATE_PERSONAL_TARGET_SAVINGS_ERROR,
  IS_LOADING,
  DELETE_PERSONAL_TARGET_SAVINGS_ERROR
} from '../../actions/types';

const initialState = {
  success: false,
  personalSavings: {},
  error: '',
  loading: false
};

const postPersonalTargetSavings = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PERSONAL_TARGET_SAVINGS:
      return {
        ...state,
        personalSavings: action.fixedSaving,
        success: !isEmpty(action.fixedSaving),
        loading: false
      };

    case CREATE_PERSONAL_TARGET_SAVINGS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case DELETE_PERSONAL_TARGET_SAVINGS_ERROR:
      return {
        ...state,
        error: ''
      };

    case IS_LOADING:
      return {
        ...state,
        loading: true
      };

    default: return state;
  }
};

export default postPersonalTargetSavings;
