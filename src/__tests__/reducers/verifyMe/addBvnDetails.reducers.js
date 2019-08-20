import addBvn from
  '../../../reducers/verifyMe.reducers/addBvnDetails';
import { ADD_BVN_DETAILS } from '../../../actions/types';
import mockData from '../../../mocks/mockData';

describe('Add Bvn details reducer', () => {
  it('should setup default add bvn details', (done) => {
    expect(addBvn(undefined, {})).toEqual({
      success: false,
      addBvn: {}
    });
    done();
  });
  it('should implement the add bvn details when passed ADD_BVN_DETAILS', (done) => {
    const state = {};
    const { addBvnDetails } = mockData;
    const action = {
      type: ADD_BVN_DETAILS,
      AddBvnDetails: addBvnDetails
    };
    const newState = addBvn(state, action);
    expect(newState.success).toEqual(true);
    expect(newState.addBvn).toEqual(addBvnDetails);
    done();
  });
});
