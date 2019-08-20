/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import {
  TextField,
  Button
} from '../../../commons/index';
import UserDashBoardSideNavigation from
  '../../../dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../../dashboard.components/userDashBoard.components/UserDashBoardTopNavigation';
import verifyBvnValidateInput from '../../../../middlewares/validateBvnInput';
import ErrorAlertNotification from '../../../commons/ErrorAlertNotification';
import verifyBvnRequest, { deleteVerifyBvnError } from
  '../../../../actions/verifyMe.actions/verifyBvn.action';
import addBvnDetailsRequest from '../../../../actions/verifyMe.actions/addBvnDetails.action';

/**
 * @class BvnVerificationForm
 */
export class BvnVerificationForm extends Component {
   state = {
     bvn: '',
     isLoading: false,
     errors: {}
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

  /**
   *
   * @param {*} event
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
   const { VerifyBvnRequest } = this.props;
   const { bvn } = this.state;
   if (this.isValid()) {
     VerifyBvnRequest(bvn);
     this.setState({ errors: {}, isLoading: true });
   }
 }

 /**
  *
  *@param {*} event
  *@returns {*} - state
  */
onAddBvnDetails = (event) => {
  event.preventDefault();
  const {
    AddBvnDetailsRequest,
    bvn,
    date_of_birth
  } = this.props;
  const customerId = Cookie.get('jwtToken');
  const decodeCustomerId = jwt.decode(customerId);
  const addBvnDetails = {
    bvn,
    date_of_birth,
    customerId: decodeCustomerId.customerId
  };
  AddBvnDetailsRequest(addBvnDetails);
}

 isValid = () => {
   const { errors, isValid } = verifyBvnValidateInput(
     this.state
   );
   if (!isValid) {
     this.setState({ errors });
   }
   return isValid;
 }


 /**
   *
   * @returns {*} - render
   */
 render() {
   const { isLoading, bvn, errors } = this.state;
   const { error, success } = this.props;

   //  if (success) {
   //    return <Redirect to="/add-bvn-details" />;
   //  }

   const bvnVerificationForm = (
     !success ? (
       <div>
         <div className="col-md-5 offset-md-9 mx-auto">
           <div>
             <header>
               <div className="d-flex pt-3 pb-4">
                 <div className="col text-center reset_title">
                   <h6 style={{ color: '#1c6345' }}>Verify User!  </h6>
                 </div>
               </div>

             </header>

             <section>

               <div className="d-flex">
                 <div className="col shadow-lg  px-3 pt-2 pb-5 resetBox"
                   style={{ width: '500%' }}
                 >

                   <form style={{ marginTop: '80px' }}>
                     <div className="form-group col-md-12 my-2">
                       {!isEmpty(error) && (
                       <ErrorAlertNotification
                         errors={error}
                         onClick={this.handleDelete}
                       />
                       )}
                       <p
                         id="emailHelp"
                         className="form-text text-muted text-center pb-2"
                       >
                         <strong style={{
                           color: '#1c6345',
                           fontWeight: 'bold'
                         }}
                         >
                           Verify Your BVN!
                         </strong>
                         <br />
                        Enter Your BVN to be able to make transaction.
                       </p>
                       <TextField
                         id="bvnLenght"
                         error={errors.bvn}
                         onChange={this.onChange}
                         type="text"
                         field="bvn"
                         value={bvn}
                         placeholder="Enter Your BVN"
                         className="form-control col-md-12 border-1 shadow recovBtn"
                       />
                     </div>
                     <div className="btn_full_width green_btn py-4">
                       {
                          isLoading ? (
                            <Button
                              onClick={this.onSubmit}
                              type="submit"
                            >
                              <i className="fa fa-spinner fa-spin" />
                              {'  '}
                                Verify My BVN
                            </Button>
                          ) : (
                            <Button
                              onClick={this.onSubmit}
                              type="submit"
                            >
                              Verify My BVN
                            </Button>
                          )
                        }
                     </div>
                   </form>
                 </div>
               </div>
             </section>
           </div>
         </div>
       </div>
     ) : (
       <>
         <div className="col-md-4 offset-md-9 mx-auto">
           <div>
             <header>
               <div className="d-flex pt-3 pb-4">
                 <div className="col text-center reset_title">
                   <h6 style={{ color: '#1c6345' }}>Add BVN!  </h6>
                 </div>
               </div>

             </header>

             <section className="body_space">

               <div className="d-flex">
                 <div className="col shadow-lg  px-3 pt-2 pb-5 resetBox"
                   style={{ width: '500%' }}
                 >

                   <form style={{ marginTop: '80px' }}>
                     <div className="form-group col-md-12 my-2">
                       <medium
                         id="emailHelp"
                         className="form-text text-muted text-center pb-2"
                       >
                         <strong style={{ color: '#1c6345' }}>Add Your BVN! </strong>
                         <br />
                         Click Continue to able to add your BVN.
                       </medium>
                     </div>
                     {
                     isLoading ? (
                       <div>
                         <button
                           style={{ marginTop: '10px' }}
                           type="submit" className="btn btn-success shadow px-5 recovBtn"
                         >
                           <i className="fa fa-spinner fa-spin" />
                           {' '}
                            Continue
                           {' '}

                         </button>
                       </div>
                     )
                       : (
                         <div className="text-center">
                           <button
                             style={{ marginTop: '10px' }}
                             type="submit" className="btn btn-success shadow px-5 recovBtn"
                             onClick={this.onAddBvnDetails}
                           >
                             {' '}
                              Continue
                             {' '}

                           </button>
                         </div>
                       )
                   }
                   </form>
                 </div>
               </div>
             </section>
           </div>
         </div>
       </>
     )
   );
   return (
     <div>

       <UserDashBoardSideNavigation />

       <div id="content">
         <UserDashBoardTopNavigation />
         {bvnVerificationForm}
       </div>
     </div>
   );
 }
}

BvnVerificationForm.propTypes = {
  error: PropTypes.string,
  success: PropTypes.bool,
  VerifyBvnRequest: PropTypes.func,
  DeleteErrorMessage: PropTypes.func,
};

const mapStateToProps = state => ({
  success: state.verifyBvn.success,
  error: state.verifyBvn.error,
  bvn: isEmpty(state.verifyBvn.verifyBvn) ? '' : state.verifyBvn.verifyBvn.data.bvn,
  date_of_birth: isEmpty(state.verifyBvn.verifyBvn) ? '' : state.verifyBvn.verifyBvn.data.data_of_birth,
});

const mapDispatchToProps = dispatch => ({
  VerifyBvnRequest: bvnDetails => dispatch(verifyBvnRequest(bvnDetails)),
  DeleteErrorMessage: () => dispatch(deleteVerifyBvnError()),
  AddBvnDetailsRequest: addBvnDetails => dispatch(addBvnDetailsRequest(addBvnDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BvnVerificationForm);
