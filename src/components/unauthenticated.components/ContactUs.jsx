import React, { Component } from 'react';
import Header from '../Header';
import WebFooterBar from '../WebFooterBar';

/**
 *  @Class ContactUsPage
 */
class ContactUsPage extends Component {


  /**
     *
     * @returns {*} - render
     */
  render() {
    const contactUsPage = (
      <div>
        <Header />
        <header>
          <div className="row investSectionForSave align-content-center justify-content-center m-0">
            <div className="col-sm-12 investHeaderText aboutHeader text-center">
              <h1>
                    Get in touch
              </h1>
              <p>
                    From a tiny garage to a multi-million dollar company,
                <br />
                {' '}
we innovated our way to the top.
              </p>
            </div>
          </div>
        </header>
        <section className="py-5">

          <div className="container py-5 contactSec">
            <div className="row">
              <div className="col-sm-7 shadow-lg p-5">

                <div className="row">
                  <div className="col-sm-12">
                    <h3>
                            Reach out to us
                    </h3>
                    <p>
                            Dont be shy, Just tell us about yourself and we’ll
                            figure out the best option for you and your project.
                            Dont like Filling up forms ? Mail us then info@mywealth.com
                    </p>
                  </div>
                </div>

                <form action="">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="" placeholder="Name" name="" required />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="" placeholder="Email" name="" required />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="" placeholder="Subject" name="" required />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea className="form-control" id="" rows="3" placeholder="Message" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <input type="submit" className="form-control btn btn-success" id="" value="Submit" name="" />
                    </div>
                  </div>
                </form>

              </div>
              <div className="col-sm-5 pt-4 pl-5 contactIcon">

                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-2 text-center p-0">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="col-sm-10">
                        <h6>
                                    Visit Us
                        </h6>
                        <p>
                                    124, Norman Williams Street, South-west Ikoyi, Lagos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-2 text-center p-0">
                        <i className="fas fa-mobile-alt" />
                      </div>
                      <div className="col-sm-10">
                        <h6>
                                        Call Us
                        </h6>
                        <p>
                                        +234-1-2717350-5
                          {' '}
                          <br />
                          {' '}
                                        +234-1-2717351-5
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-2 text-center p-0">
                        <i className="far fa-envelope" />
                      </div>
                      <div className="col-sm-10">
                        <h6>
                                            Email Us
                        </h6>
                        <p>
                                            info@mywealth.com
                          {' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>
        <section>
          <div className="container py-5">
            <div className="row py-5">
              <div className="col-sm-12 text-center">
                <h3>
                            FAQ’s
                </h3>
                <p>
                            Get prompt responses from a friendly, professional
                  {' '}
                  <br />
                  {' '}
and knowledgable support team.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 col-sm-offset-2 mx-auto">

                <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                  <div className="card no-shadow">
                    <div className="card-header no-shadow" role="tab" id="headingOne1">
                      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                        <h6 className="mb-0">
                        How Do I start Saving on My-Wealth?
                          {' '}
                          <i className="fas fa-angle-down float-right rotate-icon" />
                        </h6>
                      </a>
                    </div>
                    <div id="collapseOne1" className="collapse" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                      <div className="card-body no-shadow">
                        <p>
                        <strong>To start saving on My-Wealth: </strong>
                        <br />

                        1. Visit the website or Download the app to create an account.
                        <br />
                        2. Set your withdrawal account
                        Activate your account by making your first savings deposit. (Use a MasterCard, Visa or Verve from any bank in Nigeria).
                        <br />
                        3. Then set up your savings plan.
                        </p>
                      </div>
                    </div>

                  </div>
                  <hr />
                  <div className="card no-shadow">
                    <div className="card-header no-shadow" role="tab" id="headingTwo2">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                        aria-expanded="false" aria-controls="collapseTwo2"
                      >
                        <h6 className="mb-0">
                        How safe is My-Wealth ?
                          {' '}
                          <i className="fas fa-angle-down float-right rotate-icon " />
                        </h6>
                      </a>
                    </div>
                    <div id="collapseTwo2" className="collapse show" role="tabpanel" aria-labelledby="headingTwo2"
                      data-parent="#accordionEx"
                    >
                      <div className="card-body no-shadow">
                        <p>
                        All financial information is encrypted and stored to PCI DSS Level 1 compliant standards. PCI DSS Level 1 compliance is a set of rules stated by credit card companies and audited by an independent third party. 

                        It is the highest possible rating one can get in the electronic payment processing industry. Additionally, all transmission to our banking partner and on our site is via an encrypted 256-bit HTTPS SSL connection.
                        </p>
                      </div>
                    </div>

                  </div>
                  <hr />
                  <div className="card no-shadow">
                    <div className="card-header no-shadow" role="tab" id="headingThree3">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                        aria-expanded="false" aria-controls="collapseThree3"
                      >
                        <h6 className="mb-0">
                        Do you I have to login every time I want to invest or save?
                          {' '}
                          <i className="fas fa-angle-down float-right rotate-icon" />
                        </h6>
                      </a>
                    </div>
                    <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                      data-parent="#accordionEx"
                    >
                      <div className="card-body no-shadow">
                        <p>
                        No, everything is done automatically except you want to use the QuickSave option. All transactions on your debit card will be visible in your dashboard.


                        We will send an email receipt to you every single time you save with your debit card and your bank will also send you an alert. It's 100% secure.
                        </p>
                      </div>
                    </div>

                  </div>
                  <hr />
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="row">
            <div className="col-sm-12">
              <MapContainer />
            </div>
          </div>
        </section> */}
        <hr />
        <footer>
          <div className="row mt-5">
            <div className="col-sm-12">
              <div className="container-fluid py-5">
                <WebFooterBar />
              </div>
            </div>

          </div>
        </footer>
      </div>
    );
    return (
      <div>{contactUsPage}</div>
    );
  }
}

export default ContactUsPage;
