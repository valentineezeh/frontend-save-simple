import isEmpty from 'is-empty';
import { ADD_BANK_ACCOUNT } from '../../actions/types';

const initialState = {
  success: false,
  addBank: {}
};

const addBankDetails = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BANK_ACCOUNT:
      return {
        ...state,
        success: !isEmpty(action.addBank),
        addBank: action.addBank
      };
    default: return state;
  }
};

export default addBankDetails;
