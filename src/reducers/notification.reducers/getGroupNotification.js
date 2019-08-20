import { GET_GROUP_INVITATION, GET_GROUP_INVITATION_LOADING } from '../../actions/types';

const initialState = {
  groupInvitation: {},
  loading: false
};

const userGroupInvitations = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUP_INVITATION:
      return {
        ...state,
        groupInvitation: action.groupInvitation,
        loading: false
      };
    case GET_GROUP_INVITATION_LOADING:
      return {
        ...state,
        loading: true
      };
    default: return state;
  }
};

export default userGroupInvitations;
