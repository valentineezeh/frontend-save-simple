import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserDashBoardMainContent from
  '../../../components/dashboard.components/userDashBoard.components/UserDashBoardPage';

Enzyme.configure({ adapter: new Adapter() });

describe('UserDashBoardMainContent component', () => {
  test('renders', () => {
    const wrapper = shallow(<UserDashBoardMainContent />);
    expect(wrapper.exists()).toBe(true);
  });
});
