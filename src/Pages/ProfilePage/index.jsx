import pp from "../../img/Ellipse 34.png";
import "./profileStyle.css";
import pencil from "../../img/Vector (2).png";
import { Link } from "react-router-dom";
const ProfilePage = () => {
  return (
    <div>
      <div className="profile">
        <div className="text-black">
          <h1>My Profile</h1>
        </div>
        <div className="wrapper">
          <div className="head">
            <img src={pp} alt="profile pictures" style={{ width: "200px" }} />
          </div>
          <div className="contents">
            <Link to="/editProfile">
              <div className="edit">
                <img src={pencil} alt="" />
                <span>edit profile</span>
              </div>
            </Link>
            <div className="firstname">
              <h4>First Name</h4>
              <p>Amalia</p>
              <h4>Last Name</h4>
              <p> Anrlt</p>
              <h4>Username</h4>
              <p>Amalia Anrlt</p>
              <h4>Email</h4>
              <p>Amalia_Anrlt@gmail.com</p>
              <h4>Password</h4>
              <p>************</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
