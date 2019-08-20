/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import UserDashBoardTopNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardTopNavigation';
import UserDashBoardSideNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import NotificationBars from '../../commons/NotificationBars';

/**
 * @class AllUserNotification
 */
class AllUserNotification extends Component {
  state = {
    notifications: [],
    currentPage: 1,
    pageLimit: 4
  }

  /**
   *
   * @param {*} prevProps
   * @returns {*} - User notification
   */
  componentDidUpdate = (prevProps) => {
    const { userNotifications } = this.props;
    if (userNotifications === prevProps.userNotifications) {
      return null;
    }
    this.setState({ notifications: userNotifications });
  }

  /**
   *
   * @param {*} event
   * @returns {*} - single master agent object
   */
  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const {
      notifications,
      currentPage,
      pageLimit
    } = this.state;


    const indexOfLastNotification = currentPage * pageLimit;
    const indexOfFirstNotification = indexOfLastNotification - pageLimit;

    const currentNotifications = notifications.slice(indexOfFirstNotification, indexOfLastNotification);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(notifications.length / pageLimit); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
      <li
        key={number}
        className={`pageRemake ${currentPage === number ? 'active' : ''
        }`}
        id={number}
        onClick={this.handleClick}
      >
        <>
          {number}
        </>
      </li>
    ));

    const allUserNotification = (
      <section className="body_space">
        <div className="notification_page_title">
          <h4>
            Notifications
          </h4>
        </div>
        <div className="notification_wrapper">
          {
          currentNotifications.length === 0 ? (
            <div className="text-center py-5">
              <Loader
                type="Circles"
                color="#00C177"
                height="100"
                width="100"
              />
            </div>
          ) : (
            currentNotifications.map(notification => (
              <NotificationBars
                key={notification.id}
                id={notification.id}
                title={notification.title}
                description={notification.description}
                planType={notification.planType}
                planId={notification.planId}
              />
            ))
          )
      }
        </div>
        <div className="table_pagination">
          <ul className="pagination justify-content-center">
            {renderPageNumbers}
          </ul>
        </div>
      </section>
    );
    return (
      <>
        <DashboardMobileNav />
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {allUserNotification}
        </div>
      </>
    );
  }
}

AllUserNotification.propTypes = {
  userNotifications: PropTypes.any
};

const mapStateToProps = state => ({
  userNotifications: state.allUserNotification.userNotification
});

export default connect(mapStateToProps, null)(AllUserNotification);
