import React, { Component } from 'react';
import DashboardMobileNav from '../../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../../userDashBoard.components/UserDashBoardTopNavigation';

/**
 * @class MtlipSecondaryAuction
 */
class MtlipSecondaryAuction extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const mtlipSecondaryAuction = (
      <section className="body_space">
        <div className="secondary_auction_form_main_wrapper">
          <div className="sec_auc_form">
            <div className="sec_auc_form_title">
              <h5>
        Secondary Auction
              </h5>
              <p>
        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.
              </p>
            </div>

            <div className="icon_embedded_input">
              <div className="input_icon">
                <p style={{ color: 'white' }}>
                 ₦
                </p>
              </div>
              <div className="input_wrapper">
                <input type="text" name="" id="" placeholder="Enter Amount" />
              </div>
            </div>

            <div className="input_div">
              <input type="text" name="" id="" placeholder="Maturity date" />
            </div>

            <div className="input_div">
              <select name="cars"
                id="savingFrequencyOption"
              >
                <option value="volvo" selected>Interest Preference</option>
                <option value="saab">Upfront</option>
                <option value="fiat">Capitalise</option>
              </select>
            </div>

            <div className="exp_payoff">

              <div>
                <p>
            Expected Payoff
                </p>
                <h4>
            ₦ 265,500.00
                </h4>
              </div>
              <div>
                <p>
            Interest Rate
                </p>
                <h4>
            10%
                </h4>
              </div>
            </div>

            <div className="btn_full_width green_btn">
              <button type="button">
                {' '}
FINALIZE
              </button>
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
          {mtlipSecondaryAuction}
        </div>
      </>
    );
  }
}

export default MtlipSecondaryAuction;
