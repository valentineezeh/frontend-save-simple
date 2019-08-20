/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from './commons/TextFields';
import UserDashBoardSideNavigation from
  './dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  './dashboard.components/userDashBoard.components/UserDashBoardTopNavigation';
import verifyKycValidateInput from '../middlewares/validateKycInput';
import ErrorAlertNotification from './commons/ErrorAlertNotification';
import SavingFooterBar from './dashboard.components/savingDashboard.components/SavingFooterBar';
import kycRequest, { deleteKycError } from
  '../actions/kyc.actions/kyc.action';
import { uploadPhoto } from '../actions/kyc.actions/productImage.action';

/**
 * @class KycForm
 */

export class KycForm extends Component {
    state = {
      nationality: '',
      stateOfOrigin: '',
      localGovernmentArea: '',
      gender: '',
      maritalStatus: '',
      mothersMaidenName: '',
      residentialAddress: '',
      contactAddress: '',
      phoneNumberOfNextOfKin: '',
      electronicTaxClearanceCertificate: '',
      signatureURL: '',
      nextOfKin: '',
      countryOfResidence: '',
      employmentStatus: '',
      emailOfNextOfKin: '',
      addressOfNextOfKin: '',
      meansOfIdentification: '',
      meansOfIdentificationURL: '',
      isLoading: false,
      Image: '',
      errors: {},
      customerId: this.props.user.customerId
    }

    /**
     *
     * @param {*} event
     * @returns {*} - state
     */
    onChange = (event) => {
      const { errors } = this.state;
      if (errors[event.target.name]) {
        const newErrors = Object.assign({}, errors);
        delete newErrors[event.target.name];
        this.setState({
          [event.target.name]: event.target.value,
          errors: newErrors
        });
      } else {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    };

    handleChange = (val) => {
      this.setState({ value: val });
    }

    /**
     *
     * @returns {*} - state
     */
    handleDelete = () => {
      const { DeleteErrorMessage } = this.props;
      DeleteErrorMessage();
      this.setState({ isLoading: false });
    }

    /**
    *
    *@param {*} event
    *@returns {*} - state
    */
    onSubmit = (event) => {
      event.preventDefault();
      const { KycRequest } = this.props;
      this.setState({
        isLoading: true
      });

      if (this.isValid()) {
        this.setState({ errors: {} });
        KycRequest(this.state).then(() => (
          this.setState({
            isLoading: false
          })
        )).catch(() => {
          this.setState({
            isLoading: false
          });
        });
      }
    }

    isValid = () => {
      const { errors, isValid } = verifyKycValidateInput(
        this.state
      );
      if (!isValid) {
        this.setState({ errors });
      }
      return isValid;
    }

    fileSelectChange = (e) => {
      const image = e.target.files[0];
      e.preventDefault();
      this.setState({
        [e.target.name]: image
      });
    }

    /**
   *
   * @returns {*} - render
   */
    render() {
      const {
        isLoading, nationality, stateOfOrigin, localGovernmentArea, gender, maritalStatus,
        mothersMaidenName, residentialAddress, contactAddress, phoneNumberOfNextOfKin, electronicTaxClearanceCertificate, nextOfKin, countryOfResidence,
        employmentStatus, emailOfNextOfKin, addressOfNextOfKin, meansOfIdentification, errors
      } = this.state;
      const { error, success } = this.props;
      const employmentStatusArray = [
        'Select One', 'employed', 'unemployed'
      ];
      const genderArray = ['Select One', 'Male', 'Female'];
      const MarriedArray = ['Select status', 'Married', 'Single', 'Divorced'];
      const meansOfIdentificationArray = ['Select One', 'International Passport', 'Drivers License', 'PVC', 'National ID'];
      if (success) {
        return <Redirect to="/user-dashboard" />;
      }

      const kycForm = (
        <section>
          <div className="container">

            <div className="row py-4">
              <div className="col-sm-12 text-center">
                <h4 style={{ margin: '0px' }}>
                                What is KYC?
                </h4>
                <p style={{ margin: '0px' }}>
                  <small>
                                    This KYC will enable you unlock special features on Meristem now
                                    and in the future.
                  </small>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-11 col-offset-1 mx-auto shadow-lg mb-5 mt-3 p-5 rounded">


                <div className="row">
                  <div className="col-sm-12">
                    <form action="" encType="multipart/form-data">
                      {!isEmpty(error) && (
                      <ErrorAlertNotification
                        errors={error}
                        onClick={this.handleDelete}
                      />
                      )}
                      <div className="row">

                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor="nationality">Nationality</label>
                            <TextField
                              type="text"
                              className="form-control"
                              error={errors.nationality}
                              onChange={this.onChange}
                              placeholder=""
                              field="nationality"
                              value={nationality}
                              required
                            />
                          </div>

                        </div>
                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor="State Of Origin">State Of Origin</label>
                            <TextField
                              type="text"
                              className="form-control"
                              placeholder=""
                              error={errors.stateOfOrigin}
                              onChange={this.onChange}
                              field="stateOfOrigin"
                              value={stateOfOrigin}
                              required
                            />
                          </div>

                        </div>

                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor="">Local Government Area</label>
                            <TextField
                              type="text"
                              className="form-control"
                              error={errors.localGovernmentArea}
                              placeholder=""
                              onChange={this.onChange}
                              field="localGovernmentArea"
                              value={localGovernmentArea}
                              required
                            />
                          </div>

                        </div>

                      </div>

                      <div className="row">


                        <div className="col-sm-4">

                          <div className="form-group">
Gender
                            <select className="form-control" id="sel1"
                              type="text"
                              error={errors.gender}
                              onChange={this.onChange}
                              placeholder=""
                              name="gender"
                              value={gender}
                              required
                            >
                              {
                              genderArray.map(gender => (
                                <option value={gender}>
                                  {gender}
                                </option>
                              ))
                            }
                            </select>

                          </div>

                        </div>
                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor="title">Marital Status</label>
                            <select className="form-control" id="sel1"
                              onChange={this.onChange}
                              error={errors.maritalStatus}
                              name="maritalStatus"
                              value={maritalStatus}
                              placeholder=""
                              required
                            >
                              {
                              MarriedArray.map(maritalStatus => (
                                <option value={maritalStatus}>
                                  {maritalStatus}
                                </option>
                              ))
                            }
                            </select>

                          </div>

                        </div>

                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor="Mothers'maiden name"> Mother's Maiden Name</label>
                            <TextField
                              type="text"
                              className="form-control"
                              placeholder=""
                              onChange={this.onChange}
                              required
                              field="mothersMaidenName"
                              value={mothersMaidenName}
                              error={errors.mothersMaidenName}
                            />
                          </div>

                        </div>
                      </div>

                      <div className="row">

                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor="Residential Address">Residential Address</label>
                            <TextField
                              type="text"
                              className="form-control"
                              onChange={this.onChange}
                              placeholder=""
                              field="residentialAddress"
                              value={residentialAddress}
                              error={errors.residentialAddress}
                              required
                            />
                          </div>

                        </div>
                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor="Contact Address"> Contact Address </label>
                            <TextField
                              type="text"
                              className="form-control"
                              placeholder=""
                              onChange={this.onChange}
                              field="contactAddress"
                              value={contactAddress}
                              error={errors.contactAddress}
                              required
                            />
                          </div>

                        </div>

                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor="">Country</label>
                            <TextField type="text" className="form-control"
                              onChange={this.onChange}
                              field="countryOfResidence"
                              value={countryOfResidence}
                              error={errors.countryOfResidence}
                              placeholder="" required
                            />
                          </div>

                        </div>
                      </div>


                      <div className="row">

                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor="">Next Of Kin</label>
                            <TextField type="text" className="form-control" placeholder="" required
                              onChange={this.onChange}
                              field="nextOfKin"
                              value={nextOfKin}
                              error={errors.nextOfKin}
                            />
                          </div>

                        </div>

                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor=""> Next of Kin Phone Number</label>
                            <TextField type="text" className="form-control" placeholder=""
                              onChange={this.onChange}
                              field="phoneNumberOfNextOfKin"
                              value={phoneNumberOfNextOfKin}
                              error={errors.phoneNumberOfNextOfKin}
                              required
                            />
                          </div>

                        </div>
                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor=""> Next of Kin Address </label>
                            <TextField type="text" className="form-control" placeholder="" required
                              onChange={this.onChange}
                              field="addressOfNextOfKin"
                              value={addressOfNextOfKin}
                              error={errors.addressOfNextOfKin}
                            />
                          </div>

                        </div>
                      </div>


                      <div className="row">
                        <div className="col-sm-4">
                          <div className="form-group">
                            <label htmlFor=""> Next of Kin Email </label>
                            <TextField type="text" className="form-control" placeholder=""
                              onChange={this.onChange}
                              field="emailOfNextOfKin"
                              value={emailOfNextOfKin}
                              error={errors.emailOfNextOfKin}
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <label htmlFor="">Electronic Tax Clearance Certificate</label>
                            <TextField type="text" className="form-control" placeholder=""
                              onChange={this.onChange}
                              field="electronicTaxClearanceCertificate"
                              value={electronicTaxClearanceCertificate}
                              error={errors.electronicTaxClearanceCertificate}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">

                          <div className="form-group">
                            <label htmlFor="title">Employment Status</label>
                            <select className="form-control" id="sel1"
                              placeholder="" required
                              onChange={this.onChange}
                              name="employmentStatus"
                              value={employmentStatus}
                              error={errors.employmentStatus}
                            >
                              {
                              employmentStatusArray.map(employmentStatus => (
                                <option value={employmentStatus}>
                                  {employmentStatus}
                                </option>
                              ))
                            }

                            </select>

                          </div>

                        </div>
                      </div>


                      <div className="row">

                        <div className="col-sm-6">

                          <div className="form-group">
                            <label htmlFor="">Means Of Identification</label>
                            <select className="form-control" id="sel1" placeholder="" required
                              onChange={this.onChange}
                              name="meansOfIdentification"
                              value={meansOfIdentification}
                              error={errors.meansOfIdentification}
                            >
                              {
                              meansOfIdentificationArray.map(meansOfIdentificationentification => (
                                <option value={meansOfIdentificationentification}>
                                  {meansOfIdentificationentification}
                                </option>
                              ))
                            }

                            </select>
                          </div>

                        </div>
                        <div className="col-sm-6">

                          <div className="input-group mb-3">
                            <label htmlFor="">Identification Documents</label>
                            <TextField type="file" className="form-control" placeholder="" required
                              onChange={this.fileSelectChange}
                              name="meansOfIdentificationURL"
                              // value={meansOfIdentificationURL || ''}
                              error={errors.meansOfIdentificationURL}
                              field="meansOfIdentificationURL"
                            />
                            {
										isLoading
										  ? <div style={{ color: 'white' }}>Uploading...</div>
										  : null
									}
                            <div className="input-group-append">
                              <button className="btn btn-success" type="submit">Save</button>
                            </div>
                          </div>

                        </div>

                      </div>


                      <div className="row">

                        <div className="col-sm-6">

                          <div className="input-group mb-3">
                            <label htmlFor=""> Regular Signature </label>
                            <TextField type="file" className="form-control" placeholder="" required
                              onChange={this.fileSelectChange}
                              name="signatureURL"
                              // value={signatureURL || ''}
                              error={errors.signatureURL}
                              field="signatureURL"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-success" type="submit">Save</button>
                            </div>

                          </div>
                        </div>
                      </div>

                      {
                    isLoading ? (
                      <div className="col-sm-6 col-offset-6 mx-auto">
                        <button
                          style={{ marginTop: '10px' }}
                          type="submit" className="form-control btn btn-success"

                        >
                          <i className="fa fa-spinner fa-spin" />
                          {' '}
                        Save Changes
                          {' '}

                        </button>
                      </div>
                    )
                      : (
                        <div className="col-sm-6 col-offset-6 mx-auto">
                          <button
                            style={{ marginTop: '10px' }}
                            type="submit" className="form-control btn btn-success"
                            onClick={this.onSubmit}
                          >
                            {' '}
                            Save Changes
                            {' '}

                          </button>
                        </div>
                      )
                  }
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SavingFooterBar />
        </section>
      );
      return (
        <div>

          <UserDashBoardSideNavigation />

          <div id="content">
            <UserDashBoardTopNavigation />
            {
                        kycForm
                    }
          </div>
        </div>
      );
    }
}
KycForm.propTypes = {
  error: PropTypes.string,
  success: PropTypes.bool,
  KycRequest: PropTypes.func,
  DeleteErrorMessage: PropTypes.func,
};

const mapStateToProps = state => ({
  success: state.kyc.success,
  error: state.kyc.error,
  productImage: state.uploadImage,
  user: state.signupReducer.user
});

const mapDispatchToProps = dispatch => ({
  KycRequest: kycDetails => dispatch(kycRequest(kycDetails)),
  DeleteErrorMessage: () => dispatch(deleteKycError()),
  UploadPhoto: file => dispatch(uploadPhoto(file))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KycForm);
