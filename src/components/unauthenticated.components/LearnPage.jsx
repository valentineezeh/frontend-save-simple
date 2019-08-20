/* eslint-disable max-len */
import React, { Component } from 'react';
import WebFooterBar from '../WebFooterBar';
import Header from '../Header';
import MobileHeader from '../MobileHeader';

/**
 *  @Class LearnPage
 */
export class LearnPage extends Component {
  /**
       *
       * @returns {*} - render
       */
  render() {
    const learnpage = (
      <div>
        <MobileHeader />
        <Header
          className="learn_header"
          className2="invest_header_description_text"
        >
          <h3 id="investFont">
        Learn About Our Products
          </h3>
          <p>
        You deserve to know more
          </p>
        </Header>

        <section className="first_learn_section">
          <div className="first_learn_section_wrapper">
            <p id="investFont">
        What we do
            </p>
            <h3>
            How we do it
            </h3>
            <p className="learn_desc_text">
            We are a financial service company duly regulated bt the
             Security and Exchange
              {' '}
              <br />
              {' '}
Commission. We have five wholly-owned
             subsidiaries; wealth management,
              {' '}
              <br />
              {' '}
stockbrokeage, trusties and
             financial advisory.
            </p>
          </div>
        </section>

        <section className="learn_second_section">
          <div className="learn_second_section_wrapper">
            <div className="first_div">
              <div>
                <p id="investFont">
            01
                </p>
                <h6>
                Money Market Mutual Fund
                </h6>
                <p>
This Fund invests in low risk, placements and others
                  {' '}
                  <br />
                  {' '}
                  including Commercial Papers and promissory notes.
                  {' '}
                  <br />
                  {' '}
                  It is open-ended and
constituted under a Trust Deed.
                </p>
              </div>
            </div>
            <div className="second_div" />
          </div>
        </section>

        <section className="learn_second_section">
          <div className="learn_second_section_wrapper learn_third_section">
            <div className="second_div" />
            <div className="first_div">
              <div>
                <p id="investFont">
            02
                </p>
                <h6>
                Life-Style Savings
                </h6>
                <p>
                Short term goals including holiday travel, marriage,
                  {' '}
                  <br />
                  {' '}
                  risk securities car purchase and so, cost
                  {' '}
                  <br />
                  {' '}
                  stated.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="learn_second_section ">
          <div className="learn_second_section_wrapper learn_fourth_section">
            <div className="first_div">
              <div>
                <p id="investFont">
            03
                </p>

                <h6>
                Investments in Treasury Bill
                </h6>

                <p>
                If you wish to invest in Federal Government Treasury instruments, 
                  {' '}
                  <br />
                  {' '}
                  this is for you. Treasury bills are discounted, short-term securities issued
                  {' '}
                  <br />
                  {' '}
                  by the Central Bank of
Nigeria (CBN)
                </p>

              </div>

            </div>
            <div className="second_div" />
          </div>
        </section>
        <WebFooterBar />
      </div>
    );
    return <div>{learnpage}</div>;
  }
}

export default LearnPage;
