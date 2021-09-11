import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import saveLogo from "../assets/images/saveLogo.png";
import "../assets/styles/ModalSaveChanges.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { changeStep } from "../redux/action/global";

export default function SaveChangesDetail({ closeChanges }) {
  const dispatch = useDispatch();
  const noteDetail = useSelector(
    (state) => state.allNote.noteDataDetail.detail
  );
  return (
    <div
      className="save__outside modal-backdrop"
      onClick={() => {
        dispatch(changeStep(""));
      }}
    >
      <div className="save__container">
        <div className="save__wrapper">
          <img src={saveLogo} alt="" />
          <p>Saved Changes!</p>
          <button>See Details Note</button>
        </div>
      </div>
    </div>
  );
}

// export default function SaveChangesDetail() {
//   const [openSaveChanges, setOpenSaveChanges] = useState(false);
//   return (
//     <>
//       <button
//         className="openSaveChanges"
//         onClick={() => {
//           setOpenSaveChanges(true);
//         }}
//       >
//         Saved changes!
//       </button>
//       {openSaveChanges && (
//         <ModalSaveChanges closeChanges={setOpenSaveChanges} />
//       )}
//     </>
//   );
// }
