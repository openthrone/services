import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const Service2Area = () => {
  return (
    <section className="service-area section-gap-bottom section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center mb-30">
              <span className="title-tag">Our Services</span>
              <h2 className="title">
                Wide range of software development
                <span> services</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="service-boxes-three">
          <div className="row g-0">
            <div className="col-lg-6 col-md-6 col-sm-12 service-column">
              <div className="service-box-three">
                <div className="icon">
                  <i className="fal fa-cloud" />
                </div>
                <h4 className="title">
                  <Link href="">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Fast Web Hosting
                    </a>
                  </Link>
                </h4>
                <p>
                  Get Fast Web Hosting with <span>free Domain</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-column">
              <div className="service-box-three">
                <div className="icon">
                  <i className="fal fa-desktop" />
                </div>
                <h4 className="title">
                  <Link href="">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Website Development
                    </a>
                  </Link>
                </h4>
                <p>Starting as low as ₹15,000</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
              <div className="service-box-three">
                <div className="icon">
                  <i className="fal fa-code" />
                </div>
                <h4 className="title">
                  <Link href="">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Custom Software
                    </a>
                  </Link>
                </h4>
                <p>From Employee Management Dashboard to ERP of Colleges</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
              <div className="service-box-three">
                <div className="icon">
                  <i className="fal fa-robot" />
                </div>
                <h4 className="title">
                  <Link href="">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Chat Bots
                    </a>
                  </Link>
                </h4>
                <p>Automate Clients Conversation</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
              <div className="service-box-three">
                <div className="icon">
                  <img src="/img/saas.png" atl="OpenThrone-Service" />
                </div>
                <h4 className="title">
                  <Link href="">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      SaaS development
                    </a>
                  </Link>
                </h4>
                <p>Fulfill your SaaS startup vision</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-column">
              <div className="service-box-three">
                <div className="icon">
                  <i className="fal fa-headset" />
                </div>
                <h4 className="title">
                  <Link href="">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Free Technical Support
                    </a>
                  </Link>
                </h4>
                <p>6-Month Free Experienced Developers Technical Support </p>
              </div>
            </div>
          </div>
        </div>
        <Fade bottom>
          <div className="ticket-generate mt-30 wow fadeInUp">
            <p>
              Need Help With Your Software Needs ? Contact Us to Get a Pro
              Service!
            </p>
            <Link href="/contact">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <i className="fal fa-ticket" /> Get Quote
              </a>
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Service2Area;
