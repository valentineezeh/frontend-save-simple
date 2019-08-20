import isEmpty from 'is-empty';
import { ADD_BVN_DETAILS } from '../../actions/types';

const initialState = {
  success: false,
  addBvn: {}
};

const addBvn = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BVN_DETAILS:
      return {
        ...state,
        success: !isEmpty(action.AddBvnDetails),
        addBvn: action.AddBvnDetails
      };
    default: return state;
  }
};

export default addBvn;
