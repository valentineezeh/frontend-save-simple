import isEmpty from 'is-empty';
import {
  ADD_CARD_DETAILS_SUCCESS,
  ADD_CARD_DETAILS_ERROR,
  DELETE_ADD_CARD_DETAILS_ERROR,
  ADD_IS_LOADING
} from '../../actions/types';

const initialState = {
  success: false,
  addCard: {},
  error: '',
  addNewCardloading: false
};

const addCardDetails = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_DETAILS_SUCCESS:
      return {
        ...state,
        success: !isEmpty(action.addCardDetails),
        addCard: action.addCardDetails,
        addNewCardloading: false
      };

    case ADD_CARD_DETAILS_ERROR:
      return {
        ...state,
        error: action.error,
        addNewloading: false
      };

    case DELETE_ADD_CARD_DETAILS_ERROR:
      return {
        ...state,
        error: ''
      };
    case ADD_IS_LOADING:
      return {
        ...state,
        addNewCardloading: true
      };
    default: return state;
  }
};

export default addCardDetails;
