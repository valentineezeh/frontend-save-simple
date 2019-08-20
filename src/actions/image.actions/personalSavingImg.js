import axios from 'axios';
import Cookies from 'cookies-js';
import {
  UPLOAD_PSERSONAL_IMG_FAILED,
  UPLOAD_PSERSONAL_IMG_REQUEST,
  UPLOAD_PSERSONAL_IMG_SUCCESS,
  UPLOAD_PERSONAL_IMG_LOADING
} from '../types';

const uploadSavingImgRequest = newState => ({
  type: UPLOAD_PSERSONAL_IMG_REQUEST,
  newState
});

const uploadSavingImgSuccess = url => ({
  type: UPLOAD_PSERSONAL_IMG_SUCCESS,
  url
});

const uploadSavingImgFailed = error => ({
  type: UPLOAD_PSERSONAL_IMG_FAILED,
  error
});

const uploadImgLoading = () => ({
  type: UPLOAD_PERSONAL_IMG_LOADING,
});

const uploadPersonalSavingImg = file => (dispatch) => {
  dispatch(uploadSavingImgRequest(true));
  dispatch(uploadImgLoading());

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
   
  delete axios.defaults.headers.common.Authorization;
  return axios({
    method: 'POST',
    url: process.env.REACT_APP_CLOUDINARY_URL,
    skipAuthorization: true,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then((response) => {
    dispatch(uploadImgLoading());
    const { token } = Cookies;
    axios.defaults.headers.common.Authorization = token;
    const { url } = response.data;
    dispatch(uploadSavingImgSuccess(url));
    dispatch(uploadSavingImgRequest(false));
  }).catch((error) => {
    dispatch(uploadImgLoading());
    const errorMessage = 'Photo upload failed. Please try again later';
    dispatch(uploadSavingImgFailed(errorMessage));
    dispatch(uploadSavingImgRequest(false));
    throw error;
  });
};

export default uploadPersonalSavingImg;
