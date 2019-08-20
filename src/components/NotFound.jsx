/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import notFound from '../template/utils/icons/notfound.jpeg';

/**
 *  @Class InvestPage
 */
export class NotFoundPage extends Component {
  /**
         *
         * @returns {*} - render
         */
  render() {
    const notfoundpage = (
      <div>

        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-offset-6 mx-auto pt-5">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <h1> Oooops! something went wrong </h1>
                  </div>
                </div>

                <div className="row justify-content-around py-5">
                  <Link to="/" className="btn btn-outline-success"> Go Back Home </Link>
                </div>

                <div className="row">
                  <div className="col err_image rounded shadow-lg p-0">
                    <img src={notFound} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
    return <div>{notfoundpage}</div>;
  }
}

export default NotFoundPage;
