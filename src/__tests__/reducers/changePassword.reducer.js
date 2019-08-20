import changePassword from '../../reducers/user.password.reducers/changePassword';
import {
  CHANGE_PASSWORD,
  SET_CHANGE_PASSWORD_ERROR,
  DELETE_CHANGE_PASSWORD_ERROR
} from '../../actions/types';
import mockData from '../../mocks/mockData';

describe('Change Password Reducer', () => {
  it('should return the intial state', (done) => {
    expect(changePassword(undefined, {})).toEqual({
      success: false,
      error: '',
      changePassword: {}
    });
    done();
  });
  it('should set the current user when passed LOGIN_USER', (done) => {
    const state = {};
    const userPasswordDetails = mockData.changePasswordDetails;

    const action = {
      type: CHANGE_PASSWORD,
      PasswordChange: userPasswordDetails
    };
    const newState = changePassword(state, action);
    expect(newState.success).toEqual(true);
    expect(newState.changePassword).toEqual(userPasswordDetails);
    done();
  });
  it('should set the current user to empty when passed SET_CHANGE_PASSWORD_ERROR', (done) => {
    const state = {};
    const error = '';
    const { empty } = mockData;

    const action = {
      type: SET_CHANGE_PASSWORD_ERROR,
      error
    };
    const newState = changePassword(state, action);
    expect(newState.success).toEqual(false);
    expect(newState.error).toEqual(empty);
    done();
  });
  it('should set the error to an empty object when passed DELETE_CHANGE_PASSWORD_ERROR', (done) => {
    const state = {};
    const error = '';

    const action = {
      type: DELETE_CHANGE_PASSWORD_ERROR
    };
    const newState = changePassword(state, action);
    expect(newState.error).toEqual(error);
    done();
  });
});
