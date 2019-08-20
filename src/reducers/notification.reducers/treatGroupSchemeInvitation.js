import isEmpty from 'is-empty';
import {
  TREAT_GROUP_SCHEME_NOTIFICATION_INVITATION,
  TREAT_GROUP_SCHEME_INVITATION_LOADING
} from
  '../../actions/types';

const initialState = {
  success: false,
  treatGroupSchemeNotification: {},
  treatGroupSchemeNotificationLoading: false,
};

const treatUserGroupSchemeInvitation = (state = initialState, action) => {
  switch (action.type) {
    case TREAT_GROUP_SCHEME_NOTIFICATION_INVITATION:
      return {
        treatGroupSchemeNotification: action.groupScheme,
        success: !isEmpty(action.groupScheme),
        treatGroupSchemeNotificationLoading: false,
      };
    case TREAT_GROUP_SCHEME_INVITATION_LOADING:
      return {
        ...state,
        treatGroupSchemeNotificationLoading: true
      };
    default: return state;
  }
};

export default treatUserGroupSchemeInvitation;
