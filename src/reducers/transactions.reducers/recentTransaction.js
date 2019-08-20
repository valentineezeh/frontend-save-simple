import isEmpty from 'is-empty';
import { GET_RECENT_TRANSACTIONS, IS_LOADING } from '../../actions/types';

const initialState = {
  recentTransaction: {},
  recentTransactSuccess: false,
  loading: false
};

const getRecentTransaction = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECENT_TRANSACTIONS:
      return {
        ...state,
        recentTransaction: action.recentTransact,
        recentTransactionSuccess: !isEmpty(action.recentTransact),
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

export default getRecentTransaction;
