import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import ReapInvestModal from '../../modals/ReapInvest';

/**
 * @class ReapPage
 */
class ReapPage extends Component {
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
    const reapPage = (
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
              data-target="#reap_settings"
            >
        Invest Now
            </button>
          </div>
        </div>
        <div className="invest_detail_desc_three">
          <div className="left" />
          <div className="right">
            <div className="right_header">
              <h4>
              Real Estate
              </h4>
              <p>
              REAP product offers you the opportunity to co-own real estate investment to generate
income via short let rental and full-term tenancy arrangements. The portfolio currently
available for subscription- REAP ARENA, has its underlying real estate asset located in
the West Midlands, England, United Kingdom.
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
            Bi-annual payment of rental income denominated in British Pounds.
            </p>
            <p style={{ color: '#10C06D'}}>
            Average rental yield of c. 3% p.a.
            </p>
            <p>
            Potential British Pound appreciation against the Naira.
            </p>
            <p>
            Portfolio diversification benefits.
            </p>
            <p style={{ color: '#10C06D'}}>
            Minimum investment requirement of GBP2, 000 and multiples of GBP500 afterwards.
            </p>
            <p>
            Fund transfer only. Cash payments are not acceptable.
            </p>
            <p style={{ color: '#10C06D'}}>
            Minimum lock-in period of six months.
            </p>
            <p style={{ color: '#10C06D'}}>
            25% penalty charge for early termination.
            </p>
            <p style={{ color: '#10C06D'}}>
            5% administration fee on rental income will apply.
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
          {reapPage}
        </div>
        <ReapInvestModal />
      </>
    );
  }
}

export default ReapPage;
