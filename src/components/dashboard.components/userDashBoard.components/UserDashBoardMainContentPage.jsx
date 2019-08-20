/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import Loader from 'react-loader-spinner';
import DashboardCard from '../../commons/DasboardCards';
import randomIcon from '../../../template/utils/icons/no-image.jpg';
import FundWallet from '../../modals/FundWallet';
import getWalletBalance from '../../../actions/wallet.actions/getWalletBalance';
import inAppRecentTransaction from '../../../actions/transactions.actions/appRecentTransaction';
import DashboardTransactionRow from
  '../../user.authentication.components/transaction.components/TransactionRow';
import getTotalSavingsRequest from '../../../actions/savings.actions/getTotalSavings';
import fetchSavingPlans from '../../../actions/savings.actions/getSavingPlans';
import fetchUserNotification from '../../../actions/notification.actions/getUserNotification';
import fetchSingleSavingDetails from '../../../actions/savings.actions/fetchSingleSavingDetails';
import fetchSingleFixedSavingDetails from '../../../actions/savings.actions/fetchFixedSavings';
import { addCommasToMoney } from '../../../helper/index';


/**
 * @class UserDashBoardMainContentPage
 */
class UserDashBoardMainContentPage extends Component {
  state = {
    planType: ''
  }

  componentWillMount = () => {
    const {
      GetWalletBalance,
      AppRecentTransaction,
      GetTotalSavingsRequest,
      FetchSavingPlans,
    } = this.props;
    GetWalletBalance();
    AppRecentTransaction();
    GetTotalSavingsRequest();
    FetchSavingPlans();
  }

  /**
   *
   * @param {*} prevProps
   * @returns {*} - state
   */
  componentDidUpdate = (prevProps) => {
    const { getSavingPlans } = this.props;
    if (getSavingPlans === prevProps.getSavingPlans) {
      return null;
    }
    this.getSingleSavings();
  }

  getSingleSavings = () => {
    const {
      getSavingPlans,
      FetchSingleSavingDetails,
      FetchSingleFixedSavingDetails
    } = this.props;
    const myArray = Object.assign([], getSavingPlans);

    const sortObject = myArray.sort((a, b) => (a.id < b.id ? -1
      : a.id > b.id ? 1
        : 0));

    if (!isEmpty(sortObject)) {
      const latestSavings = sortObject[sortObject.length - 1];
      if (latestSavings.planType === 'PERSONAL_TARGET_SAVINGS' || latestSavings.planType === 'GROUP_TARGET_SAVINGS') {
        const savingDetails = {
          savingsId: latestSavings.id,
        };
        this.setState({
          planType: latestSavings.planType
        });
        FetchSingleSavingDetails(savingDetails);
      }
      if (latestSavings.planType === 'FIXED_SAVINGS' || latestSavings.planType === 'ETHICAL_SAVINGS') {
        this.setState({
          planType: latestSavings.planType
        });
        FetchSingleFixedSavingDetails(latestSavings.id);
      }
    }
  }


  /**
   *
   * @returns {*} - render
   */
  render() {
    const {
      walletBalance,
      appTransaction,
      getTotalSavingsAmt,
      getFixedSavingDetails,
      getSingleTargetSavingDetail,
      customerCards,
      getSavingPlans,
    } = this.props;

    const { planType } = this.state;

    const fixedSavingsAmount = isEmpty(getFixedSavingDetails) ? '' : addCommasToMoney(getFixedSavingDetails.amount);

    const targetSavingsAmount = isEmpty(getSingleTargetSavingDetail) ? '' : addCommasToMoney(getSingleTargetSavingDetail.targetAmount);

    const recuringAmount = isEmpty(getSingleTargetSavingDetail) ? '' : addCommasToMoney(getSingleTargetSavingDetail.recurringPayment);

    const userDashBoardMainContentPage = (
      <>
        <div>
          <section className="body_space" style={{
            padding: '0px'
          }}
          >
            <div className="card_section">
              <DashboardCard
                className="dashB_cards card_for_wallet"
                cardTopic="Wallet"
                cardAction={isEmpty(customerCards) ? 'Add New Card' : 'Top Up Wallet'}
                cardAmount={walletBalance}
                cardBalance="Current Balance"
                cardSecAmt={isEmpty(getTotalSavingsAmt) ? '₦ 0' : `₦ ${getTotalSavingsAmt}`}
                cardTotal="Total Savings"
                returnBalance="₦ 0"
                lastReturns="Returns"
                icon="fas fa-wallet"
                id="fundWallet"
                customerCards={customerCards}
              />
              <div className="dashB_cards card_for_mutualFunds">
                <div className="top">
                  <h4>
        Mutual Funds
                  </h4>
                </div>
                <div className="middle">
                  <p style={{ color: 'white' }}>
        You do not have any current
                    {' '}
                    <br />
                    {' '}
               mutal funds
                  </p>
                </div>
                <div className="bottom">
                  <Link to="mutual-fund-service-plans">
                    <button
                      type="button"
                    >
        Select Mutual Fund
                    </button>
                  </Link>
                </div>

              </div>

              <DashboardCard
                cardTopic="Investments"
                cardAction=""
                investAmount="₦ 0"
                cardBalance="TOTAL INVESTED"
                cardSecAmt=""
                cardTotal="No Investments Made"
                returnBalance=""
                lastReturns=""
                className="dashB_cards card_for_investments"
                icon=""
              />
            </div>
          </section>
          <section className="body_space2 py-5">
            <div className="history_section">
              {
                  isEmpty(getSavingPlans) ? (
                    <>
                      <div className="latest_saving">

                        <div className="latest_saving_title">
                          <div>
                            <h5 id="investFont">
                   My Latest Savings
                            </h5>
                          </div>
                          <div className="add_new_savings">
                            <Link id="investFont" to="/savings-plan"
                              style={{
                                color: '#014886',
                                fontSize: '14px'
                              }}
                            >
                 Add new
                            </Link>
                          </div>
                        </div>
                        <div className="no_history_table">
                          <div className="empty_savings_page_texts">

                            <h5 id="investFont">
                   No Latest Savings
                            </h5>
                            <p>
                To create a savings plan
                              {' '}
                              <span style={{ color: '#08A65B' }}>Select a saving plan</span>
    ,
                              {' '}
                              <span style={{ color: '#F0635A' }}>by clicking on </span>

                              {' '}
                              <span style={{ color: '#F0635A' }}>
                            Add New
                              </span>
                              {' '}
                              <br />
                              {' '}
and choose from our various saving products
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="latest_saving">
                      <div className="latest_saving_title">
                        <div>
                          <h5 id="investFont">
                   My Latest Savings
                          </h5>
                        </div>
                        <div className="add_new_savings">
                          <p id="investFont">
                 Add new
                          </p>
                        </div>
                      </div>
                      <div className="history_box">
                        <div className="history_img">
                          <img src={getFixedSavingDetails.imageUrl || getSingleTargetSavingDetail.imageUrl || randomIcon} alt="" />
                        </div>
                        <div className="history_desc">
                          <div className="history_navigator">
                            <div>
                              <i className="fas fa-angle-left" />
    |
                              <i className="fas fa-angle-right" />
                            </div>
                          </div>

                          <div className="savings_breakdown">

                            <div>

                              <p id="dashId">
        TARGET AMOUNT
                              </p>
                              <p>
                                {fixedSavingsAmount || targetSavingsAmount || '0'}
                              </p>

                            </div>

                            <div>

                              <p id="dashId">
            Recuring Payment
                              </p>
                              <p>
                                {recuringAmount || '0'}
                              </p>

                            </div>

                            <div>

                              <p id="dashId">
                INTEREST
                              </p>
                              <p>
                                {getFixedSavingDetails.totalInterestEarned || getSingleTargetSavingDetail.totalInterestEarned || '10%'}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Savings tracking */}
                        <div className="savings_tracking">
                          <div className="savings_tracks">
                            <div className="savings_track_title">
                              <h6>
                    Savings Title
                              </h6>
                            </div>
                            <div className="savings_name">
                              <p id="dashId">
                                {getFixedSavingDetails.title || getSingleTargetSavingDetail.title}
                              </p>
                            </div>

                            {
                        isEmpty(getSingleTargetSavingDetail) ? '' : planType === 'PERSONAL_TARGET_SAVINGS' || planType === 'GROUP_TARGET_SAVINGS' ? (
                          (
                            <>
                              <div className="progress">
                                <div className="progress-bar"
                                  style={{ width: '20%' }}
                                />
                              </div>
                              <div className="progress_status">
                                <div id="dashId"> 0% </div>
                                <div id="dashId">
                          Savings Progress
                                  {/* Not on track  */}
                                </div>
                              </div>
                            </>
                          )
                        ) : ''
                      }

                          </div>

                        </div>
                      </div>
                    </div>
                  )
                }


              <div className="transaction_history">

                <div className="transaction_history_title">

                  <div>
                    <h5 id="investFont">
                Transaction History
                    </h5>
                  </div>
                  <div className="add_new_savings">
                    {
                      appTransaction === undefined || appTransaction.length === 0 ? '' : (
                        <Link to="/transaction-history">
                          <p id="investFont">
                View all
                      </p>
                        </Link>
                      )
                    }
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
                  ) : appTransaction.length === 0 ? (
                    (
                      <div className="no_history_table">
                        <div className="empty_savings_page_texts">
                          <h2>
             You are yet to make a transaction.
                          </h2>
                          <p>
                To create a transaction you can
                            {' '}
                            <span style={{ color: '#08A65B' }}>Fund your wallet</span>
    ,
                            {' '}
                            <span style={{ color: '#F0635A' }}>Create a saving </span>
    and
                            {' '}
                            <span style={{ color: '#F0635A' }}>Investment plan.</span>
                            {' '}
                            <br />
                            {' '}
     Click the button below and choose from our various saving products
                          </p>
                          <Link to="/savings-plan">
                            <button type="button">
                  Selet a savings plan
                            </button>
                          </Link>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="history_table" style={{
                      paddingBottom: '43px'
                    }}
                    >
                      <table className="table table-hover">
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
                          ) : (
                            <>
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
                              appTransaction.slice(0, 3).map((transact, index) => (
                                <DashboardTransactionRow
                                  key={index}
                                  transact={transact}
                                />
                              ))
                            }
                              </tbody>
                            </>
                          )
                        }
                      </table>
                    </div>
                  )
                }

              </div>
            </div>
          </section>
        </div>
        <FundWallet />
      </>
    );
    return (
      <div className="container">{userDashBoardMainContentPage}</div>
    );
  }
}

UserDashBoardMainContentPage.propTypes = {
  walletBalance: PropTypes.shape({}),
  GetWalletBalance: PropTypes.func,
  AppRecentTransaction: PropTypes.func,
  appTransaction: PropTypes.array,
  GetTotalSavingsRequest: PropTypes.func,
  getTotalSavingsAmt: PropTypes.any,
  FetchSavingPlans: PropTypes.func,
  getSavingPlans: PropTypes.array,
  FetchSingleSavingDetails: PropTypes.func,
  FetchSingleFixedSavingDetails: PropTypes.func,
  getFixedSavingDetails: PropTypes.shape({}),
  getSingleTargetSavingDetail: PropTypes.shape({}),
  customerCards: PropTypes.array,
};

const mapStateToProps = state => ({
  walletBalance: state.getWalletBalance.walletBalance,
  appTransaction: isEmpty(state.appTransaction) ? '' : state.appTransaction.appTransaction.transactions,
  getTotalSavingsAmt: state.getUserTotalSavings.totalSavings,
  getSavingPlans: state.getUserSavingPlans.savingPlans.savingsPlan,
  getFixedSavingDetails: state.getFixedSavingDetail.fixedSavingDetail,
  getSingleTargetSavingDetail: state.getSavingDetail.savingDetail,
  success: state.getUserTotalSavings.success,
  customerCards: state.getCards.customerCards.customerCards
});

export default connect(mapStateToProps, {
  GetWalletBalance: getWalletBalance,
  AppRecentTransaction: inAppRecentTransaction,
  GetTotalSavingsRequest: getTotalSavingsRequest,
  FetchSavingPlans: fetchSavingPlans,
  FetchUserNotification: fetchUserNotification,
  FetchSingleSavingDetails: fetchSingleSavingDetails,
  FetchSingleFixedSavingDetails: fetchSingleFixedSavingDetails
})(UserDashBoardMainContentPage);
