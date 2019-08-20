/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GuestNavigationBar from './navigation.components/GuestNavigationBar';
import UserNavigationBar from './navigation.components/UserNavigation';

/**
 * @description class for app header
 *
 * @class Header
 *
 * @extends {Component}
 */
class Header extends Component {
  /**
   * @description Render the JSX template
   *
   * @returns {JSX} render JSX template
   *
   * @memberof Header
   */
  render() {
    const {
      auth,
      className,
      className2,
      children
    } = this.props;
    return (
      <div>
        <section className={className}>
          {
            auth ? (
              <UserNavigationBar
                className2={className2}
              >
                {children}
              </UserNavigationBar>
            ) : (
              <GuestNavigationBar
                className={className}
                className2={className2}
              >
                {children}
              </GuestNavigationBar>
            )
                }
        </section>
      </div>
    );
  }
}


Header.propTypes = {
  auth: PropTypes.bool,
  className: PropTypes.string,
  className2: PropTypes.string,
  children: PropTypes.any
};

const mapStateToProps = state => ({
  auth: state.loginReducer.isAuthenticated,
});

export default connect(mapStateToProps, null)(Header);
