import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pp from "../../assets/images/Ellipse 34.png";
import editButton from "../../assets/images/Ellipse 107.png";
import "./editStyle.css";
import axios from "axios";
export default function Edit() {
  const [edit, setEdit] = useState([]);
  const Token = localStorage.getItem("Token");
  const editData = async () => {
    await axios
      .put("https://remindme.gabatch13.my.id/api/v1/user", { headers: { Authorization: `Bearer ${Token}` } })
      .then((result) => setEdit(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    editData();
  }, []);
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
              <img src={editButton} alt="edit" />
            </div>
            <p style={{ marginTop: "-40px" }}>Edit Photo</p>
          </div>
          <div className="content-edit">
            <form>
              <div className="label">
                <h5 htmlfor="" className="">
                  First Name
                </h5>
                <input />
              </div>
              <div className="label">
                <h5 htmlfor="" className="">
                  Last Name
                </h5>
                <input />
              </div>
              <div className="label">
                <h5 htmlfor="" className="">
                  Username
                </h5>
                <input />
              </div>
              <div className="label">
                <h5 htmlfor="" className="">
                  Email
                </h5>
                <p style={{ fontWeight: "Bold" }}>Amalianurlita97@gmail.com</p>
              </div>
              <div className="label password">
                <h5 htmlfor="" className="">
                  Password
                </h5>
                <input type="password" className="input-password" />
              </div>
              <div>
                <Link to="/profile">
                  <button type="submit" className="btn-save">
                    Save
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
