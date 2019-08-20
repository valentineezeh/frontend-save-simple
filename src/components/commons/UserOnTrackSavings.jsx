/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';

/**
 * @class UserOnTrackSavings
 */
class UserOnTrackSavings extends React.Component {
  onClickUserSavings = () => {
    const { id, planType } = this.props;
    Cookie.set('savingId', id);
    Cookie.set('planType', planType);
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const {
      title,
      planType,
      amountSaved,
      amountAccrued,
      totalInterestEarned,
    } = this.props;

    return (
      <div className="savings_plan_for_interest_options ontrack">
        <Link to="saving-details"
          style={{ textDecoration: 'none' }}
          onClick={this.onClickUserSavings}
        >
          <div className="header">
            <h5>
              {title}
            </h5>
          </div>
          <div className="savings_breakdown_interest">

            <div>
              <span>
                {planType}
              </span>
              <p>
                {`₦ ${amountSaved}`}
              </p>
            </div>
            <div>
              <span>
                    Contribution
              </span>
              <p>
                {`₦ ${amountAccrued}`}
              </p>
            </div>
            <div>
              <span>
                    Interest
              </span>
              <p>
                {`₦ ${totalInterestEarned}`}
              </p>
            </div>
          </div>
          <div className="savings_interest_progress">
            <div className="savings_progresss_text">
              <div>
                <span>
                    40% saved
                </span>
              </div>
              <div>
                <span>
                    Ontrack
                </span>
              </div>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: '70%' }} />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

UserOnTrackSavings.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  planType: PropTypes.string,
  amountSaved: PropTypes.any,
  amountAccrued: PropTypes.any,
  totalInterestEarned: PropTypes.any
};

export default UserOnTrackSavings;
