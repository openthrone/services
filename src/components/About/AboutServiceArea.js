import Link from "next/link";
import React from "react";

const AboutServiceArea = () => {
    return (
        <section className="service-area section-gap grey-bg">
            <div className="container">
                <div className="section-title text-center mb-30">
                    <span className="title-tag">Services</span>
                    <h2 className="title">Solutions we provide</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="service-box-two mt-30">
                            <span className="box-count">01</span>
                            <h4 className="title">
                                <Link href="/about">
                                    <a>Digital Product Developoment</a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="/about">
                                <a className="service-link">
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="service-box-two mt-30">
                            <span className="box-count">02</span>
                            <h4 className="title">
                                <Link href="/about">
                                    <a>General Consulting Process</a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="/about">
                                <a className="service-link">
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="service-box-two mt-30">
                            <span className="box-count">03</span>
                            <h4 className="title">
                                <Link href="/about">
                                    <a>Hire in Fixed Contracting</a>
                                </Link>
                            </h4>
                            <p>
                                We enjoy working with discerning clients, people
                                for whom quality, service, integrity &amp;
                                aesthetics matter deeply.
                            </p>
                            <Link href="/about">
                                <a className="service-link">
                                    <i className="fal fa-plus" />
                                    <span>Read More</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutServiceArea;
