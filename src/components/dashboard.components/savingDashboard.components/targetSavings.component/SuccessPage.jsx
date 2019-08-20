import React from 'react';
import DashboardMobileNav from '../../../navigation.components/DashboardMobileNav';
import UserDashBoardSideNavigation from
  '../../userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../userDashBoard.components/UserDashBoardTopNavigation';
import VectorIcon from '../../../../template/utils/icons/Vector.png';


const TargetSavingSuccessPage = (props) => {
  // const { children } = props;
  const targetSavingSuccessPage = (
    <section className="body_space">
      <div className="target_savings_form_main_wrapper">
        <div className="savings_form_div">
          <div className="gp_sav_review">
            <div className="savings_form_inst">
              <h5 id="newSuccessDetails">
              Success!
              </h5>
              <br />
              <div>
                <img src={VectorIcon} alt="" />
              </div>
              <p>
         I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.
              </p>
            </div>
            <div className="btn_full_width green_btn " id="">
              <button type="button">
         Go back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <div className="personal_sav">
      <DashboardMobileNav />
      <UserDashBoardSideNavigation />
      <div className="main_body_wrapper">
        <UserDashBoardTopNavigation />
        {targetSavingSuccessPage}
      </div>
    </div>
  );
};

export default TargetSavingSuccessPage;
