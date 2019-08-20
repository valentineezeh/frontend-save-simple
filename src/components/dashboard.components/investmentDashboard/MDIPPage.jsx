import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import MdipInvestModal from '../../modals/MdipInvest';

/**
 * @class MdipPage
 */
class MdipPage extends Component {
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
    const mdipPage = (
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
              data-target="#mdip_settings"
            >
        Invest Now
            </button>
          </div>
        </div>
        <div className="invest_detail_desc_four">
          <div className="left" />
          <div className="right">
            <div className="right_header">
              <h4>
              Foreign Currency Investments
              </h4>
              <p>
              Foreign Currency Investments is a unique portfolio which offers exposure to US Dollar denominated investments.
The product offers investment diversification benefits and investors are guaranteed principal
and competitive return on investment. The investors have zero exposure to exchange rate
volatility with potentials to earn both exchange gain and investment income.
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
                $ 2000.00
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
              <p>
              Investment income and
exchange rate gain potential.
              </p>
              <p style={{ color: '#10C06D'}}>
              Investment income in USD is
distributed semiannually.
              </p>
              <p style={{ color: '#10C06D'}}>
              Early investment termination
attracts a penalty charge of 25%
off investment returns.
              </p>
              <p>
              M-DIP is open-ended, as such,
subscription and redemption can take place at any time under
specified exit conditions..
              </p>
              <p style={{ color: '#10C06D'}}>
              Minimum investment
requirement of USD2, 000 and
multiples of USD500 afterwards..
              </p>
              <p style={{ color: '#10C06D'}}>
            Minimum lock-in period of six months.
              </p>
              <p>
              Investors unable to hold
investment for the minimum lock
in period wherein penalty will
apply.
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
          {mdipPage}
        </div>
        <MdipInvestModal />
      </>
    );
  }
}

export default MdipPage;
