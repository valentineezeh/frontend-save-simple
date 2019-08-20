import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import mockData from '../../mocks/mockData';
import {
  CHANGE_PASSWORD,
  SET_CHANGE_PASSWORD_ERROR, DELETE_CHANGE_PASSWORD_ERROR
} from '../../actions/types';
import userChangePassword, {
  changePassword,
  setChangePasswordError,
  deleteChangePasswordError
} from '../../actions/password.actions/changePasswordActions';

const createMockStore = configureMockStore([thunk]);

describe('Change Password Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should setup change password on action object', () => {
    const { loginDetails } = mockData;
    const action = changePassword({
      ...loginDetails,
      newPassword: 'password',
      confirmPassword: 'password'
    });
    expect(action).toEqual({
      type: CHANGE_PASSWORD,
      PasswordChange: {
        ...loginDetails,
        newPassword: 'password',
        confirmPassword: 'password'
      }
    });
  });
  it('should setup change password on failure action', () => {
    const { changePasswordError } = mockData;
    const action = setChangePasswordError(changePasswordError);
    expect(action).toEqual({
      type: SET_CHANGE_PASSWORD_ERROR,
      error: changePasswordError
    });
  });
  it('should change a user password when valid details are inputed', (done) => {
    const { changePasswordDetails, PasswordChange } = mockData;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: PasswordChange
      });
    });
    const expectedActions = [
      {
        type: CHANGE_PASSWORD,
        PasswordChange
      }
    ];
    const store = createMockStore({}, done);
    return store.dispatch(userChangePassword(changePasswordDetails)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
  it('creates DELETE_ERROR_MESSAGE when user enters valid credentials', () => {
    const action = deleteChangePasswordError();

    expect(action).toEqual({
      type: DELETE_CHANGE_PASSWORD_ERROR,
    });
  });
});
