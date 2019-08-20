/* eslint-disable max-len */
export const SET_CURRENT_USER = 'SET_CURRENT-USER';
export const SET_CURRENT_USER_FAIL = 'SET_CURRENT_USER_FAIL';
export const SIGN_UP_ERRORS = 'SIGN_UP_ERRORS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const DELETE_ERROR_MESSAGE = 'DELETE_ERROR_MESSAGE';
export const LOGIN_USER = 'LOGIN_USER';
export const SET_CURRENT_USER_ERROR = 'SET_CURRENT_USER_ERROR';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const SET_RESET_PASSWORD_ERROR = 'SET_RESET_PASSWORD_ERROR';
export const DELETE_RESET_PASSWORD_ERROR = 'DELETE_RESET_PASSWORD_ERROR';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const SET_CHANGE_PASSWORD_ERROR = 'SET_CHANGE_PASSWORD_ERROR';
export const DELETE_CHANGE_PASSWORD_ERROR = 'DELETE_CHANGE_PASSWORD_ERROR';
export const COMPLETE_REGISTRATION = 'COMPLETE_REGISTRATION';
export const SET_COMPLETE_REGISTRATION_ERROR = 'SET_COMPLETE_REGISTRATION_ERROR';
export const DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE = 'DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE';
export const RESEND_OTP = 'RESEND_OTP';
export const VERIFY_BVN = 'VERIFY_BVN';
export const SET_VERIFY_BVN_ERROR = 'SET_VERIFY_BVN_ERROR';
export const DELETE_VERIFY_BVN_ERROR = 'DELETE_VERIFY_BVN_ERROR';

// KYC
export const UPDATE_KYC = 'UPDATE_KYC';
export const SET_UPDATE_KYC_ERROR = 'SET_UPDATE_KYC_ERROR';
export const DELETE_UPDATE_KYC_ERROR = 'DELETE_UPDATE_KYC_ERROR';
export const UPLOAD_PHOTO_FAILED = 'UPLOAD_PHOTO_FAILED';
export const UPLOAD_PHOTO_REQUEST = 'UPLOAD_PHOTO_REQUEST';
export const UPLOAD_PHOTO_SUCCESS = 'UPLOAD_PHOTO_SUCCESS';

// Add Bank Account details
export const ADD_BVN_DETAILS = 'ADD_BVN_DETAILS';
export const VERIFY_BANK_DETAILS = 'VERIFY_BANK_DETAILS';
export const SET_VERIFY_BANK_DETAILS_ERROR = 'SET_VERIFY_BANK_DETAILS_ERROR';
export const DELETE_VERIFY_BANK_DETAILS_ERROR = 'DELETE_VERIFY_BANK_DETAILS_ERROR';
export const GET_ALL_BANKS = 'GET_ALL_BANKS';
export const ADD_BANK_ACCOUNT = 'ADD_BANK_ACCOUNT';
export const GET_CUSTOMER_ACCOUNT = 'GET_CUSTOMER_ACCOUNT';

//
export const DELETE_WARNING_MESSAGE = 'DELETE_WARNING_MESSAGE';
export const SET_WARNING_MESSAGE = 'SET_WARNING_MESSAGE';
export const IS_LOADING = 'IS_LOADING';
export const SHOW_FUND_WALLET_MODAL = 'SHOW_FUND_WALLET_MODAL';
export const HIDE_FUND_WALLET_MODAL = 'HIDE_FUND_WALLET_MODAL';

// Add Card Details
export const ADD_CARD_DETAILS_SUCCESS = 'ADD_CARD_DETAILS_SUCCESS';
export const ADD_CARD_DETAILS_ERROR = 'ADD_CARD_DETAILS_ERROR';
export const DELETE_ADD_CARD_DETAILS_ERROR = 'DELETE_ADD_CARD_DETAILS_ERROR';
export const ADD_CARD_DETAILS_OTP_SUCCESS = 'ADD_CARD_DETAILS_OTP_SUCCESS';
export const ADD_CARD_DETAILS_OTP_ERROR = 'ADD_CARD_DETAILS_OTP_ERROR';
export const DELETE_ADD_CARD_DETAILS_OTP_ERROR = 'DELETE_ADD_CARD_DETAILS_OTP_ERROR';
export const GET_CARD_DETAILS = 'GET_CARD_DETAILS';
export const GET_CUSTOMER_CARDS = 'GET_CUSTOMER_CARDS';
export const ADD_IS_LOADING = 'ADD_IS_LOADING';
export const ADD_CARD_OTP_IS_LOADING = 'ADD_CARD_OTP_IS_LOADING';

// Recent Transactions
export const GET_RECENT_TRANSACTIONS = 'GET_RECENT_TRANSACTIONS';
export const GET_APP_RECENT_TRANSACTION = 'GET_APP_RECENT_TRANSACTION';


// Wallet Actions
export const GET_WALLET_BALANCE = 'GET_WALLET_BALANCE';
export const WALLET_TOP_UP = 'WALLET_TOP_UP';
export const SEND_WALLET_AMOUNT = 'SEND_WALLET_AMOUNT';
export const WALLET_TOP_UP_ERROR = 'WALLET_TOP_UP_ERROR';
export const DELETE_WALLET_TOP_UP_ERROR = 'DELETE_WALLET_TOP_UP_ERROR';
export const TOP_WALLET_IS_LOADING = 'TOP_WALLET_IS_LOADING';

// Saving Actions
export const GET_SAVING_PLANS = 'GET_SAVING_PLANS';
export const SINGLE_SAVING_DETAILS = 'SINGLE_SAVING_DETAILS';
export const SINGLE_FIXED_SAVING_DETAILS = 'SINGLE_FIXED_SAVING_DETAILS';

// Personal Target savings actions
export const CREATE_PERSONAL_TARGET_SAVINGS = 'CREATE_PERSONAL_TARGET_SAVINGS';
export const CREATE_PERSONAL_TARGET_SAVINGS_ERROR = 'CREATE_PERSONAL_TARGET_SAVINGS_ERROR';
export const DELETE_PERSONAL_TARGET_SAVINGS_ERROR = 'DELETE_PERSONAL_TARGET_SAVINGS_ERROR';

// Target savings actions
export const CREATE_TARGET_SAVINGS = 'CREATE_TARGET_SAVINGS';
export const CREATE_TARGET_SAVINGS_ERROR = 'CREATE_TARGET_SAVINGS_ERROR';
export const DELETE_TARGET_SAVINGS_ERROR = 'DELETE_TARGET_SAVINGS_ERROR';
export const GET_TOTAL_SAVINGS = 'GET_TOTAL_SAVINGS';

// Group target savings
export const CREATE_GROUP_TARGET_SAVINGS = 'CREATE_GROUP_TARGET_SAVINGS';
export const CREATE_GROUP_TARGET_SAVINGS_ERROR = 'CREATE_GROUP_TARGET_SAVINGS_ERROR';
export const GROUP_TARGET_IS_LOADING = 'GROUP_TARGET_IS_LOADING';
export const DELETE_GROUP_TARGET_SAVINGS_ERROR = 'DELETE_GROUP_TARGET_SAVINGS_ERROR';

// Group Contributory Savings
export const CREATE_GROUP_CONTRIBUTORY_SAVINGS = 'CREATE_GROUP_CONTRIBUTORY_SAVINGS';
export const CREATE_GROUP_CONTRIBUTORY_SAVINGS_ERROR = 'CREATE_GROUP_CONTRIBUTORY_SAVINGS_ERROR';
export const GROUP_CONTRIBUTORY_IS_LOADING = 'GROUP_CONTRIBUTORY_IS_LOADING';
export const DELETE_GROUP_CONTRIBUTORY_SAVINGS_ERROR = 'DELETE_GROUP_CONTRIBUTORY_SAVINGS_ERROR';


// Image Uploads
export const UPLOAD_PSERSONAL_IMG_FAILED = 'UPLOAD_PSERSONAL_IMG_FAILED';
export const UPLOAD_PSERSONAL_IMG_REQUEST = 'UPLOAD_PSERSONAL_IMG_REQUEST';
export const UPLOAD_PSERSONAL_IMG_SUCCESS = 'UPLOAD_PSERSONAL_IMG_SUCCESS';
export const UPLOAD_PERSONAL_IMG_LOADING = 'UPLOAD_PERSONAL_IMG_LOADING';

//  Notifications
export const GET_USER_NOTIFICATION = 'GET_USER_NOTIFICATION';
export const GET_GROUP_INVITATION = 'GET_GROUP_INVITATION';
export const GET_GROUP_INVITATION_LOADING = 'GET_GROUP_INVITATION_LOADING';
export const TREAT_GROUP_NOTIFICATION_INVITATION = 'TREAT_GROUP_NOTIFICATION';
export const TREAT_GROUP_INVITATION_LOADING = 'TREAT_GROUP_INVITATION_LOADING';
export const GET_GROUP_CONTRIBUTORY_INVITATION = 'GET_GROUP_CONTRIBUTORY_INVITATION';
export const TREAT_GROUP_SCHEME_NOTIFICATION_INVITATION = 'TREAT_GROUP_SCHEME_NOTIFICATION_INVITATION';
export const TREAT_GROUP_SCHEME_INVITATION_LOADING = 'TREAT_GROUP_SCHEME_INVITATION_LOADING';

// MUTUAL FUNDS
export const MONEY_MARKET_MUTUAL_FUND = 'MONEY_MARKET_MUTUAL_FUND';
export const MONEY_MARKET_MUTUAL_FUND_LOADING = 'MONEY_MARKET_MUTUAL_FUND_LOADING';
export const MONEY_MARKET_MUTUAL_FUND_ERROR = 'MONEY_MARKET_MUTUAL_FUND_ERROR';
export const MONEY_MARKET_MUTUAL_FUND_ERROR_DELETE = 'MONEY_MARKET_MUTUAL_FUND_ERROR_DELETE';