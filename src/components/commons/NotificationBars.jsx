/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import GroupSavingNotification from '../modals/GroupSavingNotification';
import fetchGroupInvitation from '../../actions/notification.actions/getGroupInvitation';
import fetchGroupContributeInvitation from
  '../../actions/notification.actions/getGroupContributoryInvite';
import GroupContributoryNotifiction from '../modals/GroupContributoryNotification';

/**
 * @class NotificationBars
 */
class NotificationBars extends Component {
    state = {
      classStyle: '',
      modalId: '',
      groupConId: '',
      actionType: false,
      planTypeGroupScheme: '',
      planTypeGroupTarget: '',
    }


    /**
   *@param {*} planType
   @param {*} planId
   * @returns {*} - render
   */
    onActive = (planType, planId) => {
      if (planType === 'GROUP_TARGET_SAVINGS') {
        const { FetchGroupInvitation } = this.props;
        FetchGroupInvitation(planId, planType);
        this.setState({
          modalId: '#ftip_settings',
          classStyle: 'notification_div active_notification',
          actionType: true,
          planTypeGroupTarget: planType
        });
      }
      if (planType === 'GROUP_CONTRIBUTORY_SCHEME' || planType === 'GRIUP_CONTRIBUTORY_SCHEME') {
        const { FetchGroupContributeInvitation } = this.props;
        FetchGroupContributeInvitation(planId, planType);
        this.setState({
          groupConId: '#ftop_settings',
          classStyle: 'notification_div active_notification',
          actionType: false,
          planTypeGroupScheme: planType,
        });
      }
    }

    /**
   *@param {*} planType
   * @returns {*} - render
   */
    onBlur = (planType) => {
      if (planType === 'GROUP_TARGET_SAVINGS') {
        this.setState({
          classStyle: '',
        });
      }
      if (planType === 'GROUP_CONTRIBUTORY_SCHEME' || planType === 'GRIUP_CONTRIBUTORY_SCHEME') {
        this.setState({
          classStyle: '',
        });
      }
    }


    /**
   *
   * @returns {*} - render
   */
    render() {
      const {
        title,
        description,
        id,
        planType,
        planId,
        groupInvitationDetail,
        groupContributoryInvites,
      } = this.props;
      const {
        classStyle,
        modalId,
        groupConId,
        actionType,
        planTypeGroupTarget,
        planTypeGroupScheme
      } = this.state;
      return (
        <>
          <Link
            onClick={this.onActive.bind(this, planType, planId)}
            onBlur={this.onBlur.bind(this, planType)}
            style={{ textDecoration: 'none' }}
            to="#"
          >
            <div
              className={classStyle || 'notification_div'}
              data-toggle="modal" data-target={actionType ? modalId : groupConId}
            >
              <div className="notification_dot" />
              <div className="notification_details">
                <span>
                  <b>
                    {title}
                  </b>
                </span>
                <p id={id}>
                  {description}
                </p>
              </div>

            </div>

          </Link>
          {
            actionType ? (
              <GroupSavingNotification
                description={groupInvitationDetail.description}
                title={groupInvitationDetail.title}
                participants={groupInvitationDetail.description}
                targetAmount={groupInvitationDetail.targetAmount}
                savingsInterval={groupInvitationDetail.savingsInterval}
                targetSavingsId={groupInvitationDetail.targetSavingsId}
                groupTargetSavingsInvitationId={groupInvitationDetail.invitationId}
                planType={planTypeGroupTarget}
              />
            ) : (
              <GroupContributoryNotifiction
                description={groupContributoryInvites.description}
                title={groupContributoryInvites.schemeName}
                participants={groupContributoryInvites.numberOfParticipant}
                targetAmount={groupContributoryInvites.amount}
                savingsInterval={groupContributoryInvites.contributionInterval}
                targetSavingsId={groupContributoryInvites.schemeId}
                groupTargetSavingsInvitationId={groupContributoryInvites.invitationId}
                planType={planTypeGroupScheme}
              />
            )
          }
        </>
      );
    }
}

NotificationBars.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  planType: PropTypes.string,
  planId: PropTypes.number,
  FetchGroupInvitation: PropTypes.func,
  groupInvitationDetail: PropTypes.shape({}),
  FetchGroupContributeInvitation: PropTypes.func,
  groupContributoryInvites: PropTypes.any
};

const mapStateToProps = state => ({
  groupInvitationDetail: state.userGroupInvitations.groupInvitation,
  groupContributoryInvites: isEmpty(state.groupContributoryInvitations.groupContributoryInvitation) ? '' : state.groupContributoryInvitations.groupContributoryInvitation.groupContributorySchemeData
});

export default connect(mapStateToProps, {
  FetchGroupInvitation: fetchGroupInvitation,
  FetchGroupContributeInvitation: fetchGroupContributeInvitation
})(NotificationBars);
