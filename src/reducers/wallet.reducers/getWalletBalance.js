import { GET_WALLET_BALANCE } from '../../actions/types';

const initialState = {
  walletBalance: {}
};

const getWalletBalance = (state = initialState, action) => {
  switch (action.type) {
    case GET_WALLET_BALANCE:
      return {
        ...state,
        walletBalance: action.balance
      };
    default: return state;
  }
};

export default getWalletBalance;
