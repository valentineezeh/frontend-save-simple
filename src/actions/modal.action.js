import {
  SHOW_FUND_WALLET_MODAL,
  HIDE_FUND_WALLET_MODAL
} from './types';

export const showFundWalletModal = () => dispatch => dispatch({
  type: SHOW_FUND_WALLET_MODAL
});
export const hideFundWalletModal = () => dispatch => dispatch({
  type: HIDE_FUND_WALLET_MODAL
});
