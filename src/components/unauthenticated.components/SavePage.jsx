/* eslint-disable max-len */
import React, { Component } from 'react';
import WebFooterBar from '../WebFooterBar';
import Header from '../Header';
import MobileHeader from '../MobileHeader';

/**
 *  @Class SavePage
 */
export class SavePage extends Component {
  /**
       *
       * @returns {*} - render
       */
  render() {
    const savepage = (
      <div>
        <MobileHeader />
        <Header
          className="save_header"
          className2="index_nav_div_container"
        >
          <div className="invest_header_description_text">

            <h3 id="investFont">
        Because you deserve more!
            </h3>
            <p>
        Saving money should be simple and rewarding.
            </p>

          </div>
        </Header>

        <section className="main_save_section">
          <div className="save_page_main_wrapper">
            <div className="save_right_section">
              <div className="whatWeDo_text_section">
                <p id="investFont">
    what we do
                </p>

                <h4>
    Make it easy with us
                </h4>
              </div>

              <div className="lifestyle_div">
                <div className="left_div">
                  <h6 id="investFont">
        Life-Style Savings
                  </h6>
                </div>
                <div className="right_div">
                  <p style={{
                    color: 'white',
                    fontSize: '16px'
                  }}
                  >
                    Short term goals including holiday travel, marriage,
                    <br />
                    {' '}
                    risk securities car purchase and so on have cost
                    {' '}
                    <br />
                    {' '}
                    stated. Financial planning is therefore required to ascertain the actualization of these goals.
                    <br />
                    The total cost of the goal would be the target amount at a
                    <br />
                    stated future date. By setting aside money periodically and investing in low
                    <br />
                    these goals would be met.
                    {' '}
                  </p>
                </div>
              </div>

              <div className="children_edu_div">
                <div className="left_div">
                  <h6 id="investFont">
        Children Education Savings
                  </h6>
                </div>
                <div className="right_div">
                  <p
                    style={{
                      color: 'white',
                      fontSize: '16px'
                    }}
                  >
                  An investment in knowledge pays the best interest.
                    {' '}
                    <br />
                    {' '}
                    As a parent, the best gift to your child is good education
                    {' '}
                    <br />
                    {' '}
                    and as such, parents strive to get the best level of education possible to their children.
                    {' '}
                    <br />
                    {' '}
                    The best education however comes at a cost to the parents and without proper planning,
                    {' '}
                    <br />
                    {' '}
                    parents would be overwhelmed with school fees or worse
                    <br />
                    {' '}
                    still, would be unable to afford the fees.
                  </p>
                </div>
              </div>

              <div className="house_owner_div">
                <div className="left_div">
                  <h6 id="investFont">
        House Ownership Savings
                  </h6>
                </div>
                <div className="right_div">
                  <p
                    style={{
                      color: 'white',
                      fontSize: '16px'
                    }}
                  >
                  Paying rent annually is an expense one wants to put an
                    {' '}
                    <br />
                    {' '}
                    end to within reasonable time. The preferable option of
                    {' '}
                    <br />
                    {' '}
                    buying or building a house, although would avoid this
                    {' '}
                    <br />
                    {' '}
                    expense comes at a large upfront cost. Buying a house
                    {' '}
                    <br />
                    {' '}
                    is therefore not a decision one makes on the spot. It
                    {' '}
                    <br />
                    {' '}
                    requires planning, setting aside funds to ultimately
                    {' '}
                    <br />
                    {' '}
                    make the purchase. Through our structured savings plan,
                    {' '}
                    <br />
                    {' '}
                    by making periodic payments, buying your dream house
                    {' '}
                    <br />
                    {' '}
                    is no longer out of sight!
                  </p>
                </div>
              </div>
            </div>

            <div className="save_left_section" />
          </div>
        </section>
        <section className="quote_section">
          <div className="index_custom_wrapper">
            <div className="quote_section_header">
              <h3 id="investFont">
                Savings Qoutes
              </h3>
              <p>
                The best part of being a part of this community is about
                 working together.
                {' '}
                <br />
                {' '}
together we achieve collective success and financial growth.
              </p>
            </div>

            <div className="quotes_text">
              <div className="quotes">
                <p>
            Do not save what is left after spending but save what is left before spending
                </p>
              </div>
              <div className="quotes">
                <p>
            Save Money and Money will save you
                </p>
              </div>
              <div className="quotes">
                <p>
        I’m stuck between, i need to save money and you only live once
                </p>
              </div>
            </div>
          </div>
        </section>
        <WebFooterBar />
      </div>
    );
    return <div>{savepage}</div>;
  }
}

export default SavePage;
