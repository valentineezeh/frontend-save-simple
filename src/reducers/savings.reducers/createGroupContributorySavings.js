import isEmpty from 'is-empty';
import {
  CREATE_GROUP_CONTRIBUTORY_SAVINGS,
  CREATE_GROUP_CONTRIBUTORY_SAVINGS_ERROR,
  GROUP_CONTRIBUTORY_IS_LOADING,
  DELETE_GROUP_CONTRIBUTORY_SAVINGS_ERROR
} from '../../actions/types';

const initialState = {
  success: false,
  groupSavings: {},
  error: '',
  loading: false
};

const createGroupContributorySavings = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GROUP_CONTRIBUTORY_SAVINGS:
      return {
        ...state,
        groupSavings: action.groupSaving,
        success: !isEmpty(action.groupSaving),
        loading: false
      };
    case CREATE_GROUP_CONTRIBUTORY_SAVINGS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case DELETE_GROUP_CONTRIBUTORY_SAVINGS_ERROR:
      return {
        ...state,
        error: ''
      };
    case GROUP_CONTRIBUTORY_IS_LOADING:
      return {
        ...state,
        loading: true
      };
    default: return state;
  }
};

export default createGroupContributorySavings;
