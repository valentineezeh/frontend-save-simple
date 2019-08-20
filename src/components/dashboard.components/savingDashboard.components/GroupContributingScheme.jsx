/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import isEmpty from 'is-empty';
import Cookie from 'cookies-js';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import Loader from 'react-loader-spinner';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../userDashBoard.components/UserDashBoardTopNavigation';
import {
  Button,
  TextField,
  TransactionCards,
  ErrorAlertNotification,
} from '../../commons/index';
import {
  groupSavingIntervals,
} from '../../../helper/index';
import {
  groupContributorySchemeOne,
  groupFundingSourceCard,
  groupContributoryEmailInput,
  groupContributorySchemeThree,
} from '../../../middlewares/targetSavings/enterSavingDetails';
import getCustomerCards from '../../../actions/setUpCardDetails.actions/getCustomerCards';
import mastercardIcon from '../../../template/utils/icons/mastercard.png';
import uploadPersonalSavingImg from '../../../actions/image.actions/personalSavingImg';
import fileUpIcon from '../../../template/utils/icons/fileUp.png';
import createGroupContributoryScheme, { deleteGroupContributeSavingsError } from
  '../../../actions/savings.actions/createGroupContributorySavings';


/**
 * @class GroupContributingSchemeSavings
 */
class GroupContributingSchemeSavings extends Component {
    state = {
      schemeName: '',
      description: '',
      amount: '',
      email: '',
      errors: {},
      creatorCardId: '',
      contributionInterval: '0',
      creatorPosition: '',
      imageUrl: '',
      contributors: [],
      participants: [],
      overAllError: {}
    }

  /**
   *
   * @returns {*} - state
   */
  componentDidMount = () => {
    const { GetCustomerCard } = this.props;
    GetCustomerCard();
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
    this.setState({
      creatorCardId: event.currentTarget.value,
      errors: {}
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
    if (this.isValidEmailInput()) {
      const { email } = this.state;
      const { participants } = this.state;
      const tempArray = [...participants];
      tempArray.push(email);
      const realObj = [];

      tempArray.map((mail) => {
        realObj.push({
          email: mail,
          position: tempArray.indexOf(mail) + 1
        });
        return null;
      });
      this.setState({
        errors: {},
        participants: tempArray,
        contributors: realObj,
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
    const { contributors, participants } = this.state;
    const newEmailObj = contributors.filter(delEmail => delEmail.email !== event.currentTarget.value);
    const newParticipant = participants.filter(email => email !== event.currentTarget.value);
    this.setState({
      contributors: newEmailObj,
      participants: newParticipant,
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
   const { contributors } = this.state;
   const token = Cookie.get('jwtToken');
   const decodeToken = jwt.decode(token);
   const { customerId, email } = decodeToken;
   const {
     savingImg,
     history,
     CreateGroupContributoryScheme
   } = this.props;


   if (this.isValidCardIdCheck() && this.isValid() && this.isValidInterval()) {
     const creatorNewId = contributors.filter(creatorEmail => creatorEmail.email === email);

     //  catch an error so as not to break the app
     const creatorPosition = creatorNewId[0] === undefined ? '' : creatorNewId[0].position;

     //  Remove Creator Email from the contribution List
     const newContributors = contributors.filter(creatorEmail => creatorEmail.email !== email);
     // Check if list is empty
     if (newContributors.length === 0) {
       const mainOverAllError = { err: 'You are yet to invite a group member.' };
       this.setState({
         overAllError: mainOverAllError
       });
     } else {
       this.setState({ errors: {}, overAllError: {} });
       CreateGroupContributoryScheme({
         ...this.state,
         imageUrl: savingImg,
         creatorId: customerId,
         creatorPosition,
         contributors: newContributors,
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

  onCheckInterval = () => {
    if (this.isValidInterval()) {
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
    const { errors, isValid } = groupContributorySchemeOne(
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
    const { errors, isValid } = groupFundingSourceCard(
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
  isValidInterval = () => {
    const { errors, isValid } = groupContributorySchemeThree(
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
    const { errors, isValid } = groupContributoryEmailInput(
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
      schemeName,
      description,
      creatorCardId,
      contributionInterval,
      contributors,
      email,
      overAllError,
    } = this.state;
    const {
      customerCards,
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
                  <div className="step_number">
                    <div className="step_number_one active">
            1
                    </div>
                    <div className="step_number_two">
            2
                    </div>
                    <div className="step_number_four_group">
            3
                    </div>
                    <div className="step_number_five_group">
            4
                    </div>
                  </div>
                  <div className="savings_details" id="psavings_savings_details">
                    <div className="savings_form_inst">

                      <h5 id="newSavingDetails">
                    Setup your group contributory scheme
                      </h5>
                      <br />
                      <p style={{ fontSize: '14px' }}>
        Kindly fill the form below to create a group contributory scheme. Note fields with
                        {' '}
                        <span style={{ color: 'red' }}>*</span>
                        {' '}
are required
                      </p>
                    </div>
                    <form action="">
                      <div className="input_div">
                        <TextField
                          error={errors.schemeName}
                          onChange={this.onChange}
                          value={schemeName || ''}
                          type="text"
                          field="schemeName"
                          placeholder="Group Name"
                          label="Group Contributory Name"
                        />
                      </div>
                      <div className="input_div">
                        <TextField
                          error={errors.description}
                          onChange={this.onChange}
                          value={description || ''}
                          field="description"
                          placeholder="Give a brief description of your group scheme"
                          label="Group Description"
                        />
                      </div>
                      <div className="input_div">
                        <TextField
                          error={errors.amount}
                          onChange={this.onChange}
                          value={amount || ''}
                          field="amount"
                          placeholder="Expected Contributing Amount"
                          label="Contributory Amount"
                        />
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
                          {errors && <p className="text-danger">{errors.creatorCardId}</p>}
                          {
                          customerCards.customerCards.map(card => (

                            <TransactionCards
                              key={card.id}
                              card={card}
                              src={mastercardIcon}
                              name="creatorCardId"
                              value={card.id}
                              defaultChecked={creatorCardId === card.id}
                              onChange={this.onHandleRadioButton}
                            />
                          ))
                        }
                        </>
                      )
                      }
                    <div className="btn_full_width green_btn"
                      id="target_save_next_two_group"
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
                {/* Upload group Image */}
                <>
                  <div className="destination_account_three py-5" id="psavings_destination_account_three">
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
                    <div className="input_div">
                      {
                        errors.contributionInterval ? (
                          <div className="row">
                            <div className="col-md-6">
                              <span id="input_labels">Saving Interval</span>
                            </div>
                            <div className="col-md-6">
                              <span
                                id="input_labels_required"
                                style={{ color: '#dc3545' }}
                              >
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
                        name="contributionInterval"
                        onChange={this.onChange}
                        value={contributionInterval}
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
                      {errors.contributionInterval && (
                        <p className="text-danger">
                          <i className="fas fa-exclamation-triangle" />
                        &nbsp;
                          {errors.contributionInterval}
                        </p>
                      )}
                    </div>
                    <div className="btn_full_width green_btn mt-5" id="target_save_next_six_group">
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
                Note the position in which user are add is how they will be paid.
                      </p>
                    </div>
                    {
                          contributors.length === 0 ? '' : (
                            contributors.map((userEmail, i) => (
                              <>
                                <div className="invite_members">
                                  <div className="row ml-1">
                                    <i className="fas fa-arrows-alt" />
&nbsp;
                                    <p>{`Position ${userEmail.position}`}</p>
                                  </div>
                                  <div>
                                    <p>
                                      { userEmail.email }
                                    </p>
                                  </div>
                                  <div>
                                    <button type="button"
                                      name="removeEmail"
                                      value={userEmail.email}
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
                    {errors && <p className="text-danger">{errors.email}</p>}
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
                              Create Contributory Scheme
                            </Button>
                          ) : (
                            <Button
                              onClick={this.onSubmit}
                              type="button"
                            >
                              Create Contributory Scheme
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

GroupContributingSchemeSavings.propTypes = {
  history: PropTypes.shape({}),
  GetCustomerCard: PropTypes.func,
  customerCards: PropTypes.shape({}),
  customerAccounts: PropTypes.shape({}),
  UploadPersonalSavingImg: PropTypes.func,
  savingImg: PropTypes.string,
  CreateGroupContributoryScheme: PropTypes.func,
  success: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string,
  DeleteGroupTargetSavingsError: PropTypes.func,
  imgLoading: PropTypes.func
};

const mapStateToProps = state => ({
  customerCards: state.getCards.customerCards,
  customerAccounts: state.getCustomerAccounts.customerAcct,
  savingImg: state.personalSavingImage.photo,
  loading: state.createGroupContributorySavings.loading,
  error: state.createGroupContributorySavings.error,
  success: state.createGroupContributorySavings.success,
  imgLoading: state.personalSavingImage.imgLoading
});

export default connect(mapStateToProps, {
  GetCustomerCard: getCustomerCards,
  UploadPersonalSavingImg: uploadPersonalSavingImg,
  CreateGroupContributoryScheme: createGroupContributoryScheme,
  DeleteGroupContributeSavingsError: deleteGroupContributeSavingsError
})(GroupContributingSchemeSavings);
