import resetPassword from '../../reducers/user.password.reducers/sendPasswordLink';
import {
  RESET_PASSWORD,
  SET_RESET_PASSWORD_ERROR,
  DELETE_RESET_PASSWORD_ERROR
} from '../../actions/types';
import mockData from '../../mocks/mockData';

describe('Reset Password reducer', () => {
  it('should setup default reset password value', (done) => {
    expect(resetPassword(undefined, {})).toEqual({
      success: false,
      error: '',
      resetPassword: {}
    });
    done();
  });
  it('should set the current user when passed RESET_PASSWORD', (done) => {
    const state = {};
    const users = mockData.loginDetails;

    const action = {
      type: RESET_PASSWORD,
      PasswordReset: users.email
    };
    const newState = resetPassword(state, action);
    expect(newState.success).toEqual(true);
    expect(newState.resetPassword).toEqual(users.email);
    done();
  });
  it('should set the current user to empty when passed SET_CURRENT_USER_ERROR', (done) => {
    const state = {};
    const error = mockData.loginDetailsError.email;
    const { empty } = mockData;

    const action = {
      type: SET_RESET_PASSWORD_ERROR,
      error
    };
    const newState = resetPassword(state, action);
    expect(newState.success).toEqual(false);
    expect(newState.error).toEqual(empty);
    done();
  });
  it('should set the error to an empty object when passed DELETE_RESET_PASSWORD_ERROR', (done) => {
    const state = {};
    const error = '';

    const action = {
      type: DELETE_RESET_PASSWORD_ERROR
    };
    const newState = resetPassword(state, action);
    expect(newState.error).toEqual(error);
    done();
  });
});
