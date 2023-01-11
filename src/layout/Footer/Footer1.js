import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import ToolTip from "../../../src/components/ToolTip";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Footer1 = () => {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <footer className="footer-one">
      <div className="footer-top">
        <div className="container">
          <div className="d-sm-flex justify-content-between align-items-center">
            <div className="footer-logo mb-xs-gap-30">
              <img
                style={{
                  maxWidth: "20%",
                  margintTop: "20px",
                }}
                src="img/logo-white.png"
                alt="Image"
              />
            </div>
            <ul className="social-icon">
              <li>
                <Link href="https://web.whatsapp.com/send?phone=917014114843">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <i className="fab fa-whatsapp" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/itsopenthrone">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/openthrone">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="widget about-widget">
                <h5 className="widget-title">About us.</h5>
                <p>
                  We provide best software development services ranging from Mobile Apps, Website and Blockchain Softwares.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="widget nav-widget">
                <h5
                  style={{
                    paddingLeft: "9rem",
                  }}
                  className="widget-title"
                >
                  Services.
                </h5>
                <ul>
                  <li>
                    <Link href="/service">Software Development</Link>
                  </li>
                  <li>
                    <Link href="/service">Blockchain Development</Link>
                  </li>
                  <li>
                    <Link href="/service">
                      SaaS development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">Website Development</Link>
                  </li>
                  <li>
                    <Link href="/service">Mobile Apps</Link>
                  </li>
                  <li>
                    <Link href="/service">Chat Bots</Link>
                  </li>
                  <li>
                    <Link href="/service">Fast Web Hosting Services</Link>
                  </li>
                  <li>
                    <Link href="/service">WordPress Development</Link>
                  </li>
                  <li>
                    <Link href="/service">Shopify Development</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="widget contact-info">
                <h5 className="widget-title">Get in touch.</h5>
                <ul>
                  <li>
                    <i className="fal fa-phone" />
                    <span>Phone:</span>{" "}
                    <CopyToClipboard
                      text="+91-7014114843"
                      onCopy={() => handleCopy}
                    >
                      <ToolTip text={copied ? "Copied!" : "Copy"}>
                        {copied ? console.log("Copied") : console.log("Coyp")}
                        <span onClick={handleCopy}>+91-7014114843</span>
                      </ToolTip>
                    </CopyToClipboard>
                  </li>
                  <li>
                    <i className="fal fa-envelope" />
                    <span>Email:</span>{" "}
                    <CopyToClipboard text="support@blockbridge.in">
                      <ToolTip text={copied ? "Copied!" : "Copy"}>
                        {copied ? console.log("Copied") : console.log("Coyp")}
                        <span onClick={handleCopy}>support@blockbridge.in</span>
                      </ToolTip>
                    </CopyToClipboard>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="d-md-flex align-items-center justify-content-between">
            <ul className="footer-menu order-md-2">
              <li>
                <Link href="/service">Services</Link>
              </li>
              <li>
                <Link href="/contact">Support</Link>
              </li>
            </ul>
            <p className="copyright-text order-md-1">
              Copyright © <Link href="">BlockBridge Private Limited</Link>{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
