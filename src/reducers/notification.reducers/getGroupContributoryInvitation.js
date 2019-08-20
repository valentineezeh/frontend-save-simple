import { GET_GROUP_CONTRIBUTORY_INVITATION } from '../../actions/types';

const initialState = {
  groupContributoryInvitation: {},
};

const groupContributoryInvitations = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUP_CONTRIBUTORY_INVITATION:
      return {
        ...state,
        groupContributoryInvitation: action.groupContributeInvitation,
      };
    default: return state;
  }
};

export default groupContributoryInvitations;
