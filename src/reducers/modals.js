import {
  SHOW_FUND_WALLET_MODAL,
  HIDE_FUND_WALLET_MODAL
} from '../actions/types';

const initialState = {
  current: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FUND_WALLET_MODAL:
      return {
        ...state,
        current: 'fundWallet'
      };
    case HIDE_FUND_WALLET_MODAL:
      return {
        ...state,
        current: null
      };
    default: return state;
  }
};
