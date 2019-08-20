/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import Loader from 'react-loader-spinner';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import TextField from '../commons/TextFields';
import validateInput from '../../middlewares/mutualFundInputValidation';
import buyMoneyMarketMutualFund,
{ deleteBuyMoneyMarketFundError } from '../../actions/mutualFunds.actions/moneyMarketMutualFund';
import getCustomerAccounts from '../../actions/setupBankDetails.actions/getCustomerAcct';
import {
  FixedTargetSavingFundingSource,
} from '../../helper/index';
import SelectCardId from './SelectCardId';
import { ErrorAlertNotification } from '../commons/index';

/**
 * @class MutualEquityFundModal
 */
class MutualEquityFundModal extends Component {
    state = {
      minValue: 0,
      maxValue: 20,
      step: 1,
      duration: '',
      amount: '',
      errors: {},
      mutualFundType: 20,
      fundingSource: '',
      accountId: '',
      cardId: '',
      modalTarget: '',
      dismissModal: '',
      existingCardPayload: {}
    }

    /**
   *
   * @returns {*} - state
   */
  componentDidMount = () => {
    const { GetCustomerAccounts } = this.props;
    GetCustomerAccounts();
  }


  onRangeChange = () => {
    const input = document.getElementById('typeinp');
    const currentValue = input.value;
    this.setState({ duration: currentValue });
  }

  /**
  *
  *@param {*} event
  *@returns {*} - state
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
    const { DeleteBuyMoneyMarketFundError } = this.props;
    DeleteBuyMoneyMarketFundError();
  }

 /**
  *
  *@param {*} event
  *@returns {*} - state
  */
 onSubmit = (event) => {
   event.preventDefault();
   const { BuyMoneyMarketMutualFund } = this.props;
   const token = Cookies.get('jwtToken');
   const decodeToken = jwt.decode(token);
   const { customerId } = decodeToken;
   const {
     fundingSource,
     accountId,
     mutualFundType,
     amount,
   } = this.state;
   const payload = {
     fundingSource,
     accountId,
     mutualFundType,
     amount,
     customerId
   };
   //  Mutual Fund PayLoad for existing crads
   const existingCardPayload = {
     fundingSource,
     mutualFundType: Number(mutualFundType),
     amount: Number(amount),
     customerId: Number(customerId),
     accountId: Number(accountId),
   };
   const walletPayload = {
     fundingSource,
     mutualFundType,
     amount,
     customerId
   };
   if (this.isValid()) {
     if (fundingSource === '1') {
       Cookies.set('actionType', 'mutualFund');
       Cookies.set('payload', payload);
       window.location.href = '/add-card';
     }
     if (fundingSource === '2') {
       this.setState({
         modalTarget: 'mutualFund',
         existingCardPayload,
       });
       Cookies.remove('payload');
     }
     if (fundingSource === '5') {
       this.setState({ errors: {} });
       BuyMoneyMarketMutualFund(walletPayload);
     }
   }
 }

 isValid = () => {
   const { errors, isValid } = validateInput(
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
   const {
     minValue,
     maxValue,
     step,
     duration,
     amount,
     errors,
     fundingSource,
     accountId,
     modalTarget,
     existingCardPayload
   } = this.state;

   console.log(this.state);

   const { customerAccounts, error } = this.props;
   const userAccountDetails = isEmpty(customerAccounts) ? [] : [
     ...customerAccounts.customerAccounts,
     {
       id: 0, bankName: 'Select a designated acoount', bankCode: '000'
     },
   ];

   userAccountDetails.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));

   const { isLoading } = this.props;
   const mutualEquityFundModal = (
     <div className="modal fade" id="mmef_settings">
       <div className="modal-dialog modal-dialog-centered">
         <div className="modal-content">
           <div className="modal-header">
             <button type="button" className="close" data-dismiss="modal">
               {' '}
               <span> Close </span>
               {' '}
&times;
             </button>
           </div>
           <div className="modal-body">
             <div className="ftip_range_settings_header">
               <h6>
              Nice Choice, Buy Now
               </h6>
               <p>
              Please kindly give us the following information to get started
               </p>
             </div>
             {!isEmpty(error) && (
             <ErrorAlertNotification
               errors={error}
               onClick={this.handleDelete}
             />
             )}
             <div className="input_div">
               <TextField
                 error={errors.amount}
                 type="text"
                 field="amount"
                 id=""
                 value={amount || ''}
                 onChange={this.onChange}
                 placeholder="How much do u want to buy?"
                 label="Amount"
               />
             </div>
             <div className="input_div">
               {
                    errors.fundingSource ? (
                      <div className="row">
                        <div className="col-md-6">
                          <span id="input_labels" style={{ color: '#dc3545' }}>Funding Source</span>
                        </div>
                        <div className="col-md-6">
                          <span id="input_labels_required">
                          *
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="row">
                        <div className="col-md-6">
                          <span id="input_labels">Funding Source</span>
                        </div>
                        <div className="col-md-6">
                          <span id="input_labels_required">
                          *
                          </span>
                        </div>
                      </div>
                    )
                  }
               <select
                 name="fundingSource"
                 onChange={this.onChange}
                 value={fundingSource}
                 id="savingFrequencyOption"
               >
                 {
                        FixedTargetSavingFundingSource.map(freq => (
                          <option key={freq.id} value={freq.id}>
                            {freq.action}
                          </option>
                        ))
                        }
               </select>
               {errors.fundingSource && (
               <p className="text-danger">
                 <i className="fas fa-exclamation-triangle" />
                        &nbsp;
                 {errors.fundingSource}

               </p>
               )}
             </div>
             <div className="input_div">
               {
                 isEmpty(customerAccounts) ? (
                   <Loader />
                 ) : isEmpty(customerAccounts.customerAccounts)
                   ? (
                     <p style={{ color: 'red' }}>
You are yet to set up your bank details &nbsp;
                       <a href="/verify-bank-details">
                   Click Here
                       </a>
                       {' '}
to setup.
                     </p>
                   ) : fundingSource === '5' ? '' : (
                     (
                       <>
                         <div className="row">
                           <div className="col-md-6">
                             <span id="input_labels">Destination Account</span>
                           </div>
                           <div className="col-md-6">
                             <span id="input_labels_required">
                      *
                             </span>
                           </div>
                         </div>
                         <>
                           <select
                             name="accountId"
                             onChange={this.onChange}
                             value={accountId}
                             id="savingFrequencyOption"
                           >
                             {
                      userAccountDetails.map(bank => (
                        <option key={bank.id} value={bank.id}>
                          {bank.bankName}
                        </option>
                      ))
                      }
                           </select>
                           {errors.accountId && (
                           <p className="text-danger">
                             <i className="fas fa-exclamation-triangle" />
                          &nbsp;
                             {errors.accountId}
                           </p>
                           )
                     }
                         </>
                       </>
                     )
                   )
               }

             </div>
             <div className="filter_part">
               <p>
              How Long?
               </p>
               <div className="slidecontainer">
                 <input
                   type="range"
                   min={minValue}
                   max={maxValue}
                   defaultValue={minValue}
                   name="second"
                   step={step}
                   onChange={this.onChange.bind(this, 'second')}
                   className="slider"
                   id="typeinp"
                 />
                 <p
                   id=""
                   style={{
                     color: '#B2B7BC',
                     fontWeight: 'bold',
                     fontFamily: 'sans',
                     paddingTop: '20px'
                   }}
                 >
                   {`${duration} Months`}
                 </p>
               </div>
             </div>

             <div className="exp_payoff">
               <div>
                 <p>
                  Expected Payoff
                 </p>
                 <h4 style={{
                   fontFamily: 'sans-serif', fontWeight: 'bold'
                 }}
                 >
                  ₦ 000,000.00
                 </h4>
               </div>
               <div>
                 <p>
                  Interest Rate
                 </p>
                 <h4
                   style={{
                     fontFamily: 'sans-serif', fontWeight: 'bold'
                   }}
                 >
                  0%
                 </h4>
               </div>

             </div>

             <div className="btn_full_width green_btn">
               {
                 isLoading ? (
                   <button
                     type="button"
                     onClick={this.onSubmit}
                   >
                     <i className="fa fa-spinner fa-spin" />
                     {'  '}
                   Invest
                   </button>
                 ) : (
                   <button
                     type="button"
                     onClick={this.onSubmit}
                     data-toggle="modal"
                     data-target="#select_card"
                     data-dismiss={fundingSource === '2' ? 'modal' : ''}
                   >
                   Invest
                   </button>
                 )
               }
             </div>


           </div>
         </div>
       </div>
     </div>
   );
   return (
     <>
       {mutualEquityFundModal}
       {
         fundingSource === '2' ? (
           <SelectCardId
             MutualModal={modalTarget}
             existingCardPayload={existingCardPayload}
           />
         ) : ''
       }
     </>
   );
 }
}

MutualEquityFundModal.propTypes = {
  BuyMoneyMarketMutualFund: PropTypes.func,
  isLoading: PropTypes.bool,
  GetCustomerAccounts: PropTypes.func,
  customerAccounts: PropTypes.any,
  DeleteBuyMoneyMarketFundError: PropTypes.func,
  error: PropTypes.any,
};

const mapStateToProps = state => ({
  isLoading: state.mutualFundMoneyMarket.loading,
  customerAccounts: state.getCustomerAccounts.customerAcct,
  error: state.mutualFundMoneyMarket.error
});

export default connect(mapStateToProps, {
  BuyMoneyMarketMutualFund: buyMoneyMarketMutualFund,
  GetCustomerAccounts: getCustomerAccounts,
  DeleteBuyMoneyMarketFundError: deleteBuyMoneyMarketFundError
})(MutualEquityFundModal);
