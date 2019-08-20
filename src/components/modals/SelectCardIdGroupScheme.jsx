/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import getCustomerCards from '../../actions/setUpCardDetails.actions/getCustomerCards';
import TransactionCards from '../commons/TransactionCards';
import mastercardIcon from '../../template/utils/icons/mastercard.png';
import { fundingSourceCard } from '../../middlewares/targetSavings/enterSavingDetails';
import postTreatGroupSchemeNotification from
  '../../actions/notification.actions/treatGroupSchemeNotification';

/**
 * @class SelectCardIdGroupScheme
 */
class SelectCardIdGroupScheme extends Component {
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
   *
   * @returns {*} - state
   */
  onCheckCardId = () => {
    const { PostTreatGroupSchemeNotification, inviteDetails, history } = this.props;
    const { cardId } = this.state;
    if (this.isValidCardIdCheck()) {
      const groupTreatInviteObj = {
        ...inviteDetails,
        cardId: Number(cardId),
      };
      PostTreatGroupSchemeNotification(groupTreatInviteObj, history);
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
      isLoading
    } = this.props;
    const {
      cardId, errors
    } = this.state;
    return (
      <>
        <div className="modal fade" id="select_card_group" style={{ overflowY: 'scroll' }}>
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
                          : isLoading ? (
                            (
                              <button
                                onClick={this.onCheckCardId}
                                type="button"
                              >
                                <i className="fa fa-spinner fa-spin" />
                                {' '}
                                {'  '}
                                  Accept Invitation
                              </button>
                            )
                          ) : (
                            (
                              <button
                                onClick={this.onCheckCardId}
                                type="button"
                              >
                                  Accept Invitation
                              </button>
                            )
                          )
                      }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

SelectCardIdGroupScheme.propTypes = {
  customerCards: PropTypes.any,
  inviteDetails: PropTypes.shape({}),
  GetCustomerCards: PropTypes.func,
  PostTreatGroupSchemeNotification: PropTypes.func,
  isLoading: PropTypes.bool,
  history: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  customerCards: state.getCards.customerCards,
  isLoading: state.treatUserGroupSchemeInvitation.treatGroupSchemeNotificationLoading
});

export default withRouter(connect(mapStateToProps, {
  GetCustomerCards: getCustomerCards,
  PostTreatGroupSchemeNotification: postTreatGroupSchemeNotification
})(SelectCardIdGroupScheme));
