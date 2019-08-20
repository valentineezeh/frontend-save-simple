/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import getCustomerCards from '../../actions/setUpCardDetails.actions/getCustomerCards';
import TransactionCards from '../commons/TransactionCards';
import mastercardIcon from '../../template/utils/icons/mastercard.png';
import SelectAccountId from './SelectAccountId';
import { fundingSourceCard } from '../../middlewares/targetSavings/enterSavingDetails';
import buyMoneyMarketMutualFund,
{ deleteBuyMoneyMarketFundError } from '../../actions/mutualFunds.actions/moneyMarketMutualFund';
import { ErrorAlertNotification } from '../commons/index';

/**
 * @class SelectCardId
 */
class SelectCardId extends Component {
    state = {
      cardId: '',
      error: {},
      modalTarget: '',
      dismissModal: '',
    }

    componentWillMount = () => {
      const { GetCustomerCards } = this.props;
      GetCustomerCards();
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
  handleDelete = () => {
    const { DeleteBuyMoneyMarketFundError } = this.props;
    DeleteBuyMoneyMarketFundError();
  }

  /**
   *
   *
   * @returns {*} - state
   */
  onCheckCardId = () => {
    const { existingCardPayload, MutualModal } = this.props;
    const { BuyMoneyMarketMutualFund } = this.props;
    const { cardId } = this.state;
    if (this.isValidCardIdCheck()) {
      if (MutualModal === 'mutualFund') {
        console.log('I got here mutual', existingCardPayload);
        const mainMutualFundPayload = {
          ...existingCardPayload,
          cardId
        };
        BuyMoneyMarketMutualFund(mainMutualFundPayload);
      } else {
        this.setState({
          errors: {},
          modalTarget: '#select_account',
          dismissModal: 'modal'
        });
      }
    }
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
   * @returns {*} - render
   */
  render() {
    const {
      customerCards,
      inviteDetails,
      planType,
      error,
      MutualModal,
    } = this.props;
    const {
      cardId, modalTarget, dismissModal, errors
    } = this.state;
    const addCardDetails = {
      ...inviteDetails,
      cardId
    };
    return (
      <>
        <div className="modal fade" id="select_card" style={{ overflowY: 'scroll' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  {' '}
                  <span> Close </span>
                  {' '}
&times;
                </button>
              </div>
              <div className="modal-body">
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
                      <>
                        {errors && <p className="text-danger">{errors.cardId}</p>}
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
                <div className="btn_full_width green_btn">
                  {
                        isEmpty(customerCards.customerCards) ? ''
                          : (
                            <button
                              data-toggle="modal" data-target={modalTarget || ''}
                              data-dismiss={
                                MutualModal === 'mutualFund' ? '' : dismissModal || ''
                              }
                              onClick={this.onCheckCardId}
                              type="button"
                            >
                              {
                                MutualModal === 'mutualModal' ? 'Buy' : 'Next'
                              }
                            </button>
                          )
                      }
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          MutualModal === 'mutualFund' ? '' : (
            <SelectAccountId
              addCardDetails={addCardDetails}
              planType={planType}
            />
          )
        }
      </>
    );
  }
}

SelectCardId.propTypes = {
  customerCards: PropTypes.any,
  inviteDetails: PropTypes.shape({}),
  GetCustomerCards: PropTypes.func,
  planType: PropTypes.string,
  DeleteBuyMoneyMarketFundError: PropTypes.func,
  error: PropTypes.any,
  BuyMoneyMarketMutualFund: PropTypes.func,
  MutualModal: PropTypes.string,
  existingCardPayload: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  customerCards: state.getCards.customerCards,
  error: state.mutualFundMoneyMarket.error
});

export default connect(mapStateToProps, {
  GetCustomerCards: getCustomerCards,
  BuyMoneyMarketMutualFund: buyMoneyMarketMutualFund,
  DeleteBuyMoneyMarketFundError: deleteBuyMoneyMarketFundError
})(SelectCardId);
