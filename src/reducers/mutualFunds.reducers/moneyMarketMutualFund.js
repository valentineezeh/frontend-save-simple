import isEmpty from 'is-empty';
import {
  MONEY_MARKET_MUTUAL_FUND,
  MONEY_MARKET_MUTUAL_FUND_ERROR,
  MONEY_MARKET_MUTUAL_FUND_LOADING,
  MONEY_MARKET_MUTUAL_FUND_ERROR_DELETE
} from
  '../../actions/types';

const initialState = {
  success: false,
  mutualMoneyMarket: {},
  error: '',
  loading: false
};

const mutualFundMoneyMarket = (state = initialState, action) => {
  switch (action.type) {
    case MONEY_MARKET_MUTUAL_FUND:
      return {
        ...state,
        success: !isEmpty(action.mmmf),
        mutualMoneyMarket: action.mmmf,
        loading: false
      };
    case MONEY_MARKET_MUTUAL_FUND_ERROR:
      return {
        ...state,
        success: false,
        error: action.error,
        loading: false
      };
    case MONEY_MARKET_MUTUAL_FUND_ERROR_DELETE:
      return {
        error: ''
      };
    case MONEY_MARKET_MUTUAL_FUND_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default mutualFundMoneyMarket;
