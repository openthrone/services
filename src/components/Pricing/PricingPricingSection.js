import Link from "next/link";
import React from "react";

const PricingPricingSection = () => {
    return (
        <section className="pricing-section section-gap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-10">
                        <div className="row align-items-center justify-content-center g-0">
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <div className="pricing-plan-box-two pricing-box-one">
                                    <div className="pricing-header text-center">
                                        <div className="price-title">
                                            <h3>Starter</h3>
                                            <p className="duration">
                                                Monthly plan is easy
                                            </p>
                                        </div>
                                        <div className="price-wrap mb-30">
                                            <span className="currency">$</span>
                                            <span className="price">29</span>
                                            <span className="price-suffix">
                                                .00
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pricing-content text-center">
                                        <ul className="clearfix text-start">
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
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <div className="pricing-plan-box-two pricing-box-two">
                                    <div className="pricing-header text-center">
                                        <div className="price-title">
                                            <h3>Advanced</h3>
                                            <p className="duration">
                                                Monthly plan is easy
                                            </p>
                                        </div>
                                        <div className="price-wrap mb-30">
                                            <span className="currency">$</span>
                                            <span className="price">50</span>
                                            <span className="price-suffix">
                                                .00
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pricing-content text-center">
                                        <ul className="clearfix text-start">
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
                    <div className="col-xl-5 col-lg-8 col-md-10">
                        <div className="pricing-text mt-lg-gap-50">
                            <div className="section-title mb-30">
                                <span className="title-tag">
                                    Price &amp; Plans
                                </span>
                                <h2 className="title">
                                    Get relief &amp; flexible intro from us.
                                </h2>
                            </div>
                            <p className="mb-20">
                                Productservices are professional services that
                                help market or advertise your business online.
                                Best Way to Manage and Share Work Resources.
                            </p>
                            <p className="mb-30">
                                In chemistry, an element is a pure substance
                                consisting only of atoms that all have the same
                                numbers of protons in their atomic nuclei.
                                Unlike chemical compounds, chemical elements
                                cannot be broken down into simpler substances by
                                chemical means.
                            </p>
                            <ul className="d-flex">
                                <li>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="main-btn"
                                        >
                                            Monthly
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="main-btn main-btn-2"
                                        >
                                            Monthly
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPricingSection;
