import { GET_CUSTOMER_ACCOUNT } from '../../actions/types';

const initialState = {
  customerAcct: {}
};

const getCustomerAccounts = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_ACCOUNT:
      return {
        ...state,
        customerAcct: action.account
      };
    default: return state;
  }
};

export default getCustomerAccounts;
