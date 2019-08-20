import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import TextField from '../../commons/TextFields';
import changePasswordValidateInput from
  '../../../middlewares/changePasswordValidations';
import userChangePassword, {
  deleteChangePasswordError
} from '../../../actions/password.actions/changePasswordActions';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification';
import SignUpHeader from '../auth.components/SignUp/SignUpHeader';
import { Button } from '../../commons/index';

/**
 * @class ChangePasswordPage
 */
export class ChangePasswordForm extends Component {
  state = {
    newPassword: '',
    confirmPassword: '',
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
    const { UserChangePassword } = this.props;
    const userEmail = Cookie.get('email');
    const token = Cookie.get('jwtToken');
    const loginUserEmail = jwt.decode(token);
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      if (userEmail !== undefined) {
        UserChangePassword({ ...this.state, email: userEmail });
      } else {
        UserChangePassword({ ...this.state, email: loginUserEmail.email });
      }
    }
  };

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  handleDelete = () => {
    const { DeleteChangePasswordError } = this.props;
    DeleteChangePasswordError();
    this.setState({ isLoading: false });
  }

  /**
   *
   * @returns {*} - boolean
   */
  isValid = () => {
    const { errors, isValid } = changePasswordValidateInput(
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
    const {
      errors,
      newPassword,
      confirmPassword,
      isLoading
    } = this.state;
    const { success, error } = this.props;

    if (success) {
      return <Redirect to="/user-dashboard" />;
    }

    const changePasswordForm = (
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
                Change Your Password
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
                  color: '#898D92'
                }}
                >
                On entering your password you will receive a success response
                </p>
              </div>
              <div className="card_number_input2">
                <div className="input_div2">
                  <TextField
                    error={errors.newPassword}
                    onChange={this.onChange}
                    value={newPassword}
                    type="password"
                    field="newPassword"
                    placeholder="Enter new password" className="form-control border-1 shadow"
                  />
                </div>
              </div>
              <div className="card_number_input2">
                <div className="input_div2">
                  <TextField
                    error={errors.confirmPassword}
                    onChange={this.onChange}
                    value={confirmPassword}
                    type="password"
                    field="confirmPassword"
                    placeholder="Confirm new password" className="form-control border-1 shadow"
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
      <div>{changePasswordForm}</div>
    );
  }
}

ChangePasswordForm.propTypes = {
  UserChangePassword: PropTypes.func,
  error: PropTypes.shape({}),
  success: PropTypes.bool,
  DeleteChangePasswordError: PropTypes.func,
};

const mapStateToProps = state => ({
  success: state.changePassword.success,
  error: state.changePassword.error
});

const mapDispatchToProps = dispatch => ({
  UserChangePassword: changePasswordDetails => dispatch(userChangePassword(changePasswordDetails)),
  DeleteChangePasswordError: () => dispatch(deleteChangePasswordError())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordForm);
