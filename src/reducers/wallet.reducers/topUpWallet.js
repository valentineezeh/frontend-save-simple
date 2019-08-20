import isEmpty from 'is-empty';
import {
  WALLET_TOP_UP,
  TOP_WALLET_IS_LOADING,
  WALLET_TOP_UP_ERROR,
  DELETE_WALLET_TOP_UP_ERROR
} from '../../actions/types';


const initialState = {
  topUpWallet: {},
  success: false,
  error: '',
  walletToploading: false
};

const topUpWallet = (state = initialState, action) => {
  switch (action.type) {
    case WALLET_TOP_UP:
      return {
        ...state,
        topUpWallet: action.topWallet,
        success: !isEmpty(action.topUpWallet),
        walletToploading: false
      };
    case WALLET_TOP_UP_ERROR:
      return {
        ...state,
        error: action.error,
        walletToploading: false
      };
    case DELETE_WALLET_TOP_UP_ERROR:
      return {
        ...state,
        error: ''
      };
    case TOP_WALLET_IS_LOADING:
      return {
        ...state,
        walletToploading: true
      };
    default: return state;
  }
};

export default topUpWallet;
