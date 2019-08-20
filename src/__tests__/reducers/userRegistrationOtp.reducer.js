import verifyUserOtp from '../../reducers/auth.reducers/otpVerificationReducer';
import {
  COMPLETE_REGISTRATION,
  SET_COMPLETE_REGISTRATION_ERROR,
  DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE
} from '../../actions/types';
import mockData from '../../mocks/mockData';

describe('User Registration OTP Verification', () => {
  it('should setup default otp value', (done) => {
    expect(verifyUserOtp(undefined, {})).toEqual({
      success: false,
      error: '',
      otpDetails: {},
    });
    done();
  });
  it('should verify the user otp when passed COMPLETE_REGISTRATION', (done) => {
    const state = {};
    const users = mockData.otpDetails;

    const action = {
      type: COMPLETE_REGISTRATION,
      completeRegistration: users
    };
    const newState = verifyUserOtp(state, action);
    expect(newState.success).toEqual(true);
    expect(newState.otpDetails).toEqual(users);
    done();
  });
  it('should set the current user to empty when passed SET_COMPLETE_REGISTRATION_ERROR', (done) => {
    const state = {};
    const error = '';
    const { empty } = mockData;

    const action = {
      type: SET_COMPLETE_REGISTRATION_ERROR,
      error
    };
    const newState = verifyUserOtp(state, action);
    expect(newState.success).toEqual(false);
    expect(newState.error).toEqual(empty);
    done();
  });
  it('should set the error to an empty object when passed DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE', (done) => {
    const state = {};
    const error = '';

    const action = {
      type: DELETE_COMPLETE_REGISTRATION_ERROR_MESSAGE
    };
    const newState = verifyUserOtp(state, action);
    expect(newState.error).toEqual(error);
    done();
  });
});
