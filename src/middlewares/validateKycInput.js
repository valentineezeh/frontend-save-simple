import isEmpty from 'is-empty';
import validator from 'validator';

const kycValidateInput = (data) => {
  const errors = {};
  const emailOfNextOfKin = data.emailOfNextOfKin.trim().toLowerCase();


  if (data.nationality === '' || !data.nationality || data.nationality.trim().length === 0) {
    errors.nationality = 'This field is required.';
  }
  if (data.stateOfOrigin === '' || !data.stateOfOrigin || data.stateOfOrigin.trim().length === 0) {
    errors.stateOfOrigin = 'This field is required.';
  }
  if (data.localGovernmentArea === '' || !data.localGovernmentArea || data.localGovernmentArea.trim().length === 0) {
    errors.localGovernmentArea = 'This field is required.';
  }
  if (data.gender === '' || !data.gender || data.gender.trim().length === 0) {
    errors.gender = 'This field is required.';
  }
  if (data.maritalStatus === '' || !data.maritalStatus || data.maritalStatus.trim().length === 0) {
    errors.maritalStatus = 'This field is required.';
  }
  if (data.mothersMaidenName === '' || !data.mothersMaidenName || data.mothersMaidenName.trim().length === 0) {
    errors.mothersMaidenName = 'This field is required.';
  }
  if (data.residentialAddress === '' || !data.residentialAddress || data.residentialAddress.trim().length === 0) {
    errors.residentialAddress = 'This field is required.';
  }
  if (data.contactAddress === '' || !data.contactAddress || data.contactAddress.trim().length === 0) {
    errors.contactAddress = 'This field is required.';
  }
  if (data.electronicTaxClearanceCertificate === '' || !data.electronicTaxClearanceCertificate || data.electronicTaxClearanceCertificate.trim().length === 0) {
    errors.electronicTaxClearanceCertificate = 'This field is required.';
  }
  if (data.nextOfKin === '' || !data.nextOfKin || data.nextOfKin.trim().length === 0) {
    errors.nextOfKin = 'This field is required.';
  }
  if (data.countryOfResidence === '' || !data.countryOfResidence || data.countryOfResidence.trim().length === 0) {
    errors.countryOfResidence = 'This field is required.';
  }
  if (data.employmentStatus === '' || !data.employmentStatus || data.employmentStatus.trim().length === 0) {
    errors.employmentStatus = 'This field is required.';
  }
  if (data.addressOfNextOfKin === '' || !data.addressOfNextOfKin || data.addressOfNextOfKin.trim().length === 0) {
    errors.addressOfNextOfKin = 'This field is required.';
  }
  if (data.meansOfIdentification === '' || !data.meansOfIdentification || data.meansOfIdentification.trim().length === 0) {
    errors.meansOfIdentification = 'This field is required.';
  }
  if (emailOfNextOfKin === '' || !emailOfNextOfKin || emailOfNextOfKin.trim().length === 0) {
    errors.emailOfNextOfKin = 'This field is required.';
  }
  if (emailOfNextOfKin && !validator.isEmail(emailOfNextOfKin)) {
    errors.emailOfNextOfKin = 'Invalid Email Input.';
  }
  if (data.phoneNumberOfNextOfKin === '' || !data.phoneNumberOfNextOfKin || data.phoneNumberOfNextOfKin.trim().length === 0) {
    errors.phoneNumberOfNextOfKin = 'This field is required.';
  }
  if (data.phoneNumberOfNextOfKin.trim().length > 0 && data.phoneNumberOfNextOfKin.trim().length !== 11 && data.phoneNumberOfNextOfKin !== Number) {
    errors.phoneNumberOfNextOfKin = 'Phone number should be 11 digits';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default kycValidateInput;
