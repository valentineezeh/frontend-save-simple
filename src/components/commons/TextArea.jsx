/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextArea = ({
  field,
  value,
  error,
  type,
  onChange,
  onBlur,
  id,
  rows,
  cols,
  placeholder,
  style,
  className,
  label,
}) => (
  <div className={classnames({ 'text-danger': error })}>
    {
      error && label ? (
        <div className="row">
          <div className="col-md-6">
            <span
              id="input_labels"
              style={{ color: '#dc3545' }}
            >
              {label}
            </span>
          </div>
          <div className="col-md-6">
            <span id="input_labels_required">
                *
            </span>
          </div>
        </div>
      ) : (
        label ? (
          <label className="row">
            <div className="col-md-6">
              <span id="input_labels">{label}</span>
            </div>
            <div className="col-md-6">
              <span id="input_labels_required">
              *
              </span>
            </div>

          </label>
        ) : ''
      )
    }
    <textarea
      style={style}
      type={type}
      name={field}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      id={id}
      className={className}
    />
    {error && (
    <p className="text-danger">
      <i className="fas fa-exclamation-triangle" />
          &nbsp;
      {error}
    </p>
    )}
  </div>
);

TextArea.propTypes = {
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
  rows: PropTypes.string,
  cols: PropTypes.string
};

export default TextArea;
