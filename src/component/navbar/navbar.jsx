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
        {/* <ul> */}
        <div className="sidebar__top">
          <div className="headers">
            <img src={pp} alt="" />
            <p>Amalia Nurlita</p>
          </div>
          <div className="sidebarItems Task">
            {/* <Link to="/TaskPage"> */}
            {/* <button> */}
            <CreateTask />
            <img src={PlusCreateTask} alt="" />
            <p>Create a Task</p>
            {/* </button> */}

            {/* </Link> */}
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
          {/* </ul> */}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
