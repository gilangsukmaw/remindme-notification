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
import DetailNote from "./ModalDetailNote";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeStep } from "../redux/action/global";
import ModalDelete from "../modal/ModalDelete";
import SaveChangesDetail from "./ModalSaveChanges";
import * as dayjs from "dayjs";

const ModalTest = ({ ...props }) => {
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);
  const dispatch = useDispatch();
  const { step, setStep, onSaveNote, noteColor, setNoteColor, onSaveColor } =
    props;
  const [noteInput, setNoteInput] = useState({
    title: "",
    body: "",
    time: "",
    date: "",
    dateNote: dayjs(),
    pinned: false,
    color: "",
  });

  const Token = localStorage.getItem("Token");
  const submitNote = async (e) => {
    try {
      const res = await axios.post(
        "https://remindme.gabatch13.my.id/api/v1/notes",
        noteInput,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      dispatch(changeStep(""));
      dispatch(changeStep("SaveNotes"));

      // console.log(res);
    } catch (error) {
      if (error.response.status === 404) {
        alert("Empty, try create some note");
      }
    }
  };
  const modalStep = useSelector((state) => state.global.modalStep);
  console.log("step", modalStep);
  return (
    <>
      {/* step to note */}
      {modalStep === "CreateNote" && (
        <ModalCreateTask
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
        />
      )}
      {modalStep === "InputNote" && (
        <NoteModal
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
          onSave={submitNote}
          noteData={noteInput}
          changeDataTitle={(item) =>
            setNoteInput({ ...noteInput, title: item })
          }
          changeDataBody={(item) => setNoteInput({ ...noteInput, body: item })}
          changeDataColor={(item) =>
            setNoteInput({ ...noteInput, color: item })
          }
          changeDataPinned={(item) =>
            setNoteInput({ ...noteInput, pinned: item })
          }
        />
      )}
      {modalStep === "AddTime" && (
        <TimeModal
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
          onSave={(onSaveNote, onSaveColor)}
          noteData={noteInput}
          changeDataDate={(item) =>
            setNoteInput({ ...noteInput, dateNote: item })
          }
          changeDataTime={(item) => setNoteInput({ ...noteInput, time: item })}
          changeColor={(item) => setNoteInput({ ...noteInput, color: item })}
        />
      )}
      {modalStep === "SaveNotes" && (
        <SaveNotes
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
        />
      )}

      {/* step to goals */}
      {modalStep === "CreateGoals" && (
        <SettingGoalsCard
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
        />
      )}
      {modalStep === "SaveGoals" && (
        <SaveGoals
          changeStep={(item) => setStep(item)}
          // onClose={(item) => setStep(item)}
        />
      )}

      {/* step to edit photo */}
      {modalStep === "EditPhoto" && (
        <EditPhoto changeStep={(item) => setStep(item)} />
      )}
      {/* step to edit note */}
      {modalStep === "EditNote" && (
        <ModalDetailNote
          changeStep={(item) => setStep(item)}
          onClose={(item) => setStep(item)}
          onSave={submitNote}
          noteData={noteInput}
          changeDataTitle={(item) =>
            setNoteInput({ ...noteInput, title: item })
          }
          changeDataBody={(item) => setNoteInput({ ...noteInput, body: item })}
          changeDataColor={(item) =>
            setNoteInput({ ...noteInput, color: item })
          }
          changeDataPinned={(item) =>
            setNoteInput({ ...noteInput, pinned: item })
          }
          changeDataDate={(item) =>
            setNoteInput({ ...noteInput, dateNote: item })
          }
          changeDataTime={(item) =>
            setNoteInput({ ...noteInput, timeNote: item })
          }
        />
      )}
      {modalStep === "SaveChanges" && (
        <SaveChanges changeStep={(item) => setStep(item)} />
      )}
      {modalStep === "DeleteSuccess" && (
        <ModalDelete changeStep={(item) => setStep(item)} />
      )}
      {modalStep === "SaveUpdateNote" && (
        <SaveChangesDetail changeStep={(item) => setStep(item)} />
      )}
    </>
  );
};

export default ModalTest;
