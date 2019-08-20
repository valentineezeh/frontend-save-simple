import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import MeepInvestModal from '../../modals/MeepInvest';

/**
 * @class MeepPage
 */
class MeepPage extends Component {
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
    const meepPage = (
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
              data-target="#meep_settings"
            >
        Invest Now
            </button>
          </div>
        </div>
        <div className="invest_detail_desc_two">
          <div className="left" />
          <div className="right">
            <div className="right_header">
              <h4>
              Ethical Investments
              </h4>
              <p>
              Meristem Ethical Earnings Portfolio is a unique product specifically for investors
precluded from interest generating investments for religious or other ethical reasons. It
is backed by an investment in high quality revenue generating infrastructure projects.
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
                ₦ 500,000.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="chart_section">
          <canvas id="myChart" />
        </div>
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
              Creation of an alternative investment avenue especially for ethical investors.
            </p>
            <p style={{ color: '#10C06D'}}>
              Wealth creation as capital value of the portfolio is preserved with income earned.
            </p>
            <p>
            Portfolio diversification for ethical investors and others.
            </p>
            <p>
            Highly competitive income with bi-annual distribution.
            </p>
            <p style={{ color: '#10C06D'}}>
            Minimum investment amount: N500,000 and multiples of N100,000 thereafter.
            </p>
            <p style={{ color: '#10C06D'}}>
            Minimum Investment Horizon: Six (6) months.
            </p>
            <p>
            Biannual payment of income to subscribers in April and October.
            </p>
            <p style={{ color: '#10C06D'}}>
            Liquidity provision for early exit with 40% penalty charge on accrued income
            before minimum investment tenor.
            </p>
            <p style={{ color: '#10C06D'}}>
              Termination penalty before income distribution dates in roll-over tenor attracts
20% charge on accrued income
            </p>
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
          {meepPage}
        </div>
        <MeepInvestModal />
      </>
    );
  }
}

export default MeepPage;
