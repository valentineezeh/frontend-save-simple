import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';

/**
 * @class ExchangeTrade
 */
class ExchangeTrade extends Component {
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
    const exchangeTrade = (
      <>
        <section className="body_space">
          <div className="market_page_title">
            <p>
              Live Market Data
            </p>
          </div>
          <div className="history_table_wrapper">
            <div className="history_table">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Link to="/etf"
                      style={{
                        textDecoration: 'none'
                      }}
                    >
                      <td>
                        <div className="trade_types">
                          <div className="trade_btn">
                            <button type="button">
                          Trade
                            </button>
                          </div>
                          <div className="trade_name">
                            <p>
                            Growth ETFs
                            </p>
                          </div>

                        </div>
                      </td>
                    </Link>
                  </tr>
                  <tr>
                    <Link to="etf"
                      style={{
                        textDecoration: 'none'
                      }}
                    >
                    <td>
                      <div className="trade_types">

                        <div className="trade_btn">
                          <button type="button">
                            Trade
                          </button>
                        </div>
                        <div className="trade_name">
                          <p>
                            Value ETFs
                          </p>
                        </div>
                      </div>
                    </td>
                    </Link>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Add chart */}
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
          {exchangeTrade}
        </div>
      </>
    );
  }
}

export default ExchangeTrade;
