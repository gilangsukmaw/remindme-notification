import React, { useState, useEffect } from "react";
import "./editStyle.css";
import {  Button } from "react-bootstrap";
import { putUser, getUser } from "../../redux/action/user";
import { useDispatch, useSelector } from "react-redux";
import ModalEditSuccess from "../../modal/ModalEditSuccess";
import EditPhotoProfile from "../../modal/EditPhoto/EditPhoto";
import ModalTest from "../../modal/modalTest";


export default function Edit({ ...props}) {
   const {
    onSave,
    noteData,
    changeDataTitle,
    changeDataBody,
    changeDataColor,
    changeDataPinned,
    changeDataDate,
    changeDataTime,
  } = props;
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [newPassword1, setnewPassword1] = React.useState({
    password: "",
    showPassword: false,
  });
  const [newPassword2, setnewPassword2] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowPassword1 = () => {
    setnewPassword1({ ...newPassword1, showPassword: !newPassword1.showPassword });
  };
  const handleClickShowPassword2 = () => {
    setnewPassword2({ ...newPassword2, showPassword: !newPassword2.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { user } = useSelector((state) => state.userData.userInfo);
  const showModal = useSelector((state) => state.userData.showModal);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    pasword: "",
    new_password: "",
    confirm_pasword: "",
  });
  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    setUpdate({ ...update, email: user?.data?.email, firstname: user?.data?.firstname, lastname: user?.data?.lastname, username: user?.data?.username });
  }, [user?.data]);

  console.log("user edit", update);
  return (
    <div>
      <div className="profile">
        <div className="text-black">
          <h1>Edit Profile</h1>
        </div>
        <div className="wrapper-edit">
          <div className="head">
            <img src={user?.data?.image} alt="" style={{ width: "230px", height: "230px", borderRadius: "100%", marginBottom: "0.78rem", boxShadow: "10px 15px 20px 0px grey" }} />

            <div className="edit-profile">
              {/* {step === "EditPhoto" ? <ModalEditPhoto /> : null} */}
              <EditPhotoProfile firstname={user?.data?.firstname} lastname={user?.data?.lastname} username={user?.data?.username} />

              {/* <img src={edit} style={{width:'12.2rem', }} alt="edit" /> */}
            </div>
            {/* <p style={{ marginTop: "-60px" }}>Edit Photo</p> */}
          </div>

          <div className="content-edit">
            <form className="edit-Form" onSubmit={(e) => e.preventDefault()}>
              <div className="bungkusSemua">
                <div className="bungkusFirstname">
                  <div className="label">
                    <h4 htmlfor="" className="">
                      First Name
                    </h4>
                    <input className="input-Edit" value={update?.firstname} onChange={(e) => setUpdate({ ...update, firstname: e.target.value })} />
                  </div>
                  <div className="label">
                    <h4 htmlfor="" className="">
                      Last Name
                    </h4>
                    <input className="input-Edit" value={update?.lastname} onChange={(e) => setUpdate({ ...update, lastname: e.target.value })} />
                  </div>
                  <div className="label">
                    <h4 htmlfor="" className="">
                      Username
                    </h4>
                    <input className="input-Edit" value={update?.username} onChange={(e) => setUpdate({ ...update, username: e.target.value })} />
                  </div>
                  <div className="label email">
                    <h4 htmlfor="" className="">
                      Email
                    </h4>
                    <input className="input-Edit" disabled style={{ fontWeight: "Bold" }} value={user?.data?.email} onLoad={(e) => setUpdate({ ...update, email: e.target.value })} />
                  </div>

                  <div className="label">
                  
                    <h4 htmlfor="" className="">
                      Old Password
                    </h4>
                    <input id='password' style={{background:'none', }} type={values.showPassword ? "text" : "password"}
                      className="input-Edit" onChange={(e) => setUpdate({ ...update, password: e.target.value })} />
                   <Button
                style={{
                  float: "right",
                  // marginLeft: "0",
                  // marginTop:"2rem",
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
                  </div>
                  <div className="label">
                    <h4 htmlfor="" className="">
                      New Password
                    </h4>
                    <input id='password' style={{background:'none'}} type={newPassword1.showPassword ? "text" : "password"} className="input-Edit" onChange={(e) => setUpdate({ ...update, new_password: e.target.value })} />
                    <Button
                style={{
                  float: "right",
                  
                  // marginLeft: "-5rem",
                  background: "none",
                  border: "none",
                }}
                onMouseDown={handleMouseDownPassword}
                onClick={handleClickShowPassword1}
              >
                {!newPassword1.showPassword ? (
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
                  </div>
                 
                  <div className="label password-confirm">
                    <h4 htmlfor="" className="">
                      Confirm Password
                    </h4>
                    <input id='password' style={{background:'none'}} type={newPassword2.showPassword ? "text" : "password"} className="input-Edit" onChange={(e) => setUpdate({ ...update, confirm_password: e.target.value })} />
                    <Button
                style={{
                  float: "right",
                  // marginLeft: "-2rem",
                  background: "none",
                  border: "none",
                }}
                onMouseDown={handleMouseDownPassword}
                onClick={handleClickShowPassword2}
              >
                {!newPassword2.showPassword ? (
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
                  </div>
                </div>
              </div>
              <div className="bungkusTombol">
                <button type="submit" className="btn-save" onClick={() => dispatch(putUser(update))}>
                  Save
                </button>
                {showModal ? <ModalEditSuccess /> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
      <ModalTest
        onSave={onSave}
        noteData={noteData}
        changeDataTitle={changeDataTitle}
        changeDataBody={changeDataBody}
        changeDataColor={changeDataColor}
        changeDataPinned={changeDataPinned}
        changeDataDate={changeDataDate}
        changeDataTime={changeDataTime}
      />
    </div>
  );
}
