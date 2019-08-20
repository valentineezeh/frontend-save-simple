import React, { Component } from 'react';
import Header from '../Header';
import WebFooterBar from '../WebFooterBar';
import aboutUsImg from '../../template/utils/images/AboutUS.jpg';

/**
 *  @Class AboutPage
 */
class AboutPage extends Component {
  /**
       *
       * @returns {*} - render
       */
  render() {
    const aboutPage = (
      <div>
        <Header />
        <header>
          <div className="row investSectionForSave align-content-center justify-content-center m-0">
            <div className="col-sm-12 investHeaderText aboutHeader text-center">
              <h1>
                            About Us

              </h1>
              <p>
                            You deserve to know more
              </p>
            </div>
          </div>
        </header>
        <section className="py-5 aboutDesc">
          <div className="container py-5">
            <div className="row py-5">
              <div className="col-sm-7 aboutText">
                <h3>
                        About Us
                </h3>
                <p>
                We are a Capital Market Conglomerate regulated by the Securities and Exchange Commission (SEC) with up to date market information to grow wealth in good time, and in an atmosphere of transparency. We expertly offer Wealth Management Services, Stockbroking Services, Registrar Services, Trustees Services and Corporate Financing. Our professional advisory services are always based on carefully considered research and delivered with objective integrity from a crop of professionals that remain the best hands within the financial services industry.
                </p>
              </div>
              <div className="col-sm-5 aboutImages ">
                <img src={aboutUsImg} alt="" width="100%" height="100%" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">

          <div className="container py-5">
            <div className="row">
              <div className="col-sm-4 text-center uio p-5 rrr">
                <h1>
                18%
                </h1>
                <p>
                    Average returns in the last 10 years
                </p>
              </div>
              <div className="col-sm-4 rrr p-5 nj">
                <h1>
                01.
                </h1>
                <h6>MISSION</h6>
                <p>
                  {' '}
                  <small>
                  Bonding with our clients to understand and meet their needs through knowledge, information, dedication and creativity of our people while satisfying all stakeholders and the environment in which we operate.
                  </small>
                </p>
              </div>
              <div className="col-sm-4 p-5 rrr nj">
                <h1>
                02.
                </h1>
                <h6>VISION</h6>
                <p>
                  {' '}
                  <small>
                  Our vision at Meristem Securities Limited is To be a distinct and preferred financial services provider.
                  </small>
                </p>
              </div>
            </div>
          </div>

        </section>
        <footer>
          <div className="container-fluid py-5">
            <WebFooterBar />
          </div>

        </footer>
      </div>
    );
    return (
      <div>{aboutPage}</div>
    );
  }
}

export default AboutPage;
