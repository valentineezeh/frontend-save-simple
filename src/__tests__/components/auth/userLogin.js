import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage, { LoginForm } from
  '../../../components/user.authentication.components/auth.components/LoginPage';
import mockData from '../../../mocks/mockData';

Enzyme.configure({ adapter: new Adapter() });

let userLoginRequest;
let wrapper;

const createMockStore = configureMockStore([thunk]);

describe('User Login Component', () => {
  beforeEach(() => {
    const props = {
      userLoginRequest: jest.fn().mockResolvedValue(Promise.resolve()),
      success: false,
      error: ''
    };
    wrapper = shallow(<LoginForm {...props} />);
  });
  it('should render a snapshot of the login component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should set email on input change', () => {
    const { loginDetails } = mockData;
    const name = 'email';
    const value = loginDetails.email;
    const event = {
      target: {
        name,
        value
      }
    };
    wrapper
      .find('TextField')
      .at(0)
      .simulate('change', event);
    expect(wrapper.state(name)).toBe(value);
  });
  it('should set password on input change', () => {
    const { loginDetails } = mockData;
    const name = 'password';
    const value = loginDetails.password;
    const event = {
      target: {
        name,
        value
      }
    };
    wrapper
      .find('TextField')
      .at(1)
      .simulate('change', event);
    expect(wrapper.state(name)).toBe(value);
  });
  it('should return error for invalid form submission', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper.state('error')).not.toBe({});
    expect(wrapper).toMatchSnapshot();
  });
  it('should call userLoginRequest props for valid form submission', () => {
    const { loginDetails } = mockData;
    const event = {
      preventDefault: jest.fn(),
    };
    const loginUser = wrapper.find('form');
    wrapper.setState(loginDetails);
    loginUser.simulate('click', event);
  });
  it('should return error for invalid form submission', () => {
    userLoginRequest = jest.fn(() => Promise.reject());
    const wrapper3 = shallow(
      <LoginPage.WrappedComponent userLoginRequest={userLoginRequest} />
    );
    wrapper3.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper3.state('error')).not.toBe({});
    expect(wrapper3).toMatchSnapshot();
  });
  it('should call the dispatch mapped to the props', () => {
    const store = createMockStore({});
    const wrapper2 = shallow(
      <LoginPage.WrappedComponent store={store} />
    );
    expect(wrapper2).toMatchSnapshot();
  });
});
