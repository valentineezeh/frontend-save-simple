import React from 'react';
import PropTypes from 'prop-types';

/**
 * Error alert notification
 * @param {*} props - Response object
 * @returns {*} props.errors - with props.errors
 */
const InfoAlertNotification = (props) => {
  const { message } = props;
  return (
    message ? (
      <div className="complete_notification">
        <p>
          {message}
        </p>
      </div>
    ) : (
      <div className="complete_notification2">
        <p>
      Welcome! How will you like to grow your wealth today?
        </p>
      </div>
    )
  );
};

InfoAlertNotification.propTypes = {
  message: PropTypes.string,
};

export default InfoAlertNotification;
