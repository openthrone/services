import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {validUrl} from '../../utils.js'
import Loader from '../../layout/Loader'
import axios from 'axios'
import {BASE_URL} from '../../utils'


const ModalAddPortfolio = ({ token, show, onHide }) => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({
        msg: "",
        variant:"",
        active: false
    })
  const [formData, setFormData] = useState({
    title: "",
    websiteUrl: "",
    category: "",
  });
  const onSubmit =  async(e) => {
    e.preventDefault();
    console.log("formData" + formData);
    setLoading(true)
    try{
          var config = {
          headers: { 
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
          },
        };
        const resp=await axios.post(`${BASE_URL}/api/portfolio/add`, formData, config)
        console.log(resp.data)
        setMessage({
            msg: resp.data.message,
            variant: "success",
            active: true
        })
        // reset form
        setFormData({
            title: "",
            websiteUrl: "",
            category: "",
        })
        setLoading(false)
    }
    catch(err){
        console.log(err)
        // setting error message
        setMessage({
            msg: err.message,
            variant: "danger",
            active: true
        })
        setLoading(false)
        
    }

    
  };
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add new to portfolio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="portfolioTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Project Title"
                name="title"
                value={formData.title}
                required
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="portfolioWebsiteUrl">
              <Form.Label>Website Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Website URL"
                name="websiteUrl"
                value={formData.websiteUrl}
                required
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="portfolioCategoryUrl">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                name="category"
                required
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            {message.active && <p style={{color: `${message.variant==="success" ? "green":"red"}`}}>{message.msg}</p>}
            {loading ? (<Loader size={50}/>) : (<Button
              variant="primary"
              type="submit"
            >
              Add Portfolio
            </Button>)}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddPortfolio;
