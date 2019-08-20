import { GET_USER_NOTIFICATION } from '../../actions/types';

const initialState = {
  userNotification: []
};

const allUserNotification = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_NOTIFICATION:
      return {
        ...state,
        userNotification: action.allNotification
      };
    default: return state;
  }
};

export default allUserNotification;
