import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserDashBoardSideNavigation from
  '../../../components/dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';

Enzyme.configure({ adapter: new Adapter() });

describe('UserDashBoardSideNavigation component', () => {
  test('renders', () => {
    const wrapper = shallow(<UserDashBoardSideNavigation />);
    expect(wrapper.exists()).toBe(true);
  });
});
