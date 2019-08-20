import React, { Component } from 'react';

/**
 * @class EtfModal
 */
class EtfModal extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const etfModal = (
      <div className="modal fade" id="etfs_settings">
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
              <div className="first_step">
                <div className="ques_info">
                  <p>
                    Please kindly answer the Question information to get started
                  </p>
                </div>
                <div className="have_stock_acc">
                  <p>
                  Do you have a stock broking Account ?
                  </p>
                </div>

                <div className="have_stock_acc_answer">

                  <div className="ans_no">
                    <button type="button">
                            No I Dont
                    </button>
                  </div>
                  <div className="ans_yes">
                    <button type="button" id="yes_i_do">
                            Yes I Do
                    </button>
                  </div>

                </div>

              </div>

              <div className="second_step">

                <div className="stock_broker">
                  <p>
                                Which of the stock broker do you have
                  </p>
                </div>

                <div className="stock_option">

                  <div>

                    <label className="filter_radio_select">
Meristem Stock Broker
                      <input type="radio" name="interest" value="5" checked />
                      <span className="checkmark" />
                    </label>

                  </div>

                  <div>

                    <label className="filter_radio_select">
                      {' '}
Other houses
                      <input type="radio" name="interest" value="5" />
                      <span className="checkmark" />
                    </label>

                  </div>

                </div>

                <div className="next_bttn">

                  <div>

                    <button type="button">
                     NEXT
                    </button>

                  </div>

                </div>

              </div>


            </div>

          </div>
        </div>
      </div>
    );
    return (
      <div>{etfModal}</div>
    );
  }
}

export default EtfModal;
