/* eslint-disable require-jsdoc */
import {
  UPLOAD_PHOTO_REQUEST,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAILED
} from '../../actions/types';

export default function productImages(state = [], action = {}) {
  switch (action.type) {
    case UPLOAD_PHOTO_FAILED:
      return {
        ...state,
        error: action.error
      };
    case UPLOAD_PHOTO_REQUEST:
      return {
        ...state,
        newstate: action.newstate
      };
    case UPLOAD_PHOTO_SUCCESS:
      return {
        ...state,
        photo: action.url
      };

    default:
      return state;
  }
}
