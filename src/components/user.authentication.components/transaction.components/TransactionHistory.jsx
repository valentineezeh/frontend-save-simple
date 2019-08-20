/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../dashboard.components/userDashBoard.components/UserDashBoardTopNavigation';
import inAppRecentTransaction from '../../../actions/transactions.actions/appRecentTransaction';
import TransactionRow from './TransactionRow';
import Pagination from '../../commons/Pagination';

/**
 * @class TransactionHistory
 */
class TransactionHistory extends Component {
  state = {
    allTransactions: [],
    currentPage: null,
    totalPages: null
  }

  componentWillMount = () => {
    const { AppRecentTransaction } = this.props;
    AppRecentTransaction();
  }

  /**
   *
   * @param {*} prevProps
   * @returns {*} - single master agent object
   */
  componentDidUpdate = (prevProps) => {
    const { appTransaction } = this.props;
    if (appTransaction === prevProps.appTransaction) {
      return null;
    }
    this.setState({ allTransactions: appTransaction });
  }

  /**
   * @param {*} data
   * @returns {*} - state
   */
  onPageChanged = (data) => {
    const { currentPage, totalPages, pageLimit } = data;
    this.setState({ currentPage, pageLimit, totalPages });
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const { appTransaction } = this.props;
    const {
      currentPage,
      allTransactions,
      pageLimit
    } = this.state;

    const offset = (currentPage - 1) * pageLimit;

    const currentTransactions = allTransactions.slice(offset, offset + pageLimit);

    const transactionHistory = (
      <section className="body_space">
        <div className="transaction_history_forHistory">
          <div className="transaction_history_title">
            <div>
              <h5>
            Transaction History
              </h5>
            </div>
            <div className="add_new_savings">
              <p id="investFont">
                <i className="far fa-trash-alt" />
                {'  '}
            Clear all
              </p>
            </div>
          </div>
          {
            appTransaction === undefined ? (
              <div className="text-center py-5">
                <Loader
                  type="Circles"
                  color="#00C177"
                  height="100"
                  width="100"
                />
              </div>
            )
              : (
                <div className="history_table_wrapper">
                  <div className="container">
                    <div className="history_table" style={{
                      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.15)',
                      backgroundColor: '#FFFFFF',
                      padding: '15px'
                    }}
                    >
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>KIND</th>
                            <th>AMOUNT</th>
                            <th>PLAN</th>
                            <th>DATE</th>
                            <th>TIME</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                        currentTransactions === undefined ? '' : (
                          currentTransactions.map(transact => (
                            <TransactionRow
                              key={transact.id}
                              transact={transact}
                            />
                          ))
                        )
                      }
                        </tbody>
                      </table>
                      <div className="table_pagination">
                        <Pagination
                          totalRecords={appTransaction.length}
                          pageLimit={4}
                          pageNeighbours={1}
                          onPageChanged={this.onPageChanged}
                        />

                      </div>
                    </div>
                  </div>
                </div>
              )
          }
        </div>
      </section>
    );
    return (
      <div>
        <DashboardMobileNav />
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {transactionHistory}
        </div>
      </div>
    );
  }
}

TransactionHistory.propTypes = {
  AppRecentTransaction: PropTypes.func,
  appTransaction: PropTypes.any
};

const mapStateToProps = state => ({
  appTransaction: isEmpty(state.appTransaction) ? '' : state.appTransaction.appTransaction.transactions,
  success: state.appTransaction.success
});

export default connect(mapStateToProps, {
  AppRecentTransaction: inAppRecentTransaction
})(TransactionHistory);
