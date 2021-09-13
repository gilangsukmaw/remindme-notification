import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "./modal.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Sign.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Cross from "../../assets/images/OopsCross.svg";
import SaveLogo from "../../assets/images/saveLogo.svg";
// import ceklis from "../../assets/images/signupChecklist.png";
import ForgotPassword from "../Enhancement/forgotPassword";

// username: auliaFE,
// email: auliaFE@gmail.com,
// password: Hehehe123$,

function SignIn() {
  const [modalShow, setModalShow] = React.useState(false);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const [state, setState] = useState({
    emailorusername: "",
    password: "",
  });
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal className="ModalSignUp shadow" sytle={{ maxWidth: "1rem" }} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={SaveLogo} alt='remindme'></img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{}}>
          <p>
            We send verification<br/>
            to your email
          <br/>
          <br/>
            Chop chop<br/>
            Check your email!!
            {/* Congratulations!<br></br>
            we successfully verified your account */}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/auth/login">
            <button
              className="ButtonUngu"
              style={{
                height: "2rem",
                padding: "0.5rem 2rem 2rem 2rem",
                borderRadius: "35px",
                fontWeight: "700",
              }}
              onClick={props.onHide}
            >
              Let’s Get It
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
  // const GoogleSignIn = async (e) => {
  //   try {
  //     const res = await axios.get(`https://remindme.gabatch13.my.id/api/v1/auth/google/`).then((res) => {
      
  //     });
  //   } catch (error) {
  //     // console.log(error)
  //   }
  // };

  const submitSignIn = async (e) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post(`https://remindme.gabatch13.my.id/api/v1/auth/signin`, state).then((res) => {
        localStorage.setItem("Token", res.data.token);
        localStorage.setItem("USERID", res.data.data.id);
        localStorage.setItem("USEREMAIL", res.data.data.email);
        localStorage.setItem("USERNAME", res.data.data.username);
        window.location.replace("/home");
      });
    } catch (error) {
      if (error.response.status === 400) {
        // console.log("ini error", error.response.data.errors[0]);
        Swal.fire({
          imageUrl: `${Cross}`,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          width: 450,
          confirmButtonText: "Ok",
          confirmButtonColor: "#625BAD",
          title: error.response.data.errors[0],
          text: "Please Check Again",
        });
      }
      if (error.response.status === 401) {
        // console.log("ini error", error.response.data.errors[0]);
        Swal.fire({
          imageUrl: `${Cross}`,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          width: 450,
          confirmButtonText: "Ok",
          confirmButtonColor: "#625BAD",
          title: error.response.data.errors[0],
          text: "Please Check Again",
        });
      }
      if (error.response.status === 403) {
        alert(`Sesi anda habis, mohon login kembali`);
        if (error.response.status === 500) {
          alert(`Sepertinya ada yang salah`);
        }
      }
    }
  };

  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="ContainerSignIn" style={{ marginLeft: "4rem" }}>
      <div className="SignText">Sign In</div>
      <div className="SignIn-Container d-flex align-items-center justify-content-center flex-column">
        <h3>To Sign In</h3>
        <p style={{ textAlign: "center" }}>Enter your email address or username you’ve created when you registering and last, don’t forget to enter the right password</p>
        <Form className="SignInform">
          <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
            <Form.Control
              value={state.emailorusername}
              onChange={(e) => setState({ ...state, emailorusername: e.target.value })}
              style={{ textAlign: "left", height: "2.5rem", borderRadius: "10px", border: "2px solid #B6C6E5" }}
              type="text"
              required
              placeholder="Email / Username"
              // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            />
          </Form.Group>

          <div className="d-flex flex-column">
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                value={state.password}
                onChange={(e) => setState({ ...state, password: e.target.value })}
                style={{ textAlign: "left", height: "2.5rem", borderRadius: "10px", border: "2px solid #B6C6E5" }}
                variant="secondary"
                type={values.showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <Button
                style={{
                  float: "right",
                  marginTop: "-2.5rem",
                  background: "none",
                  border: "none",
                }}
                onMouseDown={handleMouseDownPassword}
                onClick={handleClickShowPassword}
              >
                {!values.showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#625BAD" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#625BAD" className="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                )}{" "}
              </Button>
              <div style={{float: "right", background: "none",border: "none",}}> <ForgotPassword/></div>
            </Form.Group>
          </div>
                  
          <Button
            className="ButtonUngu"
            data-testid="ButtonSignIn"
            onClick={() => {
              submitSignIn();
            }}
            style={{ width: "100%", borderRadius: "35px", fontWeight: "600", backgroundColor: "#625BAD", border: "1px solid #625BAD" }}
          >
            Sign In
          </Button>
        </Form>
        <p className="SignUpQuestion text-center mt-2" id='SignUpQuestion'>
          Don't have an account yet?{" "}
          <Link to="/auth/register" style={{ cursor: "pointer", textDecoration: "none", fontWeight: "700" }} className="text-dark">
            Sign Up
          </Link>
        </p>
      </div>
     
      <MyVerticallyCenteredModal show={modalShow} onClick={() => setModalShow(false)} onHide={() => setModalShow(false)} />
{/* <Button onClick={() => GoogleSignIn()} > Google</Button> */}
{/* <a href=' https://remindme.gabatch13.my.id/api/v1/auth/google/'><Button>Google</Button></a> */}
    </div>
    
  );
}

export default SignIn;
