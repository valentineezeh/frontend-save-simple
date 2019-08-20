/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import Loader from 'react-loader-spinner';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import EmptySavingPage from './EmptySavingPage';
import UserSavings from './UserSavings';
import fetchSavingPlans from '../../../actions/savings.actions/getSavingPlans';

/**
 * @class SavingPage
 */
class SavingPage extends Component {
  componentWillMount = () => {
    const { FetchSavingPlans } = this.props;
    FetchSavingPlans();
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const { userSavings } = this.props;
    const savingPage = (
      <Fragment>
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {
            isEmpty(userSavings) && userSavings === undefined ? (
              <div className="text-center py-5">
                <Loader
                  type="Circles"
                  color="#00C177"
                  height="100"
                  width="100"
                />
              </div>
            ) : userSavings.length === 0 ? (
              <EmptySavingPage />
            ) : (
              <UserSavings
                allSavings={userSavings}
              />
            )
          }
        </div>
      </Fragment>
    );
    return (
      <div>{savingPage}</div>
    );
  }
}

SavingPage.propTypes = {
  userSavings: PropTypes.array,
  FetchSavingPlans: PropTypes.func
};

const mapStateToProps = state => ({
  userSavings: state.getUserSavingPlans.savingPlans.savingsPlan
});

export default connect(mapStateToProps, {
  FetchSavingPlans: fetchSavingPlans
})(SavingPage);
