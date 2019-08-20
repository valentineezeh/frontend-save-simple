import { GET_ALL_BANKS } from '../../actions/types';

const initialState = {
  getAllBanks: {}
};

const getAllBanks = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BANKS:
      return {
        ...state,
        getAllBanks: action.allBanks
      };
    default: return state;
  }
};

export default getAllBanks;
