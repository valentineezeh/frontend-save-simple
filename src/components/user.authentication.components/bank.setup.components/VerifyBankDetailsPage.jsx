/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import UserDashBoardSideNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardTopNavigation';
import getAllBanksRequest from '../../../actions/setupBankDetails.actions/getAllBanks';
import ValidateInput from '../../../middlewares/setUpBankDetails/verifyBankDetailsValid';
import verifyBankAccountDetails, { deleteVerifyBankError, setVerifyBankAccountError } from
  '../../../actions/setupBankDetails.actions/verifyBankDetails';
import addBankDetailsRequest from '../../../actions/setupBankDetails.actions/addBankDetails';
import { Button, TextField, ErrorAlertNotification } from '../../commons/index';


/**
 * @class VerifyBankDetailsForm
 * @param {*} event
 */
export class VerifyBankDetailsForm extends Component {
    state = {
      accountNo: '',
      bankCode: '0000',
      bankName: 'sample',
      isLoading: false,
      errors: {},
      isLoading2: false,
      blur: false,
    }

    /**
   *
   * @param {*} prevProps
   * @returns {*} - object
   */
    componentDidMount = () => {
      const { GetAllBanksRequest } = this.props;
      GetAllBanksRequest();
    }

    /**
   *
   * @param {*} event
   * @returns {*} - state
   */
    onChange = (event) => {
      const { errors } = this.state;
      if (errors[event.target.name]) {
        const error = Object.assign({}, errors);
        delete errors[event.target.name];
        this.setState({
          [event.target.name]: event.target.value,
          error
        });
      } else {
        this.setState({
          [event.target.name]: event.target.value,
        });
      }
    }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  handleDelete = () => {
    const { DeleteVerifyBankError } = this.props;
    DeleteVerifyBankError();
    this.setState({ isLoading: false });
  }

 /**
  *
  *@param {*} event
  *@returns {*} - state
  */
 onSubmit = (event) => {
   event.preventDefault();
   const { VerifyBankAccountDetails } = this.props;

   if (this.isValid()) {
     VerifyBankAccountDetails(this.state);
     this.setState({
       errors: {},
       isLoading: true,
       blur: false,
     });
   }
 }

 onAddBankDetails = (event) => {
   event.preventDefault();
   const { allBanksList, AddBankDetailsRequest, accountName } = this.props;
   const bankName = {};
   const customerId = Cookie.get('jwtToken');
   const decodeCustomerId = jwt.decode(customerId);
   const { bankCode } = this.state;
   allBanksList.map((banks) => {
     if (bankCode === banks.code) {
       bankName.name = banks.name;
     }
     return true;
   });
   const newState = {
     ...this.state,
     bankName: bankName.name,
     customerId: decodeCustomerId.customerId,
     accountName
   };
   AddBankDetailsRequest(newState);
   this.setState({ errors: {}, isLoading2: true });
 }

 onBlur = () => {
   const { blur } = this.state;
   if (!blur) {
     const { SetVerifyBankAccountError } = this.props;
     SetVerifyBankAccountError();
     this.setState({
       blur: true, isLoading: false
     });
   }
 }

    isValid = () => {
      const { errors, isValid } = ValidateInput(
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
      const {
        isLoading,
        errors,
        accountNo,
        bankCode,
        isLoading2
      } = this.state;
      const {
        allBanksList, error, success, accountName, addBankSuccess
      } = this.props;
      const bankList = Object.keys(allBanksList).map(key => allBanksList[key]);
      bankList.splice(0, 0, {
        name: 'Select Bank',
        code: '000',
        country: 'NG'
      });
      if (addBankSuccess) {
        return <Redirect to="/user-dashboard" />;
      }
      const verifyBankDetailsForm = (
        <div>
          {
                !success
                  ? (
                    <div className="col-md-10 offset-md-9 mx-auto" id="verifyBank">
                      <div>
                        <header>
                          <div className="d-flex pt-3 pb-4 my-5">
                            <div className="col text-center reset_title">
                              <h6 id="BankFont">
                            Verify Bank Details!
                                {' '}

                              </h6>
                            </div>
                          </div>

                        </header>

                        <section>

                          <div className="d-flex">
                            <div className="col shadow-lg  px-3 pt-2 pb-5 resetBox"
                              style={{ width: '500%' }}
                            >

                              <form style={{ marginTop: '80px' }}>
                                {!isEmpty(error) && (
                                <ErrorAlertNotification
                                  errors={error}
                                  onClick={this.handleDelete}
                                />
                                )}
                                <div
                                  id="emailHelp"
                                  className="form-text text-muted text-center pb-2"
                                >
                                  <strong style={{ color: '#1c6345' }}>Verify My Bank Details! </strong>
                                  <br />
                                 Enter Your Bank Details.
                                </div>
                                <div className="row">
                                  <div className="form-group col-md-6 my-5">
                                    <TextField
                                      error={errors.accountNo}
                                      onChange={this.onChange}
                                      value={accountNo}
                                      type="text"
                                      field="accountNo"
                                      placeholder="Enter Your Account Number"
                                      className="form-control col-md-12 border-1 shadow recovBtn"
                                    />
                                  </div>
                                  <div className="form-group col-md-6 my-5">
                                    <select
                                      className="form-control col-md-12 select2"
                                      id="savingFrequencyOption"
                                      onChange={this.onChange}
                                      value={bankCode}
                                      name="bankCode"
                                    >
                                      {
                                bankList.map(banks => (
                                  <option key={banks.name} value={banks.code}>
                                    {banks.name}
                                  </option>
                                ))
                                  }
                                    </select>
                                  </div>
                                </div>

                                {
                             isLoading ? (
                               <div className="text-center">
                                 <Button
                                   style={{ marginTop: '40px' }}
                                   type="submit" className="btn btn-success shadow px-5 verifyBankBtn"
                                   onClick={this.onSubmit}
                                 >
                                   <i className="fa fa-spinner fa-spin" />
                                   {' '}
                                 Verify My Bank Details
                                   {' '}

                                 </Button>
                               </div>
                             )
                               : (
                                 <div className="text-center">
                                   <button
                                     style={{ marginTop: '40px' }}
                                     type="submit" className="btn btn-success shadow px-5 verifyBankBtn"
                                     onClick={this.onSubmit}
                                   >
                                     {' '}
                                   Verify My Bank Details
                                     {' '}

                                   </button>
                                 </div>
                               )
                           }
                              </form>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  )
                  : (
                    <div className="col-md-9 offset-md-9 mx-auto" id="verifyBank">
                      <div>
                        <header>
                          <div className="d-flex pt-3 pb-4">
                            <div className="col text-center reset_title">
                              <h6 style={{ color: '#1c6345' }}>Add Bank Details!  </h6>
                            </div>
                          </div>

                        </header>

                        <section>

                          <div className="d-flex">
                            <div className="col shadow-lg  px-3 pt-2 pb-5 resetBox"
                              style={{ width: '500%' }}
                            >

                              <form style={{ marginTop: '80px' }}>
                                <div
                                  id="emailHelp"
                                  className="form-text text-muted text-center pb-2"
                                >
                                  <strong style={{ color: '#1c6345' }}>{accountName}</strong>
                                  <br />
                                     Click Continue if the above is your Account Name.
                                </div>
                                <div className="row">
                                  <div className="form-group col-md-6 my-3">
                                    <TextField
                                      error={errors.accountNo}
                                      onChange={this.onChange}
                                      value={accountNo || ''}
                                      onBlur={this.onBlur}
                                      type="text"
                                      field="accountNo"
                                      placeholder="Enter Your Account Number"
                                      className="form-control col-md-12 border-1 shadow recovBtn"
                                    />
                                  </div>
                                  <div className="form-group col-md-6 my-3">
                                    <select
                                      className="form-control col-md-12 select2"
                                      id="savingFrequencyOption"
                                      onBlur={this.onBlur}
                                      onChange={this.onChange}
                                      value={bankCode}
                                      name="bankCode"
                                    >
                                      {
                                bankList.map(banks => (
                                  <option key={banks.name} value={banks.code}>
                                    {banks.name}
                                  </option>
                                ))
                                  }
                                    </select>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="form-group col-md-6 my-2">
                                    <TextField
                                      id="savingFrequencyOption"
                                      error={errors.accountName}
                                      onChange={this.onChange}
                                      value={accountName || ''}
                                      type="text"
                                      field="accountName"
                                      placeholder="Enter Your Account Number"
                                      className="form-control col-md-12 border-1 shadow recovBtn"
                                    />
                                  </div>
                                </div>
                                {
                                 isLoading2 ? (
                                   <div className="text-center">
                                     <button
                                       style={{ marginTop: '10px' }}
                                       type="submit" className="btn btn-success shadow px-5 verifyBankBtn"
                                     >
                                       <i className="fa fa-spinner fa-spin" />
                                       {' '}
                                        Continue
                                       {' '}

                                     </button>
                                   </div>
                                 )
                                   : (
                                     <div className="text-center">
                                       <button
                                         style={{ marginTop: '10px' }}
                                         type="button" className="btn btn-success shadow px-5 verifyBankBtn"
                                         onClick={this.onAddBankDetails}
                                       >
                                         {' '}
                                          Continue
                                         {' '}

                                       </button>
                                     </div>
                                   )
                               }
                              </form>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  )
            }
        </div>
      );
      return (
        <div>
          <UserDashBoardSideNavigation />
          <div className="main_body_wrapper">
            <UserDashBoardTopNavigation />
            {verifyBankDetailsForm}
          </div>
        </div>
      );
    }
}

VerifyBankDetailsForm.propTypes = {
  GetAllBanksRequest: PropTypes.func,
  allBanksList: PropTypes.any,
  VerifyBankAccountDetails: PropTypes.func,
  DeleteVerifyBankError: PropTypes.func,
  error: PropTypes.string,
  success: PropTypes.bool,
  addBankSuccess: PropTypes.bool,
  accountName: PropTypes.string,
  AddBankDetailsRequest: PropTypes.func,
  SetVerifyBankAccountError: PropTypes.func
};

const mapStateToProps = state => ({
  allBanksList: state.getAllBanks.getAllBanks,
  success: state.verifyBankDetails.success,
  error: state.verifyBankDetails.error,
  accountName: state.verifyBankDetails.verifyBank.accountName,
  addBankSuccess: state.addBankDetails.success
});

const mapDispatchToProps = dispatch => ({
  GetAllBanksRequest: () => dispatch(getAllBanksRequest()),
  VerifyBankAccountDetails: accountDetails => dispatch(verifyBankAccountDetails(accountDetails)),
  DeleteVerifyBankError: () => dispatch(deleteVerifyBankError()),
  AddBankDetailsRequest: bankDetails => dispatch(addBankDetailsRequest(bankDetails)),
  SetVerifyBankAccountError: error => dispatch(setVerifyBankAccountError(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyBankDetailsForm);
