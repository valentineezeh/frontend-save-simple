import loginReducer from '../../reducers/auth.reducers/user.login.reducer';
import {
  LOGIN_USER,
  SET_CURRENT_USER_ERROR,
  DELETE_ERROR_MESSAGE
} from '../../actions/types';
import mockData from '../../mocks/mockData';

describe('Login Reducer', () => {
  it('should return the initial state', (done) => {
    expect(loginReducer(undefined, {})).toEqual({
      isAuthenticated: false,
      user: {},
      error: ''
    });
    done();
  });
  it('should set the current user when passed LOGIN_USER', (done) => {
    const state = {};
    const users = mockData.loginDetails;

    const action = {
      type: LOGIN_USER,
      LoginUser: users
    };
    const newState = loginReducer(state, action);
    expect(newState.isAuthenticated).toEqual(true);
    expect(newState.user.email).toEqual(users.email);
    done();
  });
  it('should set the current user to empty when passed SET_CURRENT_USER_ERROR', (done) => {
    const state = {};
    const error = mockData.loginDetailsError;
    const { empty } = mockData;

    const action = {
      type: SET_CURRENT_USER_ERROR,
      error
    };
    const newState = loginReducer(state, action);
    expect(newState.isAuthenticated).toEqual(false);
    expect(newState.error.email).toEqual(empty);
    done();
  });
  it('should set the error to an empty object when passed DELETE_ERROR_MESSAGE', (done) => {
    const state = {};
    const error = '';

    const action = {
      type: DELETE_ERROR_MESSAGE
    };
    const newState = loginReducer(state, action);
    expect(newState.error).toEqual(error);
    done();
  });
});
