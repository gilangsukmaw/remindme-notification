import pp from "../../assets/images/Ellipse 34.png";
import "./profileStyle.css";
import pencil from "../../assets/images/Vector (2).png";
import { getUser } from "../../redux/action/user";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ModalTest from "../../modal/modalTest";
const ProfilePage = ({ ...props }) => {
  const { step, setStep, noteData, setNoteData, onSaveNote, noteColor, setNoteColor, onSaveColor } = props;
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userData.userInfo);

  // const getData = async () => {
  //   await axios
  //     .get(`https://remindme.gabatch13.my.id/api/v1/user/getinfo`, {
  //       headers: { Authorization: `Bearer ${Token}` },
  //     })
  //     .then((result) => setUser(result.data))
  //     .catch((err) => console.log(err));
  // };
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
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
              {/* <p>{user.info ? user.info.firstname : null}</p> */}
              <h5>Last Name</h5>
              {/* <p> {user.info ? user.info.lastname : null}</p> */}
              <h5>Username</h5>
              {/* <p>{user.info ? user.info.username : null}</p> */}
              <h5>Email</h5>
              {/* <p>{user.info ? user.info.email : null}</p> */}
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
