import React, { Component } from 'react';
import instapayIcon from '../../../../template/utils/icons/Innstapay-Logo-White.png';

/**
 *  @Class LoginPage
 */
class LoginLeftSection extends Component {
  /**
   * @returns  {*} - render
   */
  render() {
    return (
      <div className="login_left_section">
        <div className="company_logo">
          <h5>
      WealthBuddy
            {' '}
            <sup> &reg; </sup>
          </h5>

        </div>

        <div className="welcome_note">
          <h1 style={{ fontFamily: 'Roboto' }}>
         Welcome to
            {' '}
            <br />
            {' '}
             Wealth Buddy
          </h1>
          <p style={{
            fontFamily: 'Arial Bold',
            color: '#fff',
            fontSize: '16px'
          }}
          >
            <br />
The use of the products and services we offer
            {' '}
            <br />
 may result in the processing of personal data
          </p>
        </div>

        <div className="patners_login_page">

          <div>
            <img src={instapayIcon} alt="" style={{
              height: '20%',
              width: '40%'
            }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginLeftSection;
