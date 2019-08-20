/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import Cookie from 'cookies-js';
import DashboardMobileNav from '../../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../userDashBoard.components/UserDashBoardTopNavigation';
import targetFrame from '../../../../template/utils/icons/targetFrame.png';
import groupFrame from '../../../../template/utils/icons/Group 7579.png';
import vacationFrame from '../../../../template/utils/icons/vacationFrame.png';
import educationIcon from '../../../../template/utils/icons/undraw_Graduation_ktn0.svg';
import rentIcon from '../../../../template/utils/icons/undraw_house_searching_n8mp.svg';
import weddingIcon from '../../../../template/utils/icons/undraw_love_xfcv.svg';
import schoolFees from '../../../../template/utils/icons/back_to_school.svg';
import retirement from '../../../../template/utils/icons/quitting_time.svg';
import ownHome from '../../../../template/utils/icons/buy_house.svg';
import goalsIcon from '../../../../template/utils/icons/goals.svg';

/**
 * @class TargetSavingPlans
 */
class TargetSavingPlans extends Component {

  /**
   *@param {*} goal
   * @returns {*} - set params to cookie
   */
  onChangePersonalSavingsHeader = (goal) => {
    Cookie.set('personalHeader', goal);
  }

  onSetPersonalSavingsHeader = () => {
    Cookie.expire('personalHeader');
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const targetSavingPlans = (
      <section className="body_space" style={{
        padding: '40px'
      }}>
        <div className="savings_plan_options mb-5">
          <div className="target_savings_options_header">
            <h4>
            Target Savings
            </h4>
            <p>
            Select your savings plan of interest
            </p>
          </div>
          <div className="target_savings_steps">
            <a href="/personal-target-saving"
              onClick={this.onSetPersonalSavingsHeader}
            >
              <div className="personal_target_savings">
                <div>
                  <h3>
            Create a Personal Target
                  </h3>
                  <p>
            Fix a lump sum of money upfront for a long-term 10%-15% interest p.a
                  </p>
                </div>
                <div>
                  <img src={targetFrame} alt="" />
                </div>
              </div>
            </a>

            <a href="/group-target-saving">
              <div className="group_target_savings">
                <div>
                  <h3>
            Group Target savings
                  </h3>
                  <p>
            Fix a lump sum of money upfront for a long-term 10%-15% interest p.a
                  </p>
                </div>
                <div>
                  <img src={groupFrame} alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="savings_plan_options">
          <div className="target_savings_options_header">
            <h4>
            Saving Goals
            </h4>
            <p>
            Select your savings Goal of interest
            </p>
          </div>
          <div className="type_of_goals_wrapper">
            <div className="type_of_goals">
              <div className="each_type_of_goals">
                <div className="goals_icon">
                  <img src={vacationFrame} alt="" />
                </div>
                <a
                  href="/personal-target-saving"
                  style={{
                    textDecoration: 'none',
                    color: '#182538'
                  }}
                  onClick={this.onChangePersonalSavingsHeader.bind(this, 'Vacation')}
                >
                  <div className="goal_desc">
                    <h4>
        Vacation
                    </h4>
                    <p>
        Take that trip to your choice
                      {' '}
                      <br />
                      {' '}
            destination save towards it today
                    </p>
                  </div>
                </a>
              </div>

              <div className="each_type_of_goals">

                <div className="goals_icon">
                  <img src={educationIcon} alt="" style={{ height: '40px' }} />
                </div>
                <a
                  href="/personal-target-saving"
                  style={{
                    textDecoration: 'none',
                    color: '#182538'
                  }}
                  onClick={this.onChangePersonalSavingsHeader.bind(this, 'Education')}
                >
                  <div className="goal_desc">
                    <h4>
                   Education
                    </h4>
                    <p>
        Save up for that
                      {' '}
                      <br />
                      {' '}
        education degree
                    </p>
                  </div>
                </a>
              </div>

              <div className="each_type_of_goals">
                <div className="goals_icon">
                  <img src={rentIcon} alt="" style={{ height: '40px' }} />
                </div>
                <a
                  href="/personal-target-saving"
                  style={{
                    textDecoration: 'none',
                    color: '#182538'
                  }}
                  onClick={this.onChangePersonalSavingsHeader.bind(this, 'House Rent')}
                >
                  <div className="goal_desc">
                    <h4>
        House Rent
                    </h4>
                    <p>
        Dont get stranded when your
                      {' '}
                      <br />
                      {' '}
        save up for it today
                    </p>
                  </div>
                </a>
              </div>

              <div className="each_type_of_goals">
                <div className="goals_icon">
                  <img src={weddingIcon} alt="" style={{ height: '40px' }} />
                </div>
                <a
                  href="/personal-target-saving"
                  style={{
                    textDecoration: 'none',
                    color: '#182538'
                  }}
                  onClick={this.onChangePersonalSavingsHeader.bind(this, 'Wedding')}
                >
                  <div className="goal_desc">
                    <h4>
                  Wedding
                    </h4>
                    <p>
        Waiting to get married
                      {' '}
                      <br />
                      {' '}
        save up for that special event
                    </p>
                  </div>
                </a>
              </div>

            </div>
          </div>

          <div className="type_of_goals_wrapper py-5">
            <div className="type_of_goals">
              <div className="each_type_of_goals">
                <div className="goals_icon">
                  <img src={ownHome} alt="" style={{ height: '40px' }} />
                </div>
                <a
                  href="/personal-target-saving"
                  style={{
                    textDecoration: 'none',
                    color: '#182538'
                  }}
                  onClick={this.onChangePersonalSavingsHeader.bind(this, 'Home Ownership')}
                >
                  <div className="goal_desc">
                    <h4>
        Home Ownership
                    </h4>
                    <p>
        Get that Home of your dreams
                      {' '}
                      <br />
                      {' '}
                    </p>
                  </div>
                </a>
              </div>

              <div className="each_type_of_goals">

                <div className="goals_icon">
                  <img src={schoolFees} alt="" style={{ height: '40px' }} />
                </div>
                <a
                  href="/personal-target-saving"
                  style={{
                    textDecoration: 'none',
                    color: '#182538'
                  }}
                  onClick={this.onChangePersonalSavingsHeader.bind(this, 'School Fees')}
                >
                  <div className="goal_desc">
                    <h4>
                   School Fees
                    </h4>
                    <p>
        Save up for that
                      {' '}
                      <br />
                      {' '}
        school fees
                    </p>
                  </div>
                </a>
              </div>

              <div className="each_type_of_goals">
                <div className="goals_icon">
                  <img src={retirement} alt="" style={{ height: '40px' }} />
                </div>
                <a
                  href="/personal-target-saving"
                  style={{
                    textDecoration: 'none',
                    color: '#182538'
                  }}
                  onClick={this.onChangePersonalSavingsHeader.bind(this, 'Retirements')}
                >
                  <div className="goal_desc">
                    <h4>
        Retirements
                    </h4>
                    <p>
        Dont get stranded when your
                      {' '}
                      <br />
                      {' '}
        save up for it today
                    </p>
                  </div>
                </a>
              </div>

              <div className="each_type_of_goals">
                <div className="goals_icon">
                  <img src={goalsIcon} alt="" style={{ height: '40px' }} />
                </div>
                <a
                  href="/personal-target-saving"
                  style={{
                    textDecoration: 'none',
                    color: '#182538'
                  }}
                  onClick={this.onSetPersonalSavingsHeader}
                >
                  <div className="goal_desc">
                    <h4>
                  Custom Goal
                    </h4>
                    <p>
        
                      {' '}
                      <br />
                      {' '}
        save up for that special need
                    </p>
                  </div>
                </a>
              </div>

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
          {targetSavingPlans}
        </div>
      </>
    );
  }
}

export default TargetSavingPlans;
