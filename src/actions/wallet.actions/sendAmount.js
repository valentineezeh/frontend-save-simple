import { SEND_WALLET_AMOUNT } from '../types';

const sendWalletAmount = walletAmount => ({
  type: SEND_WALLET_AMOUNT,
  walletAmount
});

export default sendWalletAmount;
