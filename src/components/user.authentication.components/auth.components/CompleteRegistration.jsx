import React from 'react';
import { Link } from 'react-router-dom';
import successIcon from '../../../template/utils/icons/Vector.png';

const CompleteRegistrationSuccess = () => (
  <div>
    <div className="create_account_topNav">
      <div>
        <p id="callId">
        Call (
          {' '}
          <span id="phoneId"> +234 813 2685 000 </span>
          {' '}
)
          {' '}
          <small> or </small>
          {' '}
          <span id="phoneId"> Email us </span>
        </p>
      </div>

    </div>
    <div className="create_account_main_wrapper">
      <div className="success_msg_main_container">
        <div className="verify_sign">
          <div className="verify_image">
            <img src={successIcon} alt="" />
          </div>
        </div>
        <div className="acc_success_msg">

          <h1>
       Your Account has been Created
          </h1>
          <p id="callId">
    Congratulations your registration process is now
            {' '}
            <br />
            {' '}
    complete click the button below.
          </p>
        </div>
        <div className="setUp_card_btn">

          <div className="btn_full_width green_btn">
            <Link to="/user-dashboard">
              <button id="" type="button">
              Go to Dashboard
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default CompleteRegistrationSuccess;
