import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignInUpPage from "../Pages/SigninPage/SignInBase";
import ProfilePage from "../Pages/ProfilePage";
import Edit from "../Pages/ProfilePage/edit";
import AllGoals from "../Pages/GoalsPage/AllGoals";
import PrivateRoutes from "./privateRoutes";
import Navbar from "../component/navbar/navbar";
import NewUser from "../Pages/CreateTask/NewUser";
import CreateTask from "../modal/CreateTask";
import AllNotesCreate from "../Pages/AllNotes/AllNotes";
import LandingPage from "../Pages/LandingPage/LandingPage";
import SignUp from "../Pages/SigninPage/SignUp";

function Router() {
  const [isLogin, setIsLogin] = useState(false);
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
      {isLogin ? <Navbar setStep={setStep} /> : null}
      <Switch>
        <Route exact path="/newUser">
          <NewUser setStep={setStep} step={step} noteData={noteData} setNoteData={setNoteData} onSaveNote={onSaveNote} noteColor={noteColor} setNoteColor={setNoteColor} onSaveColor={onSaveColor} />
        </Route>
        <Route exact path="/profile">
          <ProfilePage setStep={setStep} step={step} noteData={noteData} setNoteData={setNoteData} onSaveNote={onSaveNote} noteColor={noteColor} setNoteColor={setNoteColor} onSaveColor={onSaveColor} />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/auth">
          <SignInUpPage />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>

        <PrivateRoutes exact component={CreateTask} path="/TaskPage" />

        <PrivateRoutes exact component={AllNotesCreate} path="/AllNote" />

        <PrivateRoutes exact component={AllGoals} path="/AllGoals" />

        <PrivateRoutes exact component={Edit} path="/editprofile" />

        {/* <Route path="*">
          <div>
            <h1>PAGE NOT FOUND</h1>
          </div>
        </Route> */}
      </Switch>
    </>
  );
}

export default Router;
