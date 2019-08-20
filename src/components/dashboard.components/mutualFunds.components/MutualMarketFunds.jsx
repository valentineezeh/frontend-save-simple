import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import MutualMarketFundModal from '../../modals/MutualMarketFund';

/**
 * @class MutualFundSavingPlans
 */
class MutualMarketFunds extends Component {
  /**
   *
   * @returns {*} - chart
   */
  componentDidMount() {
    const ctx = document.getElementById('myChart').getContext('2d');
    // eslint-disable-next-line no-new
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Earning Rates',
          data: [12, 19, 3, 5, 2, 3, 15],
          backgroundColor: 'rgba(0, 0, 0,0)',
          borderColor: 'rgb(16, 192, 109)',
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const mutualMarketFunds = (
      <section className="body_space">
        <div className="invest_detail_top">
          <div className="title" />
          <div className="invest_btn green_btn">
            <button
              type="button"
              data-toggle="modal" data-target="#mmmf_settings"
            >
        Buy Now
            </button>
          </div>
        </div>

        <div className="invest_detail_desc">
          <div className="left" />
          <div className="right">
            <div className="right_header">
              <h4>
        Money Market Mutual Funds
              </h4>
              <p>
              This Fund invests in low risk, short-term securities such as Government securities, Bank placements and others including Commercial Papers and promissory notes. This mutual fund is for investors who value liquidity and security of assets. It is open-ended and
constituted under a Trust Deed.
              </p>
            </div>
            <div className="right_footer">
              <div>
                <p>
                Interest
                </p>
                <p>
                10% monthly
                </p>
              </div>

              <div>
                <p>
                Minimum investment amount

                </p>
                <p>
                ₦ 10,000.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="chart_section">
          <canvas id="myChart" />
        </div>
        <>
          <div className="container text-center"
            style={{
              padding: '20px'
            }}
          >
            <h4
              style={{
                color: 'black',
                fontFamily: 'Open Sans',
              }}
            >
            Features and Benefits
            </h4>
          </div>
          <div className="container text-center">
            <div
              style={{
                fontSize: '14px',
                color: 'black'
              }}
            >
              <p>
            Preserves and grows capital.
              </p>
              <p style={{ color: '#10C06D' }}>
            Steady stream of income.
              </p>
              <p>
            Open to both resident and foreign investors.
              </p>
              <p>
            Quarterly distribution of returns or reinvestment of same.
              </p>
              <p style={{ color: '#10C06D' }}>
            Unit holders return on investment is tax free.
              </p>
              <p>
            Tax free capital gains from redemption of units by unit holders.
              </p>
              <p style={{ color: '#10C06D' }}>
            Minimum subscription amount: N10, 000.
              </p>
              <p style={{ color: '#10C06D' }}>
            Termination within 30-day period attracts 0.5% penalty charge on accrued return.
              </p>
            </div>
          </div>
        </>
      </section>
    );
    return (
      <>
        <DashboardMobileNav />
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {mutualMarketFunds}
        </div>
        <MutualMarketFundModal />
      </>
    );
  }
}

export default MutualMarketFunds;
