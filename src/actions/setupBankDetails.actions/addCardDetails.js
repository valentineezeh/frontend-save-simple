import axios from 'axios';
import toastr from 'toastr';
import Cookie from 'cookies-js';
import {
  ADD_CARD_DETAILS_SUCCESS,
  ADD_CARD_DETAILS_ERROR,
  DELETE_ADD_CARD_DETAILS_ERROR,
  IS_LOADING
} from '../types';
import logoutAction from '../auth.actions/logout.action';

export const addCardDetailsSuccess = addCardDetails => ({
  type: ADD_CARD_DETAILS_SUCCESS,
  addCardDetails
});

export const addCardDetailsError = error => ({
  type: ADD_CARD_DETAILS_ERROR,
  error
});

export const deleteAddCardDetailError = () => ({
  type: DELETE_ADD_CARD_DETAILS_ERROR
});

const isLoading = () => ({
  type: IS_LOADING
});

const addCardDetails = cardDetails => (dispatch) => {
  dispatch(isLoading());
  return axios.post(`${process.env.REACT_APP_INNSTA_PAY_URL}/card/charge`, cardDetails, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_INNSTA_PAY_TOKEN}`
    }
  }).then((response) => {
    dispatch(isLoading());
    Cookie.set('ref', response.data.ref);
    dispatch(addCardDetailsSuccess(response.data));
    toastr.success('Success! Card has been added.');
  }).catch((error) => {
    dispatch(isLoading());
    if (error.response === undefined) {
      window.location.href = '/error';
    }
    if (error.response.status === 401) {
      const { status } = error.response;
      dispatch(logoutAction(status));
    }
    const { data } = error.response;
    dispatch(addCardDetailsError(data));
  });
};

export default addCardDetails;
