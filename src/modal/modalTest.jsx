import React from "react";
import EditPhoto from "./ModalEditPhoto";
import SettingGoalsCard from "./GoalsCard/SettingGoalsCard";
import TimeModal from "./ModalAddTime";
import NoteModal from "./ModalNote";
import ModalCreateTask from "./ModalTask";
import SaveGoals from "./SaveGoalsModal/SaveGoalsModal";
import SaveNotes from "./SaveNotesModal/SaveNotesModal";

const ModalTest = ({ ...props }) => {
  const { step, setStep, noteData, setNoteData, onSaveNote, noteColor, setNoteColor, onSaveColor } = props;
  return (
    <>
      {/* step to note */}
      {step === "CreateNote" && <ModalCreateTask changeStep={(item) => setStep(item)} onClose={(item) => setStep(item)} />}
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
      {step === "AddTime" && <TimeModal changeStep={(item) => setStep(item)} onClose={(item) => setStep(item)} onSave={(onSaveNote, onSaveColor)} noteData={noteData} changeColor={() => setNoteColor({ ...noteColor, color: "#FFBCC2" })} />}
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
    </>
  );
};

export default ModalTest;
