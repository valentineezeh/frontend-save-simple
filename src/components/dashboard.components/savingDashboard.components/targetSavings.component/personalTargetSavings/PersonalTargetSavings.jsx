/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import isEmpty from 'is-empty';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import Cookie from 'cookies-js';
import Loader from 'react-loader-spinner';
import DashboardMobileNav from '../../../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../../../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../../userDashBoard.components/UserDashBoardTopNavigation';
import {
  enterSavingDetails,
  validateUserInput,
  fundingSourceCard,
  destinationAccount
} from
  '../../../../../middlewares/targetSavings/enterSavingDetails';
import {
  Button,
  TextField,
  TransactionCards,
  DebitAccountCard,
  ErrorAlertNotification,
  TextArea
} from '../../../../commons/index';
import getCustomerCards from '../../../../../actions/setUpCardDetails.actions/getCustomerCards';
import mastercardIcon from '../../../../../template/utils/icons/mastercard.png';
import bankBuildingIcon from '../../../../../template/utils/icons/bank-building.png';
import getCustomerAccounts from '../../../../../actions/setupBankDetails.actions/getCustomerAcct';
import fileUpIcon from '../../../../../template/utils/icons/fileUp.png';
import { frequency, savingDaysFrequency, daysInMonth } from '../../../../../helper/index';
import uploadPersonalSavingImg from '../../../../../actions/image.actions/personalSavingImg';
import createPersonalTargetSavings, { deletePostPersonalTargetSavingsError } from
  '../../../../../actions/savings.actions/createPersonalTargetSavings';

const header = Cookie.get('personalHeader');

/**
 * @class MainPage
 */
class PersonalTargetMainPage extends Component {
  state = {
    title: header || '',
    description: '',
    startDate: '',
    targetAmount: '',
    errors: {},
    cardId: '',
    accountId: '',
    savingInterval: '0',
    savingsDay: '0',
    imageUrl: '',
    duration: '',
    overAllError: {}
  }

  /**
   *
   * @returns {*} - state
   */
  componentDidMount = () => {
    const { GetCustomerCard, GetCustomerAccounts } = this.props;
    GetCustomerCard();
    GetCustomerAccounts();
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onNextButton = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({
        errors: {},
        overAllError: {}
      });
    }
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
  onHandleRadioButton = (event) => {
    const { errors } = this.state;
    this.setState({
      cardId: event.currentTarget.value,
      errors: errors.cardId = ''
    });
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onHandleRadioButton2 = (event) => {
    const { errors } = this.state;
    this.setState({
      accountId: event.currentTarget.value,
      errors: errors.accountId = ''
    });
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  fileSelectHandler = (event) => {
    const { UploadPersonalSavingImg, savingImg } = this.props;
    this.setState({
      imageUrl: event.target.files[0]
    });
    UploadPersonalSavingImg(event.target.files[0]).then(() => {
      this.setState({ imageUrl: savingImg });
    });
  }

  onAddBankAccount = () => {
    const { history } = this.props;
    history.push('/verify-bank-details');
  }

  onAddNewCard = () => {
    const { history } = this.props;
    history.push('/add-card');
  }

  /**
  *
  *@param {*} event
  *@returns {*} - state
  */
 onSubmit = (event) => {
   event.preventDefault();
   const token = Cookie.get('jwtToken');
   const decodeToken = jwt.decode(token);
   const { customerId } = decodeToken;
   const { CreatePersonalTargetSavings, savingImg, history } = this.props;
   if (this.isValid2() && this.isValid() && this.isValidCardIdCheck() && this.isValidAccountIdCheck()) {
     this.setState({ errors: {}, overAllError: {} });
     CreatePersonalTargetSavings({
       ...this.state,
       customerId: Number(customerId),
       imageUrl: savingImg,
       history
     });
   } else {
     const mainOverAllError = { err: 'Oops! something went wrong. Kindly fill in the required fields.' };
     this.setState({
       overAllError: mainOverAllError
     });
   }
 }

 onDeleteErrorMessage = () => {
   this.setState({
     overAllError: {}
   });
 }

 /**
   *
   * @returns {*} - state
   */
  handleDelete = () => {
    const { DeletePostPersonalTargetSavingsError } = this.props;
    DeletePostPersonalTargetSavingsError();
  }

  onHandleDelete = () => {
    const { errors } = this.state;
    this.setState({
      errors: errors.cardId = ''
    });
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  isValid = () => {
    const { errors, isValid } = enterSavingDetails(
      this.state
    );
    if (!isValid) {
      const mainOverAllError = { err: 'Oops! something went wrong. Kindly fill in the required fields.' };
      this.setState({
        errors,
        overAllError: mainOverAllError
      });
    }
    return isValid;
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onCheckCardId = (event) => {
    event.preventDefault();
    if (this.isValidCardIdCheck()) {
      this.setState({
        errors: {},
      });
    }
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onCheckAccountId = (event) => {
    event.preventDefault();
    if (this.isValidAccountIdCheck()) {
      this.setState({
        errors: {},
      });
    }
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  isValid2 = () => {
    const { errors, isValid } = validateUserInput(
      this.state
    );
    if (!isValid) {
      const mainOverAllError = { err: 'Oops! something went wrong. Kindly fill in the required fields.' };
      this.setState({
        errors,
        overAllError: mainOverAllError
      });
    }

    return isValid;
  }

  /**
   *
   * @returns {*} - state
   */
  isValidCardIdCheck = () => {
    const { errors, isValid } = fundingSourceCard(
      this.state
    );
    if (!isValid) {
      const mainOverAllError = { err: 'Oops! something went wrong. Kindly fill in the required fields.' };
      this.setState({
        errors,
        overAllError: mainOverAllError
      });
    }
    return isValid;
  }

  /**
   *
   * @returns {*} - state
   */
  isValidAccountIdCheck = () => {
    const { errors, isValid } = destinationAccount(
      this.state
    );
    if (!isValid) {
      this.setState({
        errors,
      });
    }
    return isValid;
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const {
      targetAmount,
      errors,
      title,
      description,
      startDate,
      cardId,
      accountId,
      savingInterval,
      savingsDay,
      duration,
      overAllError
    } = this.state;
    const {
      customerCards,
      customerAccounts,
      savingImg,
      success,
      loading,
      error,
      imgLoading
    } = this.props;
    if (success) {
      return <Redirect to="/user-dashboard" />;
    }

    const personalHeader = Cookie.get('personalHeader');
    const mainPage = (
      <>
        <section className="body_space">
          <div className="target_savings_form_main_wrapper">
            <div className="savings_form_div">

              {/* Enter saving details */}

              <div>
                <div className="step_number">
                  <div className="step_number_one active">
            1
                  </div>
                  <div className="step_number_two">
            2
                  </div>
                  <div className="step_number_three">
            3
                  </div>
                  <div className="step_number_seven">
            4
                  </div>
                </div>
                <div className="savings_details"
                  id="psavings_savings_details"
                >
                  <div className="savings_form_inst">
                    <h5 id="newSavingDetails">
                      {personalHeader || 'Enter Savings Details'}
                    </h5>
                    <br />
                    <p id="dashId">
Kindly fill the form below to set up your saving plan. Note fields with
                      {' '}
                      <span style={{ color: 'red' }}>*</span>
                      {' '}
are required
                    </p>
                  </div>


                  <form>
                    {
                      errors.targetAmount ? (
                        <div className="row">
                          <div className="col-md-6">
                            <span
                              id="input_labels"
                              style={{ color: '#dc3545' }}
                            >
Target Amount

                            </span>
                          </div>
                          <div className="col-md-6">
                            <span id="input_labels_required">
                            *

                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-6">
                            <span
                              id="input_labels"
                            >
Target Amount

                            </span>
                          </div>
                          <div className="col-md-6">
                            <span id="input_labels_required">
                            *

                            </span>
                          </div>
                        </div>
                      )
                    }
                    <div className="icon_embedded_input">
                      <div className="input_icon">
                        <p style={{ color: 'white' }}>
                ₦
                        </p>
                      </div>
                      <div className="input_wrapper">
                        <TextField
                          error={errors.targetAmount}
                          onChange={this.onChange}
                          type="text"
                          value={targetAmount || ''}
                          field="targetAmount"
                          placeholder="How much are you saving (required)"
                        />

                      </div>
                    </div>
                    <div className="input_div">
                      {
                        personalHeader ? (
                          <TextField
                            error={errors.title}
                            onChange={this.onChange}
                            type="text"
                            value={personalHeader}
                            field="title"
                            placeholder="Saving Title"
                            label="Title"
                            disabled
                          />
                        ) : (
                          <TextField
                            error={errors.title}
                            onChange={this.onChange}
                            type="text"
                            value={title}
                            field="title"
                            placeholder="Saving Title"
                            label="Title"
                            // disabled="false"
                          />
                        )
                      }

                    </div>
                    {/* saving interval */}
                    <div className="row">
                      <div className="col-md-6">
                        <span id="input_labels">Image Upload</span>
                      </div>
                      <div className="col-md-6">
                        <span id="input_labels_required" />
                      </div>
                    </div>
                    <div className="file_input_upload">
                      <div className="file_input_upload_design">
                        <div className="icon">
                          {
                            imgLoading
                              ? (
                                <Loader
                                  type="Circles"
                                  color="#00C177"
                                  height="100"
                                  width="100"
                                />
                              )
                              : (
                                savingImg ? (
                                  <img src={
                                  savingImg
                                  }
                                    alt=""
                                    style={{
                                      height: '100px',
                                      width: '150px'
                                    }}
                                  />
                                ) : (
                                  <img src={
                                  fileUpIcon

                                  } alt=""
                                  />
                                )
                              )
                          }
                        </div>
                        <div className="upload_inst">
                          <p>
                  Upload your picture
                          </p>
                        </div>
                      </div>
                      <div className="input_div">
                        <input
                          type="file"
                          name=""
                          id=""
                          onChange={this.fileSelectHandler}
                          placeholder="Title of savings"
                        />
                      </div>
                    </div>

                    <div className="input_div">
                      <TextArea
                        error={errors.description}
                        onChange={this.onChange}
                        value={description}
                        field="description"
                        rows="10"
                        cols="20"
                        id="savingDescription"
                        placeholder="Give a brief description of your savings."
                        label="Description"
                      />
                    </div>

                    <div
                      className="btn_full_width green_btn"
                      id="target_save_next_one"
                    >
                      <button
                        type="button"
                        onClick={this.onNextButton}
                      >
                Next
                      </button>
                    </div>
                  </form>
                </div>
              </div>


              {/* Select Funding */}

              <>
                <div className="funding_source"
                  id="psavings_funding_source"
                >
                  <div className="savings_form_inst">
                    <h5 id="newSavingDetails">
            Please Select a Funding Source
                    </h5>
                    <br />
                    <p id="dashId">Please note it is mandatory you select a funding source</p>
                  </div>
                  {
                    isEmpty(customerCards.customerCards) ? (
                      <>
                        <div className="text-center">
                          <p
                            style={{
                              color: 'green'
                            }}
                          >
                        You are yet to add a new card. Click on set up bank details to add card.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {!isEmpty(errors.cardId) && (
                        <ErrorAlertNotification
                          errors={errors.cardId}
                          onClick={this.onHandleDelete}
                        />
                        )}

                        {
                          customerCards.customerCards.map(card => (
                            <TransactionCards
                              key={card.id}
                              card={card}
                              src={mastercardIcon}
                              name="cardId"
                              value={card.id}
                              defaultChecked={cardId === card.id}
                              onChange={this.onHandleRadioButton}
                            />
                          ))
                        }
                      </>
                    )

 }

                  <div className="btn_full_width green_btn mt-5"
                    id="target_save_next_two"
                  >
                    {
                        isEmpty(customerCards.customerCards) ? '' : (
                          <Button
                            onClick={this.onCheckCardId}
                          >
                  Next
                          </Button>
                        )
                      }
                  </div>

                </div>

              </>

              {/* Select debit card */}
              <>
                <div className="destination_account" id="psavings_destination_account">
                  <div className="savings_form_inst">
                    <h5 id="newSavingDetails">
            Select Destination account
                    </h5>

                    <br />
                    <p id="dashId">Please note it is mandatory you select a destination account</p>
                  </div>

                  {
  isEmpty(customerAccounts) || customerAccounts.customerAccounts.length === 0 ? (
    <div className="text-center">
      <p
        style={{
          color: 'green'
        }}
      >
        You are yet to add a destination Bank account. Click on set up bank details to add one.
      </p>
    </div>
  ) : (
    <>
      {!isEmpty(errors.accountId) && (
      <ErrorAlertNotification
        errors={errors.accountId}
        onClick={this.onHandleDelete}
      />
      )}
      {
            customerAccounts.customerAccounts.map(account => (
              <DebitAccountCard
                key={account.id}
                src={bankBuildingIcon}
                accountNumber={account.accountNo}
                accountName={account.accountName}
                bankName={account.bankName}
                name="accountId"
                value={account.id}
                defaultChecked={accountId === account.id}
                onChange={this.onHandleRadioButton2}
              />
            ))
      }
    </>
  )
}
                  <div className="btn_full_width green_btn mt-5" id="target_save_next_seven">
                    {
                        isEmpty(customerAccounts.customerAccounts) ? '' : (
                          <Button
                            onClick={this.onCheckAccountId}
                          >
                Next
                          </Button>
                        )
                      }
                  </div>

                </div>

              </>
              {/* This the almost done page */}

              <>
                <div className="almost_done" id="psavings_almost_done">
                  <div className="savings_form_inst">
                    <h5 id="newSavingDetails">
              You are almost done !
                    </h5>
                  </div>
                  {!isEmpty(error) && (
                  <ErrorAlertNotification
                    errors={error}
                    onClick={this.handleDelete}
                  />
                  )}
                  {!isEmpty(overAllError) && (
                  <ErrorAlertNotification
                    errors={overAllError.err}
                    onClick={this.onDeleteErrorMessage}
                  />
                  )}
                  <div className="input_div">
                    <TextField
                      error={errors.startDate}
                      onChange={this.onChange}
                      type="date"
                      value={startDate || ''}
                      field="startDate"
                      placeholder=""
                      label="Pick A Start Date"
                    />
                  </div>

                  <div className="input_div">
                    <TextField
                      error={errors.duration}
                      onChange={this.onChange}
                      type="text"
                      value={duration}
                      field="duration"
                      placeholder="Duration in months, weeks or days e.g 3"
                      label="Saving Duration"
                    />
                  </div>
                  <div className="input_div">
                    {
                      errors.savingInterval ? (
                        <div className="row">
                          <div className="col-md-6">
                            <span
                              id="input_labels"
                              style={{ color: '#dc3545' }}
                            >
Saving Interval

                            </span>
                          </div>
                          <div className="col-md-6">
                            <span id="input_labels_required">
                            *

                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-6">
                            <span id="input_labels">Saving Interval</span>
                          </div>
                          <div className="col-md-6">
                            <span id="input_labels_required">
                            *

                            </span>
                          </div>
                        </div>
                      )
                    }
                    <select
                      name="savingInterval"
                      onChange={this.onChange}
                      value={savingInterval}
                      id="savingFrequencyOption"
                    >
                      {
                              frequency.map(freq => (
                                <option key={freq.id} value={freq.id}>
                                  {freq.action}
                                </option>
                              ))
                              }
                    </select>
                  </div>
                  {
                    errors.savingInterval && (
                      <p className="text-danger">
                        <i className="fas fa-exclamation-triangle" />
                        &nbsp;
                        {errors.savingInterval}
                      </p>
                    )
                }
                  {
                    savingInterval === '7' ? (
                      <div className="input_div">
                        {errors && <p className="text-danger">{errors.savingsDay}</p>}
                        <div className="row">
                          <div className="col-md-6">
                            <span id="input_labels">Saving Days</span>
                          </div>
                          <div className="col-md-6">
                            <span id="input_labels_required">
                            *
                            </span>
                          </div>
                        </div>
                        <select
                          name="savingsDay"
                          onChange={this.onChange}
                          value={savingsDay}
                          id="savingFrequencyOption"
                        >
                          {

                          savingDaysFrequency.map(day => (
                            <option key={day.id} value={day.id}>
                              {day.action}
                            </option>
                          ))

                      }

                        </select>
                      </div>
                    ) : ''
                  }
                  {
                    savingInterval === '30' ? (
                      <div className="input_div">
                        {errors && <p className="text-danger">{errors.savingsDay}</p>}
                        <div className="row">
                          <div className="col-md-6">
                            <span id="input_labels">Saving Days</span>
                          </div>
                          <div className="col-md-6">
                            <span id="input_labels_required">
                            *
                            </span>
                          </div>
                        </div>
                        <select
                          name="savingsDay"
                          onChange={this.onChange}
                          value={savingsDay}
                          id="savingFrequencyOption"
                        >
                          {

                             daysInMonth.map(day => (
                               <option key={day.id} value={day.id}>
                                 {day.id}
                               </option>
                             ))

                      }

                        </select>
                      </div>
                    ) : ''
                  }
                  {/* <br /> */}
                  <div className="btn_full_width green_btn " id="target_save_next_four">
                    {
                          loading ? (
                            <Button
                              onClick={this.onSubmit}
                              type="button"
                            >
                              <i className="fa fa-spinner fa-spin" />
                              {'  '}
                              Start saving
                            </Button>
                          ) : (
                            <Button
                              onClick={this.onSubmit}
                              type="button"
                            >
                              Start saving
                            </Button>
                          )
                        }
                  </div>

                </div>
              </>
            </div>
          </div>
        </section>
      </>
    );
    return (
      <div className="personal_sav">
        <DashboardMobileNav />
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {mainPage}
        </div>
      </div>
    );
  }
}

PersonalTargetMainPage.propTypes = {
  history: PropTypes.shape({}),
  GetCustomerCard: PropTypes.func,
  customerCards: PropTypes.shape({}),
  GetCustomerAccounts: PropTypes.func,
  customerAccounts: PropTypes.shape({}),
  UploadPersonalSavingImg: PropTypes.func,
  savingImg: PropTypes.string,
  CreatePersonalTargetSavings: PropTypes.func,
  success: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string,
  DeletePostPersonalTargetSavingsError: PropTypes.func,
  imgLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  customerCards: state.getCards.customerCards,
  customerAccounts: state.getCustomerAccounts.customerAcct,
  savingImg: isEmpty(state.personalSavingImage) ? '' : state.personalSavingImage.photo,
  success: state.postPersonalTargetSavings.success,
  loading: state.postPersonalTargetSavings.loading,
  error: state.postPersonalTargetSavings.error,
  imgLoading: state.personalSavingImage.imgLoading
});

export default withRouter(connect(mapStateToProps, {
  GetCustomerCard: getCustomerCards,
  GetCustomerAccounts: getCustomerAccounts,
  UploadPersonalSavingImg: uploadPersonalSavingImg,
  CreatePersonalTargetSavings: createPersonalTargetSavings,
  DeletePostPersonalTargetSavingsError: deletePostPersonalTargetSavingsError
})(PersonalTargetMainPage));
