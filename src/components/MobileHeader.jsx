import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MobileNavigation from './navigation.components/MobileNavigation';
import GuestMobileNavigation from './navigation.components/GuestMobileNavigation';

/**
 * @description class for app header
 *
 * @class Header
 *
 * @extends {Component}
 */
class MobileHeader extends Component {
  /**
   * @description Render the JSX template
   *
   * @returns {JSX} render JSX template
   *
   * @memberof Header
   */
  render() {
    const { auth } = this.props;
    return (
      <div>
        {
            auth ? (
              <MobileNavigation />
            ) : (
              <GuestMobileNavigation />
            )
                }
      </div>
    );
  }
}

MobileHeader.propTypes = {
  auth: PropTypes.bool,
};

const mapStateToProps = state => ({
  auth: state.loginReducer.isAuthenticated,
});

export default connect(mapStateToProps, null)(MobileHeader);
