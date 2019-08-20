import React from 'react';
import PropTypes from 'prop-types';

const PrimaryAuctionCards = (props) => {
  const {
    auctionTitle,
    investAmountOne,
    investAmountTwo,
    interestRate,
    tenour
  } = props;
  return (
    <div className="autions_div">
      <div className="auction_title">
        <p style={{
          fontWeight: 'bold',
          fontFamily: 'sans serif',
          fontSize: '14px'
        }}
        >
          {auctionTitle}
        </p>
      </div>
      <div className="auction_invest_amount">
        <p>
        InvestABLE Amount
        </p>
        <p>
          <span>{investAmountOne}</span>
          <span> TO</span>
          <span>
            {' '}
            {investAmountTwo}
            {' '}
          </span>
        </p>

      </div>
      <div className="auction_rate">
        <div className="auction_rate_percent">
          <p style={{ color: '#19D22C' }}>
            Interest
          </p>
          <p style={{ color: '#19D22C' }}>
            {interestRate}
          </p>
        </div>
        <div className="auction_rate_duration">
          <p>
            Tenour
          </p>
          <p>
            {tenour}
          </p>
        </div>

      </div>
    </div>
  );
};

PrimaryAuctionCards.propTypes = {
  auctionTitle: PropTypes.string,
  investAmountOne: PropTypes.string,
  investAmountTwo: PropTypes.string,
  interestRate: PropTypes.string,
  tenour: PropTypes.string
};

export default PrimaryAuctionCards;
