import { combineReducers } from 'redux';
import signupReducer from './auth.reducers/signupReducer';
import loginReducer from './auth.reducers/user.login.reducer';
import resetPassword from './user.password.reducers/sendPasswordLink';
import changePassword from './user.password.reducers/changePassword';
import verifyUserOtp from './auth.reducers/otpVerificationReducer';
import resendOtpReducer from './auth.reducers/resendOtpReducer';
import verifyBvn from './verifyMe.reducers/verifyBvn';
import kyc from './kyc.reducers/kyc';
import addBvn from './verifyMe.reducers/addBvnDetails';
import getAllBanks from './setUpBank.reducers/getAllBanksReducer';
import verifyBankDetails from './setUpBank.reducers/verifyBankDetails.reducer';
import addBankDetails from './setUpBank.reducers/addBankDetails.reducer';
import uploadImage from './kyc.reducers/productImage';
import modals from './modals';
import addCardDetails from './user.card.reducers/addCardReducers';
import addCardOtp from './user.card.reducers/addCardOtpReducer';
import getRecentTransaction from './transactions.reducers/recentTransaction';
import getWalletBalance from './wallet.reducers/getWalletBalance';
import topUpWallet from './wallet.reducers/topUpWallet';
import postPersonalTargetSavings from './savings.reducers/createPersonalTargetSavings';
import walletAmount from './wallet.reducers/sendAmount';
import getCards from './user.card.reducers/getCustomerCardsReducer';
import appTransaction from './transactions.reducers/appRecentTransaction';
import getCustomerAccounts from './setUpBank.reducers/getCustomerAcct';
import personalSavingImage from './image.reducers/personalSavingImg';
import CreateTargetSavings from './savings.reducers/createFixedSavings';
import getUserTotalSavings from './savings.reducers/getTotalSavings';
import createGroupTargetSavings from './savings.reducers/createGroupTargetSavings';
import getUserSavingPlans from './savings.reducers/getSavingPlans';
import allUserNotification from './notification.reducers/getUserNotification';
import getSavingDetail from './savings.reducers/getSingleSavingDetails';
import userGroupInvitations from './notification.reducers/getGroupNotification';
import treatUserGroupInvitation from './notification.reducers/treatGroupInvitation';
import getFixedSavingDetail from './savings.reducers/getSingleFixedSaving';
import createGroupContributorySavings from './savings.reducers/createGroupContributorySavings';
import groupContributoryInvitations from './notification.reducers/getGroupContributoryInvitation';
import treatUserGroupSchemeInvitation from './notification.reducers/treatGroupSchemeInvitation';
import mutualFundMoneyMarket from './mutualFunds.reducers/moneyMarketMutualFund';

export default combineReducers({
  signupReducer,
  loginReducer,
  resetPassword,
  changePassword,
  verifyUserOtp,
  resendOtpReducer,
  verifyBvn,
  addBvn,
  getAllBanks,
  verifyBankDetails,
  addBankDetails,
  kyc,
  uploadImage,
  modals,
  addCardDetails,
  addCardOtp,
  getRecentTransaction,
  getWalletBalance,
  topUpWallet,
  postPersonalTargetSavings,
  walletAmount,
  getCards,
  appTransaction,
  getCustomerAccounts,
  personalSavingImage,
  CreateTargetSavings,
  getUserTotalSavings,
  createGroupTargetSavings,
  getUserSavingPlans,
  allUserNotification,
  getSavingDetail,
  userGroupInvitations,
  treatUserGroupInvitation,
  getFixedSavingDetail,
  createGroupContributorySavings,
  groupContributoryInvitations,
  treatUserGroupSchemeInvitation,
  mutualFundMoneyMarket,
});
