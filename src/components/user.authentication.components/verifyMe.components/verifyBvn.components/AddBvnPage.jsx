import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import isEmpty from 'is-empty';
import UserDashBoardSideNavigation from
  '../../../dashboard.components/userDashBoard.components/UserDashBoardSideNavigation';
import UserDashBoardTopNavigation from
  '../../../dashboard.components/userDashBoard.components/UserDashBoardTopNavigation';
import addBvnDetailsRequest from '../../../../actions/verifyMe.actions/addBvnDetails.action';

/**
 * @class AddBvnForm
 */
export class AddBvnForm extends Component {
    state = {
      isLoading: false
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
    // eslint-disable-next-line camelcase
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

/**
   *
   * @returns {*} - render
   */
render() {
  const { isLoading } = this.state;
  const { success } = this.props;

  if (success) {
    return <Redirect to="/user-dashboard" />;
  }
  const addBvnForm = (
    <div>
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
    </div>
  );
  return (
    <div>
      <UserDashBoardSideNavigation />
      <div id="content">
        <UserDashBoardTopNavigation />
        {addBvnForm}
      </div>
    </div>
  );
}
}

AddBvnForm.propTypes = {
  bvn: PropTypes.string,
  date_of_birth: PropTypes.string,
  AddBvnDetailsRequest: PropTypes.func,
  success: PropTypes.bool
};

const mapStateToProps = state => ({
  date_of_birth: isEmpty(state.verifyBvn.verifyBvn) ? '' : state.verifyBvn.verifyBvn.data.data_of_birth,
  bvn: isEmpty(state.verifyBvn.verifyBvn) ? '' : state.verifyBvn.verifyBvn.data.bvn,
  success: state.addBvn.success
});

const mapDispatchToProps = dispatch => ({
  AddBvnDetailsRequest: addBvnDetails => dispatch(addBvnDetailsRequest(addBvnDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBvnForm);
