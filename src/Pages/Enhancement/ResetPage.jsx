import React, { useState, useEffect } from "react";
import { Button, Container, Col } from "react-bootstrap";
import './enhancement.scss'
import Swal from 'sweetalert2'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Cross from '../../assets/images/OopsCross.svg'
import Logo from '../../assets/images/Rectangle70.svg'
import TextLogo from '../../assets/images/RemindMe.svg'
import ceklis from '../../assets/images/saveLogo.svg'





function ResetPage() {
const { token } = useParams();


const [update, setUpdate] = useState({
new_password: "",
confirm_password: "",
});

const [newPassword1, setnewPassword1] = useState({
password: "",
showPassword: false,
});
const [newPassword2, setnewPassword2] = useState({
password: "",
showPassword: false,
});

const handleClickShowPassword1 = () => {
setnewPassword1({ ...newPassword1, showPassword: !newPassword1.showPassword });
};
const handleClickShowPassword2 = () => {
setnewPassword2({ ...newPassword2, showPassword: !newPassword2.showPassword });
};

const handleMouseDownPassword = (event) => {
event.preventDefault();
};

const SendResetPassword = async (e) => {
try {
const res = await axios.post(`https://remindme.gabatch13.my.id/api/v1/auth/forgot/${token}`, update );
// setForgotShow(false);
console.log(res)
console.log (res);
        if (res.status === 201) {
        Swal.fire({
        imageUrl: (`${ceklis}`),
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        width: 450,
        confirmButtonText: "Sign In",
        confirmButtonColor: "#625BAD",
        title: 'Congratulations!',
        text: 'You successfully changed your password',
        allowOutsideClick: false,
        allowEscapeKey:false,
        allowEnterKey: false,
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.location.replace("/auth/login");
          } 
        }
        )
        }
        } catch (error) {
        if (error.response.status === 400) {
        // console.log("ini error" ,error.response.data.errors[0]);
        Swal.fire({
        imageUrl: (`${Cross}`),
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        width: 450,
        confirmButtonText: "Ok",
        confirmButtonColor: "#625BAD",
        title: (error.response.data.errors),
        text: 'Please Check Again',
        })};
        if (error.response.status === 404) {
            // console.log("ini error" ,error.response.data.errors[0]);
            Swal.fire({
            imageUrl: (`${Cross}`),
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            width: 450,
            confirmButtonText: "Let's Go",
            confirmButtonColor: "#625BAD",
            allowOutsideClick: false,
            allowEscapeKey:false,
            allowEnterKey: false,
            title: 'Your Session is Expired',
            text: 'Please Send Forgot Password Request Again',
            }).then((result) => {
                if (result.isConfirmed) {
                window.location.replace("/auth/login");
                } 
            })
            };
}};
return (
<>
    <Container className='ResetContainer'>
        <Col className='boxReset' style={{}}>
        <div>
                <img
                  // className="d-block w-100"
                  style={{ width: "10rem", maxHeight: "auto" , marginLeft:'-2rem'}}
                  src={Logo}
                  alt="First slide"
                /> 
                <img
                  // className="d-block w-100"
                  style={{ width: "10rem", maxHeight: "auto" }}
                  src={TextLogo}
                  alt="First slide"
                /> 
                </div>
                    <div>
                        <h5 style={{ fontWeight:'600' }}>Password must contain :</h5>
                        <ul>
                            <li>Minimum eight characters</li>
                            <li>At least one uppercase letter</li>
                            <li>At least one lowercase letter</li>
                            <li>At least one special character</li>
                        </ul>
                    </div>
                    <div className="">
                <h4 htmlfor="" className="">
                    New Password
                </h4>
                <input 
                placeholder='password'
                title='Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'

                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" id="password"
                    style={{ background: "none" }} type={newPassword1.showPassword ? "text" : "password" }
                    className="input-Edit" onChange={(e)=> setUpdate({ ...update, new_password: e.target.value })} />
                <Button style={{
                        float: "right",
                        background: "none",
                        border: "none",
                      }} onMouseDown={handleMouseDownPassword} onClick={handleClickShowPassword1}>
                    {!newPassword1.showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#625BAD"
                        className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                        <path
                            d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                        <path
                            d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#625BAD"
                        className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path
                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                    )}{" "}
                </Button>
            </div>

            <div className="label password-confirm">
                <h4 htmlfor="" className="">
                    Confirm Password
                </h4>
                <input 
                placeholder='confirm-password'
                title='Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" id="password"
                    style={{ background: "none" }} type={newPassword2.showPassword ? "text" : "password" }
                    className="input-Edit" onChange={(e)=> setUpdate({ ...update, confirm_password: e.target.value })}
                />
                <Button style={{
                        float: "right",
                        // marginLeft: "-2rem",
                        background: "none",
                        border: "none",
                      }} onMouseDown={handleMouseDownPassword} onClick={handleClickShowPassword2}>
                    {!newPassword2.showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#625BAD"
                        className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                        <path
                            d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                        <path
                            d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#625BAD"
                        className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path
                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                    )}{" "}
                </Button>
            </div>
            {update.confirm_password.length > 0 && update.new_password.length > 0 ? <button className='ButtonUngu'
                onClick={SendResetPassword}>Reset Password</button> : null }
        </Col>
    </Container>
</>
)
}

export default ResetPage