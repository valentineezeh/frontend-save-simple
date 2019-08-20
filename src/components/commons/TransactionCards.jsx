import React from 'react';
import PropTypes from 'prop-types';

const TransactionCards = (props) => {
  const {
    card,
    onChange,
    name,
    defaultChecked,
    src,
    value,
  } = props;
  return (
    <div className="card_options">
      <div>
        <div className="card_icon">
          <img src={src} alt="" />
        </div>
        <div className="card_name">
          <h6>
            {card.cardType}
            {' '}
            {' '}
            {card.lastFourDigit}
            {' '}
          </h6>
          <p>
                              Guaranty Trust Bank
          </p>
        </div>

      </div>
      <div>
        <label className="content">
          <input
            type="radio"
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            onChange={onChange}
          />
          <span className="checkmate" />
        </label>
      </div>
    </div>
  );
};

TransactionCards.propTypes = {
  card: PropTypes.shape({}),
  src: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.number,
  defaultChecked: PropTypes.bool
};

export default TransactionCards;
