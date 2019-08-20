/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import Cookie from 'cookies-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { withRouter, Link } from 'react-router-dom';
import getCustomerAccounts from
  '../../../../../actions/setupBankDetails.actions/getCustomerAcct';
import getCustomerCards from '../../../../../actions/setUpCardDetails.actions/getCustomerCards';
import uploadPersonalSavingImg from '../../../../../actions/image.actions/personalSavingImg';
import DashboardMobileNav from '../../../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../../../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../../userDashBoard.components/UserDashBoardTopNavigation';
import mastercardIcon from '../../../../../template/utils/icons/mastercard.png';
import {
  Button,
  TextField,
  TransactionCards,
  ErrorAlertNotification,
  TextArea
} from '../../../../commons/index';
import {
  FixedTargetSavingFundingSource,
} from '../../../../../helper/index';
import {
  fixedTargetSavingsValidationInput,
  validateCardInput
} from
  '../../../../../middlewares/targetSavings/FixedTargetSavings';
import createFixedTargetSavings, { deletePostTargetSavingsError } from
  '../../../../../actions/savings.actions/createTargetSavings';
import addCardDetails from '../../../../../actions/setUpCardDetails.actions/addCardDetails';
import validateAddCardDetails from
  '../../../../../middlewares/setUpBankDetails/verifyAddCardDetails';

/**
 * @class FixedTargetSavings
 */
class FixedTargetSavings extends Component {
    state = {
      title: '',
      description: '',
      maturityDate: '',
      amount: '',
      errors: {},
      cardId: '',
      fundingSource: '',
      interestType: '1',
      isEthical: false,
      overAllError: {},
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      saveCardToken: 'false',
      cvv: '',
      month: '',
      year: '',
      pin: '',
      no: '',
      actionType: 'fixedSavings'
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
  onHandleRadioButtonCardId = (event) => {
    this.setState({
      cardId: event.currentTarget.value,
    });
  }

  onClickNextButton = () => {
    const token = Cookie.get('jwtToken');
    const decodeToken = jwt.decode(token);
    const userId = decodeToken.customerId;
    const {
      fundingSource,
      title,
      description,
      interestType,
      maturityDate,
      isEthical,
      amount,
      saveCardToken,
      actionType
    } = this.state;
    Cookie.set('actionType', actionType);
    const { CreateFixedTargetSavings } = this.props;
    const fundByWalletPayload = {
      customerId: userId,
      fundingSource,
      title,
      description,
      interestType,
      maturityDate,
      isEthical,
      amount,
      saveCardToken,
      actionType
    };
    const fixedSavingsPayload = {
      customerId: userId,
      fundingSource,
      title,
      description,
      interestType,
      maturityDate,
      isEthical,
      amount,
      actionType
    };
    if (this.isValid()) {
      if (fundingSource === '1') {
        Cookies.set('newFixSavingObje', fixedSavingsPayload);
        window.location.href = '/add-card';
      }
      if (fundingSource === '2') {
        this.setState({
          errors: {},
          overAllError: {},
          tab1: false,
          tab2: false,
          tab3: true,
          tab4: false
        });
      }
      if (fundingSource === '5') {
        CreateFixedTargetSavings(fundByWalletPayload);
      }
    }
  }

  onClickBackButton = () => {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      fundingSource: ''
    });
  }

  onDeleteErrorMessage = () => {
    this.setState({
      overAllError: {}
    });
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  handleDelete = () => {
    const { DeletePostTargetSavingsError } = this.props;
    DeletePostTargetSavingsError();
    this.setState({ isLoading: false });
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
   const userId = decodeToken.customerId;
   const { CreateFixedTargetSavings, history } = this.props;
   const {
     title,
     description,
     interestType,
     maturityDate,
     isEthical,
     amount,
     cardId,
     fundingSource,
   } = this.state;
   const fundByExistingCardPayLoad = {
     title,
     description,
     interestType,
     maturityDate,
     isEthical,
     amount,
     cardId,
     fundingSource,
     customerId: userId
   };
   if (this.isValidCard() && this.isValid()) {
     this.setState({ errors: {}, error: {}, overAllError: {} });
     CreateFixedTargetSavings(fundByExistingCardPayLoad, history);
   }
 }

 onHandleRadioButton = () => {
   this.setState({
     saveCardToken: false
   });
 }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  isValid = () => {
    const { errors, isValid } = fixedTargetSavingsValidationInput(
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
  isValidCard = () => {
    const { errors, isValid } = validateCardInput(
      this.state
    );
    if (!isValid) {
      const mainOverAllError = { err: 'Kindly select a card.' };
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
  isValidAddNewCard = () => {
    const { errors, isValid } = validateAddCardDetails(
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
      amount,
      errors,
      title,
      description,
      maturityDate,
      cardId,
      fundingSource,
      overAllError,
      tab1,
      tab3,
    } = this.state;
    const {
      customerCards,
      createTargetLoading,
      error,
    } = this.props;
    const fixedTargetSavings = (
      <section className="body_space">
        <div className="target_savings_form_main_wrapper">
          <div className="savings_form_div">
            <div className="fixed_savings_header">
              {/* Front page for creating fixed savings */}
              {
          tab1 ? (
            <div className="savings_details">
              <div className="savings_form_inst">
                <h5 id="newSavingDetails">
                    Fixed Savings
                </h5>
                <br />
                <p
                  id="dashId"
                  style={{ fontSize: '14px' }}
                >
Kindly fill the form below to set up your saving plan. Note fields with
                  {' '}
                  <span style={{ color: 'red' }}>*</span>
                  {' '}
are required
                </p>
              </div>
              <form>
                {!isEmpty(error) && (
                <ErrorAlertNotification
                  errors={error}
                  onClick={this.handleDelete}
                />
                )}
                {
                      errors.amount ? (
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
                      error={errors.amount}
                      onChange={this.onChange}
                      type="text"
                      value={amount || ''}
                      field="amount"
                      placeholder="How much are you saving"
                    />

                  </div>
                </div>


                <div className="input_div">
                  <TextField
                    error={errors.title}
                    onChange={this.onChange}
                    type="text"
                    value={title || ''}
                    field="title"
                    placeholder="Title of fixed savings"
                    label="Title"
                  />
                </div>

                <div className="input_div">
                  {
                    errors.fundingSource ? (
                      <div className="row">
                        <div className="col-md-6">
                          <span id="input_labels" style={{ color: '#dc3545' }}>Funding Source</span>
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
                          <span id="input_labels">Funding Source</span>
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
                    name="fundingSource"
                    onChange={this.onChange}
                    value={fundingSource}
                    id="savingFrequencyOption"
                  >
                    {
                        FixedTargetSavingFundingSource.map(freq => (
                          <option key={freq.id} value={freq.id}>
                            {freq.action}
                          </option>
                        ))
                        }
                  </select>
                  {errors.fundingSource && (
                  <p className="text-danger">
                    <i className="fas fa-exclamation-triangle" />
                        &nbsp;
                    {errors.fundingSource}

                  </p>
                  )}
                </div>
                <div className="input_div">
                  {
                    errors.maturityDate ? (
                      <div className="row">
                        <div className="col-md-6">
                          <span
                            id="input_labels"
                            style={{ color: '#dc3545' }}
                          >
Select Maturity Date

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
                          <span id="input_labels">Select Maturity Date</span>
                        </div>
                        <div className="col-md-6">
                          <span id="input_labels_required">
                          *
                          </span>
                        </div>
                      </div>
                    )
                  }
                  <TextField
                    error={errors.maturityDate}
                    onChange={this.onChange}
                    type="date"
                    value={maturityDate || ''}
                    field="maturityDate"
                    placeholder=""
                  />
                </div>
                <div className="input_div">
                  <TextArea
                    onChange={this.onChange}
                    value={description}
                    field="description"
                    rows="10"
                    cols="20"
                    id="savingDescription"
                    placeholder="Describe your savings"
                    label="Savings Description"
                    error={errors.description}
                  />
                </div>
                <div className="btn_full_width green_btn">
                  {
                      fundingSource === '5' ? createTargetLoading ? (
                        <Button
                          onClick={this.onClickNextButton}
                          type="button"
                        >
                          <i className="fa fa-spinner fa-spin" />
                          {'  '}
                          Create Fixed Savings
                        </Button>
                      ) : (
                        <Button
                          onClick={this.onClickNextButton}
                          type="button"
                        >
                          Create Fixed Savings
                        </Button>
                      ) : (
                        <Button
                          onClick={this.onClickNextButton}
                          type="button"
                        >
                          Next
                        </Button>
                      )
                    }
                </div>
              </form>
            </div>
          ) : ''
        }

              {/* Funding Source with Exixting Card */}
              {
  tab3 ? (
    <>
      {/* Create Fixed savings with existing card */}
      <div className="already_have_acct">

        <p id="callId">
Return to
          {' '}
          <Link
            to="#"
            id="phoneId"
            onClick={this.onClickBackButton}
          >
Back
          </Link>
        </p>

      </div>
      <div className="funding_source_two" id="psavings_funding_source">
        <div className="savings_form_inst">
          <h5 id="newSavingDetails">
Please Select a Funding Source
          </h5>
          <br />
          <p id="dashId">Kindly select your funding source</p>
        </div>
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
          customerCards.customerCards.map(card => (
            <TransactionCards
              card={card}
              src={mastercardIcon}
              name="cardId"
              value={card.id}
              defaultChecked={cardId === card.id}
              onChange={this.onHandleRadioButtonCardId}
            />
          ))
        )

}
        <div className="btn_full_width green_btn">
          {
            createTargetLoading ? (
              <Button
                onClick={this.onSubmit}
                type="button"
              >
                <i className="fa fa-spinner fa-spin" />
                {'  '}
                Create Fixed Saving
              </Button>
            ) : isEmpty(customerCards.customerCards)
              ? ''
              : (
                <Button
                  onClick={this.onSubmit}
                  type="button"
                >
                Create Fixed Saving
                </Button>
              )
          }
        </div>
      </div>
    </>
  ) : ''
}
            </div>
          </div>
        </div>
      </section>
    );
    return (
      <div className="personal_sav">
        <DashboardMobileNav />
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {fixedTargetSavings}
        </div>
      </div>
    );
  }
}

FixedTargetSavings.propTypes = {
  history: PropTypes.shape({}),
  GetCustomerCard: PropTypes.func,
  customerCards: PropTypes.shape({}),
  GetCustomerAccounts: PropTypes.func,
  CreateFixedTargetSavings: PropTypes.func,
  DeletePostTargetSavingsError: PropTypes.func,
  createTargetLoading: PropTypes.bool,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  customerCards: state.getCards.customerCards,
  customerAccounts: state.getCustomerAccounts.customerAcct,
  loading: state.addCardDetails.loading,
  recentTransLoading: state.getRecentTransaction.loading,
  createTargetLoading: state.CreateTargetSavings.loading,
  error: state.CreateTargetSavings.error,
  CardDetails: state.getRecentTransaction.recentTransaction,
  success: state.CreateTargetSavings.success
});
export default withRouter(
  connect(mapStateToProps, {
    GetCustomerAccounts: getCustomerAccounts,
    UploadPersonalSavingImg: uploadPersonalSavingImg,
    GetCustomerCard: getCustomerCards,
    CreateFixedTargetSavings: createFixedTargetSavings,
    AddCardDetails: addCardDetails,
    DeletePostTargetSavingsError: deletePostTargetSavingsError
  })(FixedTargetSavings)
);
