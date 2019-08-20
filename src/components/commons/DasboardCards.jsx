/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import { Link } from 'react-router-dom';
import { addCommasToMoney } from '../../helper/index';


const DashboardCard = (props) => {
  const {
    cardTopic,
    cardAction,
    cardAmount,
    cardBalance,
    cardSecAmt,
    cardTotal,
    returnBalance,
    lastReturns,
    className,
    icon,
    investAmount,
    onClick,
    id,
    customerCards
  } = props;

  const getCustomerCards = isEmpty(customerCards) ? '' : customerCards;

  const newId = `#${id}`;
  return (
    <div className={className}>
      <div className="top">
        <div>
          <h4>
            {cardTopic}
          </h4>
        </div>
        <div style={{ color: '#10C06D' }}>
          {
            getCustomerCards.length === 0 ? (
              <Link
                to="/add-card"
                style={{ color: '#10C06D' }}
              >
                {
                  cardAction ? (
                    <i className="fas fa-credit-card" style={{ color: '#10C06D' }} />
                  ) : ''
                }
                {'  '}
                {cardAction}
              </Link>
            ) : (
              <Link
                to="#"
                onClick={onClick}
                data-toggle="modal"
                data-target={newId}
                style={{ color: '#10C06D' }}
              >
                {
                  cardAction ? (
                    <i className={icon} style={{ color: '#10C06D' }} />
                  ) : ''
                }
                {'  '}
                {cardAction}
              </Link>
            )
          }
        </div>
      </div>
      <div className="middle">
        <h2>
          {
            isEmpty(cardAmount) ? '' : `₦ ${addCommasToMoney(cardAmount.balance)}`
          }
          {
            investAmount
          }
        </h2>
        <p>
          {cardBalance}
        </p>
      </div>
      <div className="bottom">

        <div className="">

          <h6>
            {addCommasToMoney(cardSecAmt)}
          </h6>
          <p>
            {cardTotal}
          </p>

        </div>
        <div>

          <h6>
            {returnBalance}
          </h6>
          <p>
            {lastReturns}
          </p>

        </div>

      </div>

    </div>
  );
};

DashboardCard.propTypes = {
  cardTopic: PropTypes.string,
  cardAction: PropTypes.string,
  cardAmount: PropTypes.shape({}),
  cardBalance: PropTypes.string,
  cardSecAmt: PropTypes.string,
  cardTotal: PropTypes.string,
  returnBalance: PropTypes.string,
  lastReturns: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  investAmount: PropTypes.string,
  onClick: PropTypes.string,
  id: PropTypes.string,
  customerCards: PropTypes.any
};

export default DashboardCard;
