import React from "react";
import {
Container,
Col,
Carousel,
Form,
Button,
FormControl,
InputGroup,
} from "react-bootstrap";
import "./modal.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// username: auliaFE,
// email: auliaFE@gmail.com,
// password: Hehehe123$,

function SignIn() {
const [values, setValues] = React.useState({
password: "",
showPassword: false,
});

const [state, setState] = useState({
emailorusername: "",
password: "",
});
const submitSignIn = (e) => {
e.preventDefault();
if ((state.emailorusername === "") | (state.password === "")) {
alert("fill the form first");
return;
} else {
axios
.post(`https://remindme.gabatch13.my.id/api/v1/auth/signin`, state)
.then((res) => {
localStorage.setItem("Token", res.data.token);
localStorage.setItem("USERID", res.data.data.id);
localStorage.setItem("USEREMAIL", res.data.data.email);
localStorage.setItem("USERNAME", res.data.data.username);
});
}
};

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
    <p style={{ textAlign: "center" }}>
      Enter your email address or username you’ve created when you
      registering and last, don’t forget to enter the right password
    </p>
    <Form onSubmit={submitSignIn} className="SignInform">
      <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
        <Form.Control value={state.emailorusername} onChange={(e)=>
          setState({ ...state, emailorusername: e.target.value })
          }
          style={{ borderRadius: "10px", border: "2px solid #B6C6E5" }}
          type="text"
          placeholder="Email / Username"
          />
      </Form.Group>

      <div className="d-flex flex-column">
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Control value={state.password} onChange={(e)=>
            setState({ ...state, password: e.target.value })
            }
            style={{ borderRadius: "10px", border: "2px solid #B6C6E5" }}
            variant="secondary"
            type={values.showPassword ? "text" : "password"}
            placeholder="Password"
            />
            <Button style={{
                  float: "right",
                  marginTop: "-2.5rem",
                  background: "none",
                  border: "none",
                }} onMouseDown={handleMouseDownPassword} onClick={handleClickShowPassword}>
              {!values.showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#625BAD"
                className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                <path
                  d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path
                  d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
              </svg>
              ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#625BAD" className="bi bi-eye-fill"
                viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
              )}{" "}
            </Button>
        </Form.Group>
      </div>

      <button className="ButtonUngu" data-testid="ButtonSignIn" value="Submit" type="submit"
        style={{ width: "100%", borderRadius: "35px", fontWeight: "600" }}>
        Sign In
      </button>
    </Form>
  </div>
</div>

);
}

export default SignIn;