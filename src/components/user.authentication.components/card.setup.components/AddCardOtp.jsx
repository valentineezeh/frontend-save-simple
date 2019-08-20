import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookie from 'cookies-js';
import Cookies from 'js-cookie';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { TextField, Button, ErrorAlertNotification } from '../../commons/index';
import validateAddCardOtp from '../../../middlewares/setUpBankDetails/verifyAddCardOtp';
import postCardDetailsOtp,
{ deleteAddCardOtpError } from '../../../actions/setUpCardDetails.actions/addCardDetailsOtp';
import UserDashBoardSideNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardTopNavigation';


/**
 * @class AddCardOtp
 */
class AddCardOtp extends Component {
    state = {
      otp: '',
      action: 'otp',
      errors: {},
      saveCardToken: true
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
  *@param {*} event
  *@returns {*} - state
  */
 onSubmit = (event) => {
   event.preventDefault();
   const actionType = Cookie.get('actionType');
   const { otp, action } = this.state;
   const { PostCardDetailsOtp, history } = this.props;
   const ref = Cookie.get('ref');
   const token = Cookie.get('jwtToken');
   const amount = Cookie.get('amt');
   const fundingSource = Cookie.get('fundingSource');
   const saveCard = Cookie.get('saveCard');
   const decodeUser = jwt.decode(token);
   const { customerId } = decodeUser;
   const otpDetails = {
     ref,
     value: otp,
     action,
     customerId,
     saveCardToken: true,
     amount: 100,
     fundingSource: 1,
     actionType: 'addNewCard'
   };

   //  Wallet Payload
   const walletPayloadOnSave = {
     amount,
     customerId,
     fundingSource,
     value: otp,
     action,
     ref,
     actionType,
     saveCardToken: saveCard
   };

   const walletPayloadWithoutSave = {
     amount,
     customerId,
     fundingSource,
     value: otp,
     action,
     ref,
     actionType,
     saveCardToken: 'false'
   };

   //  Fixed Savings Payload
   const FixedSavingsObject = Cookies.getJSON('newImpFixObj');
   const FixedSavingDetailsOnSave = {
     ...FixedSavingsObject,
     value: otp,
     action,
     ref,
     saveCardToken: true
   };

   const FixedSavingDetails = {
     ...FixedSavingsObject,
     value: otp,
     action,
     ref,
     saveCardToken: false
   };

   //  Ethical Savings Payload
   const EthicalSavingsObject = Cookies.getJSON('newImpEthSavingObj');

   const EthicalSavingDetailsOnSave = {
     ...EthicalSavingsObject,
     value: otp,
     action,
     ref,
     saveCardToken: true
   };

   const EthicalSavingDetails = {
     ...EthicalSavingsObject,
     value: otp,
     action,
     ref,
     saveCardToken: false
   };

   //  Mutual fund payload
   const mutualFundPayLoad = Cookies.getJSON('newPayLoad');
   const MutualFundPayload = {
     ...mutualFundPayLoad,
     value: otp,
     action,
     ref,
   };

   if (this.isValid()) {
     // Fixed Target Savings by add new card and save card
     if (actionType === 'fixedSavings' && FixedSavingsObject.saveCardToken === 'true') {
       this.setState({ errors: {} });
       PostCardDetailsOtp(FixedSavingDetailsOnSave, history);
     }
     // Fixed Target Savings by add new card but dont save card
     if (actionType === 'fixedSavings' && !FixedSavingsObject.saveCardToken) {
       this.setState({ errors: {} });
       PostCardDetailsOtp(FixedSavingDetails, history);
     }

     // Fund wallet by add new card and save card
     if (actionType === 'wallet' && walletPayloadOnSave.saveCardToken === 'true') {
       this.setState({ errors: {} });
       PostCardDetailsOtp(walletPayloadOnSave, history);
     }

     // Fund wallet by add new card but don't save card
     if (actionType === 'wallet' && !walletPayloadOnSave.saveCardToken) {
       this.setState({ errors: {} });
       PostCardDetailsOtp(walletPayloadWithoutSave, history);
     }

     //  Ethical Savings by add new card and save card
     if (actionType === 'ethicalSavings' && EthicalSavingsObject.saveCardToken === 'true') {
       this.setState({ errors: {} });
       PostCardDetailsOtp(EthicalSavingDetailsOnSave, history);
     }

     //  Ethical savings by add new card but don't save card
     if (actionType === 'ethicalSavings' && !EthicalSavingsObject.saveCardToken) {
       this.setState({ errors: {} });
       PostCardDetailsOtp(EthicalSavingDetails, history);
     }

     //  Mutual Fund
     if (actionType === 'mutualFund') {
       this.setState({ errors: {} });
       PostCardDetailsOtp(MutualFundPayload, history);
     }

     // Add New Card
     if (actionType === undefined) {
       this.setState({ errors: {} });
       PostCardDetailsOtp(otpDetails, history);
     }
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

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  isValid = () => {
    const { errors, isValid } = validateAddCardOtp(
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
    const { errors, otp } = this.state;
    const { error, loading } = this.props;
    const addCardOtp = (
      <div className="create_account_main_wrapper">
        <div id="page_content_wrapper">
          <div className="create_account_title" />
          <div className="create_acc_form_container">
            <div className="add_card_title py-5">
              <h4>
            Add Confrimation OTP
              </h4>
              <p
                style={{
                  color: '#B2B7BC',
                  fontSize: '14px'
                }}
              >
                <b
                  style={{
                    color: '#10C06D',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                You will receive an OTP to complete your transaction.
                  {' '}
                </b>
              </p>
              <strong style={{
                color: '#898D92',
                fontSize: '14px'
              }}
              >
Kindly enter the OTP

              </strong>
            </div>
            <div className="verify_inputs_container" id="verify_inputs_container">
              {!isEmpty(error) && (
              <ErrorAlertNotification
                errors={error}
                onClick={this.handleDelete}
              />
              )}
              <div className="pin_inputs_container">
                <div className="pin_inputs_small_container">
                  <div className="input_div">
                    <TextField
                      error={errors.otp}
                      onChange={this.onChange}
                      type="text"
                      field="otp"
                      value={otp}
                      placeholder="Enter OTP Received from your mail"
                      label="Enter OTP"
                    />
                  </div>
                </div>
              </div>
              <div className="resend_pin_text">
                <p id="callId">

                  {' '}
                  <Link
                    to="#"
                    id="phoneId"
                  />
                </p>
              </div>

              <div className="btn_full_width2 green_btn">
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

        </div>
      </div>
    );
    return (
      <>
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {addCardOtp}
        </div>
      </>
    );
  }
}

AddCardOtp.propTypes = {
  PostCardDetailsOtp: PropTypes.func,
  error: PropTypes.string,
  DeleteErrorMessage: PropTypes.func,
  loading: PropTypes.bool,
  history: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  error: state.addCardOtp.error,
  loading: state.addCardOtp.addCardOtploading
});

export default withRouter(
  connect(mapStateToProps, {
    PostCardDetailsOtp: postCardDetailsOtp,
    DeleteErrorMessage: deleteAddCardOtpError
  })(AddCardOtp)
);
