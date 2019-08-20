import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardMobileNav from '../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from '../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from '../userDashBoard.components/UserDashBoardTopNavigation';
import { InvestmentCards } from '../../commons/index';

/**
 * @class InvestStartPage
 */
class InvestStartPage extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {

    const investStartPage = (
      <section className="body_space">
        <div className="investment_upper_part">
          <div className="investment_upper_part_title">

            <div className="first_child">
              <h4>
                Investments
              </h4>
              <p>
            Select your investment plan of interest
              </p>
            </div>

            <div className="second_child">
              <div className="second_child_icon" />
              <div className="second_child_input main" />
              <div className="second_child_filter main">
                <div className="filter_dropdown">
                  <i className="fas fa-filter" />
                    Filter
                  <i className="fas fa-angle-down" />
                </div>
                <div className="second_child_filter_dropdown animated bounce">
                  <div className="filter_header">
                    <h6>
                    Filter Investment Plans
                    </h6>
                  </div>
                  <div className="filter_select">
                    <div className="input_div">
                      <p>
                        Start Amount
                      </p>
                      <select
                        name="cars"
                        id="savingFrequencyOption"
                      >
                        <option value="Meep" selected>MEEP</option>
                        <option value="MT-LIP">MT-LIP</option>
                        <option value="REAP">REAP</option>
                        <option value="MDIP">MDIP</option>
                      </select>
                    </div>
                  </div>

                  <div className="filter_select">
                    <div className="input_div">
                      <p>
                        Start Amount
                      </p>
                      <select name="cars"
                        id="savingFrequencyOption"
                      >
                        <option value="volvo" selected>Set Durantion</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>
                  <div className="input_div">

                    <p>
                   interest
                    </p>

                    <label className="filter_radio_select">
                      5%
                      <input type="radio" name="interest" value="5" checked />
                      <span className="checkmark" />
                    </label>

                    <label className="filter_radio_select">
                        10%
                      <input type="radio" name="interest" value="5" />
                      <span className="checkmark" />
                    </label>

                    <label className="filter_radio_select">
                      15%
                      <input type="radio" name="interest" value="5" />
                      <span className="checkmark" />
                    </label>

                    <label className="filter_radio_select">
                      20%
                      <input type="radio" name="interest" value="5" />
                      <span className="checkmark" />
                    </label>

                    <label className="filter_radio_select">
                       25%
                      <input type="radio" name="interest" value="5" />
                      <span className="checkmark" />
                    </label>
                  </div>

                  <div className="btn_full_width green_btn">
                    <button id="" type="button">
                       Invest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invest_products">
            <Link to="/invest-mltlip">
              <InvestmentCards
                investTitle="Mutual Funds"
                investImage="invest_products_image"
                investDescription="This Fund invests in low risk, short-term securities such as Government securities..."
                investInterest="0% monthly"
                investAmount="₦ 10,000.00"
              />
            </Link>
            <Link to="/invest-meep">
              <InvestmentCards
                investTitle="Ethical investments"
                investImage="invest_products_image_two"
                investDescription="Ethical Earnings Portfolio is a unique product specifically for investors..."
                investInterest="10% monthly"
                investAmount="₦ 500,000.00"
              />
            </Link>
            <Link to="/invest-reap">
              <InvestmentCards
                investTitle="Real Estate"
                investImage="invest_products_image_three"
                investDescription="Real Estate product offers you the opportunity to co-own real estate investment to generate
                income"
                investInterest="10% monthly"
                investAmount="₦ 200,000.00"
              />
            </Link>
            <Link to="/invest-mdip">
              <InvestmentCards
                investTitle="Foreign Currency Investments"
                investImage="invest_products_image_four"
                investDescription="Foreign Currency Investments is a unique portfolio which offers exposure to US Dollar denominated investments."
                investInterest="10% monthly"
                investAmount="$ 2,000.00"
              />
            </Link>
            <Link to="/invest-fix-tip">
              <InvestmentCards
                investTitle="Fixed Deposit"
                investImage="invest_products_image_five"
                investDescription="This is a short-term placement of funds with a guarantee on capital plus a pre-agreed..."
                investInterest="10% monthly"
                investAmount="₦ 200,000.00"
              />
            </Link>
            <Link to="/invest-tbills">
              <InvestmentCards
                investTitle="Treasury Bills"
                investImage="invest_products_image_six"
                investDescription="If you wish to invest in Federal Government Treasury instruments, this is for you..."
                investInterest="0.25% monthly"
                investAmount="₦ 1,000,000.00"
              />
            </Link>
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
          {investStartPage}
        </div>
      </>
    );
  }
}

export default InvestStartPage;
