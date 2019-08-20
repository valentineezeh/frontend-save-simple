import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import { TextField, Button } from '../../commons';
import otpValidateInput from '../../../middlewares/otpValidationRegister';
import CompleteUserRegistration,
{ deleteCompleteRegistrationErrorMessages } from
  '../../../actions/auth.actions/user.complete.registration.action';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification';
import userResendOtp from '../../../actions/auth.actions/resendOtp.action';
import SignUpHeader from '../auth.components/SignUp/SignUpHeader';

/**
 * @class UserRegistrationOTP
 */
export class UserRegistrationOTPForm extends Component {
    state = {
      otp: '',
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
  handleDelete = () => {
    const { DeleteCompleteRegistrationErrorMessages } = this.props;
    DeleteCompleteRegistrationErrorMessages();
    this.setState({ isLoading: false });
  }

  /**
  *
  *@param {*} event
  *@returns {*} - state
  */
 onSubmit = (event) => {
   event.preventDefault();
   const { signupSuccess } = this.props;
   if (signupSuccess) {
     const { completeUserRegistration } = this.props;
     const decodedCustomerId = Cookie.get('customerId');
     const otpRef = Number(Cookie.get('otpRef'));
     if (this.isValid()) {
       this.setState({ errors: {}, isLoading: true });
       completeUserRegistration({ ...this.state, customerId: Number(decodedCustomerId), otpRef });
     }
   } else {
     const { completeUserRegistration } = this.props;
     const decodeCustomerId = Cookie.get('customerId');
     const otpRef = Number(Cookie.get('otpRef'));
     if (this.isValid()) {
       this.setState({ errors: {}, isLoading: true });
       completeUserRegistration({ ...this.state, customerId: Number(decodeCustomerId), otpRef });
     }
   }
 }

 onResendOtp = () => {
   const { signupSuccess, UserResendOtp } = this.props;
   if (signupSuccess) {
     const userId = Cookie.get('customerId');
     UserResendOtp(userId);
   } else {
     const token = Cookie.get('jwtToken');
     const decodeCustomerId = jwt.decode(token);
     const { customerId } = decodeCustomerId;
     UserResendOtp(customerId);
   }
 }

 isValid = () => {
   const { errors, isValid } = otpValidateInput(
     this.state
   );
   if (!isValid) {
     this.setState({ errors });
   }
   return isValid;
 }

 /**
   *
   * @returns {*} - render
   */
 render() {
   const { loading, otp, errors } = this.state;
   const { error, success } = this.props;

   if (success) {
     return <Redirect to="/user-dashboard" />;
   }
   const userRegistrationOtp = (
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
         <div className="create_acc_form_container">
           <div className="create_acc_form_header">

             <ul id="create_form_options">
               <li>
                 <Link to="/signup" id="callId"> Basic </Link>
               </li>
               <li className="active">
                 <Link to="#" id="verify_input"> Verify </Link>
               </li>
             </ul>

           </div>

           <div className="verify_inputs_container" id="verify_inputs_container">
             <div className="enter_verify_code_text">
               {!isEmpty(error) && (
               <ErrorAlertNotification
                 errors={error}
                 onClick={this.handleDelete}
               />
               )}
               <p id="callId">
                Enter the 4 digit code you recieved from your email
               </p>
             </div>
             <div className="pin_inputs_container">
               <div className="pin_inputs_small_container">
                 <div className="input_div">
                   <TextField
                     error={errors.otp}
                     onChange={this.onChange}
                     type="text"
                     field="otp"
                     value={otp}
                     placeholder="Enter OTP"
                     label="OTP"
                   />
                 </div>
               </div>
             </div>
             <div className="resend_pin_text">
               <p id="callId">
                  Didn’t receive any code?
                 {' '}
                 <Link
                   to="#"
                   id="phoneId"
                   onClick={this.onResendOtp}
                 >
                     Resend
                 </Link>
               </p>
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
   );
   return (
     <div>
       {userRegistrationOtp}
     </div>
   );
 }
}

UserRegistrationOTPForm.propTypes = {
  completeUserRegistration: PropTypes.func,
  UserResendOtp: PropTypes.func,
  error: PropTypes.shape({}),
  success: PropTypes.bool,
  signupSuccess: PropTypes.bool,
  DeleteCompleteRegistrationErrorMessages: PropTypes.func,
};

const mapStateToProps = state => ({
  success: state.verifyUserOtp.success,
  error: state.verifyUserOtp.error,
  resendOtpSuccess: state.resendOtpReducer.success,
  loginSuccess: state.loginReducer.isAuthenticated,
  signupSuccess: state.signupReducer.isAuthenticated,
  loading: state.verifyUserOtp.loading

});

const mapDispatchToProps = dispatch => ({
  completeUserRegistration: otpDetails => dispatch(CompleteUserRegistration(otpDetails)),
  DeleteCompleteRegistrationErrorMessages: () => dispatch(deleteCompleteRegistrationErrorMessages()),
  UserResendOtp: userId => dispatch(userResendOtp(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRegistrationOTPForm);
