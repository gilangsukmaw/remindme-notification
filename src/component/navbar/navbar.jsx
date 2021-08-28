import React, { useState, useEffect } from "react";
import pp from "../../assets/images/Ellipse 34.png";
import logout from "../../assets/images/logout.png";
import "./navbarStyle.css";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
function Navbar({ ...props }) {
  const [open, setOpen] = useState(false);
  const { setStep } = props;
  const [user, setUser] = useState([]);
  const Token = localStorage.getItem("Token");
  const getData = async () => {
    await axios
      .get(`https://remindme.gabatch13.my.id/api/v1/user/getinfo`, { headers: { Authorization: `Bearer ${Token}` } })
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  };
  console.log("user", user);
  useEffect(() => {
    getData();
  }, []);
  function LogOut() {
    localStorage.clear();
    window.location.replace("/");
  }
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar__top">
          <div className="sidebarItems headers">
            <Link to="/newUser">
              <img src={pp} alt="" />
              <p>Amalia Nurlita</p>
            </Link>
          </div>
          <div className=" Task" onClick={() => setStep("CreateNote")}>
            <FiIcons.FiPlusCircle />
            <h5 style={{ marginTop: "5px", marginLeft: "4px" }}>Create a Task</h5>
          </div>
          <div className="sidebarItems content">
            <Link to="/AllNote">
              <p>All Notes</p>
            </Link>
          </div>
          <div className="sidebarItems content">
            <Link to="/allGoals">
              <p>All Goals</p>
            </Link>
          </div>
          <div className="sidebarItems content">
            <Link to="/Profile">
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
