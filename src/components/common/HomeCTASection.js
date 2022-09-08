import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Loader from "../../layout/Loader";
import Notification from "../../layout/Notification";

const HomeCTASection = () => {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const { name, message } = formData;
  // send mail
  const sendMail = (e) => {
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
          name: "",
          message: "",
        });
        setLoading(false);
        setFormData({
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
    <>
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div className="row align-items-center">
              <div className="col-xl-5">
                <div className="cta-text mb-lg-gap-30">
                  <div className="section-title">
                    <span className="title-tag">Make Request</span>
                    <h2 className="title">Make custom order</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="cta-form">
                  <form onSubmit={sendMail}>
                    <div className="field-groups">
                      <div className="input-field">
                        <input
                          type="email"
                          name="name"
                          value={name}
                          required
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                          }}
                          placeholder="Enter email address"
                        />
                        <span className="icon">
                          <i className="fal fa-envelope" />
                        </span>
                      </div>
                      <div className="input-field">
                        <input
                          type="text"
                          value={message}
                          required
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            });
                          }}
                          name="message"
                          placeholder="Your Estimate"
                        />
                        <span className="icon">
                          <i className="fal fa-pencil" />
                        </span>
                      </div>
                      <div className="input-field">
                        <button type="submit">
                          {loading ? (
                            <Loader size={40} color="#ffffff" />
                          ) : (
                            <i className="fal fa-long-arrow-right" />
                          )}
                        </button>
                      </div>
                      {messageSent && (
                        <p style={{ color: "#1e8" }}>
                          We'll get back to you shortly
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCTASection;
