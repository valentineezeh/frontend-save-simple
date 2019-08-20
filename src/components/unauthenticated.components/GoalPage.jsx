import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import WebFooterBar from '../WebFooterBar';
import MobileHeader from '../MobileHeader';

/**
 *  @Class GoalPage
 */
class GoalPage extends Component {
  onCheckAuthUser = () => {
    const { isAuth, history } = this.props;
    if (isAuth) {
      return history.push('/savings-plan');
    }
    if (!isAuth) {
      return history.push('/login');
    }
  }

  /**
   *
   * @returns {*} - jquery
   */
  render() {
    const goalPage = (
      <div>
        <MobileHeader />
        <Header
          className="goal_header"
          className2="invest_header_description_text"
        >
          <h3>
        Your Goals
          </h3>
          <p>
        Specify your goals to achieve more,
            {' '}
            <br />
            {' '}
And we will help you make those goals achievable
          </p>
        </Header>

        <div className="goal_page_title">
          <h3>
            Achieve Your Goals
          </h3>
        </div>

        <section className="each_goals_section">
          <div className="index_custom_wrapper">
            <div className="each_goals_wrapper">
              <div className="each_goals_sections">
                <div className="goals_top_part" />
                <div className="goals_second_part">
                  <h4>
            Vacation
                  </h4>
                  <p>
                  Reach your vacation goals to the destination of your choice.
                  </p>
                </div>
                <div className="goals_last_part">
                  <Link
                    to="#"
                    onClick={this.onCheckAuthUser}
                  >
        Save Now
                    {' '}
                    <i className="fas fa-angle-right" />
                  </Link>
                </div>
              </div>

              <div className="each_goals_sections">
                <div className="goals_top_part_two" />
                <div className="goals_second_part">
                  <h4>
            Education
                  </h4>
                  <p>
                  Education Savings Plan is an affordable means of protection, to establish a reserved pool.
                  </p>
                </div>
                <div className="goals_last_part">
                  <Link
                    to="#"
                    onClick={this.onCheckAuthUser}
                  >
        Save Now
                    {' '}
                    <i className="fas fa-angle-right" />
                  </Link>
                </div>
              </div>

              <div className="each_goals_sections">
                <div className="goals_top_part_three" />
                <div className="goals_second_part">
                  <h4>
            Marriage
                  </h4>
                  <p>
                  So if you have been working for a while and are planning to get married shortly, how about using a part of your savings.
                  </p>
                </div>
                <div className="goals_last_part">
                  <Link
                    to="#"
                    onClick={this.onCheckAuthUser}
                  >
        Save Now
                    {' '}
                    <i className="fas fa-angle-right" />
                  </Link>
                </div>
              </div>

              <div className="each_goals_sections">
                <div className="goals_top_part_four" />
                <div className="goals_second_part">
                  <h4>
            Build a House
                  </h4>
                  <p>
                  Saving up to buy a house can be daunting, but it's not impossible.
                  </p>
                </div>
                <div className="goals_last_part">
                  <Link
                    to="#"
                    onClick={this.onCheckAuthUser}
                  >
        Save Now
                    {' '}
                    <i className="fas fa-angle-right" />
                  </Link>
                </div>
              </div>

              <div className="each_goals_sections">
                <div className="goals_top_part_five" />
                <div className="goals_second_part">
                  <h4>
            Be A Boss
                  </h4>
                  <p>
                  Are you looking to start or grow a business? Check out the best business savings accounts that will protect your money while earning interest
                  </p>
                </div>
                <div className="goals_last_part">
                  <Link
                    to="#"
                    onClick={this.onCheckAuthUser}
                  >
        Save Now
                    {' '}
                    <i className="fas fa-angle-right" />
                  </Link>
                </div>
              </div>

              <div className="each_goals_sections">
                <div className="goals_top_part_six" />
                <div className="goals_second_part">
                  <h4>
            Career
                  </h4>
                  <p>
                  Every awesome career and big adventure has the same thing in common: a Career Savings Account.
                  </p>
                </div>
                <div className="goals_last_part">
                  <Link
                    to="#"
                    onClick={this.onCheckAuthUser}
                  >
        Save Now
                    {' '}
                    <i className="fas fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WebFooterBar />
      </div>
    );
    return (
      <div>{goalPage}</div>
    );
  }
}

GoalPage.propTypes = {
  isAuth: PropTypes.bool,
  history: PropTypes.shape({})
};

const mapStateToProps = state => ({
  isAuth: state.loginReducer.isAuthenticated
});


export default withRouter(connect(mapStateToProps, null)(GoalPage));
