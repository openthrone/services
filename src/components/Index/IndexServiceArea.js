import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const IndexServiceArea = () => {
  return (
    <section className="service-area section-gap-bottom section-gap">
    <div className="container">
    <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center mb-30">
              <span className="title-tag">Our Services</span>
              <h2 className="title">
                We provide wide range of software development
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
                        <p>Get Fast Web Hosting with <span>free Domain</span></p>
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
                        <img src="/img/service/nft.svg"  atl="BlockBridge"/>
                        </div>
                        <h4 className="title">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    10,000 NFTs
                                </a>
                            </Link>
                        </h4>
                        <p>Creation and Upload NFTs on OpenSea</p>
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
                            <i className="fal fa-clone" />
                        </div>
                        <h4 className="title">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    Types of Websites
                                </a>
                            </Link>
                        </h4>
                        <p>Ecommerce, Personal Brands, Portfolio, Multi-Vendor, etc</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-column">
                    <div className="service-box-three">
                        <div className="icon">
                            <i className="fal fa-pen" />
                        </div>
                        <h4 className="title">
                            <Link href="">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    Content Writing
                                </a>
                            </Link>
                        </h4>
                        <p>Experienced Content Writers</p>
                    </div>
                </div>
            </div>
        </div>
        <Fade bottom>
          <div className="ticket-generate mt-30 wow fadeInUp">
            <p>
              Need Help With Your Digital Needs ? Contact Us to Get a Pro Service!
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

export default IndexServiceArea;
