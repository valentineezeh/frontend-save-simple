/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextField = ({
  field,
  value,
  error,
  type,
  onChange,
  onBlur,
  id,
  placeholder,
  style,
  className,
  label,
  disabled
}) => (
  <div className={classnames({ 'text-danger': error })}>
    {
      label ? (
        <label className="row">
          <div className="col-md-6">
            <b>{label}</b>
          </div>
          <div className="col-md-6">
            <span id="input_labels_required">
            *
            </span>
          </div>

        </label>
      ) : ''
    }
    <input
      style={style}
      type={type}
      name={field}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      id={id}
      className={className}
      disabled={disabled}
    />
    {error && (
      <>
        <p className="text-danger">
          <i className="fas fa-exclamation-triangle" />
          &nbsp;
          {error}
        </p>
      </>
    )}
  </div>
);

TextField.propTypes = {
  field: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TextField;
