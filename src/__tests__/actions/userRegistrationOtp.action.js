import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import CompleteUserRegistration, {
  completeUserRegistration,
  setCompleteRegistartionError,
  deleteCompleteRegistrationErrorMessages
} from '../../actions/auth.actions/user.complete.registration.action';
import {
  COMPLETE_REGISTRATION,
  SET_COMPLETE_REGISTRATION_ERROR,
  DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE
} from '../../actions/types';
import mockData from '../../mocks/mockData';

const createMockStore = configureMockStore([thunk]);

describe('Verify OTP Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('create the COMPLETE_REGISTRATION when complete registration action is successful', () => {
    const { otpDetails } = mockData;
    const action = completeUserRegistration(otpDetails);
    expect(action).toEqual({
      type: COMPLETE_REGISTRATION,
      completeRegistration: otpDetails,
    });
  });
  it('should setup complete registration on failure on action object', () => {
    const { verifyOtpError } = mockData;
    const action = setCompleteRegistartionError(verifyOtpError);
    expect(action).toEqual({
      type: SET_COMPLETE_REGISTRATION_ERROR,
      error: verifyOtpError
    });
  });
  it('should send a complete user registration', (done) => {
    const { otpDetails, completeRegistration } = mockData;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: completeRegistration
      });
    });
    const expectedActions = [
      {
        type: COMPLETE_REGISTRATION,
        completeRegistration
      }
    ];
    const store = createMockStore({});
    store.dispatch(CompleteUserRegistration(otpDetails)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
    done();
  });
  it('creates DELETE_ERROR_MESSAGE when user enters valid credentials', () => {
    const action = deleteCompleteRegistrationErrorMessages();

    expect(action).toEqual({
      type: DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE,
    });
  });
});
