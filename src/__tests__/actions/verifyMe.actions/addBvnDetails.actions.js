import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import routes from '../../../constants/routes';
import config from '../../../config/index';
import { ADD_BVN_DETAILS } from '../../../actions/types';
import addBvnDetailsRequest, { addBvnDetail } from
  '../../../actions/verifyMe.actions/addBvnDetails.action';
import mockData from '../../../mocks/mockData';
import mockCookieStorage from '../../../mocks/mockCookiesStorage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

window.Cookies = mockCookieStorage;

describe('Add Bvn details', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('should setup the add bvn details', () => {
    const { addBvnDetails } = mockData;
    const action = addBvnDetail(addBvnDetails);
    expect(action).toEqual({
      type: ADD_BVN_DETAILS,
      AddBvnDetails: addBvnDetails
    });
  });
  it('should add user bvn details to the database', (done) => {
    const { addBvnDetails } = mockData;
    moxios.stubRequest(`${config.apiUrl}${routes.ADDBVN}`, {
      status: 200,
      response: 'Success! Bvn has been added.'
    });
    const expectedActions = [
      {
        type: ADD_BVN_DETAILS,
        AddBvnDetails: 'Success! Bvn has been added.'
      }
    ];
    const store = mockStore({});
    store.dispatch(addBvnDetailsRequest(addBvnDetails)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});
