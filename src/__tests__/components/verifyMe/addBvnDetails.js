import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import AddBvnPage, { AddBvnForm } from
  '../../../components/user.authentication.components/verifyMe.components/verifyBvn.components/AddBvnPage';
import mockData from '../../../mocks/mockData';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const createMockStore = configureMockStore([thunk]);

describe('Add Bvn details', () => {
  beforeEach(() => {
    const props = {
      AddBvnDetailsRequest: jest.fn().mockResolvedValue(Promise.resolve()),
      success: false
    };
    wrapper = shallow(<AddBvnForm {...props} />);
  });
  it('should render a snapshot of the add bvn details component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call the AddBvnDetails props for a valid form submission', () => {
    const { addBvnDetails } = mockData;
    const event = {
      preventDefault: jest.fn()
    };
    const addBvn = wrapper.find('form');
    wrapper.setState(addBvnDetails);
    addBvn.simulate('click', event);
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
      <AddBvnPage.WrappedComponent store={store} />
    );
    expect(wrapper2).toMatchSnapshot();
  });
});
