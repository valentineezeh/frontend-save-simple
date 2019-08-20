import { SEND_WALLET_AMOUNT } from '../../actions/types';

const initialState = {
  amount: ''
};

const walletAmount = (state = initialState, action) => {
  switch (action.type) {
    case SEND_WALLET_AMOUNT:
      return {
        ...state,
        amount: action.walletAmount
      };
    default: return state;
  }
};

export default walletAmount;
