import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import mockData from '../../mocks/mockData';
import { RESET_PASSWORD, SET_RESET_PASSWORD_ERROR, DELETE_RESET_PASSWORD_ERROR } from '../../actions/types';
import userResetPassword, { deleteResetPasswordError, resetPassword, setResetPasswordError } from '../../actions/password.actions/sendPasswordLinkActions';

const createMockStore = configureMockStore([thunk]);

describe('Reset Password Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should setup reset password on success action object', () => {
    const { loginDetails } = mockData;
    const action = resetPassword(loginDetails.email);
    expect(action).toEqual({
      type: RESET_PASSWORD,
      PasswordReset: loginDetails.email
    });
  });
  it('should setup reset password on failure action object', () => {
    const { resetPasswordError } = mockData;
    const action = setResetPasswordError(resetPasswordError);
    expect(action).toEqual({
      type: SET_RESET_PASSWORD_ERROR,
      error: resetPasswordError
    });
  });
  it('should send a auto generated password when a valid email is provided', (done) => {
    const { loginDetails, PasswordReset } = mockData;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: PasswordReset
      });
    });
    const expectedActions = [
      {
        type: RESET_PASSWORD,
        PasswordReset
      }
    ];
    const store = createMockStore({}, done);
    return store.dispatch(userResetPassword(loginDetails.email)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
  it('creates DELETE_ERROR_MESSAGE when user enters valid credentials', () => {
    const action = deleteResetPasswordError();

    expect(action).toEqual({
      type: DELETE_RESET_PASSWORD_ERROR,
    });
  });
});
