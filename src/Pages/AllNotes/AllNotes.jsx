import React from "react";
import { useState } from "react";

const AllNotesCreate = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const createNote = () => {
    console.log(title);
    console.log(note);
    console.log(date);
    console.log(time);
  };
  return (
    <div className="allNote">
      <div className="allNote__pin">
        <div className="allNote__card">
          <div className="allNote__title">{/* {setAllNote.map(())} */}</div>
          <div className="allNote__content"></div>
        </div>
      </div>
      <div className="allNote__unpinned"></div>
    </div>
  );
};

export default AllNotesCreate;
