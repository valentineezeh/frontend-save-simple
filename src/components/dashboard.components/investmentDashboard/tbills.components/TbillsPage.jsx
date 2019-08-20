import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import DashboardMobileNav from '../../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../../userDashBoard.components/UserDashBoardTopNavigation';
import TbillsInvestModal from '../../../modals/TbillsInvest';

/**
 * @class ReapPage
 */
class TBillsPPage extends Component {
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
    const tBillsPPage = (
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
              data-target="#tbills_settings"
            >
        Invest Now
            </button>
          </div>
        </div>
        <div className="invest_detail_desc_six">
          <div className="left" />
          <div className="right">
            <div className="right_header">
              <h4>
              Treasury Bills
              </h4>
              <p>
              If you wish to invest in Federal Government Treasury instruments, this is for you.
Treasury bills are discounted, short-term securities issued by the Central Bank of
Nigeria (CBN) and guaranteed by the Federal Government of Nigeria (FGN). Minimum
investment amount is N1,000,000
              </p>
            </div>
            <div className="right_footer">
              <div>
                <p>
                Interest
                </p>
                <p>
                0.25% monthly
                </p>
              </div>

              <div>
                <p>
                Minimum investment amount

                </p>
                <p style={{ color: 'black', fontSize: '14px' }}>
                ₦ 1,000,000.00
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
            Short term horizon of 91 days, 182 days, and 364 days.
            </p>
            <p>
            Capital preservation and growth.
            </p>
            <p style={{ color: '#10C06D'}}>
            Option of upfront interest payment or capitalization of interest.
            </p>
            <p>
            Highly competitive rates of return.
            </p>
            <p style={{ color: '#10C06D'}}>
            Tax free interest income.
            </p>
            <p style={{ color: '#10C06D'}}>
            Transaction charge of 0.25% of the principal payable upfront from the interest.
            </p>
            <p>
            Minimum investment requirement of N1, 000,000.00.
            </p>
            <p>
            Termination attracts 50% penalty charge on accrued income
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
          {tBillsPPage}
        </div>
        <TbillsInvestModal />
      </>
    );
  }
}

export default TBillsPPage;
