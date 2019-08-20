/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const DebitAccountCard = (props) => {
  const {
    src,
    accountNumber,
    accountName,
    bankName,
    value,
    defaultChecked,
    onChange,
    name
  } = props;
  return (
    <div className="card_options my-3 p-4 available_card selected_bank">
      <div>
        <div className="card_icon">
          <img src={src} alt="" />
        </div>
        <div className="card_name">
          <h6>
            {accountNumber}
            {' '}
-
            {' '}
            {accountName}
          </h6>
          <p>
            {bankName}
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

DebitAccountCard.propTypes = {
  src: PropTypes.string,
  accountNumber: PropTypes.any,
  accountName: PropTypes.string,
  bankName: PropTypes.string,
  value: PropTypes.number,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string

};

export default DebitAccountCard;
