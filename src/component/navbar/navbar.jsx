import React, { useState } from "react";
import pp from "../../assets/images/Ellipse 34.png";
import logout from "../../assets/images/logout.png";
import "./navbarStyle.css";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import CreateTask from "../../modal/CreateTask";
import PlusCreateTask from "../../assets/images/PlusCreateTask.png";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar__top">
          <div className="sidebarItems headers">
            <Link to="/">
              <img src={pp} alt="" />
              <p>Amalia Nurlita</p>
            </Link>
          </div>
          <div className="sidebarItems Task">
            <Link to="/TaskPage">
              <FiIcons.FiPlusCircle />
              <p>Create a Task</p>
            </Link>
          </div>
          <div className="sidebarItems content">
            <Link to="/allNotes">
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
              {/* <div className="my-profile text-black">
                <p>My Profile</p>{" "}
                <span>
                  <FiIcons.FiArrowRight />
                </span>
              </div> */}
            </Link>
          </div>
        </div>
        <div className="sidebar__bottom">
          <li className="Logout">
            <Link to="/">
              <img src={logout} alt="logout" />
              <span>Logout</span>
            </Link>
          </li>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
