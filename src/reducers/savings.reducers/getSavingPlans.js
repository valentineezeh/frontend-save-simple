import { GET_SAVING_PLANS } from '../../actions/types';

const initialState = {
  savingPlans: {}
};

const getUserSavingPlans = (state = initialState, action) => {
  switch (action.type) {
    case GET_SAVING_PLANS:
      return {
        ...state,
        savingPlans: action.savingPlans
      };
    default: return state;
  }
};

export default getUserSavingPlans;
