import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import { Link, Redirect } from 'react-router-dom';
import { TextField, Button } from '../../commons/index';
import passwordLinkValidateInput from '../../../middlewares/sendPasswordLinkValidation';
import userResetPassword, { deleteResetPasswordError } from
  '../../../actions/password.actions/sendPasswordLinkActions';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification';
import SignUpHeader from '../auth.components/SignUp/SignUpHeader';

/**
 * @class SendPasswordLinkPage
 */
export class SendPasswordLinkForm extends Component {
  state = {
    email: '',
    errors: {},
    isLoading: false
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
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
  onSubmit = (event) => {
    const { UserResetPassword } = this.props;
    const { email } = this.state;
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      UserResetPassword(email);
    }
  };

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  handleDelete = () => {
    const { DeleteResetPasswordError } = this.props;
    DeleteResetPasswordError();
    this.setState({ isLoading: false });
  }

  /**
   *
   * @returns {*} - boolean
   */
  isValid = () => {
    const { errors, isValid } = passwordLinkValidateInput(
      this.state
    );
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  };

  /**
   *
   * @returns {*} - render
   */
  render() {
    const { email, errors, isLoading } = this.state;
    const { success, error } = this.props;

    if (success) {
      return <Redirect to="/login" />;
    }
    const sendPasswordLinkForm = (
      <div className="create_account_main_wrapper">
        <div className="create_account_topNav">
          <SignUpHeader />
        </div>
        <div id="page_content_wrapper">
          <div className="create_account_title" />
          <div className="create_acc_form_container">
            <div className="create_acc_form_header">
              <h4 style={{
                fontWeight: 'bold',
                fontFamily: 'roboto'
              }}
              >
                {' '}
                Can't log in ?
                {' '}
              </h4>
              <br />
            </div>
            <div className="verify_inputs_container" id="verify_inputs_container">
              <div className="enter_password_code_text">
                {!isEmpty(error) && (
                <ErrorAlertNotification
                  errors={error}
                  onClick={this.handleDelete}
                />
                )}
                <i className="fa fa-lock"
                  style={{
                    color: '#08A65B', fontSize: '48px', marginLeft: '100px'
                  }}
                />
                <br />
                <p style={{
                  color: '#898D92',
                  fontSize: '14px',
                  paddingTop: '50px'
                }}
                >
                Forget your password?  We'll send you a recovery link to your mail.
                </p>
              </div>
              <div className="card_number_input2">
                <div className="input_div2">
                  <TextField
                    style={{ marginTop: '20px' }}
                    error={errors.email}
                    onChange={this.onChange}
                    type="email"
                    field="email"
                    value={email}
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div className="btn_full_width2 green_btn">
                {
                          isLoading ? (
                            <Button
                              onClick={this.onSubmit}
                              type="submit"
                            >
                              <i className="fa fa-spinner fa-spin" />
                              {'  '}
                              Change Password
                            </Button>
                          ) : (
                            <Button
                              onClick={this.onSubmit}
                              type="submit"
                            >
                              Change Password
                            </Button>
                          )
              }
              </div>
            </div>
          </div>
          <div className="already_have_acct">

            <p id="callId">
               Return to
              {' '}
              <Link to="/" id="phoneId">Home</Link>
            </p>
          </div>
        </div>
      </div>

    );
    return (
      <div>{sendPasswordLinkForm}</div>
    );
  }
}

SendPasswordLinkForm.propTypes = {
  UserResetPassword: PropTypes.func,
  error: PropTypes.shape({}),
  success: PropTypes.bool,
  DeleteResetPasswordError: PropTypes.func,
};

const mapStateToProps = state => ({
  success: state.resetPassword.success,
  error: state.resetPassword.error
});

const mapDispatchToProps = dispatch => ({
  UserResetPassword: userDetails => dispatch(userResetPassword(userDetails)),
  DeleteResetPasswordError: () => dispatch(deleteResetPasswordError())
});

export default connect(mapStateToProps, mapDispatchToProps)(SendPasswordLinkForm);
