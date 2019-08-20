import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * @class LandingPage
 */
class WebFooterBar extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const webFooterBar = (
      <section className="futa_section">
        <div className="index_custom_wrapper footer_div">
          <div>
            <h3>
            Products
            </h3>

            <ul>
              <li>
                <Link to="#">
                    Features
                </Link>
              </li>
              <li>
                <Link to="#">
                        Frequently Asked Questsions
                </Link>
              </li>
              <li>
                <Link to="#">
                    Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>
                    legals
            </h3>

            <ul>
              <li>
                <Link to="#">
                                Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#">
                                Privacy Policies
                </Link>
              </li>

            </ul>
          </div>
          <div>
            <h3>
                    contacts
            </h3>

            <ul>
              <li>
                <Link to="#">
                3 Norman Willians Street,
                  <br />
                  South-West Ikoyi, Lagos, Nigeria
                </Link>
              </li>
              <li>
                <Link to="#">
                help@mywealth.com
                </Link>
              </li>
              <li>
                <Link to="#">
                  +234 703 9293 402
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="reserved">

          <p id="callId">
            2019 - All Right Reserved
          </p>

        </div>

      </section>
    );
    return (
      <div>{webFooterBar}</div>
    );
  }
}

export default WebFooterBar;
