import isEmpty from 'is-empty';
import { GET_TOTAL_SAVINGS } from '../../actions/types';

const initialState = {
  totalSavings: {},
  success: false
};

const getUserTotalSavings = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL_SAVINGS:
      return {
        ...state,
        totalSavings: action.allSavings,
        success: !isEmpty(action.allSavings)
      };
    default: return state;
  }
};

export default getUserTotalSavings;
