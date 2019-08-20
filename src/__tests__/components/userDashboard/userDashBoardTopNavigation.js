import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserDashBoardPageTopNavigation from
  '../../../components/dashboard.components/userDashBoard.components/UserDashBoardPage';

Enzyme.configure({ adapter: new Adapter() });

describe('UserDashBoardPageTopNavigation component', () => {
  test('renders', () => {
    const wrapper = shallow(<UserDashBoardPageTopNavigation />);
    expect(wrapper.exists()).toBe(true);
  });
});
