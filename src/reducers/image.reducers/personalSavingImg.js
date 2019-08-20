import {
  UPLOAD_PSERSONAL_IMG_FAILED,
  UPLOAD_PSERSONAL_IMG_REQUEST,
  UPLOAD_PSERSONAL_IMG_SUCCESS,
  UPLOAD_PERSONAL_IMG_LOADING
} from '../../actions/types';

const initialState = {
  photo: '',
  error: '',
  imgLoading: false
};

const personalSavingImage = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PSERSONAL_IMG_FAILED:
      return {
        ...state,
        error: action.error,
        imgLoading: false
      };
    case UPLOAD_PSERSONAL_IMG_REQUEST:
      return {
        ...state,
        newstate: action.newstate
      };
    case UPLOAD_PSERSONAL_IMG_SUCCESS:
      return {
        ...state,
        photo: action.url,
        imgLoading: false
      };
    case UPLOAD_PERSONAL_IMG_LOADING:
      return {
        ...state,
        imgLoading: true
      };

    default:
      return state;
  }
};

export default personalSavingImage;
