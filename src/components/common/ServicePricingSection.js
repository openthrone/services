import Link from "next/link";
import React from "react";

const ServicePricingSection = () => {
    return (
        <section className="pricing-section section-gap grey-bg">
            <div className="container">
                <div className="section-title text-center mb-30">
                    <span className="title-tag">Plans</span>
                    <h2 className="title">Price &amp; Plans</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6 col-sm-10">
                        <div className="pricing-plan-box mt-30">
                            <div className="pricing-header">
                                <div className="pricing-icon">
                                    <img
                                        src="img/pricing-icon.png"
                                        alt="Icon"
                                    />
                                </div>
                                <div className="text-end">
                                    <span className="price-wrap">
                                        <span className="currency">$</span>
                                        <span className="price">9</span>
                                        <span className="price-suffix">
                                            .00
                                        </span>
                                    </span>
                                    <span className="pricing-limit">
                                        Per Month
                                    </span>
                                </div>
                            </div>
                            <div className="pricing-content">
                                <ul className="clearfix">
                                    <li>
                                        23+ Free elements blocks
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        Free web hosting &amp; domain
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        SSL with big certificates
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        1000+ Free active users
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        500GB Free Bandwidth
                                        <i className="fal fa-check" />
                                    </li>
                                </ul>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="main-btn main-btn-3"
                                    >
                                        Purchase Now
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-10">
                        <div className="pricing-plan-box featured-box mt-30">
                            <div className="pricing-header">
                                <div className="pricing-icon">
                                    <img
                                        src="img/pricing-icon.png"
                                        alt="Icon"
                                    />
                                </div>
                                <div className="text-end">
                                    <span className="price-wrap">
                                        <span className="currency">$</span>
                                        <span className="price">99</span>
                                        <span className="price-suffix">
                                            .00
                                        </span>
                                    </span>
                                    <span className="pricing-limit">
                                        Per Month
                                    </span>
                                </div>
                            </div>
                            <div className="pricing-content">
                                <ul className="clearfix">
                                    <li>
                                        23+ Free elements blocks
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        Free web hosting &amp; domain
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        SSL with big certificates
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        1000+ Free active users
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        500GB Free Bandwidth
                                        <i className="fal fa-check" />
                                    </li>
                                </ul>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="main-btn main-btn-3"
                                    >
                                        Purchase Now
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-10">
                        <div className="pricing-plan-box mt-30">
                            <div className="pricing-header">
                                <div className="pricing-icon">
                                    <img
                                        src="img/pricing-icon.png"
                                        alt="Icon"
                                    />
                                </div>
                                <div className="text-end">
                                    <span className="price-wrap">
                                        <span className="currency">$</span>
                                        <span className="price">49</span>
                                        <span className="price-suffix">
                                            .00
                                        </span>
                                    </span>
                                    <span className="pricing-limit">
                                        Per Month
                                    </span>
                                </div>
                            </div>
                            <div className="pricing-content">
                                <ul className="clearfix">
                                    <li>
                                        23+ Free elements blocks
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        Free web hosting &amp; domain
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        SSL with big certificates
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        1000+ Free active users
                                        <i className="fal fa-check" />
                                    </li>
                                    <li>
                                        500GB Free Bandwidth
                                        <i className="fal fa-check" />
                                    </li>
                                </ul>
                                <Link href="">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="main-btn main-btn-3"
                                    >
                                        Purchase Now
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicePricingSection;
