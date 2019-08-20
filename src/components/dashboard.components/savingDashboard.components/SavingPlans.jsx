import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import targetIcon from '../../../template/utils/icons/target.png';
import fixedIcon from '../../../template/utils/icons/fixed.png';
import groupIcon from '../../../template/utils/icons/group.png';
import ethicalIcon from '../../../template/utils/icons/ethical.png';

/**
 * @class SavingPlans
 */
class SavingPlans extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const savingPlans = (
      <>
        <section className="body_space" style={{
          padding: '0px'
        }}>
          <div className="savings_plan_options">
            <div className="savings_plan_options_header">
              <h4>
                Savings Plans
              </h4>
              <p>
            Select your savings plan of interest
              </p>
            </div>
          </div>
          <div className="savings_option_select_wrapper">
            <div className="all_savings_options">
              <div className="savings_option_icon">
                <img src={targetIcon} alt="" />
              </div>
              <Link to="/target-saving-plans"
                style={{ textDecoration: 'none' }}
              >
                <div className="savings_option_desc">
                  <h4 id="savingFont">
                    Target Savings
                  </h4>
                  <p>
                Fix a lump sum of money upfront for a long-term 10%-15% interest
                  </p>
                </div>
              </Link>
            </div>

            <div className="all_savings_options">
              <div className="savings_option_icon">
                <img src={fixedIcon} alt="" />
              </div>
              <a href="/fixed-target-saving"
                style={{ textDecoration: 'none' }}
              >
                <div className="savings_option_desc">
                  <h4 id="savingFont">
                  Fixed Deposit Savings
                  </h4>
                  <p>
                Fix a lump sum of money upfront for a long-term 10%-15% interest p.a
                  </p>
                </div>
              </a>
            </div>

            <div className="all_savings_options">
              <div className="savings_option_icon">
                <img src={groupIcon} alt="" />
              </div>
              <a href="/group-contributory-scheme"
                style={{ textDecoration: 'none' }}
              >
                <div className="savings_option_desc">
                  <h4 id="savingFont">
                Group Contributory Scheme
                  </h4>
                  <p>
                Fix a lump sum of money upfront for a long-term 10%-15% interest p.a
                  </p>
                </div>
              </a>
            </div>

            <div className="all_savings_options">
              <div className="savings_option_icon">
                <img src={ethicalIcon} alt="" />
              </div>
              <Link to="/ethical-saving"
                style={{ textDecoration: 'none' }}
              >
                <div className="savings_option_desc">
                  <h4 id="savingFont">
                Ethical Savings
                  </h4>
                  <p>
                Fix a lump sum of money upfront for a long-term 10%-15% interest p.a
                  </p>
                </div>
              </Link>
            </div>
          </div>


        </section>
      </>
    );
    return (
      <Fragment>
        <DashboardMobileNav />
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {savingPlans}
        </div>
      </Fragment>
    );
  }
}

export default SavingPlans;
