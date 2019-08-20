import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import ChangePasswordPage, { ChangePasswordForm } from
  '../../../components/user.authentication.components/forget.password.components/ChangePasswordPage';
import mockData from '../../../mocks/mockData';

Enzyme.configure({ adapter: new Adapter() });

let UserChangePassword;
let wrapper;

const createMockStore = configureMockStore([thunk]);

describe('UserChangePassword', () => {
  beforeEach(() => {
    const props = {
      UserChangePassword: jest.fn().mockResolvedValue(Promise.resolve()),
      success: false,
      error: {}
    };
    wrapper = shallow(<ChangePasswordForm {...props} />);
  });
  it('should render a snapshot of the app component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should set new password on input change', () => {
    const { changePasswordDetails } = mockData;
    const name = 'newPassword';
    const value = changePasswordDetails.newPassword;
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
  it('should set confirm password on input change', () => {
    const { changePasswordDetails } = mockData;
    const name = 'confirmPassword';
    const value = changePasswordDetails.confirmPassword;
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
  it('should call UserChangePasswordRequest props for valid form submission', () => {
    const { changePasswordDetails } = mockData;
    const event = {
      preventDefault: jest.fn(),
    };
    const changePassword = wrapper.find('form');
    wrapper.setState(changePasswordDetails);
    changePassword.simulate('click', event);
  });
  it('should return error for invalid form submission', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper.state('error')).not.toBe({});
    expect(wrapper).toMatchSnapshot();
  });
  it('should return error for invalid form submission', () => {
    UserChangePassword = jest.fn(() => Promise.reject());
    const wrapper3 = shallow(
      <ChangePasswordPage.WrappedComponent UserChangePassword={UserChangePassword} />
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
      <ChangePasswordPage.WrappedComponent store={store} />
    );
    expect(wrapper2).toMatchSnapshot();
  });
});
