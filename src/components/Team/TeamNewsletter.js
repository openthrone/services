import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const TeamNewsletter = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <div className="container">
            <div className="newsletter-form">
                <div className="row align-items-center">
                    <div className="col-xl-5">
                        <div className="section-title">
                            <span className="title-tag">Newsletter</span>
                            <h2 className="title">Get weekly updates</h2>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="newsletter-form-wrap">
                            <form
                                action="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <div className="input-fields">
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            placeholder="Full name"
                                        />
                                        <span className="icon">
                                            <i className="fal fa-user" />
                                        </span>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            placeholder="Enter email address"
                                        />
                                        <span className="icon">
                                            <i className="fal fa-envelope" />
                                        </span>
                                    </div>
                                    <div className="input-field">
                                        <button type="submit">
                                            <i className="fal fa-paper-plane" />
                                            Subscribe Now
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brand-logos section-gap row">
                <Slider {...settings}>
                    <div className="col">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="brand-logo"
                            >
                                <img src="img/brand/1.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="brand-logo"
                            >
                                <img src="img/brand/2.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="brand-logo"
                            >
                                <img src="img/brand/3.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="brand-logo"
                            >
                                <img src="img/brand/4.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="brand-logo"
                            >
                                <img src="img/brand/5.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="brand-logo"
                            >
                                <img src="img/brand/1.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="brand-logo"
                            >
                                <img src="img/brand/2.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="brand-logo"
                            >
                                <img src="img/brand/3.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="brand-logo"
                            >
                                <img src="img/brand/4.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="brand-logo"
                            >
                                <img src="img/brand/5.png" alt="Image" />
                            </a>
                        </Link>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default TeamNewsletter;
