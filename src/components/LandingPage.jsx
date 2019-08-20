import React, { Component } from 'react';
import Header from './Header';
import playStoreIcon from
  '../template/utils/images/Google-Play-and-Apple-App-Store-Logos-Two-Up.png';
import introIcon from '../template/utils/images/intro.png';
import upQuoteIcon from '../template/utils/icons/up.png';
import downQuoteIcon from '../template/utils/icons/down.png';
import cardIcon from '../template/utils/images/burst-nappy-.png';
import sceIcon from '../template/utils/icons/Icon.png';
import WebFooterBar from './WebFooterBar';
import MobileHeader from './MobileHeader';

/**
 *  @Class InvestPage
 */
class LandingPage extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div>
        <MobileHeader />
        <Header
          className="index_header"
          className2="header_description_text"
        >
          <h1 id="investFont">
            The best way to
            {' '}
            <br />
            <span> Save & Invest</span>
          </h1>
          <p>
            With new investment opportunities every week, join the hundreds
            {' '}
            <br />
            of ambitious investors and fund your growth
          </p>

          <img
            src={playStoreIcon}
            alt=""
          />
        </Header>
        <div className="product_filter">
          <div className="product_filter_form_div">
            <div className="one">
              <div className="input_div">
                <select
                  name="cars"
                  defaultValue="" 
                  id="savingFrequencyOption">
                  <option defaultValue="volvo">Select Product</option>
                  <option defaultValue="saab">Investment</option>
                  <option defaultValue="fiat">Mutual Fund</option>
                  <option defaultValue="audi">Savings</option>
                </select>
              </div>
            </div>
            <div className="two">
              <div className="input_div">
                <input type="text" name="" id="" placeholder="How much do you want to invest" />
              </div>
            </div>
            <div className="three">
              <div className="input_div">
                <select
                  name="cars"
                  defaultValue="" 
                  id="savingFrequencyOption">
                  <option defaultValue="volvo">For How Long?</option>
                  <option defaultValue="saab">6 Months</option>
                  <option defaultValue="fiat">12 Months</option>
                  <option defaultValue="audi">2 Years</option>
                </select>
              </div>

            </div>
            <div className="four">
              <div className="btn_full_width green_btn" id="">
                <button type="button">
                  Calculate
                </button>
              </div>
            </div>

          </div>
        </div>
        <section className="into_section">
          <div className=" row intro_section_wrapper">
            <div className=" col-md-06 intro_section_leftDiv">
              <p id="investFont">
    INTRO
              </p>
              <h3>
    Who we are
              </h3>
              <h5>
            Wealth Buddy is the Investment Banking
                {' '}
                <br />
                {' '}
                subsidiary of Meristem Securities Limited.

                {' '}
                <br />
                {' '}
                We offer varied services
                which can be broadly grouped into three (3)
              </h5>
              <p>
              Capital market services,
                {' '}
                <br />
                {' '}
                Financial advisory services,
                {' '}
                <br />
                {' '}
                Capital Raising (Debt and/or Equity)
                {/* as our professional deal team brings to the table effective solutions tailored */}
                {' '}
                <br />
                {' '}
                We stand for client bonding and value creation
                {/* towards your specific need to help achieve your strategic goals. */}
                {' '}
                <br />
                {' '}
                as our professional deal team brings
                <br />
                to the table effective solutions tailored
              </p>

              <button type="button">
    Learn More
              </button>
            </div>

            <div className=" col-md-06 intro_section_rightDiv">

              <div className="lowest_bg" />

              <div className="intro_image">
                <img src={introIcon} alt="" />
              </div>
              <div className="top_bg">
                <div className="top_quote">
                  <img src={upQuoteIcon} alt="" />
                </div>
                <div className="quote_text">
                  <p>
                    <i>
                      A big part of financial
                      {' '}
                      <br />
                      {' '}
                     freedom is having your
                      {' '}
                      <br />
                      {' '}
                     heart and mind free
                      {' '}
                      <br />
                      {' '}
                     from worry about the
                      {' '}
                      <br />
                      {' '}
                     what-ifs of life.
                    </i>
                  </p>
                </div>

                <div className="down_quote">
                  <img src={downQuoteIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how_it_works">
          <div className="index_custom_wrapper">
            <div className="how_it_works_header_text">
              <p>
                    HOW IT WORKS
              </p>
              <p>
              We offer you the tools and direction to achieve financial
                {' '}
                <br />
                freedom and success. Join the Wealth Buddy Community today!
              </p>
            </div>

            <div className="how_it_works_steps">

              <div className="steps">
                <div className="top_logo">
                  <img src={sceIcon} alt="" />
                </div>
                <div className="step_texts">
                  <h3>
                            Signup
                  </h3>
                  <p>
                  Simply sign up on the web or download our mobile apps on google or apple stores
                  </p>
                </div>
              </div>
              <div className="steps">
                <div className="top_logo">
                  <img src={sceIcon} alt="" />
                </div>
                <div className="step_texts">
                  <h3>
                    Pick Investment
                  </h3>
                  <p>
                  Pick from our array of investment opportunities: Savings, Money Market or Fixed Income Investment and you’ll be glad you did.
                  </p>
                </div>
              </div>
              <div className="steps">
                <div className="top_logo">
                  <img src={sceIcon} alt="" />
                </div>
                <div className="step_texts">
                  <h3>
                    Watch Your Wealth Grow
                  </h3>
                  <p>
                  Sit back and confidently watch your investments grow. Our platform gives you the Midas touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stats">
          <div className="index_custom_wrapper">
            <div className="stats_header_text">
              <h4>
            We will let our stats do the talking
              </h4>
              <p id="callId">
        The best part of being a part of this community is about working together. together we
                {' '}
                <br />
                {' '}
achieve collective success and financial growth.
              </p>
            </div>
            <div className="stats_numbers">
              <div>
                <h1>
                15%
                </h1>
                <p>
                Performance over 3 years
                </p>
              </div>
              <div>
                <h1>
                  188B
                </h1>
                <p>
                  Tested in the Nigeria Market
                </p>
              </div>
              <div>
                <h1>
                  15yrs
                </h1>
                <p>
                  Nobel prizes
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="succes_story">
          <div className="index_custom_wrapper">
            <div className="success_story_title">
              <h3>
            Success Stories
              </h3>
            </div>
            <div className="success_story_part">
              <div className="story_part">
                <div className="story_part_story">
                  <div className="story_title">
                    <h4>
                        Case Study Title for User Story
                    </h4>
                  </div>
                  <div className="user_story">
                    <div className="user_story_img" />
                    <div className="user_story_name">
                      <h5>
                            Thomas Edison
                      </h5>
                    </div>
                  </div>

                  <div className="story_text">
                    <p>
                      The Company currently operates in 25 states in Nigeria including
                      the Federal Capital Territory– Abuja. With a staff strength of over 1000
                      employees and an active customer base in excess of 300,000, Credit
                      Direct Limited is positioning itself to become the dominant market leader.
                    </p>
                  </div>

                </div>

              </div>
              <div className="image_part">
                <img src={cardIcon} alt="" />
              </div>
            </div>
          </div>
        </section>
        <WebFooterBar />
      </div>
    );
  }
}

export default LandingPage;
