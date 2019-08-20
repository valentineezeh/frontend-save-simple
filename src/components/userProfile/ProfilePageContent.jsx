import React, { Component } from 'react';
import UserDashBoardTopNavigation from
  '../dashboard.components/userDashBoard.components/UserDashBoardTopNavigation';
import exclamationMark from '../../template/utils/icons/exclamation-mark.png';
import userIcon from '../../template/utils/icons/users.png';
import FooterBar from '../FooterBar';

/**
 * @class ProfilePageContent
 */
export default class ProfilePageContent extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const profilePageContent = (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <ul className="nav nav-tabs profile_tab_link" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#Manage_Profile">
                      {' '}
                      <small> Manage Profile </small>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#Personal_Info">
                      {' '}
                      <small> Personal Information</small>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#Contact_Details">
                      {' '}
                      <small> Contact Details</small>
                      {' '}
                    </a>
                  </li>
                </ul>

              </div>
            </div>
            <div className="row">
              <div className="col py-5">
                <div className="tab-content">
                  <div id="Manage_Profile" className="tab-pane active">
                    <div className="row">
                      <div className="col-sm-6 col-offset-6 mx-auto">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-sm-12 d-flex justify-content-center mb-3">
                              <div>
                                <img src={userIcon} alt="" />
                              </div>
                            </div>
                            <div className="col-sm-12 text-center user_profile_info">
                              <small>
                                <p> adminMeristem@meristem.ng </p>
                                <p> Last Login: 25th - April - 2019, 10:15:01 am </p>
                              </small>
                            </div>

                          </div>
                          <div className="row p-5 my-4 shadow-lg profile_undone_stages">
                            <ul className="nav nav-tabs profile_undone_ul" role="tablist">
                              <li className="nav-item profile_undone_li">
                                <a className="nav-link" data-toggle="tab" href="#menu1">
                                  <div className="col-sm-12 d-flex p-3 my-3 profile_stage_divs">
                                    <div className="error_n_ok_icon mr-3">
                                      <img src={exclamationMark} alt="#" />
                                    </div>
                                    <div className="profile_stage_name pt-1">
                                      <h6>
                              Set Up Card Details
                                      </h6>
                                    </div>
                                  </div>
                                </a>
                              </li>

                              <li className="nav-item profile_undone_li">

                                <a className="nav-link" data-toggle="tab" href="#Personal_Info">

                                  <div className="col-sm-12 d-flex p-3 my-3 profile_stage_divs">

                                    <div className="error_n_ok_icon mr-3">
                                      <img src={exclamationMark} alt="" />
                                    </div>

                                    <div className="profile_stage_name pt-1">
                                      <h6>
                                Personal Information
                                      </h6>
                                    </div>

                                  </div>

                                </a>

                              </li>

                              <li className="nav-item profile_undone_li">

                                <a className="nav-link" data-toggle="tab" href="#Contact_Details">

                                  <div className="col-sm-12 d-flex p-3 my-3 profile_stage_divs">

                                    <div className="error_n_ok_icon mr-3">
                                      <img src={exclamationMark} alt="#" />
                                    </div>

                                    <div className="profile_stage_name pt-1">
                                      <h6>
                                  Contact Details
                                      </h6>
                                    </div>

                                  </div>

                                </a>

                              </li>

                              <li className="nav-item profile_undone_li">

                                <a className="nav-link" data-toggle="tab" href="#menu1">

                                  <div className="col-sm-12 d-flex p-3 my-3 profile_stage_divs">

                                    <div className="error_n_ok_icon mr-3">
                                      <img src={exclamationMark} alt="" />
                                    </div>

                                    <div className="profile_stage_name pt-1">
                                      <h6>
                                    Link BVN
                                      </h6>
                                    </div>

                                  </div>

                                </a>

                              </li>

                              <li className="nav-item profile_undone_li">

                                <a className="nav-link" data-toggle="tab" href="#menu1">

                                  <div className="col-sm-12 d-flex p-3 my-3 profile_stage_divs">

                                    <div className="error_n_ok_icon mr-3">
                                      <img src={exclamationMark} alt="" />
                                    </div>

                                    <div className="profile_stage_name pt-1">
                                      <h6>
                                      Link BVN
                                      </h6>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div id="Personal_Info" className="tab-pane fade">

                    <div className="row">
                      <div className="col-sm-6 col-offset-6 mx-auto">

                        <div className="container-fluid">

                          <div className="row">
                            <div className="col-sm-12 text-center">
                              <h5>
                        Please fill in your personal Details
                              </h5>
                            </div>
                          </div>

                          <div className="row p-5 my-4 shadow-lg profile_details">

                            <form action="">

                              <div className="col-sm-12">

                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="title">Title</label>
                                      <select className="form-control" id="sel2">
                                        <option>Mr</option>
                                        <option>Mrs</option>
                                        <option>Miss</option>
                                      </select>
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="Mar_stat">Marital Status</label>
                                      <input type="text" className="form-control" id="mStatus" placeholder="" name="mStatus" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="fname">First Name</label>
                                      <input type="text" className="form-control" id="fname" placeholder="" name="fname" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="fname">Other Names</label>
                                      <input type="text" className="form-control" id="othernames" placeholder="" name="othernames" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="fname">Mother's maiden name</label>
                                      <input type="text" className="form-control" id="mother" placeholder="" name="mother" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="fname">BVN</label>
                                      <input type="text" className="form-control" id="bvn" placeholder="" name="bvn" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="title">Employement status</label>
                                      <select className="form-control" id="sel1">
                                        <option>Employed</option>
                                        <option>Self Employed</option>
                                        <option>Student</option>
                                        <option>Youth Corper</option>
                                        <option>Others</option>
                                        <option>Unemployed</option>
                                      </select>
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">

                                    <div className="form-group">
                                      <label htmlFor="fname">Sex</label>
                                      <input type="text" className="form-control" id="sex" placeholder="" name="sex" />
                                    </div>

                                  </div>
                                  <div className="col-sm-6">

                                    <div className="form-group">
                                      <label htmlFor="fname">Nationality</label>
                                      <input type="text" className="form-control" id="nation" placeholder="" name="nation" value="Nigeria" disabled />
                                    </div>

                                  </div>
                                </div>


                                <div className="row">
                                  <div className="col-sm-6">

                                    <div className="form-group">
                                      <label htmlFor="fname">State of origin</label>
                                      <input type="text" className="form-control" id="state" placeholder="" name="state" />
                                    </div>

                                  </div>
                                  <div className="col-sm-6">

                                    <div className="form-group">
                                      <label htmlFor="fname">LGA</label>
                                      <input type="text" className="form-control" id="LGA" placeholder="" name="lga" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">

                                    <div className="form-group">
                                      <label htmlFor="fname">Town Of birth</label>
                                      <input type="text" className="form-control" id="TOB" placeholder="" name="TOB" />
                                    </div>

                                  </div>
                                  <div className="col-sm-6">

                                    <div className="form-group">
                                      <label htmlFor="fname">Date Of birth</label>
                                      <input type="date" className="form-control" id="DOB" placeholder="" name="DOB" />
                                    </div>

                                  </div>
                                </div>


                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="fname">Meristem Pin</label>
                                      <input type="password" className="form-control" id="pin" placeholder="" name="pin" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row py-3">
                                  <div className="col-sm-12">
                                    <input type="submit" className="form-control btn btn-success" id="save2" value="Save Changes" name="email" />
                                  </div>
                                </div>
                              </div>

                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="Contact_Details" className="tab-pane fade">

                    <div className="row">
                      <div className="col-sm-6 col-offset-6 mx-auto">

                        <div className="container-fluid">

                          <div className="row">
                            <div className="col-sm-12 text-center">
                              <h5>
                              Please fill in your contact details
                              </h5>

                              <small>
                                <p>
                                This way we can easily reach you
                                </p>
                              </small>

                            </div>
                          </div>

                          <div className="row p-5 my-4 shadow-lg profile_details">

                            <form action="">

                              <div className="col-sm-12">

                                <div className="row">
                                  <div className="col-sm-3">

                                    <div className="form-group">
                                      <label htmlFor="Mar_stat">House No</label>
                                      <input type="text" className="form-control" id="houseNo" placeholder="" name="houseNo" />
                                    </div>

                                  </div>
                                  <div className="col-sm-9">

                                    <div className="form-group">
                                      <label htmlFor="Mar_stat">Street Name</label>
                                      <input type="text" className="form-control" id="street" placeholder="" name="street" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="comment">Please enter your full address</label>
                                      <textarea className="form-control" rows="3" id="address" name="address" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="Mar_stat">What's the nearest bus stop/landmark to you</label>
                                      <input type="text" className="form-control" id="bustop" placeholder="" name="bustop" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">

                                    <div className="form-group">
                                      <label htmlFor="Mar_stat">Country</label>
                                      <input type="text" className="form-control" id="country" placeholder="" name="country" />
                                    </div>

                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">

                                    <div className="form-group">
                                      <label htmlFor="title">State</label>
                                      <select className="form-control" id="sel3">
                                        <option value="" selected>Select your state</option>
                                        <option>Employed</option>
                                        <option>Self Employed</option>
                                        <option>Student</option>
                                        <option>Youth Corper</option>
                                        <option>Others</option>
                                        <option>Unemployed</option>
                                      </select>
                                    </div>

                                  </div>
                                  <div className="col-sm-6">

                                    <div className="form-group">
                                      <label htmlFor="title">City/Town</label>
                                      <select className="form-control" id="sel4">
                                        <option value="" selected>Select your city</option>
                                        <option>Employed</option>
                                        <option>Self Employed</option>
                                        <option>Student</option>
                                        <option>Youth Corper</option>
                                        <option>Others</option>
                                        <option>Unemployed</option>
                                      </select>
                                    </div>

                                  </div>

                                </div>
                                <div className="row py-3">
                                  <div className="col-sm-12">

                                    <input type="submit" className="form-control btn btn-success" id="save" value="Save Changes" name="email" />

                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    return (
      <div id="content">
        <UserDashBoardTopNavigation />
        {profilePageContent}
        <FooterBar />
      </div>
    );
  }
}
