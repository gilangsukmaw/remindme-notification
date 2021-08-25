import React, { useState } from "react";
import SettingGoalsCard from "./GoalsCard/SettingGoalsCard";
import TimeModal from "./ModalAddTime";
import NoteModal from "./ModalNote";
import ModalCreateTask from "./ModalTask";
import SaveGoals from "./SaveGoalsModal/SaveGoalsModal";
import SaveNotes from "./SaveNotesModal/SaveNotesModal";

const CreateTask = () => {
  const [step, setStep] = useState("");
  const [noteData, setNoteData] = useState({
    title: "",
    note: "",
  });
  const onSaveNote = () => {
    console.log(noteData);
  };
  const [noteColor, setNoteColor] = useState("#f1f4fa");
  const onSaveColor = () => {
    console.log(noteColor);
  };
  return (
    <>
      <button
        className="openTaskModal"
        onClick={() => {
          setStep("CreateNote");
        }}
      >
        Create Task
      </button>
      {/* step to note */}
      {step === "CreateNote" && (
        <ModalCreateTask
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
        />
      )}
      {step === "InputNote" && (
        <NoteModal
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
          onSave={onSaveNote}
          noteData={noteData}
          changeDataTitle={(item) => setNoteData({ ...noteData, title: item })}
          changeDataNote={(item) => setNoteData({ ...noteData, note: item })}
        />
      )}
      {step === "AddTime" && (
        <TimeModal
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
          onSave={(onSaveNote, onSaveColor)}
          noteData={noteData}
          changeColor={() => setNoteColor({ ...noteColor, color: "#FFBCC2" })}
        />
      )}
      {step === "GoBacktoNoteModal" && (
        <NoteModal
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
          onSave={onSaveNote}
          noteData={noteData}
          changeDataTitle={(item) => setNoteData({ ...noteData, title: item })}
          changeDataNote={(item) => setNoteData({ ...noteData, note: item })}
        />
      )}
      {step === "SaveNotes" && (
        <SaveNotes
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
        />
      )}

      {/* step to goals */}
      {step === "CreateGoals" && (
        <SettingGoalsCard
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
        />
      )}
      {step === "SaveGoals" && (
        <SaveGoals
          changeStep={(item) => setStep(item)}
          // onClose={(item) => setStep(item)}
        />
      )}
    </>
  );
};

export default CreateTask;
