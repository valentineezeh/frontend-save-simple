import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import routes from '../../../constants/routes';
import config from '../../../config/index';
import {
  VERIFY_BVN,
  SET_VERIFY_BVN_ERROR,
  DELETE_VERIFY_BVN_ERROR
} from '../../../actions/types';
import verifyBvnRequest, { verifyBvn, setVerifyBvnError, deleteVerifyBvnError } from
  '../../../actions/verifyMe.actions/verifyBvn.action';
import mockData from '../../../mocks/mockData';
import mockCookieStorage from '../../../mocks/mockCookiesStorage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

window.Cookies = mockCookieStorage;

describe('Verify Bvn Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('should setup the verify bvn on success action object', () => {
    const { bvnDetails } = mockData;
    const action = verifyBvn(bvnDetails.bvn);
    expect(action).toEqual({
      type: VERIFY_BVN,
      VerifyBvn: bvnDetails.bvn
    });
  });
  it('should setup verify bvn error on failure in the action object', () => {
    const verifyBvnError = '';
    const action = setVerifyBvnError(verifyBvnError);
    expect(action).toEqual({
      type: SET_VERIFY_BVN_ERROR,
      error: verifyBvnError
    });
  });
  it('should throw an error when an invalid bvn is passed', (done) => {
    const { bvnDetails } = mockData;
    moxios.stubRequest(`${config.apiUrl}${routes.VERIFYBVN}`, {
      status: 200,
      response: 'BVN Verification failed.'
    });
    const expectedActions = [
      {
        type: VERIFY_BVN,
        VerifyBvn: 'BVN Verification failed.'
      }
    ];
    const store = mockStore({});
    store.dispatch(verifyBvnRequest(bvnDetails)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
    done();
  });
  it('creates DELETE_VERIFY_BVN_ERROR when user enters invalid bvn numbers', () => {
    const action = deleteVerifyBvnError();

    expect(action).toEqual({
      type: DELETE_VERIFY_BVN_ERROR,
    });
  });
});
