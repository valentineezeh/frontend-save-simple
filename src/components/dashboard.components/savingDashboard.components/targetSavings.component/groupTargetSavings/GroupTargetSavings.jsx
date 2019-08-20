/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import isEmpty from 'is-empty';
import Calendar from 'react-calendar';
import Cookie from 'cookies-js';
import moment from 'moment';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import Loader from 'react-loader-spinner';
import DashboardMobileNav from '../../../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../../../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../../userDashBoard.components/UserDashBoardTopNavigation';
import {
  Button,
  TextField,
  TransactionCards,
  DebitAccountCard,
  ErrorAlertNotification,
  SavingHeader,
  TextArea
} from '../../../../commons/index';
import {
  groupSavingIntervals,
  savingDaysFrequency,
  daysInMonth
} from '../../../../../helper/index';
import {
  groupSavingInputValidateFront,
  fundingSourceCard,
  destinationAccount,
  validateStartDate,
  groupSavingsEmailInput,
  validateDuration
} from '../../../../../middlewares/targetSavings/enterSavingDetails';
import bankBuildingIcon from '../../../../../template/utils/icons/bank-building.png';
import getCustomerCards from '../../../../../actions/setUpCardDetails.actions/getCustomerCards';
import mastercardIcon from '../../../../../template/utils/icons/mastercard.png';
import getCustomerAccounts from '../../../../../actions/setupBankDetails.actions/getCustomerAcct';
import uploadPersonalSavingImg from '../../../../../actions/image.actions/personalSavingImg';
import fileUpIcon from '../../../../../template/utils/icons/fileUp.png';
import createGroupTargetSavings, { deleteGroupTargetSavingsError } from
  '../../../../../actions/savings.actions/createGroupTargetSavings';


/**
 * @class GroupTargetSavings
 */
class GroupTargetSavings extends Component {
    state = {
      title: '',
      description: '',
      startDate: new Date(),
      targetAmount: '',
      errors: {},
      cardId: '',
      accountId: '',
      savingsInterval: '0',
      savingsDay: '0',
      duration: '',
      email: '',
      removeEmail: '',
      imageUrl: '',
      participants: [],
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
  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      delete errors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
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
    this.setState({
      cardId: event.currentTarget.value,
      errors: {}
    });
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onHandleRadioButton2 = (event) => {
    this.setState({
      accountId: event.currentTarget.value,
      errors: {}
    });
  }

  /**
   *
   * @param {*} startDate
   * @returns {*} - state
   */
  onCalendarChange = (startDate) => {
    this.setState({
      startDate
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

  /**
   *
   * @returns {*} - state
   */
  onAddEmail = () => {
    const { email } = this.state;
    const { participants } = this.state;
    const tempArray = [...participants];
    tempArray.push(email);
    if (this.isValidEmailInput()) {
      this.setState({
        errors: {},
        participants: tempArray,
        email: ''
      });
    }
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onDeleteEmail = (event) => {
    event.preventDefault();
    const { participants } = this.state;
    const newEmailObj = participants.filter(delEmail => delEmail !== event.currentTarget.value);
    this.setState({
      participants: newEmailObj,
      email: ''
    });
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
      });
    }
  }

  /**
  *
  *@param {*} event
  *@returns {*} - state
  */
 onSubmit = (event) => {
   event.preventDefault();
   const { startDate, participants } = this.state;
   const formattedDate = moment(startDate).format('YYYY-MM-DD');
   const token = Cookie.get('jwtToken');
   const decodeToken = jwt.decode(token);
   const { customerId } = decodeToken;
   const { savingImg, history, CreateGroupTargetSavings } = this.props;
   if (this.isValidCardIdCheck() && this.isValid() && this.isValidAccountIdCheck() && this.isValidCalanderInput() && this.isValidDuration()) {
     if (participants.length === 0) {
       const mainOverAllError = { err: 'You are yet to invite a group member.' };
       this.setState({
         overAllError: mainOverAllError
       });
     } else {
       this.setState({ errors: {}, overAllError: {} });
       CreateGroupTargetSavings({
         ...this.state,
         customerId: Number(customerId),
         imageUrl: savingImg,
         startDate: formattedDate,
         history
       });
     }
   } else {
     const mainOverAllError = { err: 'Oops! something went wrong. Kindly fill in the required fields.' };
     this.setState({
       overAllError: mainOverAllError
     });
   }
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
   * @returns {*} - state
   */
  handleDelete = () => {
    const { DeleteGroupTargetSavingsError } = this.props;
    DeleteGroupTargetSavingsError();
  }

  onHandleDelete = () => {
    const { errors } = this.state;
    this.setState({
      errors: errors.cardId = ''
    });
  }

  /**
   *
   * @returns {*} - state
   */
  onDeleteErrorMessage = () => {
    this.setState({
      overAllError: {}
    });
  }


  /**
   *
   * @returns {*} - state
   */
  isValid = () => {
    const { errors, isValid } = groupSavingInputValidateFront(
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
      this.setState({
        errors,
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

  onCheckCalanderInput = () => {
    if (this.isValidCalanderInput()) {
      this.setState({
        errors: {},
      });
    }
  }

  onCheckInterval = () => {
    if (this.isValidDuration()) {
      this.setState({
        errors: {},
      });
    }
  }

  /**
   *
   * @returns {*} - state
   */
  isValidCalanderInput = () => {
    const { errors, isValid } = validateStartDate(
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
   * @returns {*} - state
   */
  isValidDuration = () => {
    const { errors, isValid } = validateDuration(
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
   * @returns {*} - state
   */
  isValidEmailInput = () => {
    const { errors, isValid } = groupSavingsEmailInput(
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
   * @returns {*} - state
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
      savingsInterval,
      savingsDay,
      duration,
      participants,
      email,
      overAllError
    } = this.state;
    const {
      customerCards,
      customerAccounts,
      savingImg,
      loading,
      error,
      success,
      imgLoading
    } = this.props;
    if (success) {
      return <Redirect to="/user-dashboard" />;
    }
    const groupTargetSavings = (
      <>
        <section className="body_space">
          <div className="target_savings_form_main_wrapper">
            <div className="savings_form_div2">
              <div className="gp_sav">

                <>
                  <SavingHeader
                    active1="active"
                  />
                  <div className="savings_details" id="psavings_savings_details">
                    <div className="savings_form_inst">

                      <h5 id="newSavingDetails">
                    Setup your group savings
                      </h5>
                      <br />
                      <p style={{ fontSize: '14px' }}>
                      Kindly fill the form below to set up a group target saving plan. Note fields with
                        {' '}
                        <span style={{ color: 'red' }}>*</span>
                        {' '}
are required
                      </p>
                    </div>
                    <form action="">
                      <div className="input_div">
                        <TextField
                          error={errors.title}
                          onChange={this.onChange}
                          value={title || ''}
                          type="text"
                          field="title"
                          placeholder="What is the name of the Group?"
                          label="Group Name"
                        />
                      </div>
                      <div className="input_div">
                        <TextArea
                          error={errors.description}
                          onChange={this.onChange}
                          value={description || ''}
                          field="description"
                          placeholder="Give a brief description of your group target savings"
                          label="Group Description"
                        />
                      </div>
                      <div className="input_div">
                        <TextField
                          error={errors.targetAmount}
                          onChange={this.onChange}
                          value={targetAmount || ''}
                          field="targetAmount"
                          placeholder="Expected Contributing Amount eg: 500000"
                          label="Target Amount"
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <span id="input_labels">Group Image</span>
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
                  Upload a group image
                            </p>
                          </div>
                        </div>
                        <div className="input_div">
                          <input
                            type="file"
                            name=""
                            onChange={this.fileSelectHandler}
                            placeholder="Title of savings"
                          />
                        </div>
                      </div>
                      <div className="btn_full_width green_btn" id="target_save_next_one">
                        <Button
                          type="button"
                          onClick={this.onNextButton}
                        >
                            Next
                        </Button>
                      </div>
                    </form>
                  </div>
                </>

                {/* ================ Funding Source ==================  */}
                <>
                  <div className="funding_source" id="psavings_funding_source">
                    <div className="savings_form_inst">
                      <h5 id="newSavingDetails">
                Select Debit Card
                      </h5>
                      <br />
                      <div className="text-center">
                        <p
                          style={{
                            fontSize: '14px'
                          }}
                        >
                Please note it is mandatory you select a debit card
                        </p>
                      </div>
                    </div>
                    {
                      isEmpty(customerCards.customerCards) ? (
                        <div className="text-center">
                          <p
                            style={{
                              color: 'green'
                            }}
                          >
                          You are yet to add a new card. Click on set up bank details to add card.
                          </p>
                        </div>
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
                    <div className="btn_full_width green_btn" id="target_save_next_two">
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

                {/* ================= Choose Start date ========================= */}
                <>
                  <div className="destination_account_twoo" id="psavings_destination_account_twoo">
                    <div className="savings_form_inst">
                      <h5 id="newSavingDetails">
            Select Start Date
                      </h5>
                      <p
                        style={{
                          fontSize: '14px'
                        }}
                      >
                Select a date you would like to commence saving.
                      </p>
                    </div>
                    {
                      errors.startDate && (
                        <ErrorAlertNotification
                          errors={errors.startDate}
                          onClick={this.onHandleDelete}
                        />
                      )
                        }
                    <div className="calendercontainer">
                      <div className="calenderrow">
                        <Calendar
                          onChange={this.onCalendarChange}
                          value={startDate}
                          onClick={this.onCheckCalanderInput}
                        />
                      </div>
                    </div>
                    <div className="btn_full_width green_btn mt-5" id="target_save_next_five">
                      <button type="button"
                        onClick={this.onCheckCalanderInput}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>

                {/* Destination account */}
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
                    <div className="btn_full_width green_btn" id="target_save_next_four">
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

                <>
                  <div className="destination_account_three py-2" id="psavings_destination_account_three">
                    <div className="savings_form_inst">
                      <h5 id="newSavingDetails">
            You are almost done!
                      </h5>
                      <p style={{ fontSize: '14px' }}>
                   Note fields with
                        {' '}
                        <span style={{ color: 'red' }}>*</span>
                        {' '}
are required
                      </p>
                    </div>
                    <br />
                    <div className="input_div">
                      {
                        errors.savingsInterval ? (
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
                        name="savingsInterval"
                        onChange={this.onChange}
                        value={savingsInterval}
                        id="savingFrequencyOption"
                      >
                        {
                                groupSavingIntervals.map(interval => (
                                  <option key={interval.id} value={interval.id}>
                                    {interval.action}
                                  </option>
                                ))
                            }
                      </select>
                    </div>
                    {errors.savingsInterval && (
                      <p className="text-danger">
                        <i className="fas fa-exclamation-triangle" />
                        &nbsp;
                        {errors.savingsInterval}

                      </p>
                    )}


                    {
                    savingsInterval === '7' ? (
                      <div className="input_div">
                        {
                        errors.savingsDay ? (
                          <div className="row">
                            <div className="col-md-6">
                              <span
                                id="input_labels"
                                style={{ color: '#dc3545' }}
                              >
                            Saving Days
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
                              <span id="input_labels">Saving Days</span>
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
                        {errors && <p className="text-danger">{errors.savingsDay}</p>}
                      </div>
                    ) : ''
                  }
                    {
                    savingsInterval === '30' ? (
                      <div className="input_div">
                        {
                          errors.savingsDay ? (
                            <div className="row">
                              <div className="col-md-6">
                                <span
                                  id="input_labels"
                                  style={{ color: '#dc3545' }}
                                >
                              Saving Days
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
                                <span id="input_labels">Saving Days</span>
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
                          name="savingsDay"
                          error={errors.savingsDay}
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
                        {errors && <p className="text-danger">{errors.savingsDay}</p>}
                      </div>
                    ) : ''
                  }
                    <div className="input_div">
                      <TextField
                        error={errors.duration}
                        onChange={this.onChange}
                        type="text"
                        value={duration || ''}
                        field="duration"
                        placeholder="Duration in months, weeks or days e.g 3"
                        label="Saving Duration"
                      />
                    </div>
                    <div className="btn_full_width green_btn mt-5" id="target_save_next_six">
                      <button
                        type="button"
                        onClick={this.onCheckInterval}
                      >
                Next
                      </button>
                    </div>
                  </div>
                </>

                {/*= ======== Inviting members ======== */}
                <>
                  <div className="almost_done"
                    id="psavings_almost_done"
                  >
                    <div className="savings_form_inst">
                      <h5 id="newSavingDetails">
                Start inviting members
                      </h5>
                      <br />

                      {!isEmpty(overAllError) && (
                      <ErrorAlertNotification
                        errors={overAllError.err}
                        onClick={this.onDeleteErrorMessage}
                      />
                      )}
                      {!isEmpty(error) && (
                      <ErrorAlertNotification
                        errors={error}
                        onClick={this.handleDelete}
                      />
                      )}
                      <p
                        style={{
                          fontSize: '14px'
                        }}
                      >
                Add group members by inviting them via email. They will receive a notification that will alert them of your request.
                &nbsp;
                        <br />
                        <span style={{ color: 'red' }}>Note: This is mandatory.</span>
                      </p>
                    </div>
                    {
                          participants.length === 0 ? '' : (
                            participants.map(userEmail => (
                              <>
                                <div className="invite_members">
                                  <div>
                                    <p>
                                      { userEmail }
                                    </p>
                                  </div>
                                  <div>
                                    <button type="button"
                                      name="removeEmail"
                                      value={userEmail}
                                      onClick={this.onDeleteEmail}
                                    >
                                      <i className="fas fa-trash" />
                                    </button>
                                  </div>
                                </div>
                              </>
                            ))
                          )
                      }
                    {errors.email && (
                    <p className="text-danger">
                      <i className="fas fa-exclamation-triangle" />
                        &nbsp;
                      {errors.email}
                    </p>
                    )}
                    <div className="invite_members_input">
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={this.onChange}
                          placeholder="Enter member Email"
                        />
                      </div>
                      <br />
                      <div>
                      &nbsp;
                        <Link
                          to="#"
                          style={{ color: 'green' }}
                          onClick={this.onAddEmail}
                        >
                             Invite
                        </Link>
                      </div>
                    </div>
                    <div className="btn_full_width green_btn ">
                      {
                          loading ? (
                            <Button
                              onClick={this.onSubmit}
                              type="button"
                            >
                              <i className="fa fa-spinner fa-spin" />
                              {'  '}
                              Finalise
                            </Button>
                          ) : (
                            <Button
                              onClick={this.onSubmit}
                              type="button"
                            >
                              Finalise
                            </Button>
                          )
                        }

                    </div>
                  </div>
                </>
              </div>
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
          {groupTargetSavings}
        </div>
      </div>
    );
  }
}

GroupTargetSavings.propTypes = {
  history: PropTypes.shape({}),
  GetCustomerCard: PropTypes.func,
  customerCards: PropTypes.shape({}),
  GetCustomerAccounts: PropTypes.func,
  customerAccounts: PropTypes.shape({}),
  UploadPersonalSavingImg: PropTypes.func,
  savingImg: PropTypes.string,
  CreateGroupTargetSavings: PropTypes.func,
  success: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string,
  DeleteGroupTargetSavingsError: PropTypes.func,
  imgLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  customerCards: state.getCards.customerCards,
  customerAccounts: state.getCustomerAccounts.customerAcct,
  savingImg: state.personalSavingImage.photo,
  loading: state.createGroupTargetSavings.loading,
  error: state.createGroupTargetSavings.error,
  success: state.createGroupTargetSavings.success,
  imgLoading: state.personalSavingImage.imgLoading
});

export default connect(mapStateToProps, {
  GetCustomerCard: getCustomerCards,
  GetCustomerAccounts: getCustomerAccounts,
  UploadPersonalSavingImg: uploadPersonalSavingImg,
  CreateGroupTargetSavings: createGroupTargetSavings,
  DeleteGroupTargetSavingsError: deleteGroupTargetSavingsError
})(GroupTargetSavings);
