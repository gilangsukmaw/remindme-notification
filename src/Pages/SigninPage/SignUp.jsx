import React from "react";
import { Modal, Col, Form, Button, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import "./Sign.css";
import "./modal.scss";
import ceklis from "../../assets/images/signupChecklist.png";
import { Link } from "react-router-dom";
import SignInUpPage from "./SignInBase";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Cross from '../../assets/images/OopsCross.svg'
import SaveLogo from '../../assets/images/saveLogo.svg'

function SignUp(props) {
  const { ganti } = props;
  const [page, setPage] = useState(1);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handlePasswordChange = (prop) => (event) => {
  // setValues({ ...values, [prop]: event.target.value });
  // };
  const [modalShow, setModalShow] = React.useState(false);

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  // const backtoHome = () => {
  //     window.location.replace("/");
  // };
  // const submitSignUp = (e) => {
  //   e.preventDefault();
  //   if ((state.username === "") | (state.email === "") | (state.password === "") | (state.firstname === "") | (state.lastname === "")) {
  //     alert("please fill all the form");
  //     return;
  //   } else {
  //     axios.post(`https://remindme.gabatch13.my.id/api/v1/auth/signup`, state).then((res) => {
  //       setModalShow(true);
  //     });
  //   }
  // };

  const submitSignUp = async (e) => {
    try {
        const res = await axios.post(`https://remindme.gabatch13.my.id/api/v1/auth/signup`, state).then((res) => {
          setModalShow(true);
        });
    } catch (error) {
      if (error.response.status === 400) {
        console.log("ini error" ,error.response.data.errors[0]);
        Swal.fire({
          imageUrl: (`${Cross}`),
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: 'Custom image',
          width: 450,
          confirmButtonText: "Ok",
          confirmButtonColor: "#625BAD",
          title: (error.response.data.errors[0]),
          text: 'Please Check Again',
          
        })};
        if (error.response.status === 401) {
          console.log("ini error" ,error.response.data.errors[0]);
          Swal.fire({
            imageUrl: (`${Cross}`),
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            width: 450,
            confirmButtonText: "Ok",
            confirmButtonColor: "#625BAD",
            title: (error.response.data.errors[0]),
            text: 'Please Check Again',
            
          })};
        if (error.response.status === 403) {
        alert(`Sesi anda habis, mohon login kembali`);
        if (error.response.status === 500) {
          alert(`Sepertinya ada yang salah`);
          
      }
        
    }}};


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal className="ModalSignUp shadow" sytle={{ maxWidth: "1rem" }} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="d-flex flex-column mb-3">
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Please check your email</h4>
            
          </Modal.Title>
          <img style={{marginTop:'2rem'}} src={ceklis}></img>
        </Modal.Header>
        <Modal.Body style={{}}>
          <p>
          We have sent a verification <br/>link to your registered email
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/auth/login">
            <button
              className="ButtonUngu"
              style={{
                width:'18rem',
                height: "2rem",
                padding: "0.5rem 2rem 2rem 2rem",
                borderRadius: "35px",
                fontWeight: "700",
              }}
              onClick={props.onHide}
            >
              Ok
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <div className="SignUpBigBox text-dark" style={{ marginLeft: "4rem" }} s>
        <div className="SignText">Sign Up</div>
        <div className="SignUpBox  " style={{ Width: "28rem" }}>
          <div className="SignUp-Container d-flex align-items-center justify-content-center flex-column">
            {/* --------------------------------page one---------------------------------- */}
            {page === 1 ? <h3>First Name</h3> : null}
            {page === 1 ? <p>The first step to start is enter your first name in this box below</p> : null}
            {/* --------------------------------page two---------------------------------- */}
            {page === 2 ? <h3>Last Name</h3> : null}
            {page === 2 ? <p>Let us know you better, with entering your last name </p> : null}
            {/* --------------------------------page three-------------------------------- */}
            {page === 3 ? <h3>Username </h3> : null}
            {page === 3 ? <p>What should we call you? Please enter your username </p> : null}
            {/* --------------------------------page four--------------------------------- */}
            {page === 4 ? <h3>Email</h3> : null}
            {page === 4 ? <p>Tell us how to reach you by enter your Email address in the box below </p> : null}
            {/* --------------------------------page five--------------------------------- */}
            {page === 5 ? <h3>Password</h3> : null}
            {page === 5 ? <p>Don’t let anyone know when you enter your password </p> : null}

            {/* --------------------------------page one---------------------------------- */}
            <Form onSubmit={submitSignUp} className="InformationBox">
              <Form.Group className="mb-4 mt-4" controlId="FirstName">
                {page === 1 ? (
                  <Form.Control
                    value={state.firstname}
                    onChange={(e) => setState({ ...state, firstname: e.target.value })}
                    style={{
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "10px",
                      border: "2px solid #B6C6E5",
                    }}
                    type="text"
                    placeholder="First Name"
                    required
                  />
                ) : null}
              </Form.Group>
              {/* --------------------------------page two---------------------------------- */}

              <Form.Group className="mb-4 mt-4" controlId="LastName">
                {page === 2 ? (
                  <Form.Control
                    value={state.lastname}
                    onChange={(e) => setState({ ...state, lastname: e.target.value })}
                    style={{
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "10px",
                      border: "2px solid #B6C6E5",
                    }}
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                ) : null}
              </Form.Group>
              {/* --------------------------------page three---------------------------------- */}

              <Form.Group className="mb-4 mt-4" controlId="Username">
                {page === 3 ? (
                  <Form.Control
                    value={state.username}
                    onChange={(e) => setState({ ...state, username: e.target.value })}
                    style={{
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "10px",
                      border: "2px solid #B6C6E5",
                    }}
                    type="text"
                    placeholder="Username"
                    required
                  />
                ) : null}
              </Form.Group>
              {/* --------------------------------page four---------------------------------- */}

              <Form.Group className="mb-4 mt-4" controlId="email">
                {page === 4 ? (
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
                ) : null}
              </Form.Group>

              {/* --------------------------------page five---------------------------------- */}

              <Form.Group className="mb-4 mt-4" controlId="Password">
                {page === 5 ? (
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control
                      value={state.password}
                      onChange={(e) => setState({ ...state, password: e.target.value })}
                      style={{
                        height: "2.5rem",
                        width: "100%",
                        borderRadius: "10px",
                        border: "2px solid #B6C6E5",
                      }}
                      variant="secondary"
                      type={values.showPassword ? "text" : "password"}
                      placeholder="Password"
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      title='Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                      required
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
                  </Form.Group>
                ) : null}
              </Form.Group>

              {/* --------------------------------Button--------------------------------- */}
              <div className="signUpButton justify-content-between" style={{ width: "100%" }}>
                {page === 1 ? (
                  <Link to="/">
                    <Button
                      className="ButtonUnguOutline"
                      style={{
                        height: "2.5rem",
                        width: "100%",
                        borderRadius: "35px",
                        fontWeight: "600",
                        background: "transparent",
                        border: "1px solid #625BAD",
                        fontWeight: "600",
                        color: "#625BAD",
                      }}
                    >
                      Home
                    </Button>
                  </Link>
                ) : (
                  <Button
                    className="ButtonUngu"
                    onClick={() => setPage(page - 1)}
                    style={{
                      height: "2.5rem",
                      width: "45%",
                      borderRadius: "35px",
                      fontWeight: "600",
                      border: "1px solid #625BAD",
                      color: "#ffffff",
                      backgroundColor: "#625BAD",
                    }}
                  >
                    Prev
                  </Button>
                )}
                {page === 5 ? null : (
                  <Button
                    className="ButtonUngu"
                    onClick={() => setPage(page + 1)}
                    style={{
                      height: "2.5rem",
                      width: "45%",
                      borderRadius: "35px",
                      fontWeight: "600",
                      border: "1px solid #625BAD",
                      color: "#ffffff",
                      backgroundColor: "#625BAD",
                    }}
                  >
                    Next
                  </Button>
                )}
                {page === 5 ? (
                  <Button
                    className="ButtonUngu"
                    // type="submit"
                    // value="Submit"
                    onClick={() =>submitSignUp()}
                    style={{
                      height: "2.5rem",
                      width: "45%",
                      borderRadius: "35px",
                      fontWeight: "600",
                      border: "1px solid #625BAD",
                      color: "#ffffff",
                      backgroundColor: "#625BAD",
                    }}
                  >
                    Submit
                  </Button>
                ) : null}
                {/* type="submit" value="Submit"*/}
                {/*sementara pakai button, nanti saat sdh ada fungsi, modal masukin ke fungsi*/}
                <MyVerticallyCenteredModal show={modalShow} onClick={() => setModalShow(false)} onHide={() => setModalShow(false)} />
              </div>
            </Form>

            <p className="SignInQuestion text-center mt-4">
              Already a member?{" "}
              <Link to="/auth/login" style={{ cursor: "pointer", textDecoration: "none", fontWeight: "700" }} onClick={ganti} className="text-dark">
                Sign In
              </Link>
            </p>
            {/* <h1>{page}</h1> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

