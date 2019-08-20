/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import moment from 'moment';
import isEmpty from 'is-empty';
import Loader from 'react-loader-spinner';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import fetchSingleSavingDetails from '../../../actions/savings.actions/fetchSingleSavingDetails';
import fetchSingleFixedSavingDetails from '../../../actions/savings.actions/fetchFixedSavings';
import inAppRecentTransaction from '../../../actions/transactions.actions/appRecentTransaction';
import DashboardTransactionRow from
  '../../user.authentication.components/transaction.components/TransactionRow';

/**
 * @class UserSingleSavingDetails
 */
class UserSingleSavingDetails extends Component {
    componentWillMount = () => {
      const { AppRecentTransaction } = this.props;
      const getId = Cookie.get('savingId');
      const planType = Cookie.get('planType');
      AppRecentTransaction();
      if (planType === 'PERSONAL_TARGET_SAVINGS' || planType === 'GROUP_TARGET_SAVINGS') {
        const { FetchSingleSavingDetails } = this.props;
        const savingDetails = {
          savingsId: getId
        };
        FetchSingleSavingDetails(savingDetails);
      }
      if (planType === 'FIXED_SAVINGS' || planType === 'ETHICAL_SAVINGS') {
        const { FetchSingleFixedSavingDetails } = this.props;
        FetchSingleFixedSavingDetails(getId);
      }
    }

    /**
   *
   * @returns {*} - render
   */
    render() {
      const {
        savingDetail,
        getFixedSavingDetails,
        appTransaction
      } = this.props;

      const planType = Cookie.get('planType');

      const groupName = !savingDetail.isGroup ? 'None' : savingDetail.title;
      const maturityDate = savingDetail.estimatedMaturityDate;
      const maturityDateFixed = getFixedSavingDetails.maturityDate;
      const dateFormat = moment(maturityDate || maturityDateFixed).format('DD-MM-YY');
      const data = {
        datasets: [
          {
            data: [1.5, 5, 30],
            backgroundColor: [
              '#F57F45',
              '#08A65B',
              '#00858D'
            ],
          },
        ],
        labels: [
          'Amount',
          'Interest',
          'Target'
        ]
      };
      const userSingleSavingDetails = (
        <section className="body_space">
          <div className="savings_options_detail_title">

            <div className="title_trxt">
              <h4>
                {savingDetail.title || getFixedSavingDetails.title}
              </h4>
            </div>

            <div className="delete_link">
              <p>
                <a href="£">
                  <i className="far fa-trash-alt" />
                            Delete
                </a>
              </p>
            </div>
          </div>
          <div className="savings_analysis">
            <div style={{ width: '35%', height: '40%' }}>
              <Pie data={data} />
            </div>
            <div>
              <span>
                Target
              </span>
              <p>
                {savingDetail.targetAmount || getFixedSavingDetails.amount}
              </p>
            </div>
            <div>
              <span>
            Amount saved
              </span>
              <p>
                {savingDetail.amountSaved || getFixedSavingDetails.amountAccrued || 0}
              </p>
            </div>
            <div>
              <span>
                {
              planType === 'PERSONAL_TARGET_SAVINGS' || planType === 'GROUP_TARGET_SAVINGS' ? 'Start Date' : 'Maturity Date'
            }
              </span>
              <p>
                {dateFormat}
              </p>
            </div>
            <div>
              <span>
            Group Name
              </span>
              <p>
                {groupName}
              </p>
            </div>
          </div>
          <div className="m_fund_table_title">
            <div>
              <h4>
            My Transaction
              </h4>
            </div>
            <div>
              <p>
                <Link to="/transaction-history" style={{
                  color: '#10C06D',
                  fontSize: '14px',
                }}
                >
                More Transactions
                </Link>
              </p>
            </div>
          </div>
          <div className="history_table_wrapper">
            <div className="history_table">
              {
                    appTransaction === undefined ? (
                      <span className="text-center py-5">
                        <Loader
                          type="Circles"
                          color="#00C177"
                          height="100"
                          width="100"
                        />
                      </span>
                    ) : (
                      <>
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
                        appTransaction.slice(0, 3).map(transact => (
                          <DashboardTransactionRow
                            key={transact.id}
                            transact={transact}
                          />
                        ))
                      }
                          </tbody>
                        </table>
                      </>
                    )
                  }
            </div>
          </div>
        </section>
      );
      return (
        <>
          <DashboardMobileNav />
          <UserDashBoardSideNavigation />
          <div className="main_body_wrapper">
            <UserDashBoardTopNavigation />
            {userSingleSavingDetails}
          </div>
        </>
      );
    }
}

UserSingleSavingDetails.propTypes = {
  savingDetail: PropTypes.shape({}),
  FetchSingleSavingDetails: PropTypes.func,
  FetchSingleFixedSavingDetails: PropTypes.func,
  getFixedSavingDetails: PropTypes.shape({}),
  AppRecentTransaction: PropTypes.func,
  appTransaction: PropTypes.any,
};

const mapStateToProps = state => ({
  savingDetail: state.getSavingDetail.savingDetail,
  getFixedSavingDetails: state.getFixedSavingDetail.fixedSavingDetail,
  appTransaction: isEmpty(state.appTransaction) ? '' : state.appTransaction.appTransaction.transactions,
});

export default connect(mapStateToProps, {
  FetchSingleSavingDetails: fetchSingleSavingDetails,
  FetchSingleFixedSavingDetails: fetchSingleFixedSavingDetails,
  AppRecentTransaction: inAppRecentTransaction
})(UserSingleSavingDetails);
