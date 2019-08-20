import verifyBvn from '../../../reducers/verifyMe.reducers/verifyBvn';
import {
  VERIFY_BVN,
  SET_VERIFY_BVN_ERROR,
  DELETE_VERIFY_BVN_ERROR
} from '../../../actions/types';
import mockData from '../../../mocks/mockData';

describe('Verify Bvn reducer', () => {
  it('should setup default verify bvn value', (done) => {
    expect(verifyBvn(undefined, {})).toEqual({
      success: false,
      error: '',
      verifyBvn: {}
    });
    done();
  });
  it('should implement the verify bvn when passed VERIFY_BVN', (done) => {
    const state = {};
    const { bvnDetails } = mockData;
    const action = {
      type: VERIFY_BVN,
      VerifyBvn: bvnDetails.bvn
    };
    const newState = verifyBvn(state, action);
    expect(newState.success).toEqual(true);
    expect(newState.verifyBvn).toEqual(bvnDetails.bvn);
    done();
  });
  it('should set the verifyBvn to empty when passed SET_VERIFY_BVN_ERROR', (done) => {
    const state = {};
    const error = '';
    const { empty } = mockData;

    const action = {
      type: SET_VERIFY_BVN_ERROR,
      error
    };
    const newState = verifyBvn(state, action);
    expect(newState.success).toEqual(false);
    expect(newState.error).toEqual(empty);
    done();
  });
  it('should set the error to an empty object when passed DELETE_VERIFY_BVN_ERROR', (done) => {
    const state = {};
    const error = '';

    const action = {
      type: DELETE_VERIFY_BVN_ERROR
    };
    const newState = verifyBvn(state, action);
    expect(newState.error).toEqual(error);
    done();
  });
});
