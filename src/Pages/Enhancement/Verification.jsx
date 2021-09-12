import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { Form, OverlayTrigger, Tooltip, Modal, Container, Col, Button,Spinner, Placeholder } from "react-bootstrap";
import ceklis from '../../assets/images/saveLogo.svg'
import Cross from '../../assets/images/OopsCross.svg'
import Email from '../../assets/images/email.png'

function Verification() {
const { token } = useParams();


        const VerificationEmail = async () => {
        try {
        const res = await axios.get(`https://remindme.gabatch13.my.id/api/v1/auth/verification/${token}`);
        // const data = await res.data;
        console.log (res);
        if (res.data.data.verified === true) {
        Swal.fire({
        imageUrl: (`${ceklis}`),
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        width: 450,
        confirmButtonText: "Ok",
        confirmButtonColor: "#625BAD",
        title: 'Congratulations!',
        text: 'we successfully verified your account',
        })
        } ; 
        window.location.replace("/home");

        } catch (error) {
        console.log(error.response);
        if (error.response.status === 404) {
        // console.log("ini error", error.response.data);
        Swal.fire({
        imageUrl: `${Cross}`,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Custom image",
        width: 450,
        confirmButtonText: "Ok",
        confirmButtonColor: "#625BAD",
        title: error.response.data.errors,
        text: "Please Click Send Email Again",
        });
        }
        }       
        }   

useEffect(() => {
VerificationEmail();
}, [token])

const debounce = (func, timeout = 30000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const debounceVerification = debounce(() => VerificationEmail());

  const [sendEmail, setSendEmail] = useState (false)
  function SendEmailModal(props) {

    const SendEmail = async () => {
      try {
      const res = await axios.get(`https://remindme.gabatch13.my.id/api/v1/auth/verification/${token}`);
      // const data = await res.data;
      console.log (res);
      if (res.data.data.verified === true) {
      Swal.fire({
      imageUrl: (`${ceklis}`),
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'Custom image',
      width: 450,
      confirmButtonText: "Ok",
      confirmButtonColor: "#625BAD",
      title: 'Congratulations!',
      text: 'we successfully verified your account',
      })
      } ; 
      window.location.replace("/auth/login");

      } catch (error) {
      console.log(error.response);
      if (error.response.status === 404) {
      // console.log("ini error", error.response.data);
      Swal.fire({
      imageUrl: `${Cross}`,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "Custom image",
      width: 450,
      confirmButtonText: "Ok",
      confirmButtonColor: "#625BAD",
      title: error.response.data.errors,
      text: "Please Click Send Email Again",
      });
      }
      }       
      }   

    const [state, setState] = useState({
      email :''
    })
    console.log(state.email)
    return (
      <Modal className="ModalSignUp shadow" sytle={{ maxWidth: "1rem" }} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="d-flex flex-column ">
          {/* <Modal.Title id="contained-modal-title-vcenter">
            <h4>Please input your email</h4>
            
          </Modal.Title> */}
          <img style={{ width:'20rem'}} src={Email}></img>
        </Modal.Header>
        <Modal.Body style={{marginTop:'-2rem'}}>
        <Form.Group className="mb-4 mt-4" controlId="email">
        <Form.Control
                    value={state.email}
                    onChange={(e) => setState({ ...state, email: e.target.value })}
                    style={{
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "10px",
                      border: "2px solid #B6C6E5",
                    }}
                    required
                    type="email"
                    placeholder="Email"
                    pattern='[^@]+@[^@]+\.[^@]+'
                    // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  />
                                </Form.Group>

          <p>
          We will send another verification <br/>link to your registered email
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Link to="/auth/login"> */}
            <Button
              className="ButtonUngu"
              style={{
                width:'15rem',
                height: "2rem",
                padding: "0.5rem 2rem 2rem 2rem",
                borderRadius: "35px",
                fontWeight: "700",
              }}
              onClick={SendEmail()}
            >
              Send Email
            </Button>
          {/* </Link> */}
        </Modal.Footer>
      </Modal>
    );
  }

return (
<>
    <div>hahahahahh kita coba verification</div>
    <Link to='auth/login'><Button>tombol ke login</Button></Link>
    {/* <Button style={{marginLeft:'10rem'}} onClick={()=> {VerificationEmail()}}>tombol resend</Button> */}
    {/* onClick={() => setSendEmail(false)} onHide={() => setSendEmail(false)}  */}
    <SendEmailModal show={sendEmail} />

</>
)
}

export default Verification