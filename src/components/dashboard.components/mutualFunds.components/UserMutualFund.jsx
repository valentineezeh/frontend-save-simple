import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import TransactionRow from '../../user.authentication.components/transaction.components/TransactionRow';

/**
 * @class UserMutualFund
 */
class UserMutualFund extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const { mutualFundList } = this.props;
    console.log(mutualFundList);
    const userMutualFund = (
      <section className="body_space">
        <div className="mutual_card_title">
          <div className="mutual_card_title_text">
            <h4>
            My Mutual funds
            </h4>
            <p>
            Overview of mutual funss balance
            </p>
          </div>
          <div className="new_mutual_fund_link">
            <p>
              <Link to="/mutual-fund-service-plans">
                <b>
+
                  {' '}
                  {'    '}
                </b>
        Buy New Mutual Funds
              </Link>
            </p>
          </div>
        </div>

        <div className="card_section">
          <div className="dashB_cards_mutual card_for_mutual funds_bg_color m_fund">
            <div className="top">
              <div>
                <h4>
            MMMF
                </h4>
              </div>
              <div>
                <p>
                  <Link to="/mutual-dept-details"
                    className="my_fund_see_details_link"
                  >
            See Details
                  </Link>
                </p>
              </div>

            </div>
            <div className="middle">
              <h2>
        ₦ 00,000.00
              </h2>
              <br />
              <p>
        CURRENT BALANCE
              </p>
              <br />
            </div>
            <div className="row bottom">
              <div className="col-sm-06">
                <h6>
            ₦ 00,000.00
                </h6>
                <p>
            Total Earnings
                </p>
              </div>
              <div className="col-sm-06" id="mutualCard">
                <h6>
                  0% Monthly
                </h6>
                <p>
                   Interest
                </p>

              </div>
            </div>
          </div>

          <div className="dashB_cards_mutual card_for_mutual funds_bg_color m_fund">
            <div className="top">
              <div>
                <h4>
            ETFs
                </h4>
              </div>
              <div>
                <p>
                  <Link to="#" data-toggle="modal" data-target="#fundWallet" className="my_fund_see_details_link">
            See Details
                  </Link>
                </p>
              </div>

            </div>
            <div className="middle">
              <h2>
        ₦ 00,000.00
              </h2>
              <br />
              <p>
        CURRENT BALANCE
              </p>
              <br />
            </div>
            <div className="row bottom">
              <div className="col-sm-06">
                <h6>
            ₦ 00,000.00
                </h6>
                <p>
            Total Earnings
                </p>
              </div>
              <div className="col-sm-06" id="mutualCard">
                <h6>
                  0% Monthly
                </h6>
                <p>
                   Interest
                </p>

              </div>
            </div>
          </div>

          <div className="dashB_cards_mutual card_for_mutual funds_bg_color m_fund">
            <div className="top">
              <div>
                <h4>
            MMEF
                </h4>
              </div>
              <div>
                <p>
                  <Link to="#" data-toggle="modal" data-target="#fundWallet" className="my_fund_see_details_link">
            See Details
                  </Link>
                </p>
              </div>

            </div>
            <div className="middle">
              <h2>
        ₦ 00,000.00
              </h2>
              <br />
              <p>
        CURRENT BALANCE
              </p>
              <br />
            </div>
            <div className="row bottom">
              <div className="col-sm-06">
                <h6>
            ₦ 00,000.00
                </h6>
                <p>
            Total Earnings
                </p>
              </div>
              <div className="col-sm-06" id="mutualCard">
                <h6>
                  0% Monthly
                </h6>
                <p>
                   Interest
                </p>

              </div>
            </div>
          </div>
        </div>
        <div className="m_fund_table_title">
          <div>
            <h4>
            My portfolio
            </h4>
          </div>
          <div>
            <p style={{ fontWeight: '50px', fontFamily: 'sans', fontSize: '20px' }}>
              <Link to="#">
                More portfolio
              </Link>
            </p>
          </div>
        </div>
        <div className="history_table_wrapper">
        <div className="container">
        <div className="history_table" style={{
                      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.15)',
                      backgroundColor: '#FFFFFF',
                      padding: '15px'
                    }}
                    >
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>KIND</th>
                            <th>AMOUNT</th>
                            <th>PLAN</th>
                            <th>DATE</th>
                            <th>TIME</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                        mutualFundList === undefined ? '' : (
                          mutualFundList.map(transact => (
                            <TransactionRow
                              key={transact.id}
                              transact={transact}
                            />
                          ))
                        )
                      }
                        </tbody>
                      </table>
                    </div>
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
          {userMutualFund}
        </div>
      </>
    );
  }
}

export default UserMutualFund;
