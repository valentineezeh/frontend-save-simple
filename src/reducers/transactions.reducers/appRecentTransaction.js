import isEmpty from 'is-empty'
import { GET_APP_RECENT_TRANSACTION } from '../../actions/types';

const initialState = {
  appTransaction: {},
  success: false
};

const appTransaction = (state = initialState, action) => {
  switch (action.type) {
    case GET_APP_RECENT_TRANSACTION:
      return {
        ...state,
        appTransaction: action.transact,
        success: !isEmpty(action.transact)
      };
    default: return state;
  }
};

export default appTransaction;
