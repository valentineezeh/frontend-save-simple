import isEmpty from 'is-empty';
import {
  CREATE_TARGET_SAVINGS,
  CREATE_TARGET_SAVINGS_ERROR,
  IS_LOADING,
  DELETE_TARGET_SAVINGS_ERROR
} from '../../actions/types';

const initialState = {
  success: false,
  targetSavings: {},
  error: '',
  loading: false
};

const CreateTargetSavings = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TARGET_SAVINGS:
      return {
        ...state,
        targetSavings: action.targetSaving,
        success: !isEmpty(action.targetSaving),
        loading: false
      };
    case CREATE_TARGET_SAVINGS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case DELETE_TARGET_SAVINGS_ERROR:
      return {
        ...state,
        error: '',
        loading: false
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true
      };
    default: return state;
  }
};

export default CreateTargetSavings;
