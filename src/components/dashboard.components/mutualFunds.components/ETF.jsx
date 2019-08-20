import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import EtfModal from '../../modals/EtfModal';

/**
 * @class ETFPage
 */
class ETFPage extends Component {
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
    const etfPage = (
      <>
        <section className="body_space">
          <div className="invest_detail_top">
            <div className="title" />
            <div className="invest_btn green_btn">
              <button type="button" data-toggle="modal" data-target="#etfs_settings">
        Trade
              </button>
            </div>
          </div>
          <div className="invest_detail_desc">
            <div className="left" />
            <div className="right">
              <div className="right_header">
                <h4>
                ETFs
                </h4>
                <p>
                Full investment plan description, The Company currently operates in 25 states in Nigeria
                including the Federal Capital Territory– Abuja. With a staff strength . Our team of highly qualified Investment
                Banking professionals has an enviable repertoire of regulatory
                and policy knowledge gained through year of strong deal experience.
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
                    ₦ 200,000.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="chart_section">
            <canvas id="myChart" />
          </div>
        </section>
      </>
    );
    return (
      <>
        <DashboardMobileNav />
        <UserDashBoardSideNavigation />
        <div className="main_body_wrapper">
          <UserDashBoardTopNavigation />
          {etfPage}
        </div>
        <EtfModal />
      </>
    );
  }
}

export default ETFPage;
