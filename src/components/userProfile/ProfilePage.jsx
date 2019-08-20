import React, { Component } from 'react';
import UserDashBoardSideNavigation from
  '../dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';
import ProfilePageContent from './ProfilePageContent';

/**
 * @class ProfilePage
 */
export default class ProfilePage extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const profilePage = (
      <div>
        <UserDashBoardSideNavigation />
        <ProfilePageContent />
      </div>
    );
    return <div>{profilePage}</div>;
  }
}
