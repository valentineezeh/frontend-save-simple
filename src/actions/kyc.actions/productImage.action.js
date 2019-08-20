import dotenv from 'dotenv';
import axios from 'axios';
import Cookies from 'cookies-js';
import {
  UPLOAD_PHOTO_FAILED,
  UPLOAD_PHOTO_REQUEST,
  UPLOAD_PHOTO_SUCCESS
} from '../types';

dotenv.config();

const uploadPhotoRequest = newstate => ({
  type: UPLOAD_PHOTO_REQUEST,
  newstate
});

const uploadPhotoSuccess = url => ({
  type: UPLOAD_PHOTO_SUCCESS,
  url
});

const uploadPhotoFailed = error => ({
  type: UPLOAD_PHOTO_FAILED,
  error
});

// eslint-disable-next-line import/prefer-default-export
export const uploadPhoto = file => (dispatch) => {
  dispatch(uploadPhotoRequest(true));

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'fbbgswjr');
  delete axios.defaults.headers.common.Authorization;

  return axios({
    method: 'POST',
    url: 'https://api.cloudinary.com/v1_1/dzq7yvby6/image/upload',
    skipAuthorization: true,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    data: formData
  })
    .then((response) => {
      const { token } = Cookies;
      axios.defaults.headers.common.Authorization = token;
      const { url } = response.data;
      dispatch(uploadPhotoSuccess(url));
      dispatch(uploadPhotoRequest(false));
      return url;
    })
    .catch((error) => {
      dispatch(
        uploadPhotoFailed('Photo upload failed. Please try again later')
      );
      dispatch(uploadPhotoRequest(false));
    });
};
