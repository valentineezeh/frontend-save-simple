import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const InvestmentCards = (props) => {
  const {
    investTitle,
    investDescription,
    investInterest,
    investAmount,
    investImage
  } = props;
  return (
    <div className="product_container">
      <div className={investImage}>
        <div className="img_btn_link">
          <Link to="#">
            {investTitle}
          </Link>
        </div>
        <div className="img_desc">
          <p className="invest_desc">
            {investDescription}
          </p>
        </div>
      </div>
      <div className="interest_percentage">
        <p>
        interest
        </p>
        <p>
          <span>
            {investInterest}
          </span>
        </p>
      </div>
      <div className="invest_amount">
        <div className="title">
          <p>
                   InvestABLE Amount
          </p>

          <p>
            <span style={{ color: 'black' }}>{investAmount}</span>
            <span> AND </span>
            <span style={{ color: 'black' }}> ABOVE </span>
          </p>
        </div>
      </div>
    </div>
  );
};

InvestmentCards.propTypes = {
  investTitle: PropTypes.string,
  investDescription: PropTypes.string,
  investInterest: PropTypes.string,
  investAmount: PropTypes.string,
  investImage: PropTypes.string
};

export default InvestmentCards;
