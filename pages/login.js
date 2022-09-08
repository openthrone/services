import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Loader from "../src/layout/Loader";
import Modal from "react-bootstrap/Modal";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import { BASE_URL } from "../src/utils";
import Router, { useRouter } from "next/router";

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  // console.log(BASE_URL)

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (auth.userInfo) {
      Router.push("/");
    }
  }, [auth]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formData;
    try {
      setErrorMsg("");
      var axios = require("axios");
      var data = JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      });

      var config = {
        method: "post",
        url: `${BASE_URL}/api/users/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          const accessToken = response?.data?.token;
          const roles = response?.data?.isAdmin;
          const data = {
            email,
            roles,
            accessToken,
          };
          setAuth({ email, password, roles, accessToken });
          localStorage.setItem("userInfo", JSON.stringify(data));
          setFormData({
            email: "",
            password: "",
          });
          setErrorMsg("");
          setLoading(false);
          Router.push("/");
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });
    } catch (error) {
      setErrorMsg("Missing Details!");
      setLoading(false);
    }
  };
  return (
    <>
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                name="email"
                value={formData.email}
                required
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                required
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            {loading ? (
              <Loader size={50} />
            ) : (
              <Button variant="primary" type="submit">
                Login
              </Button>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
