import React, { useState, useEffect } from "react";
import pp from "../../assets/images/Ellipse 34.png";
import edit from "../../assets/images/Ellipse 107.png";
import "./editStyle.css";
import { putUser, getUser } from "../../redux/action/user";
import { useDispatch, useSelector } from "react-redux";
import ModalEditSuccess from "../../modal/ModalEditSuccess";

export default function Edit() {
  const { user } = useSelector((state) => state.userData.userInfo);
  const showModal = useSelector((state) => state.userData.showModal);
  const dispatch = useDispatch();
  const Token = localStorage.getItem("Token");

  const [update, setUpdate] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    new_password: "",
    confirm_password: "",
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
            <img src={pp} alt="profile pictures" style={{ width: "230px" }} />
            <div className="edit-profile">
              {/* {type === "EditPhoto" ? <ModalEditPhoto /> : null} */}
              <img src={edit} alt="edit" />
            </div>
            <p style={{ marginTop: "-40px" }}>Edit Photo</p>
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
                    <input type="password" className="input-Edit" value={update?.password} onChange={(e) => setUpdate({ ...update, password: e.target.value })} />
                  </div>
                  <div className="label">
                    <h4 htmlfor="" className="">
                      New Password
                    </h4>
                    <input type="password" className="input-Edit" onChange={(e) => setUpdate({ ...update, new_password: e.target.value })} />
                  </div>
                  <div className="label password-confirm">
                    <h4 htmlfor="" className="">
                      Confirm Password
                    </h4>
                    <input type="password" className="input-Edit" onChange={(e) => setUpdate({ ...update, confirm_password: e.target.value })} />
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
    </div>
  );
}
