import Link from "next/link";
import { Fragment, useState } from "react";
import Mobilemenu from "./Mobilemenu";

const HomeHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <header className="header-four sticky-header main-menu">
        <div className="header-navbar">
          <div className="container position-relative">
            <div className="d-flex align-items-center justify-content-between">
              <div className="navbar-left d-flex align-items-center">
                <div
                  className="site-logo"
                  style={{
                    marginRight: "-79px",
                  }}
                >
                  <Link href="/">
                    <a>
                      <img
                        style={{
                          maxWidth: "20%",
                          margintTop: "20px",
                        }}
                        src="/img/logo-4.png"
                        alt="BlockBridge"
                      />
                    </a>
                  </Link>
                </div>
                <nav className="site-nav-menu">
                  <ul className="primary-menu">
                    <li className="current">
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <a>Portfolio</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact us</a>
                      </Link>
                    </li>
                  </ul>
                  <Link href="">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="nav-close"
                    >
                      <i className="fal fa-times" />
                    </a>
                  </Link>
                </nav>
              </div>
              <div className="navbar-right d-flex align-items-center">
                <div className="header-contact-btn">
                  <Link href="/service">Get Started Now</Link>
                </div>
                <Link href="">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="nav-toggler"
                  >
                    <i className="far fa-bars" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Mobilemenu />
    </Fragment>
  );
};

export default HomeHeader;
