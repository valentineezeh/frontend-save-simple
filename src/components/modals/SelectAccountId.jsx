/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import getCustomerAccounts from '../../actions/setupBankDetails.actions/getCustomerAcct';
import { DebitAccountCard } from '../commons/index';
import bankBuildingIcon from '../../template/utils/icons/bank-building.png';
import postTreatGroupNotification from '../../actions/notification.actions/treatGroupNotification';
import { destinationAccount } from '../../middlewares/targetSavings/enterSavingDetails';

/**
 * @class SelectAccountId
 */
class SelectAccountId extends Component {
    state = {
      accountId: '',
      errors: {}
    }

    componentWillMount = () => {
      const { GetCustomerAccounts } = this.props;
      GetCustomerAccounts();
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


  onSubmit = () => {
    const {
      addCardDetails,
      PostTreatGroupNotification,
      history,
      planType
    } = this.props;
    const { accountId } = this.state;
    const mainDetails = {
      ...addCardDetails,
      accountId
    };
    if (this.isValidAccountIdCheck()) {
      if (planType === 'GROUP_TARGET_SAVINGS') {
        PostTreatGroupNotification(mainDetails, history);
        this.setState({
          errors: {},
        });
      } else {
        console.log('do not do anything');
      }
    }
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
      customerAccounts,
      treatNotificationLoading,
      success,
    } = this.props;
    const { accountId, errors } = this.state;
    if (success) {
      window.location.href = '/user-dashboard';
    }
    return (
      <div className="modal fade" id="select_account" style={{ overflowY: 'scroll' }}>
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
      {errors && <p className="text-danger">{errors.accountId}</p>}
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
              <div className="btn_full_width green_btn">
                {
                        isEmpty(customerAccounts.customerAccounts) ? '' : treatNotificationLoading ? (
                          <button
                            type="button"
                            onClick={this.onSubmit}
                          >
                            <i className="fa fa-spinner fa-spin" />
                            {'  '}
                Accept Invitation
                          </button>
                        )
                          : (
                            <button
                              type="button"
                              onClick={this.onSubmit}
                            >
                Accept Invitation
                            </button>
                          )
                      }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customerAccounts: state.getCustomerAccounts.customerAcct,
  treatNotificationLoading: state.treatUserGroupInvitation.treatNotificationLoading,
  success: state.treatUserGroupInvitation.success
});

SelectAccountId.propTypes = {
  addCardDetails: PropTypes.shape({}),
  PostTreatGroupNotification: PropTypes.func,
  GetCustomerAccounts: PropTypes.func,
  customerAccounts: PropTypes.shape({}),
  treatNotificationLoading: PropTypes.bool,
  success: PropTypes.bool,
  history: PropTypes.shape({}),
};

export default withRouter(connect(mapStateToProps, {
  GetCustomerAccounts: getCustomerAccounts,
  PostTreatGroupNotification: postTreatGroupNotification
})(SelectAccountId));
