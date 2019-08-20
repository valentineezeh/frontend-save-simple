/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import postTreatGroupNotification from '../../actions/notification.actions/treatGroupNotification';
import SelectCardId from './SelectCardId';

/**
 * @class GroupSavingNotification
 */
class GroupSavingNotification extends Component {
  state = {
    isAccepted: false,
    targetSavingsId: '',
    groupTargetSavingsInvitationId: '',

  }


  onClickAcceptRequest = () => {
    const {
      targetSavingsId,
      groupTargetSavingsInvitationId,
    } = this.props;
    Cookies.remove('mutual-Modal');
    this.setState({
      isAccepted: true,
      targetSavingsId,
      groupTargetSavingsInvitationId
    });
  }

  onClickDenyRequest = () => {
    const {
      targetSavingsId,
      groupTargetSavingsInvitationId,
      PostTreatGroupNotification,
    } = this.props;
    const inviteDetails = {
      isAccepted: false,
      targetSavingsId,
      groupTargetSavingsInvitationId
    };
    PostTreatGroupNotification(inviteDetails);
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const {
      description,
      title,
      participants,
      targetAmount,
      savingsInterval,
      planType,
    } = this.props;
    
    const {
      isAccepted,
      targetSavingsId,
      groupTargetSavingsInvitationId,
    } = this.state;
    const inviteDetails = {
      isAccepted,
      targetSavingsId,
      groupTargetSavingsInvitationId
    };
    return (
      <>
        <div className="modal fade" id="ftip_settings">
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
                      data-toggle="modal" data-target="#select_card"
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
        <SelectCardId
          inviteDetails={inviteDetails}
          planType={planType}
          />
      </>
    );
  }
}

GroupSavingNotification.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  savingsInterval: PropTypes.number,
  participants: PropTypes.any,
  targetAmount: PropTypes.number,
  targetSavingsId: PropTypes.number,
  groupTargetSavingsInvitationId: PropTypes.number,
  PostTreatGroupNotification: PropTypes.func,
  groupInvitationDetail: PropTypes.shape({}),
  planType: PropTypes.string,
};

export default connect(null, {
  PostTreatGroupNotification: postTreatGroupNotification
})(GroupSavingNotification);
