/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    onClick,
    className,
    children,
    style
  } = props;
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className={className}
        style={style}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.shape({})
};

export default Button;
