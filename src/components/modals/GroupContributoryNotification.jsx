/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectCardIdGroupScheme from './SelectCardIdGroupScheme.jsx';
import postTreatGroupSchemeNotification from
  '../../actions/notification.actions/treatGroupSchemeNotification';

/**
 * @class GroupContributoryVotifiction
 */
class GroupContributoryNotifiction extends Component {
    state = {
      isAccepted: false,
      groupContributorySchemeInvitationId: '',
    }


    onClickAcceptRequest = () => {
      const {
        groupTargetSavingsInvitationId,
      } = this.props;
      this.setState({
        isAccepted: true,
        groupContributorySchemeInvitationId: groupTargetSavingsInvitationId,
      });
    }

    onClickDenyRequest = () => {
      const {
        groupTargetSavingsInvitationId,
        PostTreatGroupSchemeNotification
      } = this.props;
      const inviteDetails = {
        isAccepted: false,
        groupTargetSavingsInvitationId
      };
      PostTreatGroupSchemeNotification(inviteDetails);
    }

    /**
   *
   * @returns {*} - render
   */
    render() {
      const {
        title,
        participants,
        targetAmount,
        savingsInterval,
        description,
        planType
      } = this.props;

      const {
        isAccepted,
        groupContributorySchemeInvitationId,
      } = this.state;

      const inviteDetails = {
        isAccepted,
        groupContributorySchemeInvitationId,
      };

      return (
        <>
          <div className="modal fade" id="ftop_settings">
            <div className="modal-dialog modal-lg modal-dialog-centered">
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
                  <div className="noti_header">
                    <p>
                          Group Name
                    </p>
                    <h4>
                      {title}
                    </h4>
                  </div>
                  <div className="noti_breakdown">
                    <div>
                      <p>
                              Perticipants
                      </p>
                      <h5>
                        {participants}
                      </h5>
                    </div>
                    <div>
                      <p>
                     Expected Amount
                      </p>
                      <h5>
                        {`₦ ${targetAmount}`}
                      </h5>
                    </div>
                    <div>
                      <p>
                      How Often are you saving
                      </p>
                      <h5>
                        {
                          savingsInterval === 30 ? ('Monthly') : ''
                      }
                        {
                          savingsInterval === 7 ? ('Weekly') : ''
                      }
                        {
                          savingsInterval === 1 ? ('Daily') : ''
                      }
                      </h5>
                    </div>
                  </div>
                  <div className="noti_full_desc">
                    <p>
                      {description}
                    </p>
                  </div>
                  <div className="btn_allow_deny">
                    <div className="deny">
                      <Link to="#"
                        onClick={this.onClickDenyRequest}
                      >
                          Deny
                      </Link>
                    </div>
                    <div className="allow">
                      <Link to="#"
                        data-toggle="modal" data-target="#select_card_group"
                        data-dismiss="modal"
                        onClick={this.onClickAcceptRequest}
                      >
                          Allow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SelectCardIdGroupScheme
            inviteDetails={inviteDetails}
            planType={planType}
          />
        </>
      );
    }
}

GroupContributoryNotifiction.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  savingsInterval: PropTypes.number,
  participants: PropTypes.number,
  targetAmount: PropTypes.number,
  groupTargetSavingsInvitationId: PropTypes.number,
  planType: PropTypes.string,
  groupInvitationDetail: PropTypes.shape({}),
  PostTreatGroupSchemeNotification: PropTypes.func
};

export default connect(null, {
  PostTreatGroupSchemeNotification: postTreatGroupSchemeNotification
})(GroupContributoryNotifiction);
