import pp from "../../assets/images/Ellipse 34.png";
import "./profileStyle.css";
import pencil from "../../assets/images/Vector (2).png";
import { Link } from "react-router-dom";
import edit from "../../assets/images/Ellipse 107.png";
import axios from "axios";
import { useState, useEffect } from "react";
import ModalTest from "../../modal/modalTest";
const ProfilePage = ({ ...props }) => {
  const { step, setStep, noteData, setNoteData, onSaveNote, noteColor, setNoteColor, onSaveColor } = props;
  const [user, setUser] = useState([]);
  const Token = localStorage.getItem("Token");
  const getData = async () => {
    await axios
      .get(`https://remindme.gabatch13.my.id/api/v1/user/getinfo`, { headers: { Authorization: `Bearer ${Token}` } })
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("data user", user);
  return (
    <div>
      <div className="profile">
        <div className="text-black">
          <h1>My Profile</h1>
        </div>
        <div className="wrapper">
          <div className="head">
            <img src={pp} alt="profile pictures" style={{ width: "230px" }} />
            {/* <div className="edit-profile">
              <img src={edit} alt="edit" />
            </div>
            <p style={{ marginTop: "-40px" }}>Edit Photo</p> */}
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
              <p>{user.data ? user.data.firstname : null}</p>
              <h5>Last Name</h5>
              <p> {user.data ? user.data.lastname : null}</p>
              <h5>Username</h5>
              <p>{user.data ? user.data.username : null}</p>
              <h5>Email</h5>
              <p>{user.data ? user.data.email : null}</p>
              <h5>Password</h5>
              <p>************</p>
            </div>
          </div>
        </div>
      </div>
      <ModalTest setStep={setStep} step={step} noteData={noteData} setNoteData={setNoteData} onSaveNote={onSaveNote} noteColor={noteColor} setNoteColor={setNoteColor} onSaveColor={onSaveColor} />
    </div>
  );
};

export default ProfilePage;
