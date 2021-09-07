import React from "react";
import EditPhoto from "./ModalEditPhoto";
import SettingGoalsCard from "./GoalsCard/SettingGoalsCard";
import TimeModal from "./ModalAddTime";
import NoteModal from "./ModalNote";
import ModalCreateTask from "./ModalTask";
import SaveGoals from "./SaveGoalsModal/SaveGoalsModal";
import SaveNotes from "./SaveNotesModal/SaveNotesModal";
import axios from "axios";
import ModalDetailNote from "./ModalDetailNote";
import SaveChanges from "./ModalSaveChanges";
import { useState } from "react";

const ModalTest = ({ ...props }) => {
  const { step, setStep, onSaveNote, noteColor, setNoteColor, onSaveColor } = props;
  const [noteInput, setNoteInput] = useState({
    title: "",
    body: "",
    dateNote: "",
    timeNote: "",
    pinned: false,
    color: "",
  });

  const Token = localStorage.getItem("Token");
  const submitNote = async (e) => {
    try {
      const res = await axios.post("https://remindme.gabatch13.my.id/api/v1/notes", noteInput, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      setStep("SaveNotes");
      console.log(res);
    } catch (error) {
      if (error.response.status === 400) {
        alert("Harap diisi semua");
      }
    }
  };
  return (
    <>
      {/* step to note */}
      {step === "CreateNote" && <ModalCreateTask changeStep={(item) => setStep(item)} onClose={(item) => setStep(item)} />}
      {step === "InputNote" && (
        <NoteModal
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
          onSave={submitNote}
          noteData={noteInput}
          changeDataTitle={(item) => setNoteInput({ ...noteInput, title: item })}
          changeDataBody={(item) => setNoteInput({ ...noteInput, body: item })}
          changeDataColor={(item) => setNoteInput({ ...noteInput, color: item })}
          changeDataPinned={(item) => setNoteInput({ ...noteInput, pinned: item })}
        />
      )}
      {step === "AddTime" && (
        <TimeModal
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
          onSave={(onSaveNote, onSaveColor)}
          noteData={noteInput}
          changeDataDate={(item) => setNoteInput({ ...noteInput, dateNote: item })}
          changeDataTime={(item) => setNoteInput({ ...noteInput, timeNote: item })}
          changeColor={() => setNoteColor({ ...noteColor, color: "#FFBCC2" })}
        />
      )}
      {step === "SaveNotes" && <SaveNotes changeStep={(item) => setStep(item)} onClose={(item) => setStep(item)} />}

      {/* step to goals */}
      {step === "CreateGoals" && <SettingGoalsCard changeStep={(item) => setStep(item)} onClose={(item) => setStep(item)} />}
      {step === "SaveGoals" && (
        <SaveGoals
          changeStep={(item) => setStep(item)}
          // onClose={(item) => setStep(item)}
        />
      )}

      {/* step to edit photo */}
      {step === "EditPhoto" && <EditPhoto changeStep={(item) => setStep(item)} />}
      {/* step to edit note */}
      {step === "EditNote" && (
        <ModalDetailNote
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
          onSave={submitNote}
          noteData={noteInput}
          changeDataTitle={(item) => setNoteInput({ ...noteInput, title: item })}
          changeDataBody={(item) => setNoteInput({ ...noteInput, body: item })}
          changeDataColor={(item) => setNoteInput({ ...noteInput, color: item })}
          changeDataPinned={(item) => setNoteInput({ ...noteInput, pinned: item })}
          changeDataDate={(item) => setNoteInput({ ...noteInput, dateNote: item })}
          changeDataTime={(item) => setNoteInput({ ...noteInput, timeNote: item })}
        />
      )}
      {step === "SaveChanges" && <SaveChanges changeStep={(item) => setStep(item)} />}
    </>
  );
};

export default ModalTest;
