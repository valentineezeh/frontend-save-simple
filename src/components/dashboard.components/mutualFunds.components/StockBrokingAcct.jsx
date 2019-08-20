import React, { Component } from 'react';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';

/**
 * @class CreateStockAccount
 */
class StockBrokingAccount extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const stockBroking = (
      <section className="body_space">
        <div className="empty_savings_page">
          <div className="empty_savings_page_texts">
            <h2>
              {' '}
              <b>
            You need to open a Meristem Stock Broking Account
              </b>
            </h2>

            <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              {' '}
              <br />
              {' '}
commodo ligula eget dolor. Aenean massa.
            </p>

            <button type="button">
            Get Started
            </button>
          </div>
        </div>
      </section>
    );
    return (
      <>
        <DashboardMobileNav />
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {stockBroking}
        </div>
      </>
    );
  }
}

export default StockBrokingAccount;
