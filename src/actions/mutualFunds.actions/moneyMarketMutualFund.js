import axios from 'axios';
import Cookie from 'cookies-js';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
  MONEY_MARKET_MUTUAL_FUND,
  MONEY_MARKET_MUTUAL_FUND_ERROR,
  MONEY_MARKET_MUTUAL_FUND_LOADING,
  MONEY_MARKET_MUTUAL_FUND_ERROR_DELETE
} from '../types';
// import logoutAction from '../auth.actions/logout.action';

const buyMoneyMarketFund = mmmf => ({
  type: MONEY_MARKET_MUTUAL_FUND,
  mmmf
});

const buyMoneyMarketFundLoading = () => ({
  type: MONEY_MARKET_MUTUAL_FUND_LOADING
});

const buyMoneyMarketFundError = error => ({
  type: MONEY_MARKET_MUTUAL_FUND_ERROR,
  error
});

export const deleteBuyMoneyMarketFundError = () => ({
  type: MONEY_MARKET_MUTUAL_FUND_ERROR_DELETE
});

const buyMoneyMarketMutualFund = (moneyMutualDetails, history) => (dispatch) => {
  dispatch(buyMoneyMarketFundLoading());
  const token = Cookie.get('jwtToken');
  return axios.post(`${config.apiUrl}${routes.BUYMONEYMARKETFUND}`, moneyMutualDetails, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    dispatch(buyMoneyMarketFundLoading());
    const { data } = response;
    if (data.isSuccessful) {
      dispatch(buyMoneyMarketFund(data));
      toastr.success(data.subscriptionResponseMessage);
      return history.push('/mutual-fund');
    } else {
      dispatch(buyMoneyMarketFundError(data.responseMessage));
    }
  }).catch((error) => {
    const { data } = error.response;
    dispatch(buyMoneyMarketFundLoading());
    if (data.responseMessage === 'Bvn Does Not Exist') {
      const message = 'Kindly add your bvn details in other to buy a fund.';
      toastr.error(message);
      dispatch(buyMoneyMarketFundError(message));
    } else {
      dispatch(buyMoneyMarketFundError(data.responseMessage));
      toastr.error(data.responseMessage);
    }

    throw error;
  });
};

export default buyMoneyMarketMutualFund;
