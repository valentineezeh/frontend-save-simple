import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignupForm } from '../../../components/user.authentication.components/auth.components/SignUpForm';

Enzyme.configure({ adapter: new Adapter() });


const setUp = () => {
  const props = {
    signUp: jest.fn().mockResolvedValue(Promise.resolve()),
    auth: false,
    router: undefined,
    deleteError: jest.fn(),
    userProfile: jest.fn()
  };
  return shallow(<SignupForm {...props} />);
};

describe('SignUp page component', () => {
  describe('SignUp component snapshot', () => {
    it('should render with right amount of elements', () => {
      const { wrapper } = setUp();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
