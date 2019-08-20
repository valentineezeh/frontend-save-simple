import { GET_CUSTOMER_CARDS } from '../../actions/types';

const initialState = {
  customerCards: {}
};

const getCards = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_CARDS:
      return {
        ...state,
        customerCards: action.cards
      };
    default: return state;
  }
};

export default getCards;
