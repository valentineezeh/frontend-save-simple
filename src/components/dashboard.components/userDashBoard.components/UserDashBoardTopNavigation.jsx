/* eslint-disable react/forbid-prop-types */
/* eslint-disable valid-jsdoc */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import notificationIcon from '../../../template/utils/icons/notification.png';
import settingIcon from '../../../template/utils/icons/settings-work-tool.png';
import profileIcon from '../../../template/utils/images/profile.png';
import { deleteWarningMessages } from '../../../actions/auth.actions/user.login.action';
import logoutAction from '../../../actions/auth.actions/logout.action';
import InfoAlertNotification from '../../commons/InfoAlertNotification';
import fetchUserNotification from '../../../actions/notification.actions/getUserNotification';

/**
 * @class UserDashBoardTopNavigation
 */
class UserDashBoardTopNavigation extends Component {
  state = {
    authCard: '',
    authAcct: ''
  }

  componentWillMount = () => {
    const getBvn = Cookie.get('getB');
    const isAccount = Cookie.get('isA');
    const token = Cookie.get('jwtToken');
    const decodeUser = jwt.decode(token);
    const { email } = decodeUser;
    const userEmail = { email };
    const { FetchUserNotification, history } = this.props;
    FetchUserNotification(userEmail, history);
    this.setState({
      authCard: getBvn,
      authAcct: isAccount
    });
  }

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
    const { userNotification } = this.props;
    const { authCard, authAcct } = this.state;
    const notificationLength = userNotification.length;
    const message = 'You\'re yet to set up either your card or account details.';
    const userName = Cookie.get('username');
    const userDashBoardTopNavigation = (
      <section>
        <div className="dash_main_page_wrappper">
          <div className="dash_top_nav">
            <div className="dashboard_sideNav_open">
              <button type="button">
                        &#9776;
              </button>
            </div>
            {
              authCard === 'true' || authAcct === 'true' ? (
                <InfoAlertNotification
                  onClick={this.handleDelete}
                />
              ) : (
                <InfoAlertNotification
                  message={message}
                  onClick={this.handleDelete}
                />
              )
                      }
            <div className="nav_functions">
              <div className="notification_bell">
                <div className="bell_icon">
                  {
                    notificationLength > 0 ? (
                      <>
                        <div className="popover__wrapper">
                          <Link
                            to="/user-notification"
                          >
                            < >
                              <img
                                src={notificationIcon}
                                alt=""
                                id="notifigImg"
                              />
                              <div className="status_dot" />
                              <div className="popover__content">
                                <p
                                  className="popover__message"
                                >
                                  {`You have ${notificationLength} notifications.`}

                                </p>
                              </div>
                            </>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <img src={notificationIcon} alt="" />
                    )
                  }
                </div>
              </div>

              <div className="settings_icon">
                <img src={settingIcon}
                  alt=""
                />
              </div>

              <div className="dropdown">
                <div className="user_image">
                  <img src={profileIcon} alt="" />

                </div>
                <div className="dropdown-toggle account_functions" data-toggle="dropdown">
                  <div className="user_name">
                    <p style={{
                      fontWeight: '120px',
                      fontFamily: 'roboto',
                      fontSize: '16px'
                    }}>
                      { userName }
                    </p>

                    <p style={{
                      color: '#014886'
                    }}>
                            Manage Account
                    </p>
                  </div>
                </div>
                <div className="dropdown-menu animated bounce">
                  <Link className="dropdown-item" to="#">
                    <i className="fas fa-user" />
                    {' '}
                                Profile
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/change-password"
                  >
                    <i className="fas fa-lock" />
                    {' '}
                                Change Password
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="fas fa-cog" />
                    {' '}
                                Settings
                  </Link>
                  <Link
                    className="dropdown-item nav_item_logout"
                    to="#"
                    onClick={this.onLogout}
                  >
                    <i className="fas fa-power-off" />
                    {' '}
                                    Logout
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    );
    return (
      <>{userDashBoardTopNavigation}</>
    );
  }
}
UserDashBoardTopNavigation.propTypes = {
  logoutUser: PropTypes.func,
  history: PropTypes.shape({}),
  FetchUserNotification: PropTypes.func,
  userNotification: PropTypes.any,
  user: PropTypes.any
};

const mapStateToProps = state => ({
  message: state.loginReducer.warningMessage,
  userNotification: state.allUserNotification.userNotification,
  user: state.loginReducer.user
});

const mapDispatchToProps = dispatch => ({
  DeleteWarningMessage: () => dispatch(deleteWarningMessages()),
  logoutUser: () => dispatch(logoutAction()),
  FetchUserNotification: userEmail => dispatch(fetchUserNotification(userEmail)),
});

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(UserDashBoardTopNavigation));
