import { Navbar } from "../../components/navbar/navbar";
import pp from "../../img/Ellipse 34.png";
import "./profileStyle.css";
const ProfilePage = () => {
  return (
    <div className="container-fluid p-0 base-content">
      <div className="row">
        <div className="col-3">
          <Navbar />
        </div>
        <div className="col-9">
          <div className="container profile">
            <div className="row">
              <div className="col">
                <h1>Edit Profile</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img src={pp} alt="profile-pictures" style={{ width: "300px", marginLeft: "24px" }} />
                <p>Jane Spencer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
