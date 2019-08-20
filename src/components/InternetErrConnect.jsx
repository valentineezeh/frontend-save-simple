import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import internetError from '../template/utils/images/internetError.gif';

/**
 *  @Class InternetErrConnectPage
 */
export default class InternetErrConnectPage extends Component {
  /**
 *
 * @returns {*} - render
 */
  render() {
    const connectionErrorPage = (
      <div>

        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-offset-6 mx-auto pt-5">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <h1> No Internet Connection Found. </h1>
                  </div>
                </div>

                <div className="row justify-content-around py-5">
                  <Link to="/" className="btn btn-outline-success"> Go Back Home </Link>
                </div>

                <div className="row">
                  <div className="col err_image rounded shadow-lg p-0">
                    <img src={internetError} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
    return <div>{connectionErrorPage}</div>;
  }
}
