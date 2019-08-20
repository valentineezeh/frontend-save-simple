import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../template/js/main';
import logoutAction from '../../actions/auth.actions/logout.action';

/**
 * @class MobileNavigation
 */
class MobileNavigation extends React.Component {

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
    return (
      <div className="mobile_nav_div_container">
        <div className="close_nav_btn">
          <span>&times;</span>
        </div>
        <div className="mobile_nav_links">
          <ul>
            <li>
              <a href="/">
                      Home
              </a>
            </li>
            <li>
              <a href="/invest">
                          Invest
              </a>
            </li>

            <li>
              <a href="/save">
                          Save
              </a>
            </li>

            <li>
              <a href="/learn">
                          Learn
              </a>
            </li>

            <li>
              <a href="/goals">
                          Goals
              </a>
            </li>
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
    );
  }
}

MobileNavigation.propTypes = {
  children: PropTypes.shape({}),
  LogOut: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(connect(null, {
  LogOut: logoutAction
})(MobileNavigation));
