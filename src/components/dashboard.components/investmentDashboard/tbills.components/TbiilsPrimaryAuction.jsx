import React, { Component } from 'react';
import DashboardMobileNav from '../../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../../userDashBoard.components/UserDashBoardTopNavigation';
import PrimaryAuctionCards from '../../../commons/PrimaryAuctionCards';

/**
 * @class TbillsPrimaryAuction
 */
class TbillsPrimaryAuction extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const tbillsPrimaryAuction = (
      <section className="body_space">
        <div className="Primary_aution_title">
          <p>
            Primary Auction
          </p>
        </div>
        <div className="auctions_container">
          <PrimaryAuctionCards
            auctionTitle="Aution 1"
            investAmountOne="₦ 55,000.00"
            investAmountTwo="₦ 155,000.00"
            interestRate="13% monthly"
            tenour="5 Months"
          />
          <PrimaryAuctionCards
            auctionTitle="Aution 2"
            investAmountOne="₦ 55,000.00"
            investAmountTwo="₦ 155,000.00"
            interestRate="13% monthly"
            tenour="5 Months"
          />
          <PrimaryAuctionCards
            auctionTitle="Aution 3"
            investAmountOne="₦ 55,000.00"
            investAmountTwo="₦ 155,000.00"
            interestRate="13% monthly"
            tenour="5 Months"
          />
          <PrimaryAuctionCards
            auctionTitle="Aution 4"
            investAmountOne="₦ 55,000.00"
            investAmountTwo="₦ 155,000.00"
            interestRate="13% monthly"
            tenour="5 Months"
          />
          <PrimaryAuctionCards
            auctionTitle="Aution 5"
            investAmountOne="₦ 55,000.00"
            investAmountTwo="₦ 155,000.00"
            interestRate="13% monthly"
            tenour="5 Months"
          />
          <PrimaryAuctionCards
            auctionTitle="Aution 6"
            investAmountOne="₦ 55,000.00"
            investAmountTwo="₦ 155,000.00"
            interestRate="13% monthly"
            tenour="5 Months"
          />
        </div>
      </section>
    );
    return (
      <>
        <DashboardMobileNav />
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {tbillsPrimaryAuction}
        </div>
      </>
    );
  }
}

export default TbillsPrimaryAuction;
