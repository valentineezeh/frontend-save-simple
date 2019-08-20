import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import SendPasswordLinkPage, { SendPasswordLinkForm } from
  '../../../components/user.authentication.components/recover.password.components/SendPasswordLinkPage';
import mockData from '../../../mocks/mockData';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const createMockStore = configureMockStore([thunk]);

describe('UserResetPassword', () => {
  beforeEach(() => {
    const props = {
      UserResetPassword: jest.fn().mockResolvedValue(Promise.resolve()),
      success: false
    };
    wrapper = shallow(<SendPasswordLinkForm {...props} />);
  });
  it('should render a snapshot of the app component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should set email when email changes', () => {
    const { userEmail } = mockData;
    const event = {
      target: {
        name: 'email',
        value: userEmail.email
      }
    };
    const email = wrapper.find('TextField');
    email.simulate('change', event);

    const expectedEmail = userEmail.email;
    expect(wrapper.instance().state.email).toBe(expectedEmail);
  });
  it('should call resetPasswordRequest props for valid form submission', () => {
    const { userEmail } = mockData;
    const event = {
      preventDefault: jest.fn(),
    };
    const resetPassword = wrapper.find('form');
    wrapper.setState(userEmail);
    resetPassword.simulate('click', event);
  });
  it('should return error for invalid form submission', () => {
    wrapper.find('form').simulate('click', {
      preventDefault: jest.fn(),
    });
    expect(wrapper.state('error')).not.toBe({});
    expect(wrapper).toMatchSnapshot();
  });
  test('should call the dispatch mapped to the props', () => {
    const store = createMockStore({});
    const wrapper2 = shallow(
      <SendPasswordLinkPage.WrappedComponent store={store} />
    );
    expect(wrapper2).toMatchSnapshot();
  });
});
