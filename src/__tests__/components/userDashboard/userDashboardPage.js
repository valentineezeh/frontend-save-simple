import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserDashBoardPage from
  '../../../components/dashboard.components/userDashBoard.components/UserDashBoardPage';

Enzyme.configure({ adapter: new Adapter() });

describe('UserDashBoardPage component', () => {
  test('renders', () => {
    const wrapper = shallow(<UserDashBoardPage />);
    expect(wrapper.exists()).toBe(true);
  });
});
