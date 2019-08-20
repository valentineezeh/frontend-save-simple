import React, { Component } from 'react';

/**
 * @class FixTipInvestModal
 */
class MTLIPInvestModal extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div>
        <div className="modal fade" id="mlt_settings">
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
                <div className="mlt_auction_text">
                  <div className="mlt_auction_text_div">
                    <p>
                        Aution
                    </p>
                  </div>
                </div>

                <div className="please_select">
                  <p>
        Please select your prefered Aution
                  </p>
                </div>
                <div className="aution_options">
                  <div className="primary_aution">
                    <a
                      href="/invest-mltlip-primary-auction"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="aution_img" />
                      <div className="aution_desc">
                        <h5>
                Primary Auction
                        </h5>
                        <p>
            Full investment plan description, The Company currently operates
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="secondary_option">
                    <a href="/invest-mltlip-secondary-auction"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="aution_img" />
                      <div className="aution_desc">
                        <h5>
                        Secondary Auction
                        </h5>
                        <p>
                    Full investment plan description, The Company currently operates
                        </p>

                      </div>
                    </a>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MTLIPInvestModal;
