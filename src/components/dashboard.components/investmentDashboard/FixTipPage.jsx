import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import FixTipInvestModal from '../../modals/FixTipInvest';

/**
 * @class ReapPage
 */
class FixTipPage extends Component {
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
    const fixTipPage = (
      <section className="body_space">
        <div className="invest_detail_top">
          <div className="title">
            <h5
              style={{
                color: '#898D92',
              }}
            >
    Investment Details
            </h5>
          </div>
          <div className="invest_btn green_btn">
            <button
              type="button"
              data-toggle="modal"
              data-target="#fixtip_settings"
            >
        Invest Now
            </button>
          </div>
        </div>
        <div className="invest_detail_desc_five">
          <div className="left" />
          <div className="right">
            <div className="right_header">
              <h4>
              Fixed Deposit
              </h4>
              <p>
              This is a short-term placement of funds with a guarantee on capital plus a pre-agreed
rate of return tied to prevailing money-market rates per time. It can be used to save
towards any goal; travel, rent payment, car purchase, school fees payment. Minimum
investment amount is N200,000.
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
                <p style={{ color: 'black', fontSize: '14px' }}>
                ₦ 200,000.00
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
                fontSize: '12px',
                color: 'black'
              }}
            >
              <p>
              Capital preservation and growth.
              </p>
              <p style={{ color: '#10C06D'}}>
              Short term horizon- minimum of 30 days. Other tenors- 60 days, 90 days, 180
days &amp; 364 days.
              </p>
              <p>
              Competitive rates of return.
              </p>
              <p>
              Minimum investment amount of N200,000.00.
              </p>
              <p style={{ color: '#10C06D'}}>
              Withholding tax (10%) applies on interest income.
              </p>
              <p style={{ color: '#10C06D'}}>
              Termination attracts 20% penalty charge on accrued income.
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
          {fixTipPage}
        </div>
        <FixTipInvestModal />
      </>
    );
  }
}

export default FixTipPage;
