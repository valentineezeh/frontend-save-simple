import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';

/**
 * @class MutualFundSavingPlans
 */
class MutualFundSavingPlans extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const mutualFundSavingPlans = (
      <section className="body_space">
        <div className="mutual_card_title">
          <div className="mutual_card_title_text">
            <h4>
            Mutual funds
            </h4>
            <p>
            Select your mutaul funds plan of interest
            </p>
          </div>
        </div>
        <div className="card_section">
          <div className="dashB_cards_mutual card_for_mutual mmmf_bg m_fund">
            <Link to="/mutual-market-fund">
              <div className="top">
                <div>
                  <h4>
                 Money Market Mutual Fund
                  </h4>
                </div>
              </div>
              <div className="middle">
                <p>
                This Fund invests in low risk, short-term securities such as Government securities, Bank placements and others including Commercial Papers and promissory notes...
                </p>
                <br />
              </div>
              <div className="bottom">
                <div className="">
                  <p>
                    <Link to="/mutual-market-fund">
            LEARN MORE
                    </Link>
                  </p>
                </div>
              </div>
            </Link>
          </div>


          <div className="dashB_cards_mutual card_for_mutual memmf_bg m_fund">
            <Link to="/mutual-equity-fund"
              style={{ textDecoration: 'none' }}
            >
              <div className="top">
                <div>
                  <h4>
                Equity Market Mutual Fund
                  </h4>
                </div>
              </div>
              <div className="middle">
                <p>
                The Equity Market Fund is for investors who are willing to take more risk for better returns on investment..
                </p>
                <br />
              </div>
              <div className="bottom">
                <div className="">
                  <p>
                    <Link to="/mutual-equity-fund">
                    LEARN MORE
                    </Link>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="dashB_cards_mutual card_for_mutual etfs_bg m_fund">
            <Link to="/exchange-trade"
              style={{ textDecoration: 'none' }}
            >
              <div className="top">
                <div>
                  <h4>
                ETFs
                  </h4>
                </div>
              </div>
              <div className="middle">
                <p style={{ color: 'white' }}>
                MGS consist of portfolios invested in equity securities
                that have had consistent earnings surprise and earnings
                growth potential.
                </p>
                <br />
              </div>
              <div className="bottom">
                <div className="">
                  <p>
                    <Link to="#">
                    LEARN MORE
                    </Link>
                  </p>
                </div>
              </div>

            </Link>
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
          {mutualFundSavingPlans}
        </div>
      </>
    );
  }
}

export default MutualFundSavingPlans;
