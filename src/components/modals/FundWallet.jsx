/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookie from 'cookies-js';
import isEmpty from 'is-empty';
import jwt from 'jsonwebtoken';
import masterCard from '../../template/utils/icons/mastercard.png';
import {
  TextField,
  Button,
  ErrorAlertNotification,
  TransactionCards
} from '../commons/index';
import getCustomerCard from '../../actions/setUpCardDetails.actions/getCustomerCards';
import fundWalletValidationInput from '../../middlewares/fundWalletValidations';
import sendWalletAmount from '../../actions/wallet.actions/sendAmount';
import topUpWallet, { deleteWalletTopUpError } from '../../actions/wallet.actions/walletTopUp';

/**
 * @class FundWallet
 */
class FundWallet extends Component {
  state = {
    amount: '',
    errors: {},
    cardId: '',
    actionType: 'wallet'
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

  onAddAmount = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const { amount, actionType } = this.state;
      Cookie.set('amt', amount);
      Cookie.set('actionType', actionType);
      Cookie.set('fundingSource', 1);
      this.setState({ errors: {} });
      window.location.href = '/add-card';
    }
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onHandleRadioButton = (event) => {
    this.setState({
      cardId: event.currentTarget.value
    });
  }

  onFundWallet = () => {
    const { amount, cardId, actionType } = this.state;
    const token = Cookie.get('jwtToken');
    const decodeToken = jwt.decode(token);
    const { customerId } = decodeToken;
    const { TopUpWallet, history } = this.props;
    const cardDetails = {
      customerId,
      amount,
      cardId,
      fundingSource: 2,
      actionType
    };
    if (this.isValid()) {
      TopUpWallet(cardDetails, history);
    }
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  handleDelete = () => {
    const { DeleteWalletTopUpError } = this.props;
    DeleteWalletTopUpError();
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  isValid = () => {
    const { errors, isValid } = fundWalletValidationInput(
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
    const { errors, amount, cardId } = this.state;
    const { customerCards, loading, error } = this.props;
    return (
      <div className="modal fade" id="fundWallet">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <div className="modal_wrapper">
                <div className="fund_wallet_form">
                  <h4>
                          Fund Wallet
                  </h4>
                  <p>
                          Fill the details to fund your wallet
                  </p>

                </div>

                <div className="fund_amount">
                  {!isEmpty(error) && (
                  <ErrorAlertNotification
                    errors={error}
                    onClick={this.handleDelete}
                  />
                  )}

                  <div className="input_div">
                    <TextField
                      error={errors.amount}
                      onChange={this.onChange}
                      value={amount || ''}
                      type="text"
                      field="amount"
                      placeholder="₦ Enter Amount"
                    />
                  </div>

                </div>

                <div className="card_types">

                  <div className="card_type_header_text">
                    <p>
                      Select Payment Option
                    </p>
                  </div>
                  {
                    isEmpty(customerCards) ? (
                      <p>You are yet to a Add Card Kindliy go the Set Up Bank details to add card</p>
                    )
                      : (
                        customerCards.customerCards.map(card => (
                          <TransactionCards
                            key={card.id}
                            card={card}
                            src={masterCard}
                            name="cardId"
                            value={card.id}
                            defaultChecked={cardId === card.id}
                            onChange={this.onHandleRadioButton}
                          />
                        ))
                      )

 }
                  <div className="add_new_card">
                    <div className="btn_full_width green_btn_outline">
                      <button
                        onClick={this.onAddAmount}
                        type="submit"
                        style={{ fontFamily: 'Quicksand' }}
                      >
                        <i className="fas fa-plus"
                          id="callId"
                        >
                          {' '}
                      Add New Card
                        </i>
                      </button>
                    </div>
                  </div>

                  <div className="funt_wallet_btn">
                    <div className="btn_full_width green_btn">
                      {
                          loading ? (
                            <Button
                              onClick={this.onFundWallet}
                              type="submit"
                            >
                              <i className="fa fa-spinner fa-spin" />
                              {'  '}
                              Fund Wallet
                            </Button>
                          ) : (
                            <Button
                              onClick={this.onFundWallet}
                              type="submit"
                            >
                              Fund Wallet
                            </Button>
                          )
                        }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FundWallet.propTypes = {
  cardDetails: PropTypes.shape({}),
  GetCustomerCard: PropTypes.func,
  customerCards: PropTypes.shape({}),
  TopUpWallet: PropTypes.func,
  history: PropTypes.shape({}),
  DeleteWalletTopUpError: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  customerCards: state.getCards.customerCards,
  loading: state.topUpWallet.walletToploading,
  error: state.topUpWallet.error
});

export default withRouter(connect(mapStateToProps, {
  GetCustomerCard: getCustomerCard,
  SendWalletAmount: sendWalletAmount,
  TopUpWallet: topUpWallet,
  DeleteWalletTopUpError: deleteWalletTopUpError
})(FundWallet));
