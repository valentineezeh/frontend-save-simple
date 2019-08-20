import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import isEmpty from 'is-empty';
import logoutAction from '../actions/auth.actions/logout.action';

export default (ComposedComponent) => {
  /**
 * @class Authenticate
 */
  class Authenticate extends Component {
    // eslint-disable-next-line require-jsdoc
    componentWillMount() {
      const { isAuthenticated, isAuthenticatedLogin, userSignUpId, userLoginId, history } = this.props;
      if (userSignUpId === undefined || userLoginId === undefined) {
        setTimeout(() => {
          const { Logout } = this.props;
          Logout();
        }, 360000);
      }
      if (!isAuthenticated && !isAuthenticatedLogin) {
        toastr.error('Please login');
        history.push('/');
      }
    }

    // eslint-disable-next-line require-jsdoc
    componentWillUpdate(nextProps) {
      // eslint-disable-next-line react/prop-types
      const { history } = this.props;
      // eslint-disable-next-line react/prop-types
      if (nextProps.userSignUpId !== this.props.userSignUpId || nextProps.userLoginId !== this.props.userLoginId) {
        setTimeout(() => {
          const { Logout } = this.props;
          Logout();
        }, 360000);
      }
      if (!nextProps.isAuthenticated && !nextProps.isAuthenticatedLogin) {
        history.push('/');
      }
    }

    /**
   *
   * @returns {*} - render
   */
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propsTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isAuthenticatedLogin: PropTypes.bool,
    match: PropTypes.shape({}).isRequired,
    userSignUpId: PropTypes.string,
    userLoginId: PropTypes.string,
    Logout: PropTypes.func,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  Authenticate.contextTypes = {
    router: PropTypes.shape({})
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.signupReducer.isAuthenticated,
    isAuthenticatedLogin: state.loginReducer.isAuthenticated,
    userSignUpId: isEmpty(state.signupReducer.user) ? '' : state.signupReducer.user.customerId,
    userLoginId: isEmpty(state.loginReducer.user) ? '' : state.loginReducer.user.customerId
  });

  const mapDispatchToProps = dispatch => ({
    Logout: () => dispatch(logoutAction())
  });

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
};
