import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * @class SavingFooterBar
 */
class SavingFooterBar extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div>
        <footer style={{ marginTop: '50px' }}>
          <div className="d-flex footer p-4 shadow">
            <div className="custom_container">
              <div className="d-flex">
                <div className="col pl-0">
                  <p className="text-muted" style={{ textAlign: 'left' }}>
            2019 &copy; Meristream
                  </p>
                </div>
                <div className="col pr-0">
                  <p className="text-muted social_icon" style={{ textAlign: 'right' }}>
            follow us &nbsp;
                    <Link to="#">
                      {' '}
                      <i className="fab fa-facebook-f" />
                      {' '}
                    </Link>
                    <Link to="#">
                      {' '}
                      <i className="fab fa-twitter" />
                      {' '}
                    </Link>
                    <Link to="#">
                      {' '}
                      <i className="fab fa-google-plus-g" />
                      {' '}
                    </Link>
                  </p>

                </div>
              </div>

            </div>


          </div>

        </footer>
      </div>
    );
  }
}

export default SavingFooterBar;
