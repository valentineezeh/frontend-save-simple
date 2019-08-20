import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import routes from '../../constants/routes';
import config from '../../config/index';
import UserLoginRequest, {
  setCurrentUserError,
  deleteErrorMessages
} from '../../actions/auth.actions/user.login.action';
import {
  LOGIN_USER,
  SET_CURRENT_USER_ERROR,
  DELETE_ERROR_MESSAGE
} from '../../actions/types';
import mockData from '../../mocks/mockData';
import mockCookieStorage from '../../mocks/mockCookiesStorage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

window.Cookies = mockCookieStorage;

describe('Login Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('create set LOGIN_USER when login action is successful', (done) => {
    const { authResponse, loginDetails } = mockData;
    moxios.stubRequest(`${config.apiUrl}${routes.SIGN_IN}`, {
      status: 200,
      response: authResponse.data
    });

    const expectedActions = [
      {
        LoginUser: authResponse.data,
        type: LOGIN_USER,
      },
    ];
    const store = mockStore({});
    store.dispatch(UserLoginRequest(loginDetails)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
  it('creates SET_CURRENT_USER_ERROR when login is not successful', () => {
    const { loginError } = mockData;
    const action = setCurrentUserError(loginError.response.data.responseMessage);
    expect(action).toEqual({
      type: SET_CURRENT_USER_ERROR,
      error: loginError.response.data.responseMessage
    });
  });

  it('creates DELETE_ERROR_MESSAGE when user enters valid credentials', () => {
    const action = deleteErrorMessages();

    expect(action).toEqual({
      type: DELETE_ERROR_MESSAGE,
    });
  });
});
