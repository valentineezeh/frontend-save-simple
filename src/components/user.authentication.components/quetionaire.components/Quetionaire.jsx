import React, { Component } from 'react';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardTopNavigation';
import trophyIcon from '../../../template/utils/icons/trophy.png';

/**
 * @class Questionaire
 */
class Questionaire extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const questionaire = (
      <section className="body_space">
        <div className="question_main_wrapper">
          <div className="question_1">
            <div className="question_and_numbers">

              <span>
        Question 1 / 3
              </span>

              <p>
        What is your prefered length of investment
              </p>

            </div>
            <div className="question_month_options">
              <div className="question_month_options_div">

                <div className="month_option">
                  <p>
            0 - 6 months
                  </p>
                </div>

                <div className="month_option">
                  <p>
                6 -12 months
                  </p>

                </div>

                <div className="month_option">
                  <p>
                    1 -2 years
                  </p>

                </div>
              </div>

              <div className="question_month_options_div">

                <div className="month_option">
                  <p>
                                    6 -12 years
                  </p>

                </div>

                <div className="month_option">
                  <p>
                                        2 -3 years
                  </p>

                </div>
              </div>
            </div>

            <div className="next_question_btn">

              <div className="next_btn">
                <button type="button" className="next" id="to_question_two">
                    Next
                  {' '}
                  <i className="fas fa-long-arrow-alt-right" />
                </button>
              </div>
            </div>
          </div>

          <div className="question_2">
            <div className="question_and_numbers">
              <span>
                Question 2 / 3
              </span>

              <p>
                When do you expect to begin withdrawing money
                {' '}
                <br />
                {' '}
from your investment
              </p>
            </div>

            <div className="question_month_options">
              <div className="question_month_options_div">
                <div className="month_option">
                  <p>
                    0 - 6 months
                  </p>
                </div>

                <div className="month_option">
                  <p>
                        6 -12 months
                  </p>

                </div>

                <div className="month_option">
                  <p>
                            1 -2 years
                  </p>

                </div>
              </div>

              <div className="question_month_options_div">
                <div className="month_option">
                  <p>
                    6 -12 years
                  </p>

                </div>

                <div className="month_option">
                  <p>
                    2 -3 years
                  </p>

                </div>
              </div>
            </div>
            <div className="next_question_btn">
              <div className="prev_btn">
                <button type="button" className="prev" id="back_to_question_one">
                  <i className="fas fa-long-arrow-alt-left" />
                  {' '}
Previous
                </button>
              </div>
              <div className="next_btn">
                <button type="button" className="next" id="to_question_three">
                            Next
                  {' '}
                  <i className="fas fa-long-arrow-alt-right" />
                </button>
              </div>
            </div>
          </div>

          <div className="question_3">
            <div className="question_and_numbers">
              <span>
                Question 3 / 3
              </span>

              <p>
             I would describe my knowledge of investment as
              </p>
            </div>
            <div className="question_month_options">
              <div className="question_month_options_div">
                <div className="month_option">
                  <p>
                    None
                  </p>
                </div>
                <div className="month_option">
                  <p>
                    Limited
                  </p>
                </div>
                <div className="month_option">
                  <p>
                    Good
                  </p>

                </div>
              </div>
              <div className="question_month_options_div">
                <div className="month_option">
                  <p>
                    Extensively
                  </p>
                </div>
              </div>
            </div>

            <div className="next_question_btn">
              <div className="prev_btn">
                <button type="button" className="prev" id="back_to_question_two">
                  <i className="fas fa-long-arrow-alt-left" />
                  {' '}
Previous
                </button>
              </div>

              <div className="next_btn">
                <button type="button" className="next" id="last_phase">
                            Next
                  {' '}
                  <i className="fas fa-long-arrow-alt-right" />
                </button>
              </div>
            </div>
          </div>

          <div className="last_phase">

            <div className="trophy_icon">
              <div>
                <img src={trophyIcon} alt="" />
              </div>
            </div>

            <div className="assess_text">
              <p>
                Your Assesment
              </p>

              <span>
                From the assesment you have just completed you are
              </span>

              <h3>
                CONSERVATIVE
              </h3>

            </div>

            <div className="recomendation">

              <div className="recom_text">
                <p>
                  It is recommended you invest either of these
                </p>
              </div>

              <div className="recom_options">

                <div className="recom_options_div">
                  <p>
                  Meristem Money Market Mutual Fund
                  </p>
                </div>
                <div className="recom_options_div">
                  <p>
                    Meristem Equity Market Mutual Fund
                  </p>
                </div>

              </div>

            </div>

            <div className="next_question_btn">

              <div className="prev_btn">
                <button type="button" className="prev" id="back_to_question_three">
                  <i className="fas fa-long-arrow-alt-left" />
                  {' '}
Start Over
                </button>
              </div>

              <div className="next_btn">
                <button type="button" className="next">
                            Invest Now
                </button>
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
          {questionaire}
        </div>
      </>
    );
  }
}

export default Questionaire;
