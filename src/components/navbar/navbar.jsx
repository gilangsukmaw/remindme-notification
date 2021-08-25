import React from "react";
import pp from "../../assets/images/Ellipse 34.png";
import logout from "../../assets/images/logout.png";
import "./navbarStyle.css";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <>
      <nav className="sidebar">
        <ul>
          <div className="headers">
            <img src={pp} alt="" />
            <p>Amalia Nurlita</p>
          </div>
          <li className="sidebarItems Task">
            <Link to="/TaskPage">
              <FiIcons.FiPlusCircle />
              <p>Create a Task</p>
            </Link>
          </li>
          <li className="sidebarItems content">
            <Link to="/allNotes">
              <p>All Notes</p>
            </Link>
          </li>
          <li className="sidebarItems content">
            <Link to="/allGoals">
              <p>All Goals</p>
            </Link>
          </li>
          <li className="sidebarItems content">
            <Link to="/Profile">
              <p>My Profile</p>
            </Link>
          </li>
          <li className="Logout">
            <Link to="/signIn">
              <img src={logout} alt="logout" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
