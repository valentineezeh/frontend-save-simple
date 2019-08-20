import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';

/**
 * @class MutualDeptDetails
 */
class MutualDeptDetails extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const mutualDeptDetails = (
      <section className="body_space">
        <div className="debt_details_upper">
          <div>
            <p>
              <Link to="#">
                <i className="far fa-trash-alt" />
                    Delete
              </Link>
            </p>
          </div>
          <div>
            <button type="button">
                    Request Payout
            </button>
          </div>
        </div>
        <div className="debt_history_card">

          <div className="debt_history_card_up">
            <p>
            CURRENT BALANCE
            </p>

            <h4>
            ₦100,000.00
            </h4>
          </div>

          <div className="debt_history_card_down">
            <div>
              <p>
                INVESTMENT TENOR
              </p>
              <h6>
                    1yr. 3mo.
              </h6>
            </div>
            <div>
              <p>
                        INTEREST RATE
              </p>
              <h6>
                            10% MONTLY
              </h6>
            </div>
            <div>
              <p>
                        Expected Payout
              </p>
              <h6>
                            ₦200,000.00
              </h6>
            </div>
          </div>
        </div>
        <div className="transaction_text">
          <h4>
                    Transaction
          </h4>
        </div>
        <div className="history_table_wrapper">
          <div className="history_table">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>KIND</th>
                  <th>AMOUNT</th>
                  <th>PLAN</th>
                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="status_icon_good">
                      <i className="fas fa-arrow-circle-up" />
                      Mutual Investment
                    </div>
                  </td>
                  <td>55,000.00</td>
                  <td>Meristerm Money Market</td>
                  <td>28th Oct, 2019 10:00am</td>
                </tr>
                <tr>
                  <td>
                    <div className="status_icon_bad">
                      <i className="fas fa-arrow-circle-down" />
                      Mutual Investment
                    </div>
                  </td>
                  <td>55,000.00</td>
                  <td>Meristerm Equity Market</td>
                  <td>28th Oct, 2019 10:00am</td>
                </tr>
                <tr>
                  <td>
                    <div className="status_icon_good">
                      <i className="fas fa-arrow-circle-up" />
                      Mutual Investment
                    </div>

                  </td>
                  <td>55,000.00</td>
                  <td>Meristerm Money Market</td>
                  <td>28th Oct, 2019 10:00am</td>
                </tr>
              </tbody>
            </table>
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
          {mutualDeptDetails}
        </div>
      </>
    );
  }
}

export default MutualDeptDetails;
