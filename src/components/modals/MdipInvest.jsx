/* eslint-disable indent */
import React, { Component } from 'react';

/**
 * @class ReapInvestModal
 */
class MdipInvestModal extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const mdipInvestModal = (
      <div className="modal fade" id="mdip_settings">
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
                Nice Choice, Invest Now
                </h6>
                <p>
                Please kindly give us the following information to get started
                </p>
              </div>
              <div className="input_div">
                <input type="text" name="" id="" placeholder="How much are you investing in pounds?" />
              </div>
              <div className="input_div">
                <input type="text" placeholder="How Long ?" />
                <span className="reap_minimum">
                  <br />
                                MINIMUM OF 6 MONTHS DURATION
                </span>
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
                    ₦ 265,500.00
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
                    10%
                  </h4>
                </div>

              </div>

              <div className="btn_full_width green_btn">
                <button type="button">
                    Invest
                </button>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
    return (
      <>
        {mdipInvestModal}
      </>
    );
  }
}

export default MdipInvestModal;
