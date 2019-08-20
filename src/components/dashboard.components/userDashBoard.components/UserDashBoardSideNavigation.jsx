import React from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import logoutAction from '../../../actions/auth.actions/logout.action';

/**
 * @class UserDashBoardSideNavigation
 */
class UserDashBoardSideNavigation extends React.Component {
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

  removeActionType = () => {
    Cookie.remove('actionType');
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div className="side_nav">
        <div className="site_title">
          <h5 style={{ fontFamily: 'roboto Bold' }}>
            WealthBuddy
            {' '}
            <sup> &reg; </sup>
          </h5>
        </div>
        <div className="nav_menu">
          <div className="navigation_title_text">
            <p>
              NAVIGATION
            </p>
          </div>
          <NavLink
            exact
            to="/user-dashboard"
            activeClassName="active"
          >
            <i className="fas fa-tachometer-alt" />
            {' '}
&nbsp;
            Dashboard
          </NavLink>
          <NavLink
            exact
            to="/savings"
            activeClassName="active"
          >
            <i className="fas fa-piggy-bank" />
            {'    '}
            &nbsp;&nbsp;
            Savings
          </NavLink>
          <NavLink
            exact
            to="/invest-plans"
            activeClassName="active"
          >
            <i className="fas fa-hand-holding-usd" />
            &nbsp;&nbsp;
            Investment
          </NavLink>
          <NavLink
            exact
            to="/mutual-fund"
            activeClassName="active"
          >
            <i className="fas fa-money-bill-wave" />
            &nbsp;&nbsp;
            Mutual Funds
          </NavLink>
          <div className="help_title_text">
            <p id="quickLinks">
        Account Set Up
            </p>
          </div>
          <ul className="list-unstyled components">
            <li>
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                <span>
                  <i className="fa fa-cog" />
                  &nbsp;
                  Set Up Bank Details
                  {' '}

                </span>
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  {' '}
                  <NavLink
                    exact
                    to="/verify-bank-details"
                    style={{ fontSize: '14px' }}
                    activeClassName="active"
                  >
                    Add Bank Details
                  </NavLink>
                  {' '}
                </li>
                <li>
                  {' '}
                  <NavLink
                    exact
                    to="/add-card"
                    style={{ fontSize: '14px' }}
                    activeClassName="active"
                    onClick={this.removeActionType}
                  >
                      Add Card Details
                  </NavLink>
                  {' '}
                </li>
                <li>
                  {' '}
                  <NavLink
                    exact
                    activeClassName="active"
                    to="/verify-bvn"
                    style={{ fontSize: '14px' }}
                  >
                      BVN Verification
                  </NavLink>
                  {' '}
                </li>
                <li>
                  {' '}
                  <NavLink
                    exact
                    activeClassName="active"
                    to="/add-bvn-details"
                    style={{ fontSize: '14px' }}
                  >
                     Add BVN
                  </NavLink>
                  {' '}
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="help_support">
          <div className="help_title_text">
            <p id="quickLinks">
        Quick Links
            </p>
          </div>
          <a href="/" id="quickLinks">
            Home
          </a>
          <a href="/invest" id="quickLinks">
            Invest
          </a>
          <a href="/save" id="quickLinks">
            Save
          </a>
          <a href="/learn" id="quickLinks">
            Learn
          </a>
          <a href="/goals" id="quickLinks">
             Goals
          </a>
        </div>

        <div className="side_nav_logout">
          <Link
            onClick={this.onLogout}
            to="#"
          >
            <i className="fas fa-power-off" />
              Logout
          </Link>
        </div>

      </div>
    );
  }
}

UserDashBoardSideNavigation.propTypes = {
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
  mapDispatchToProps)(UserDashBoardSideNavigation));
