import pp from "../../assets/images/Ellipse 34.png";
import "./profileStyle.css";
import pencil from "../../assets/images/Vector (2).png";
import { Link } from "react-router-dom";
import edit from "../../assets/images/Ellipse 107.png";
const ProfilePage = () => {
  return (
    <div>
      <div className="profile">
        <div className="text-black">
          <h1>My Profile</h1>
        </div>
        <div className="wrapper">
          <div className="head">
            <img src={pp} alt="profile pictures" style={{ width: "230px" }} />
            <div className="edit-profile">
              <img src={edit} alt="edit" />
            </div>
            <p style={{ marginTop: "-40px" }}>Edit Photo</p>
          </div>
          <div className="contents">
            <Link to="/editProfile">
              <div className="edit">
                <img src={pencil} alt="" />
                <span>edit profile</span>
              </div>
            </Link>
            <div className="firstname">
              <h5>First Name</h5>
              <p>Amalia</p>
              <h5>Last Name</h5>
              <p> Nurlita</p>
              <h5>Username</h5>
              <p>Amalia Anrlt</p>
              <h5>Email</h5>
              <p>Amalia_Anrlt@gmail.com</p>
              <h5>Password</h5>
              <p>************</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
