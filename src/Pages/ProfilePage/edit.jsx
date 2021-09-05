import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pp from "../../assets/images/Ellipse 34.png";
import edit from "../../assets/images/Ellipse 107.png";
import "./editStyle.css";
import axios from "axios";

export default function Edit() {
  const [user, setUser] = useState([]);

  const Token = localStorage.getItem("Token");
  const refreshPage = () => {
    window.location.reload();
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://remindme.gabatch13.my.id/api/v1/user`, update, { headers: { Authorization: `Bearer ${Token}` } });
      alert("Profile Updated");
      refreshPage();
    } catch (error) {
      console.log({ error });
    }
  };

  const getData = async () => {
    await axios
      .get(`https://remindme.gabatch13.my.id/api/v1/user/getinfo`, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((result) => setUser(result?.data))
      .catch((err) => console.log(err));
  };

  const [update, setUpdate] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: user.data ? user.data.email : null,
    new_password: "",
    confirm_password: "",
  });
  useEffect(() => {
    getData();
  }, []);

  console.log("update", update);
  return (
    <div>
      <div className="profile">
        <div className="text-black">
          <h1>Edit Profile</h1>
        </div>
        <div className="wrapper-edit">
          <div className="head">
            <img  src={user?.data?.image} alt="" style={{width:'230px', height:'230px', borderRadius:'100%', marginBottom:'0.78rem', boxShadow:'10px 15px 20px 0px grey'}}/>
            <div className="edit-profile">
              {/* {type === "EditPhoto" ? <ModalEditPhoto /> : null} */}
              <img src={edit} style={{width:'12.2rem', }} alt="edit" />
            </div>
            <p style={{ marginTop: "-40px" }}>Edit Photo</p>
          </div>
          <div className="content-edit">
            <form onSubmit={(e) => updateData(e)}>
              <div className="label">
                <h5 htmlfor="" className="">
                  First Name
                </h5>
                <input onChange={(e) => setUpdate({ ...update, firstname: e.target.value })} />
              </div>
              <div className="label">
                <h5 htmlfor="" className="">
                  Last Name
                </h5>
                <input onChange={(e) => setUpdate({ ...update, lastname: e.target.value })} />
              </div>
              <div className="label">
                <h5 htmlfor="" className="">
                  Username
                </h5>
                <input onChange={(e) => setUpdate({ ...update, username: e.target.value })} />
              </div>
              <div className="label email">
                <h5 htmlfor="" className="">
                  Email
                </h5>
                <input disabled style={{ fontWeight: "Bold" }} value={user.data ? user.data.email : null} onLoad={(e) => setUpdate({ ...update, email: e.target.value })} />
              </div>
              <div className="label password">
                <h5 htmlfor="" className="">
                  Old Password
                </h5>
                <input type="text" className="input-password" onChange={(e) => setUpdate({ ...update, new_password: e.target.value })} />
              </div>
              <div className="label password">
                <h5 htmlfor="" className="">
                  New Password
                </h5>
                <input type="text" className="input-password" onChange={(e) => setUpdate({ ...update, new_password: e.target.value })} />
              </div>
              <div className="label password">
                <h5 htmlfor="" className="">
                  Confirm Password
                </h5>
                <input type="text" className="input-password" onChange={(e) => setUpdate({ ...update, confirm_password: e.target.value })} />
              </div>
              <div>
                {/* <Link to="/profile"> */}
                <button type="submit" className="btn-save">
                  Save
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
