/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoutAction from '../../actions/auth.actions/logout.action';

/**
 * @class UserNavigationBar
 */
class UserNavigationBar extends React.Component {
  /**
   * @description handle user log out
   *
   * @param {Object} event logout event object
   *
   *
   * @returns {undefined} calls logoutProps
   */
  onLogout = (event) => {
    const { LogOut } = this.props;
    const { history } = this.props;
    event.preventDefault();
    LogOut(history.push('/'));
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const {
      className2,
      children,
    } = this.props;
    return (
      <div>
        <div className="index_nav_div_container">
          <div className="index_nav_div">
            <div className="left_nav_items">
              <ul>
                <li>
                  <Link
                    to="/"
                  >
              Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/invest"
                  >
              Invest
                  </Link>
                </li>

                <li>
                  <Link to="/save">
              Save
                  </Link>
                </li>

                <li>
                  <Link to="/learn">
              Learn
                  </Link>
                </li>


                <li>
                  <Link to="/goals">
                Goals
                  </Link>
                </li>
              </ul>

            </div>
            <div className="right_nav_items">
              <ul>
                <li>
                  <Link to="/user-dashboard" className="register_link">
              Go to Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={this.onLogout}>
                    <i
                      className="fas fa-power-off"
                      style={{ color: '#10C06D' }}
                    />
                    {' '}
                    {' '}
              Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="open_nav_btn">
          <span className="sideNavBtnOpen">&#9776;</span>
        </div>
        <div className={className2}>
          {children}
        </div>
      </div>
    );
  }
}


UserNavigationBar.propTypes = {
  className2: PropTypes.string,
  children: PropTypes.any,
  LogOut: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default withRouter(connect(null, {
  LogOut: logoutAction
})(UserNavigationBar));
