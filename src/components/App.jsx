/* eslint-disable max-len */
import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Route, Switch, Router } from 'react-router-dom';
import LoginForm from './user.authentication.components/auth.components/Login/LoginPage';
import SignUpForm from './user.authentication.components/auth.components/SignUp/SignUpForm';
import NotFoundPage from './NotFound';
import UserDashBoardContentPage from './dashboard.components/userDashBoard.components/UserDashBoardContentPage';
import
SendPasswordLinkPage from
  './user.authentication.components/recover.password.components/SendPasswordLinkPage';
import ChangePasswordForm from
  './user.authentication.components/forget.password.components/ChangePasswordPage';
import LandingPage from './LandingPage';
import InvestPage from './unauthenticated.components/InvestPage';
import LearnPage from './unauthenticated.components/LearnPage';
import SavePage from './unauthenticated.components/SavePage';
import SavingPage from './dashboard.components/savingDashboard.components/SavingPage';
import UserRegistrationOTPForm from
  './user.authentication.components/otp.authentication.components/UserRegistrationOTP';
import PrivateRoute from '../utils/privateRoute';
import BvnVerificationForm from
  './user.authentication.components/verifyMe.components/verifyBvn.components/BvnVerificationPage';
import AddBvnForm from
  './user.authentication.components/verifyMe.components/verifyBvn.components/AddBvnPage';
import VerifyBankDetailsForm from
  './user.authentication.components/bank.setup.components/VerifyBankDetailsPage';
import KycForm from './Kyc';
import AboutPage from './unauthenticated.components/AboutPage';
import ContactUsPage from './unauthenticated.components/ContactUs';
import GoalPage from './unauthenticated.components/GoalPage';
import InternetErrConnectPage from './InternetErrConnect';
import ProfilePage from './userProfile/ProfilePage';
import CompleteRegistrationSuccess from './user.authentication.components/auth.components/CompleteRegistration';
import AddCardDetails from
  './user.authentication.components/card.setup.components/AddCardDetails';
import AddCardOtp from
  './user.authentication.components/card.setup.components/AddCardOtp';
import TransactionHistory from './user.authentication.components/transaction.components/TransactionHistory';
import SavingPlans from './dashboard.components/savingDashboard.components/SavingPlans';
import TargetSavingPlans from './dashboard.components/savingDashboard.components/targetSavings.component/TargetSavingPlans';
import PersonalTargetMainPage from './dashboard.components/savingDashboard.components/targetSavings.component/personalTargetSavings/PersonalTargetSavings';
import GroupTargetSavings from './dashboard.components/savingDashboard.components/targetSavings.component/groupTargetSavings/GroupTargetSavings';
import FixedTargetSavings from './dashboard.components/savingDashboard.components/targetSavings.component/fixedTargetSavings/FixedTargetSavings';
import TargetSavingSuccessPage from './dashboard.components/savingDashboard.components/targetSavings.component/SuccessPage';
import EthicalSavings from './dashboard.components/savingDashboard.components/targetSavings.component/EthicalSavings';
import {
  InvestStartPage,
  MeepPage,
  ReapPage,
  MdipPage,
  FixTipPage,
  MTLIPPage,
  MtlipPrimaryAuction,
  MtlipSecondaryAuction,
  TBillsPPage,
  TbillsPrimaryAuction,
  TbillsSecondaryAuction
} from './dashboard.components/investmentDashboard/index';
import {
  MutualFundSavingPlans,
  MutualMarketFunds,
  MutualEquityFunds,
  ExchangeTrade,
  MutualDeptDetails
} from './dashboard.components/mutualFunds.components/index';
import MutualFundOption from './dashboard.components/mutualFunds.components/MutualFundOption';
import AllUserNotification from './user.authentication.components/user.notification.components/AllUserNotification';
import UserSingleSavingDetails from './dashboard.components/savingDashboard.components/UserSingleSavingDetails';
import Questionaire from './user.authentication.components/quetionaire.components/Quetionaire';
import GroupContributingSchemeSavings from './dashboard.components/savingDashboard.components/GroupContributingScheme';
import ETFPage from './dashboard.components/mutualFunds.components/ETF';
import StockBrokingAccount from './dashboard.components/mutualFunds.components/StockBrokingAcct';

/**
 * @class App
 */
class App extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const history = createBrowserHistory();
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/add-bvn-details" component={PrivateRoute(AddBvnForm)} />
            <Route exact path="/user-dashboard" component={PrivateRoute(UserDashBoardContentPage)} />
            <Route exact path="/reset-password" component={SendPasswordLinkPage} />
            <Route exact path="/change-password" component={ChangePasswordForm} />
            <Route exact path="/invest" component={InvestPage} />
            <Route exact path="/learn" component={LearnPage} />
            <Route exact path="/save" component={SavePage} />
            <Route exact path="/savings" component={SavingPage} />
            <Route exact path="/verify-bvn" component={PrivateRoute(BvnVerificationForm)} />
            <Route exact path="/verify-otp" component={UserRegistrationOTPForm} />
            <Route exact path="/verify-bank-details" component={PrivateRoute(VerifyBankDetailsForm)} />
            <Route exact path="/know-your-customer" component={KycForm} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactUsPage} />
            <Route exact path="/goals" component={GoalPage} />
            <Route exact path="/error" component={InternetErrConnectPage} />
            <Route exact path="/user-profile" component={PrivateRoute(ProfilePage)} />
            <Route exact path="/register-success" component={CompleteRegistrationSuccess} />
            <Route exact path="/add-card" component={PrivateRoute(AddCardDetails)} />
            <Route exact path="/add-card-otp" component={PrivateRoute(AddCardOtp)} />
            <Route exact path="/transaction-history" component={PrivateRoute(TransactionHistory)} />
            <Route exact path="/savings-plan" component={PrivateRoute(SavingPlans)} />
            <Route exact path="/target-saving-plans" component={PrivateRoute(TargetSavingPlans)} />
            <Route exact path="/personal-target-saving" component={PrivateRoute(PersonalTargetMainPage)} />
            <Route exact path="/group-target-saving" component={PrivateRoute(GroupTargetSavings)} />
            <Route exact path="/fixed-target-saving" component={PrivateRoute(FixedTargetSavings)} />
            <Route exact path="/ethical-saving" component={PrivateRoute(EthicalSavings)} />
            <Route exact path="/saving-details" component={PrivateRoute(UserSingleSavingDetails)} />
            <Route exact path="/target-saving-success" component={PrivateRoute(TargetSavingSuccessPage)} />
            <Route exact path="/invest-plans" component={PrivateRoute(InvestStartPage)} />
            <Route exact path="/invest-meep" component={PrivateRoute(MeepPage)} />
            <Route exact path="/invest-reap" component={PrivateRoute(ReapPage)} />
            <Route exact path="/invest-mdip" component={PrivateRoute(MdipPage)} />
            <Route exact path="/invest-fix-tip" component={PrivateRoute(FixTipPage)} />
            <Route exact path="/invest-mltlip" component={PrivateRoute(MTLIPPage)} />
            <Route exact path="/invest-mltlip-primary-auction" component={PrivateRoute(MtlipPrimaryAuction)} />
            <Route exact path="/invest-mltlip-secondary-auction" component={PrivateRoute(MtlipSecondaryAuction)} />
            <Route exact path="/invest-tbills" component={PrivateRoute(TBillsPPage)} />
            <Route exact path="/invest-tbills-primary-auction" component={PrivateRoute(TbillsPrimaryAuction)} />
            <Route exact path="/invest-tbills-secondary-auction" component={PrivateRoute(TbillsSecondaryAuction)} />
            <Route exact path="/mutual-fund" component={PrivateRoute(MutualFundOption)} />
            <Route exact path="/mutual-fund-service-plans" component={PrivateRoute(MutualFundSavingPlans)} />
            <Route exact path="/mutual-market-fund" component={PrivateRoute(MutualMarketFunds)} />
            <Route exact path="/mutual-equity-fund" component={PrivateRoute(MutualEquityFunds)} />
            <Route exact path="/exchange-trade" component={PrivateRoute(ExchangeTrade)} />
            <Route exact path="/mutual-dept-details" component={PrivateRoute(MutualDeptDetails)} />
            <Route exact path="/user-notification" component={PrivateRoute(AllUserNotification)} />
            <Route exact path="/questionaire" component={PrivateRoute(Questionaire)} />
            <Route exact path="/group-contributory-scheme" component={PrivateRoute(GroupContributingSchemeSavings)} />
            <Route exact path="/etf" component={PrivateRoute(ETFPage)} />
            <Route exact path="/stock" component={PrivateRoute(StockBrokingAccount)} />
            <Route exact path="/user-profile" component={ProfilePage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
