import React, { useState } from "react";
import saveLogo from "../assets/images/saveLogo.png";
import "../assets/styles/ModalSaveChanges.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SaveChangesDetail({ closeChanges }) {
  return (
    <div className="save__outside modal-backdrop">
      <div className="save__container">
        <div className="save__wrapper">
          <img src={saveLogo} alt="" />
          <p>Saved Changes!</p>
          <button>See Details Reminder</button>
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
