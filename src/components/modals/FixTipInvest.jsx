/* eslint-disable no-lonely-if */
/* eslint-disable indent */
import React, { Component } from 'react';

/**
 * @class FixTipInvestModal
 */
class FixTipInvestModal extends Component {
    state = {
        minValue: 0,
        maxValue: 20,
        step: 1,
        duration: '',
    }


  onChange = () => {
      const input = document.getElementById('typeinp');
      const currentValue = input.value;
      this.setState({ duration: currentValue });
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
          duration
        } = this.state;
    const fixTipInvestModal = (
      <div className="modal fade" id="fixtip_settings">
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
                <input type="text" name="" id="" placeholder="How much do u want to invest?" />
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
        {fixTipInvestModal}
      </>
    );
  }
}

export default FixTipInvestModal;
