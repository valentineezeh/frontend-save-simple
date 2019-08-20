import { SINGLE_SAVING_DETAILS } from '../../actions/types';

const initialState = {
  savingDetail: {}
};

const getSavingDetail = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_SAVING_DETAILS:
      return {
        ...state,
        savingDetail: action.savingDetails
      };
    default: return state;
  }
};

export default getSavingDetail;
