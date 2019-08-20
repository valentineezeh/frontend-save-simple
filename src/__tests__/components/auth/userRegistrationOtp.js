import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import UserRegistrationOTP,
{ UserRegistrationOTPForm } from
  '../../../components/user.authentication.components/otp.authentication.components/UserRegistrationOTP';
import mockData from '../../../mocks/mockData';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const createMockStore = configureMockStore([thunk]);

describe('Complete User Registration Component', () => {
  beforeEach(() => {
    const props = {
      completeUserRegistration: jest.fn().mockResolvedValue(Promise.resolve()),
      success: false,
      error: {}
    };
    wrapper = shallow(<UserRegistrationOTPForm {...props} />);
  });
  it('should render a snapshot of the User Registartion OTP Form Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should set the otp when the otp changes', () => {
    const { otpDetails } = mockData;
    const event = {
      target: {
        name: 'otp',
        value: otpDetails.otp
      }
    };
    const otp = wrapper.find('TextField');
    otp.simulate('change', event);

    const expectedOtp = otpDetails.otp;
    expect(wrapper.instance().state.otp).toBe(expectedOtp);
  });
  it('should call the completeUserregistration props for valid form submission', () => {
    const { otpDetails } = mockData;
    const event = {
      preventDefault: jest.fn()
    };
    const CompleteUserRegistration = wrapper.find('form');
    wrapper.setState(otpDetails);
    CompleteUserRegistration.simulate('click', event);
  });
  it('should return error for invalid form submission', () => {
    wrapper.find('form').simulate('click', {
      preventDefault: jest.fn(),
    });
    expect(wrapper.state('error')).not.toBe({});
    expect(wrapper).toMatchSnapshot();
  });
  it('should call the dispatch mapped to the props', () => {
    const store = createMockStore({});
    const wrapper2 = shallow(
      <UserRegistrationOTP.WrappedComponent store={store} />
    );
    expect(wrapper2).toMatchSnapshot();
  });
});
