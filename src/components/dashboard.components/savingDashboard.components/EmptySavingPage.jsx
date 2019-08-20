import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * @class TransactionHistory
 */
class EmptySavingPage extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const emptySavingPage = (
      <section className="body_space">
        <div className="empty_savings_page">
          <div className="empty_savings_page_texts">
            <h2>
         You do not have any active savings
            </h2>
            <p>
            To create an active saving plan click the button
              {' '}
              <br />
              {' '}
 below and choose from our various saving products
            </p>
            <Link to="/savings-plan">
              <button type="button">
              Select a savings plan
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
    return <Fragment>{emptySavingPage}</Fragment>;
  }
}

export default EmptySavingPage;
