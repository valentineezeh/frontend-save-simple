import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import BvnVerificationPage, { BvnVerificationForm } from
  '../../../components/user.authentication.components/verifyMe.components/verifyBvn.components/BvnVerificationPage';
import mockData from '../../../mocks/mockData';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const createMockStore = configureMockStore([thunk]);

describe('Verify User BVN', () => {
  beforeEach(() => {
    const props = {
      VerifyBvnRequest: jest.fn().mockResolvedValue(Promise.resolve()),
      success: false
    };
    wrapper = shallow(<BvnVerificationForm {...props} />);
  });
  it('should render a snapshot of the verify bvn component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should set bvn value when bvn changes', () => {
    const { bvnDetails } = mockData;
    const event = {
      target: {
        name: 'bvn',
        value: bvnDetails.bvn
      }
    };
    const bvn = wrapper.find('TextField');
    bvn.simulate('change', event);

    const expectedBvn = bvnDetails.bvn;
    expect(wrapper.instance().state.bvn).toBe(expectedBvn);
  });
  it('should call verifyBvnRequest props for a valid form submission', () => {
    const { bvnDetails } = mockData;
    const event = {
      preventDefault: jest.fn(),
    };
    const verifyBvn = wrapper.find('form');
    wrapper.setState(bvnDetails);
    verifyBvn.simulate('click', event);
  });
  it('should return error for invalid form submission', () => {
    wrapper.find('form').simulate('click', {
      preventDefault: jest.fn()
    });
    expect(wrapper.state('error')).not.toBe({});
    expect(wrapper).toMatchSnapshot();
  });
  test('should call the dispatch mapped to the props', () => {
    const store = createMockStore({});
    const wrapper2 = shallow(
      <BvnVerificationPage.WrappedComponent store={store} />
    );
    expect(wrapper2).toMatchSnapshot();
  });
});
