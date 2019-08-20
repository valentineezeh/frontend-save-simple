import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoutAction from '../../actions/auth.actions/logout.action';

/**
 * @class DashboardMobileNav
 */
class DashboardMobileNav extends Component {
  /**
   * @description handle user log out
   *
   * @param {Object} event logout event object
   *
   *
   * @returns {undefined} calls logoutProps
   */
  onLogout = (event) => {
    const { logoutUser } = this.props;
    const { history } = this.props;
    event.preventDefault();
    logoutUser(history.push('/'));
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const dashboardMobileNav = (
      <div className="dashboard_mobile_sideNav">
        <div className="site_title_mobile">
          <div>
            <h5>
                    mywealth
              {' '}
              <sup> &reg; </sup>
            </h5>
          </div>

          <div className="dash_close_nav_btn">
            <span>&times;</span>
          </div>
        </div>

        <div className="nav_menu">

          <div className="navigation_title_text">
            <p>
                    NAVIGATION
            </p>
          </div>
          <Link to="/user-dashboard" className="active">
                        DASHBOARD
          </Link>
          <Link to="/savings">
                        SAVINGS
          </Link>
          <Link to="/invest-plans">
                        INVESTMENTS
          </Link>
          <Link to="/mutual-fund">
                        MUTUAL FUNDS
          </Link>
          <Link to="#">
                        UTILITIES
          </Link>

        </div>
        <div className="help_support">
          <div className="help_title_text">
            <p>
        HELP / SUPPORT
            </p>
          </div>
          <Link to="/">
            Home
          </Link>
          <Link to="/invest">
            Invest
          </Link>
          <Link to="/save">
            Save
          </Link>
          <Link to="/learn">
            Learn
          </Link>
          <Link to="/goals">
             Goals
          </Link>
        </div>


        <div className="side_nav_logout">
          <Link to="#"
            onClick={this.onLogout}
          >
            <i className="fas fa-power-off" />
              Logout
          </Link>
        </div>

      </div>
    );
    return <Fragment>{dashboardMobileNav}</Fragment>;
  }
}

DashboardMobileNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutAction()),
});

export default withRouter(connect(null,
  mapDispatchToProps)(DashboardMobileNav));
