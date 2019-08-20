import Cookie from 'cookies-js';
import Cookies from 'js-cookie';
import toastr from 'toastr';
import { LOGOUT_USER } from '../types';

export const logoutCurrentUser = () => ({
  type: LOGOUT_USER
});

const logoutAction = status => (dispatch) => {
  Cookie.expire('jwtToken');
  Cookie.expire('getB');
  Cookie.expire('otpRef');
  Cookie.expire('ref');
  Cookie.expire('customerId');
  Cookie.expire('actionType');
  Cookie.expire('amt');
  Cookie.expire('fundingSource');
  Cookie.expire('newFixSavingObje');
  Cookie.expire('saveCard');
  Cookie.expire('newImpFixObj');
  Cookie.expire('savingId');
  Cookies.remove('newEthSavingObj');
  Cookie.expire('newImpEthSavingObj');
  Cookie.expire('isA');
  Cookie.expire('getId');
  Cookie.expire('planType');
  Cookie.expire('action');
  Cookie.expire('payload');
  Cookie.expire('username');
  Cookies.remove('newPayLoad');
  Cookie.expire('mutual-Modal');
  if (status === 401) {
    toastr.error('For security reasons, your session has expired. Please re-login');
  } else {
    toastr.success('Goodbye! Come again soon.');
  }
  dispatch(logoutCurrentUser({}));
};

export default logoutAction;
