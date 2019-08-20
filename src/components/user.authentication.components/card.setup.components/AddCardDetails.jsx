import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import Cookie from 'cookies-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import InputMask from 'react-input-mask';
import masterCardIcon from '../../../template/utils/icons/mastercard.png';
import ccvIcon from '../../../template/utils/icons/cvv.png';
import { Button, TextField, ErrorAlertNotification } from '../../commons/index';
import validateAddCardDetails from '../../../middlewares/setUpBankDetails/verifyAddCardDetails';
import addCardDetails,
{ deleteAddCardDetailError, addCardDetailsError } from '../../../actions/setUpCardDetails.actions/addCardDetails';
import topUpWallet from '../../../actions/wallet.actions/walletTopUp';
import getRecentTransaction from '../../../actions/transactions.actions/recentTransaction';
import UserDashBoardSideNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardTopNavigation';


/**
 * @class AddCardDetails
 */
class AddCardDetails extends Component {
    state = {
      amount: 100,
      no: '',
      cvv: '',
      pin: '',
      errors: {},
      saveCardToken: false,
      isLoading: false,
      dateString: ''
    }

    /**
   *
   * @param {*} event
   * @returns {*} - state
   */
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
    onSubmit = (event) => {
      event.preventDefault();
      const token = Cookie.get('jwtToken');
      const decodeUser = jwt.decode(token);
      const { customerId, email } = decodeUser;
      const {
        CardDetails,
        history,
        AddCardDetailsError
      } = this.props;
      const {
        no,
        cvv,
        pin,
        saveCardToken,
        amount,
        dateString
      } = this.state;

      const MM = dateString.split('/')[0];
      const YY = dateString.split('/')[1];
      const cardNo = no.replace(/ /g, '');

      const fundWalletAmount = Cookie.get('amt');
      const actionType = Cookie.get('actionType');
      const fundingSource = Cookie.get('fundingSource');
      Cookie.set('saveCard', saveCardToken);
      const FixedSavingsObject = Cookies.getJSON('newFixSavingObje');
      const EthicalSavingsObject = Cookies.getJSON('newEthSavingObj');

      // add card by user payload
      const cardDetails = {
        amount,
        email,
        card: {
          no: cardNo,
          cvv,
          month: MM,
          year: YY,
          pin
        },
        saveCardToken: 'true'
      };
      

      // wallet payload on card save
      const walletPayloadOnSaveCard = {
        amount: fundWalletAmount,
        email,
        customerId,
        actionType,
        fundingSource,
        card: {
          no: cardNo,
          cvv,
          month: MM,
          year: YY,
          pin
        },
        saveCardToken
      };

      // wallet paylaod without saving card
      const walletPayloadWithoutSaveCard = {
        amount: fundWalletAmount,
        customerId,
        fundingSource,
        saveCardToken,
        actionType,
        email,
        card: {
          no: cardNo,
          cvv,
          month: MM,
          year: YY,
          pin
        },
      };

      // fixed saving details
      const FixedSavingPayload = {
        ...FixedSavingsObject,
        saveCardToken,
        email,
        card: {
          no: cardNo,
          cvv,
          month: MM,
          year: YY,
          pin
        },
      };
      Cookies.remove('newFixSavingObje');
      Cookies.set('newImpFixObj', FixedSavingPayload);

      // Ethical Saving details
      const EthicalSavingPayload = {
        ...EthicalSavingsObject,
        saveCardToken,
        email,
        card: {
          no: cardNo,
          cvv,
          month: MM,
          year: YY,
          pin
        },
      };
      Cookies.remove('newEthSavingObj');
      Cookies.set('newImpEthSavingObj', EthicalSavingPayload);

      // Mutual Fund payload
      const mutualPayload = Cookies.getJSON('payload');
      const MutualFundPayLoad = {
        ...mutualPayload,
        saveCardToken,
        email,
        actionType,
        card: {
          no: cardNo,
          cvv,
          month: MM,
          year: YY,
          pin
        }
      };

      Cookies.set('newPayLoad', MutualFundPayLoad);
      Cookies.remove('payload');

      if (this.isValid()) {
        // Fund wallet by add new card and save card
        if (actionType === 'wallet' && walletPayloadOnSaveCard.saveCardToken === 'true') {
          this.setState({ errors: {} });
          CardDetails(walletPayloadOnSaveCard, history);
        }
        // Fund wallet by add new card but don't save card
        if (actionType === 'wallet' && !walletPayloadWithoutSaveCard.saveCardToken) {
          this.setState({ errors: {} });
          CardDetails(walletPayloadWithoutSaveCard, history);
        }
        // Fixed Target Savings by add new card and save card
        if (actionType === 'fixedSavings' && FixedSavingPayload.saveCardToken === 'true') {
          this.setState({ errors: {} });
          CardDetails(FixedSavingPayload, history);
        }
        // Fixed Target Savings by add new card but dont save card
        if (actionType === 'fixedSavings' && !FixedSavingPayload.saveCardToken) {
          this.setState({ errors: {} });
          CardDetails(FixedSavingPayload, history);
        }
        // On add new card without making transactions
        if (actionType !== 'wallet' && actionType !== 'fixedSavings' && actionType !== 'ethicalSavings' && actionType !== 'mutualFund' && cardDetails.saveCardToken === 'true') {
          this.setState({ errors: {} });
          CardDetails(cardDetails, history);
        }

        // I dont need this block of code anymore
        if (actionType !== 'wallet' && actionType !== 'fixedSavings' && actionType !== 'ethicalSavings' && actionType !== 'mutualFund' && !cardDetails.saveCardToken) {
          AddCardDetailsError('Click on the save Card button.');
        }

        // on Save Card on ethical savings
        if (actionType === 'ethicalSavings' && EthicalSavingPayload.saveCardToken === 'true') {
          this.setState({ errors: {} });
          CardDetails(EthicalSavingPayload, history);
        }
        // Don't Save Card on ethical savings
        if (actionType === 'ethicalSavings' && !EthicalSavingPayload.saveCardToken) {
          this.setState({ errors: {} });
          CardDetails(EthicalSavingPayload, history);
        }

        // On Save Card on mutual fund
        if (actionType === 'mutualFund') {
          this.setState({ errors: {} });
          CardDetails(MutualFundPayLoad, history);
        }
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
  handleDelete = () => {
    const { DeleteAddCardDetailError } = this.props;
    DeleteAddCardDetailError();
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  isValid = () => {
    const { errors, isValid } = validateAddCardDetails(
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
      errors,
      no,
      pin,
      cvv,
      saveCardToken,
      dateString
    } = this.state;
    const {
      error,
      isLoading,
    } = this.props;
    const actionType = Cookie.get('actionType');
    const CardDetails = (
      <div className="create_account_main_wrapper">
        <div className="add_bank_card_container">
          <div className="setUp_card_btn">
            {
              actionType ? (
                <div className="add_card_title">
                  <h4>
            Add Bank Card
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
                Kindly Enter Your Card Details
                      {' '}
                    </b>
                  </p>
                  <strong style={{
                    color: '#10C06D',
                    fontSize: '14px'
                  }}
                  >
You will receive an OTP to complete your transaction.

                  </strong>
                </div>
              ) : (
                <div className="add_card_title">
                  <h4>
            Add Bank Card
                  </h4>
                  <p
                    style={{
                      color: '#B2B7BC',
                      fontSize: '14px'
                    }}
                  >
                    <strong
                      style={{
                        color: '#10C06D',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}
                    >
                ₦ 100
                      {' '}
                    </strong>
               will be deducted from your card and funded to your wallet if you are adding a new card into the app without making any transaction
                  </p>
                  <strong style={{
                    color: '#10C06D',
                    fontSize: '14px'
                  }}
                  >
This is done so as to test the card that is being added.

                  </strong>
                </div>
              )
            }
            {!isEmpty(error) && (
            <ErrorAlertNotification
              errors={error}
              onClick={this.handleDelete}
            />
            )}
            <div className="card_number_input">

              <div className="card_logo">
                <img src={masterCardIcon} alt="" />
              </div>
              <div className="input_div">
                <InputMask
                  error={errors.no}
                  mask="9999 9999 9999 9999"
                  onChange={this.onChange}
                  value={no || ''}
                  type="text"
                  name="no"
                  placeholder="Card Number"
                />
                {errors && <p className="text-danger">{errors.no}</p>}
              </div>
            </div>
            <div className="input_div">
              <InputMask
                error={errors.dateString}
                mask="99/99"
                value={dateString}
                onChange={this.onChange}
                name="dateString"
                type="text"
                placeholder="Expiration Date (MM/YY)"
              />
              {errors && <p className="text-danger">{errors.dateString}</p>}
            </div>

            <div className="third_part">

              <div className="month_part">
                <div className="input_div">
                  <TextField
                    error={errors.pin}
                    onChange={this.onChange}
                    value={pin || ''}
                    type="password"
                    field="pin"
                    placeholder="Card Pin"
                  />
                </div>
              </div>
              <div className="cvv">
                <div className="cvv_card">
                  <img src={ccvIcon} alt="" />
                </div>
                <div className="input_div">
                  <TextField
                    error={errors.cvv}
                    onChange={this.onChange}
                    value={cvv || ''}
                    type="password"
                    field="cvv"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
            {
              actionType ? (
                <div>
                  <p>
                    <input
                      type="radio"
                      id="test1"
                      name="saveCardToken"
                      value="true"
                      checked={saveCardToken === 'true' || saveCardToken === 'false'}
                      onChange={this.onChange}
                      onClick={this.onHandleRadioButton}
                    />
                    <label htmlFor="test1" id="BankFont">
                  Click to Save Card
                    </label>
                  </p>
                </div>
              ) : ''
            }

            <div className="btn_full_width green_btn">
              {
                          isLoading ? (
                            <Button
                              onClick={this.onSubmit}
                              type="submit"
                            >
                              <i className="fa fa-spinner fa-spin" />
                              {'  '}
                              Add Card
                            </Button>
                          ) : (
                            <Button
                              onClick={this.onSubmit}
                              type="submit"
                            >
                              Add Card
                            </Button>
                          )
              }
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
          {CardDetails}
        </div>
      </>
    );
  }
}

AddCardDetails.propTypes = {
  DeleteAddCardDetailError: PropTypes.func,
  CardDetails: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  AddCardDetailsError: PropTypes.func,
  history: PropTypes.shape({})
};

const mapStateToProps = state => ({
  error: state.addCardDetails.error,
  isLoading: state.addCardDetails.addNewCardloading,
  success: state.addCardDetails.success,
  userCardDetails: isEmpty(state.getRecentTransaction) ? '' : state.getRecentTransaction.recentTransaction.data,
  action: state.addCardDetails.addCard.action,
  recentSuccess: state.getRecentTransaction.recentTransactSuccess
});

export default withRouter(connect(mapStateToProps, {
  CardDetails: addCardDetails,
  DeleteAddCardDetailError: deleteAddCardDetailError,
  TopUpWallet: topUpWallet,
  RecentTransaction: getRecentTransaction,
  AddCardDetailsError: addCardDetailsError
})(AddCardDetails));
