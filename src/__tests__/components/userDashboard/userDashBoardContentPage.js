import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserDashBoardContentPage from
  '../../../components/dashboard.components/userDashBoard.components/userDashBoardContent/UserDashBoardContentPage';

Enzyme.configure({ adapter: new Adapter() });

describe('UserDashBoardContentPage component', () => {
  test('renders', () => {
    const wrapper = shallow(<UserDashBoardContentPage />);
    expect(wrapper.exists()).toBe(true);
  });
});
