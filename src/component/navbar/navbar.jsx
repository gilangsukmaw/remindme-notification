// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/action/user";
// import pp from "../../assets/images/Ellipse 34.png";
import logout from "../../assets/images/logout.png";
import "./navbarStyle.css";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import { changeStep } from "../../redux/action/global";
import { getTheToken, getMessage } from "./firebase";
import axios from "axios";

function Navbar({ ...props }) {
  // eslint-disable-next-line no-unused-vars
  const { setStep } = props;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userData.userInfo);

  getTheToken();
  getMessage();

  function LogOut() {
    localStorage.clear();
    window.location.replace("/");
  }
  const regToken = localStorage.getItem("Registration Token");
  const Token = localStorage.getItem("Token");

  const sendRegToken = async (e) => {
    try {
      await axios.post(
        `https://remindme.gabatch13.my.id/api/v1/notify/subscribe`,
        { token: regToken },
        { headers: { Authorization: `Bearer ${Token}` } }
      );
    } catch (error) {
      console.log({ error });
    }
  };
  const [page, setPage] = useState(false);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    sendRegToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className="sidebar">
        {/* <button onClick={() => getMessage()}>tes</button> */}
        <div className="sidebar__top">
          <div className="sidebarItems headers">
            <Link to="/home">
              <img
                src={user?.data?.image}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  boxShadow: "0px 0px 10px 10px #625BAD",
                  marginBottom: "2rem",
                }}
              />
              <p>{user ? user.data && user.data.username : null}</p>
            </Link>
          </div>
          <div
            className=" Task"
            onClick={() => dispatch(changeStep("CreateNote"))}
          >
            <FiIcons.FiPlusCircle />
            <h5 style={{ marginTop: "5px", marginLeft: "4px" }}>
              Create Note/Goals
            </h5>
          </div>
          <div className="sidebarItems content">
            <Link to="/allNote">
              <p>All Notes</p>{" "}
              {window.location === "/allNote" ? <h1>panah</h1> : null}
            </Link>
          </div>
          <div className="sidebarItems content">
            <Link to="/allGoals">
              <p>All Goals</p>
            </Link>
          </div>
          <div className="sidebarItems content">
            <Link to="/profile">
              <p>My Profile</p>
            </Link>
          </div>
        </div>
        <div className="sidebar__bottom">
          <li className="Logout" onClick={LogOut}>
            <img src={logout} alt="logout" />
            <span>Logout</span>
          </li>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
