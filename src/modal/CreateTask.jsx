import React, { useState } from "react";
import TimeModal from "./ModalAddTime";
import NoteModal from "./ModalNote";
import ModalCreateTask from "./ModalTask";
import ModalSaveChanges from "./ModalSaveChanges";

const CreateTask = () => {
  const [step, setStep] = useState("");
  const [noteData, setNoteData] = useState({
    title: "",
    note: "",
  });
  const onSaveNote = () => {
    console.log(noteData);
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
      {step === "SaveSuccess" && (
        <ModalSaveChanges
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
        />
      )}
    </>
  );
};

export default CreateTask;
