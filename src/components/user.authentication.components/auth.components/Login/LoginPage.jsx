/* eslint-disable react/forbid-prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import toastr from 'toastr';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import UserLoginRequest, { deleteErrorMessages } from '../../../../actions/auth.actions/user.login.action';
import ValidateUserLoginInput from '../../../../middlewares/userValidate';
import userResendOtp from '../../../../actions/auth.actions/resendOtp.action';
import { Button, TextField, ErrorAlertNotification } from '../../../commons/index';
import LoginLeftSection from './LoginLeftSection';

/**
 *  @Class LoginPage
 */
export class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
    errors: {},
    isLoading: false
  };

  /**
  *
  *@param {*} event
  *@returns {*} - state
  */
  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const newErrors = Object.assign({}, errors);
      delete newErrors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors: newErrors
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  handleDelete = () => {
    const { DeleteErrorMessage } = this.props;
    DeleteErrorMessage();
  }

  /**
  *
  *@param {*} event
  *@returns {*} - state
  */
  onSubmit = (event) => {
    event.preventDefault();
    const { userLoginRequest } = this.props;
    if (this.isValid()) {
      this.setState({ errors: {} });
      userLoginRequest(this.state);
    }
  }

  onResendOtp = () => {
    const userId = Cookie.get('jwtToken');
    const decodedUserId = jwt.decode(userId);
    const { UserResendOtp } = this.props;
    UserResendOtp(decodedUserId.customerId);
  }


  isValid = () => {
    const { errors, isValid } = ValidateUserLoginInput(
      this.state
    );
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   * @returns  {*} - render
   */

  render() {
    const {
      userName,
      password,
      errors
    } = this.state;

    const {
      success,
      error,
      changePasswordRequired,
      isVerified,
      loading,
      firstName,
      lastName
    } = this.props;

    if (changePasswordRequired) {
      toastr.success('Kindly Change your password.');
      return <Redirect to="change-password" />;
    }

    if (success) {
      if (!isVerified) {
        // Recall function that resends OTP if user has not been verified.
        this.onResendOtp();
        // Notification
        toastr.success('You are yet to complete your registration. Please verify with the otp sent to your mail.');
        return <Redirect to="verify-otp" />;
      }
      toastr.success(`Welcome back ${firstName} ${lastName} to My Wealth`);
      return <Redirect to="/user-dashboard" />;
    }

    const loginPage = (
      <section>
        <div className="login_page_main_div">
          <LoginLeftSection />
          <div className="login_right_section">
            <div className="login_mini_nav">
              <div>
                <p>
                 Don’t have an account?
                </p>
              </div>
              <div>
                <Link to="/signup">
                  <button
                    className="btn_getStarted"
                    type="button"
                  >
                            Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="login_form_div">
              <div className="form_title">
                <h1>
        Login
                </h1>
                <p>
        Enter your email and password to login to your account
                </p>
              </div>
              <div className="login_inputs">
                <form>
                  {!isEmpty(error) && (
                  <ErrorAlertNotification
                    errors={error}
                    onClick={this.handleDelete}
                  />
                  )}
                  <div className="input_div">
                    <TextField
                      onChange={this.onChange}
                      value={userName}
                      error={errors.userName}
                      type="text"
                      field="userName"
                      placeholder="example@mymail.com"
                      label="Username"
                    />
                  </div>

                  <div className="input_div">
                    <TextField
                      onChange={this.onChange}
                      value={password}
                      error={errors.password}
                      type="password"
                      field="password"
                      placeholder="Enter your Password"
                      label="Password"
                    />
                  </div>

                  <div className="btn_full_width green_btn">
                    {
                          loading ? (
                            <Button
                              onClick={this.onSubmit}
                              type="submit"
                            >
                              <i className="fa fa-spinner fa-spin" />
                              {'  '}
                              Log in
                            </Button>
                          ) : (
                            <Button
                              onClick={this.onSubmit}
                              type="submit"
                            >
                              Log in
                            </Button>
                          )
                        }
                  </div>

                  <div className="btn_below_link">
                    <div>
                      <Link to="/reset-password">Forgot Password?</Link>
                    </div>
                    <div>
                      <Link to="/signup">Create Account</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="already_have_acct">
              <p id="callId">
                    Return to
                {' '}
                <a href="/" id="phoneId">Home</a>
              </p>
            </div>
          </div>

        </div>
      </section>
    );
    return <div>{loginPage}</div>;
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func,
  error: PropTypes.string,
  success: PropTypes.bool,
  isVerified: PropTypes.any,
  UserResendOtp: PropTypes.func,
  changePasswordRequired: PropTypes.any,
  DeleteErrorMessage: PropTypes.func,
  loading: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

const mapStateToProps = state => ({
  success: state.loginReducer.isAuthenticated,
  error: state.loginReducer.error,
  loading: state.loginReducer.loading,
  changePasswordRequired: !isEmpty(state.loginReducer.user) ? state.loginReducer.user.isPasswordChangeRequired : '',
  isVerified: !isEmpty(state.loginReducer.user) ? state.loginReducer.user.isVerified : '',
  firstName: !isEmpty(state.loginReducer.user) ? state.loginReducer.user.firstname : '',
  lastName: !isEmpty(state.loginReducer.user) ? state.loginReducer.user.lastname : ''

});

const mapDispatchToProps = dispatch => ({
  userLoginRequest: userDetails => dispatch(UserLoginRequest(userDetails)),
  DeleteErrorMessage: () => dispatch(deleteErrorMessages()),
  UserResendOtp: userId => dispatch(userResendOtp(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
