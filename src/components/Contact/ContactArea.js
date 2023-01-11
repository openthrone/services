import React, { useState } from "react";
import emailjs from "emailjs-com";
import Loader from "../../layout/Loader";
import Notification from "../../layout/Notification";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ToolTip from "../ToolTip";

const ContactArea = () => {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    message: "",
  });
  const { name, firstName, message } = formData;
  // send mail
  const handleContact = (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(formData);
    setLoading(true);
    emailjs
      .sendForm(
        "ot-intro",
        "template_openthrone",
        e.target,
        "6snjgwIaZlY_1_CA3"
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setFormData({
          firstName: "",
          name: "",
          message: "",
        });
        setLoading(false);
        setFormData({
          firstName: "",
          name: "",
          message: "",
        });
        Notification();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <section className="contact-area section-gap-bottom">
      <div className="contact-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d227693.9719085061!2d75.7872709!3d26.912433600000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1653048055084!5m2!1sen!2sin"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
      <div className="container">
        <div className="row justify-content-center contact-info-boxes">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="contact-info-box">
              <div
                className="thumb"
                style={{
                  backgroundImage: "url(img/service/01.png)",
                }}
              />
              <div className="content">
                <h4 className="title">Reach Out To Us</h4>
                <ul>
                  <li>
                    <CopyToClipboard
                      text="+91-7014114843"
                      onCopy={() => handleCopy}
                    >
                      <ToolTip text={copied ? "Copied!" : "Copy"}>
                        {copied ? console.log("Copied") : console.log("Coyp")}
                        <i className="fal fa-phone" />
                        <span style={{ fontSize: "16px" }} onClick={handleCopy}>
                          +91-7014114843
                        </span>
                      </ToolTip>
                    </CopyToClipboard>
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <CopyToClipboard
                      text="support@blockbridge.in"
                      onCopy={() => handleCopy}
                    >
                      <ToolTip text={copied ? "Copied!" : "Copy"}>
                        {copied ? console.log("Copied") : console.log("Coyp")}
                        <i className="fal fa-envelope" />
                        <span style={{ fontSize: "16px" }} onClick={handleCopy}>
                          support@blockbridge.in
                        </span>
                      </ToolTip>
                    </CopyToClipboard>
                  </li>
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    Jaipur, Rajasthan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="section-title text-center mb-60">
            <span className="title-tag">Call To Action</span>
            <h2 className="title">Make Your Request</h2>
          </div>
          <form onSubmit={handleContact}>
            <div className="row">
              <div className="col-lg-6 mb-30">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="Full name"
                />
              </div>
              <div className="col-lg-6 mb-30">
                <input
                  type="phone"
                  name="name"
                  required
                  value={name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter Email: "
                />
              </div>
              <div className="col-12 mb-30">
                <textarea
                  name="message"
                  value={message}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Enter message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12 text-center">
                <button className="main-btn" type="submit">
                  {loading ? (
                    <Loader size={40} color="#ffffff" />
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
