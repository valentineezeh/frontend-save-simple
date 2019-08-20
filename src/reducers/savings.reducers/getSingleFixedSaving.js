import { SINGLE_FIXED_SAVING_DETAILS } from '../../actions/types';

const initialState = {
  fixedSavingDetail: {}
};

const getFixedSavingDetail = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_FIXED_SAVING_DETAILS:
      return {
        ...state,
        fixedSavingDetail: action.savingFixedDetails
      };
    default: return state;
  }
};

export default getFixedSavingDetail;
