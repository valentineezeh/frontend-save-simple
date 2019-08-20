import isEmpty from 'is-empty';
import { TREAT_GROUP_NOTIFICATION_INVITATION, TREAT_GROUP_INVITATION_LOADING } from
  '../../actions/types';

const initialState = {
  success: false,
  treatNotification: {},
  treatNotificationLoading: false,
};

const treatUserGroupInvitation = (state = initialState, action) => {
  switch (action.type) {
    case TREAT_GROUP_NOTIFICATION_INVITATION:
      return {
        treatNotification: action.GroupInvitation,
        success: !isEmpty(action.GroupInvitation),
        treatNotificationLoading: false,
      };
    case TREAT_GROUP_INVITATION_LOADING:
      return {
        ...state,
        treatNotificationLoading: true
      };
    default: return state;
  }
};

export default treatUserGroupInvitation;
