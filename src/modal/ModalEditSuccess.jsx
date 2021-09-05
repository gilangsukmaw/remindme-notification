import React, { useState } from "react";
import centang from "../assets/images/saveLogo.png";
import "../assets/styles/ModalEdit.scss";
import { useDispatch } from "react-redux";
import { alertPut } from "../redux/action/user";
import { Link } from "react-router-dom";

function ModalEditSuccess() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="outside modal-backdrop">
        <div className="container-edit-modal">
          <div className="wrapper-modal">
            <img src={centang} alt="" />
            <h3>Your Profile Has Been Updated</h3>
            <Link to="/profile">
              <button onClick={() => dispatch(alertPut(false))}>Ok</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalEditSuccess;
// export default function SaveEdits() {
//   const [openEditChanges, setOpenEditChanges] = useState(false);
//   return (
//     <>
//       <button
//         className="openEditChanges"
//         onClick={() => {
//           setOpenEditChanges(true);
//         }}
//       >
//         Edit changes!
//       </button>
//       {openEditChanges && <ModalEditSuccess closeChanges={setOpenEditChanges} />}
//     </>
//   );
// }
