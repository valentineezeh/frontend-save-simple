import React, { Component } from 'react';
import PropTypes from 'prop-types';
import datetime from 'node-datetime';
import { addCommasToMoney } from '../../../helper/index';

/**
 * @description dashboard transaction row
 *
 * @class dashboardTransactionRow
 *
 *
 * @extends {Component}
 */
class TransactionRow extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const { transact } = this.props;
    return (
      <>
        <tr style={{ fontSize: '14px' }}>
          {
            transact.action === 'CREDIT' ? (
              <td>
                <div className="status_icon_good">
                  <i className="fas fa-arrow-circle-up" />
                  { transact.action }
                </div>
              </td>
            ) : (
              <td>
                <div className="status_icon_bad">
                  <i className="fas fa-arrow-circle-down" />
                  { transact.action }
                </div>
              </td>
            )
          }

          <td>{ addCommasToMoney(transact.amount) }</td>
          <td style={{fontFamily: 'arial'}}>{ transact.planName }</td>
          <td>{ datetime.create(transact.transactionDate).format('m/d/y') }</td>
          <td>{ datetime.create(transact.transactionDate).format('H:S:M') }</td>
        </tr>
      </>
    );
  }
}

TransactionRow.propTypes = {
  transact: PropTypes.shape({})
};

export default TransactionRow;
