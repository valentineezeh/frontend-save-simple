import React from 'react';
import PropTypes from 'prop-types';

const UserNotOnTrackSavings = (props) => {
  const {
    title,
    planType
  } = props;
  return (
    <div className="savings_plan_for_interest_options notontrack">
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
            ₦ 120,000.00
          </p>
        </div>
        <div>
          <span>
            Contribution
          </span>
          <p>
            ₦ 50,000.00
          </p>
        </div>
        <div>
          <span>
            Interest
          </span>
          <p>
            ₦ 4,512.07
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
    </div>
  );
};

UserNotOnTrackSavings.propTypes = {
  title: PropTypes.string,
  planType: PropTypes.string
};

export default UserNotOnTrackSavings;
