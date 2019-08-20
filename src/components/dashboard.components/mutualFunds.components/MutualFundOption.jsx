/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import { UserMutualFund, MutualFundSavingPlans } from './index';
import inAppRecentTransaction from '../../../actions/transactions.actions/appRecentTransaction';

/**
 * @class MutualFundOption
 */
class MutualFundOption extends Component {

  componentWillMount = () => {
    const { AppRecentTransaction } = this.props;
    AppRecentTransaction();
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const { appTransaction } = this.props;
    const mutualFundList = [];
    const newObj = appTransaction === undefined ? '' : appTransaction.map((list) => {
      if (list.planType === 'MUTUALFUNDS') {
        return mutualFundList.push(list);
      }
    });
    const mutualFund = !isEmpty(mutualFundList);
    return (
      <>
        {
            mutualFund
              ? <UserMutualFund mutualFundList={mutualFundList} />
              : <MutualFundSavingPlans />
        }
      </>
    );
  }
}

MutualFundOption.propTypes = {
  AppRecentTransaction: PropTypes.func,
  appTransaction: PropTypes.any
};

const mapStateToProps = state => ({
  appTransaction: isEmpty(state.appTransaction) ? '' : state.appTransaction.appTransaction.transactions,
});

export default connect(mapStateToProps, {
  AppRecentTransaction: inAppRecentTransaction
})(MutualFundOption);
