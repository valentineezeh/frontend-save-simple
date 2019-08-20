import React from 'react';
import PropTypes from 'prop-types';

const SavingHeader = (props) => {
  const {
    active1,
    active2,
    active3,
    active4,
    active5,
    active6,
  } = props;
  return (
    <div className="step_number">
      <div className={`step_number_one ${active1}`}>
            1
      </div>
      <div className={`step_number_two ${active2}`}>
            2
      </div>
      <div className={`step_number_three ${active3}`}>
            3
      </div>
      <div className={`step_number_four ${active4}`}>
            4
      </div>
      <div className={`step_number_five ${active5}`}>
            5
      </div>
      <div className={`step_number_six ${active6}`}>
            6
      </div>
    </div>
  );
};

SavingHeader.propTypes = {
  active1: PropTypes.string,
  active2: PropTypes.string,
  active3: PropTypes.string,
  active4: PropTypes.string,
  active5: PropTypes.string,
  active6: PropTypes.string,
};

export default SavingHeader;
