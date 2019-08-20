/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WebFooterBar from '../WebFooterBar';
import Header from '../Header';
import MobileHeader from '../MobileHeader';

/**
 *  @Class InvestPage
 */
export class InvestPage extends Component {
  onCheckAuthUser = () => {
    const { isAuth, history } = this.props;
    if (isAuth) {
      return history.push('/invest-plans');
    }
    if (!isAuth) {
      return history.push('/login');
    }
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const investpage = (
      <div>
        <MobileHeader />
        <Header
          className="invest_header"
          className2="invest_header_description_text"
        >
          <h3 id="investFont">
              Start Investing Now
          </h3>
          <p>
              Invest your Money and watch your wealth grow,
            {' '}
            <br />
            {' '}
to be sustainable and long lasting.
          </p>
        </Header>
        <section className="invest_success_text">
          <div className="index_custom_wrapper">
            <div className="invest_first_section">
              <p id="investFont">
                The story behind our success
              </p>

              <p id="callId">
                Wealth Buddy is the Investment Banking subsidiary of
                {' '}
                <br />
                {' '}
Meristem
                 Securities Limited. We offer varied services which
                {' '}
                <br />
                {' '}
can be
                 broadly grouped into various investment products:
              </p>
            </div>
            <div className="invest_third_section">
              <div className="invest_products_title">
                <h1>
             Below are our various Investment
                  {' '}
                  <br />
                  {' '}
                  Products
                </h1>
              </div>
              <div className="invest_products">
                <div className="product_container">
                  <div className="invest_products_image">
                    <div className="img_desc">
                      <h4>
                      Mutual Funds
                      </h4>
                      <p>
                      These include treasury bills, bank placements, commercial papers...
                      </p>
                    </div>
                  </div>

                  <div className="interest_percentage">
                    <p>
                     interest
                    </p>
                    <p>
                     13% monthly
                    </p>
                  </div>

                  <div className="invest_amount">
                    <div className="title">
                      <p>
                      investable amount
                      </p>

                      <p>
                        <span>₦ 10,000.00</span>
                        <span> AND</span>
                        <span> ABOVE </span>
                      </p>
                    </div>
                  </div>

                  <div className="invest_product_footer">

                    <div className="learn_more_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
        Learn More
                      </Link>
                    </div>

                    <div className="invest_now_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
        Invest now
                        {' '}
                        <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="product_container">
                  <div className="invest_products_image">
                    <div className="img_desc">
                      <h4>
                      Equity Market Mutual Fund (EMF):
                      </h4>
                      <p>
                      Wealth Buddy invests primarily in equity instruments quoted on the Nigerian Stock Exchange.
                      </p>
                    </div>
                  </div>

                  <div className="interest_percentage">
                    <p>
            interest
                    </p>
                    <p>
        13% monthly
                    </p>

                  </div>

                  <div className="invest_amount">
                    <div className="title">
                      <p>
                        Investable Amount
                      </p>

                      <p>
                        <span>₦ 10,000.00</span>
                        <span> TO</span>
                        <span> ABOVE </span>
                      </p>
                    </div>
                  </div>

                  <div className="invest_product_footer">
                    <div className="learn_more_link">
                      <Link to="#"
                        onClick={this.onCheckAuthUser}
                      >
            Learn More
                      </Link>
                    </div>

                    <div className="invest_now_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
            Invest now
                        {' '}
                        <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="product_container">
                  <div className="invest_products_image">
                    <div className="img_desc">
                      <h4>
                      Fixed Deposit:
                      </h4>
                      <p>
                      The FIC composite is a short and long-term based selection of fixed income instruments..
                      </p>
                    </div>
                  </div>
                  <div className="interest_percentage">
                    <p>
                interest
                    </p>
                    <p>
            13% monthly
                    </p>
                  </div>
                  <div className="invest_amount">
                    <div className="title">
                      <p>
                        Investable Amount
                      </p>
                      <p>
                        <span>₦ 200,000.00</span>
                        <span> AND</span>
                        <span> ABOVE </span>
                      </p>
                    </div>
                  </div>

                  <div className="invest_product_footer">

                    <div className="learn_more_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
                Learn More
                      </Link>
                    </div>

                    <div className="invest_now_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
                Invest now
                        {' '}
                        <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="product_container">
                  <div className="invest_products_image">
                    <div className="img_desc">
                      <h4>
                      Value Exchange Traded Fund
                      </h4>
                      <p>
                      The main objective of the Fund is to replicate the net return of the NSE.
                      </p>
                    </div>
                  </div>

                  <div className="interest_percentage">
                    <p>
                     interest
                    </p>
                    <p>
                     13% monthly
                    </p>
                  </div>

                  <div className="invest_amount">
                    <div className="title">
                      <p>
                      investable amount
                      </p>

                      <p>
                        <span>₦ 55,000.00</span>
                        <span> TO</span>
                        <span> ₦ 155,000.00 </span>
                      </p>
                    </div>
                  </div>

                  <div className="invest_product_footer">

                    <div className="learn_more_link">
                      <Link to="#"
                        onClick={this.onCheckAuthUser}
                      >
        Learn More
                      </Link>
                    </div>

                    <div className="invest_now_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
        Invest now
                        {' '}
                        <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="product_container">
                  <div className="invest_products_image">
                    <div className="img_desc">
                      <h4>
                      Growth Exchange Traded Fund:
                      </h4>
                      <p>
                      The Wealth Growth ETF is designed for and offered to investors seeking exposure to the stock market.
                      </p>
                    </div>
                  </div>

                  <div className="interest_percentage">
                    <p>
            interest
                    </p>
                    <p>
        13% monthly
                    </p>

                  </div>

                  <div className="invest_amount">
                    <div className="title">
                      <p>
                        InvestABLE Amount
                      </p>

                      <p>
                        <span>₦ 55,000.00</span>
                        <span> TO</span>
                        <span> ₦ 155,000.00 </span>
                      </p>
                    </div>
                  </div>

                  <div className="invest_product_footer">
                    <div className="learn_more_link">
                      <Link to="#"
                        onClick={this.onCheckAuthUser}
                      >
            Learn More
                      </Link>
                    </div>

                    <div className="invest_now_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
            Invest now
                        {' '}
                        <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="product_container">
                  <div className="invest_products_image">
                    <div className="img_desc">
                      <h4>
                      Global Bond Composite (GB):
                      </h4>
                      <p>
                      The GB takes advantage of long-term fixed income securities available globally ex-naira.
                      </p>
                    </div>
                  </div>

                  <div className="interest_percentage">
                    <p>
            interest
                    </p>
                    <p>
        13% monthly
                    </p>

                  </div>

                  <div className="invest_amount">
                    <div className="title">
                      <p>
                        InvestABLE Amount
                      </p>

                      <p>
                        <span>₦ 55,000.00</span>
                        <span> TO</span>
                        <span> ₦ 155,000.00 </span>
                      </p>
                    </div>
                  </div>

                  <div className="invest_product_footer">
                    <div className="learn_more_link">
                      <Link to="#">
            Learn More
                      </Link>
                    </div>

                    <div className="invest_now_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
            Invest now
                        {' '}
                        <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="product_container">
                  <div className="invest_products_image">
                    <div className="img_desc">
                      <h4>
                      Growth Strategy Composite (GS)
                      </h4>
                      <p>
                      GS consist of portfolios invested in equity securities..
                      </p>
                    </div>
                  </div>

                  <div className="interest_percentage">
                    <p>
            interest
                    </p>
                    <p>
        13% monthly
                    </p>

                  </div>

                  <div className="invest_amount">
                    <div className="title">
                      <p>
                        InvestABLE Amount
                      </p>

                      <p>
                        <span>₦ 55,000.00</span>
                        <span> TO</span>
                        <span> ₦ 155,000.00 </span>
                      </p>
                    </div>
                  </div>

                  <div className="invest_product_footer">
                    <div className="learn_more_link">
                      <Link to="#">
            Learn More
                      </Link>
                    </div>

                    <div className="invest_now_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
            Invest now
                        {' '}
                        <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="product_container">
                  <div className="invest_products_image">
                    <div className="img_desc">
                      <h4>
                      Ethical Strategy Composite (ES):
                      </h4>
                      <p>
                      ES composite are portfolios of interest-averse investors...
                      </p>
                    </div>
                  </div>

                  <div className="interest_percentage">
                    <p>
            interest
                    </p>
                    <p>
        13% monthly
                    </p>

                  </div>

                  <div className="invest_amount">
                    <div className="title">
                      <p>
                        InvestABLE Amount
                      </p>

                      <p>
                        <span>₦ 55,000.00</span>
                        <span> TO</span>
                        <span> ₦ 155,000.00 </span>
                      </p>
                    </div>
                  </div>

                  <div className="invest_product_footer">
                    <div className="learn_more_link">
                      <Link to="#">
            Learn More
                      </Link>
                    </div>

                    <div className="invest_now_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
            Invest now
                        {' '}
                        <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="product_container">
                  <div className="invest_products_image">
                    <div className="img_desc">
                      <h4>
                      Multi Currency Fixed Income Composite (MFI):
                      </h4>
                      <p>
                      MFI is a mix of fixed income investments issued in Naira and foreign currencies..
                      </p>
                    </div>
                  </div>

                  <div className="interest_percentage">
                    <p>
            interest
                    </p>
                    <p>
        13% monthly
                    </p>
                  </div>

                  <div className="invest_amount">
                    <div className="title">
                      <p>
                        InvestABLE Amount
                      </p>

                      <p>
                        <span>₦ 55,000.00</span>
                        <span> TO</span>
                        <span> ₦ 155,000.00 </span>
                      </p>
                    </div>
                  </div>

                  <div className="invest_product_footer">
                    <div className="learn_more_link">
                      <Link to="#">
            Learn More
                      </Link>
                    </div>

                    <div className="invest_now_link">
                      <Link
                        to="#"
                        onClick={this.onCheckAuthUser}
                      >
            Invest now
                        {' '}
                        <i className="fas fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <WebFooterBar />
      </div>
    );
    return <div>{investpage}</div>;
  }
}

InvestPage.propTypes = {
  isAuth: PropTypes.bool,
  history: PropTypes.shape({})
};

const mapStateToProps = state => ({
  isAuth: state.loginReducer.isAuthenticated
});


export default withRouter(connect(mapStateToProps, null)(InvestPage));
