import isEmpty from 'is-empty';
import {
  CREATE_GROUP_TARGET_SAVINGS,
  CREATE_GROUP_TARGET_SAVINGS_ERROR,
  GROUP_TARGET_IS_LOADING,
  DELETE_GROUP_TARGET_SAVINGS_ERROR
} from '../../actions/types';

const initialState = {
  success: false,
  groupTargetSavings: {},
  error: '',
  loading: false
};

const createGroupTargetSavings = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GROUP_TARGET_SAVINGS:
      return {
        ...state,
        groupTargetSavings: action.groupTargetSaving,
        success: !isEmpty(action.groupTargetSaving),
        loading: false
      };
    case CREATE_GROUP_TARGET_SAVINGS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case DELETE_GROUP_TARGET_SAVINGS_ERROR:
      return {
        ...state,
        error: ''
      };
    case GROUP_TARGET_IS_LOADING:
      return {
        ...state,
        loading: true
      };
    default: return state;
  }
};

export default createGroupTargetSavings;
