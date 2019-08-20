import React, { Component } from 'react';
import UserDashBoardTopNavigation from './UserDashBoardTopNavigation';
import UserDashBoardMainContentPage from './UserDashBoardMainContentPage';
import UserDashBoardSideNavigation from './UserDashBoardSideNavigation';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';

/**
 * @class UserDashBoardContentPage
 */
class UserDashBoardContentPage extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <>
        <DashboardMobileNav />
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          <UserDashBoardMainContentPage />
        </div>
      </>
    );
  }
}

export default UserDashBoardContentPage;
