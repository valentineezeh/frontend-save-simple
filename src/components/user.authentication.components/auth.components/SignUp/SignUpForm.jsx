import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import toastr from 'toastr';
import {
  userSignUpRequest,
  deleteErrorMessage
} from '../../../../actions/auth.actions/signup.action';
import ValidateUserSignupInput from '../../../../middlewares/signupValidation';
import { Button, TextField, ErrorAlertNotification } from '../../../commons/index';
import SignUpHeader from './SignUpHeader';
import '../../../../template/js/main';

/**
 *  @Class SignupForm
 */
export class SignupForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phoneNumber: '',
    confirmpassword: '',
    errors: {},
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
  *@param {*} event
  *@returns {*} - state
  */
  onSubmit = (event) => {
    event.preventDefault();
    const { UserSignupRequest } = this.props;
    const { email } = this.state;
    if (this.isValid()) {
      this.setState({ errors: {} });
      UserSignupRequest({ ...this.state, email: email.toLowerCase() });
    }
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  handleDelete = () => {
    const { DeleteErrorMessage } = this.props;
    DeleteErrorMessage();
  }

  isValid = () => {
    const { errors, isValid } = ValidateUserSignupInput(
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
      firstname, lastname, phoneNumber, email, password, confirmpassword, errors
    } = this.state;
    const {
      success, error, loading
    } = this.props;

    if (success) {
      toastr.info('Kindly check your mail for a verification otp.');
      return <Redirect to="/verify-otp" />;
    }

    const signupPage = (
      <section>
        <div className="create_account_main_wrapper">
          <div className="create_account_topNav">
            <SignUpHeader />
          </div>
          <div id="page_content_wrapper">
            <div className="create_account_title">
              <h1>
              Create an Account
              </h1>
              <p id="callId">
              Fill in the information to start saving with us
              </p>
            </div>

            <div className="already_have_acct">
              <p id="callId">
                    Return to
                {' '}
                <a href="/" id="phoneId">Home</a>
              </p>
            </div>

            <div className="create_acc_form_container">
              <div className="create_acc_form_header">
                <ul id="create_form_options">
                  <li className="active">
                    <Link to="#" id="verify_input"> Basic </Link>
                  </li>
                  <li>
                    <Link to="/verify-otp" id="callId"> Verify </Link>
                  </li>

                </ul>
              </div>
              <div className="basic_inputs_container" id="basic_inputs_container">
                <form action="">
                  {!isEmpty(error) && (
                  <ErrorAlertNotification
                    errors={error}
                    onClick={this.handleDelete}
                  />
                  )}
                  <div className="form_row">

                    <div className="form_col_3">
                      <div className="input_div">
                        <TextField
                          onChange={this.onChange}
                          value={firstname}
                          error={errors.firstname}
                          type="text"
                          field="firstname"
                          placeholder="Enter your First name"
                          label="First Name"
                        />
                      </div>
                    </div>
                    <div className="form_col_3">
                      <div className="input_div">
                        <TextField
                          onChange={this.onChange}
                          value={lastname}
                          error={errors.lastname}
                          type="text"
                          field="lastname"
                          placeholder="Enter your Last name"
                          label="Last Name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ======================================================== */}

                  <div className="form_row">
                    <div className="form_col_3">
                      <div className="input_div">
                        <TextField
                          onChange={this.onChange}
                          value={email}
                          error={errors.email}
                          type="text"
                          field="email"
                          placeholder="example@mymail.com"
                          label="Email"
                        />
                      </div>
                    </div>
                    <div className="form_col_3">
                      <div className="input_div">
                        <TextField
                          onChange={this.onChange}
                          value={phoneNumber}
                          error={errors.phoneNumber}
                          type="text"
                          field="phoneNumber"
                          placeholder="08012345678"
                          label="Mobile"
                        />
                      </div>
                    </div>

                  </div>

                  {/* ==================================== */}
                  <div className="form_row">
                    <div className="form_col_3">
                      <div className="input_div">
                        <TextField
                          onChange={this.onChange}
                          value={password}
                          error={errors.password}
                          type="password"
                          field="password"
                          placeholder="Password"
                          label="Password"
                        />
                      </div>
                    </div>
                    <div className="form_col_3">
                      <div className="input_div">
                        <TextField
                          onChange={this.onChange}
                          value={confirmpassword}
                          error={errors.confirmpassword}
                          type="password"
                          field="confirmpassword"
                          placeholder="Confirm Password"
                          label="Password"
                        />
                      </div>
                    </div>

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
                                   Next
                            </Button>
                          ) : (
                            <Button
                              onClick={this.onSubmit}
                              type="submit"
                            >
                                   Next
                            </Button>
                          )
                        }
                  </div>
                </form>
              </div>
            </div>
            <div className="already_have_acct">

              <p id="callId">
Already have an account?
                {' '}
                <Link to="/login" id="phoneId">Login</Link>
              </p>

            </div>
          </div>
        </div>
      </section>

    );
    return <div>{signupPage}</div>;
  }
}

SignupForm.propTypes = {
  UserSignupRequest: PropTypes.func,
  error: PropTypes.string,
  success: PropTypes.bool,
  DeleteErrorMessage: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  success: state.signupReducer.isAuthenticated,
  loading: state.signupReducer.loading,
  error: state.signupReducer.error,
  isVerified: state.signupReducer.isVerified
});

const mapDispatchToProps = dispatch => ({
  UserSignupRequest: user => dispatch(userSignUpRequest(user)),
  DeleteErrorMessage: () => dispatch(deleteErrorMessage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
