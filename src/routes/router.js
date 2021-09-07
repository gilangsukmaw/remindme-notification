import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignInUpPage from "../Pages/SigninPage/SignInBase";
import ProfilePage from "../Pages/ProfilePage";
import Edit from "../Pages/ProfilePage/edit";
import AllGoals from "../Pages/GoalsPage/AllGoals";
import PrivateRoutes from "./privateRoutes";
import Navbar from "../component/navbar/navbar";
import NewUser from "../Pages/CreateTask/NewUser";
import AllNotesCreate from "../Pages/AllNotes/AllNotes";
import LandingPage from "../Pages/LandingPage/LandingPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

function Router() {
  const isLogin = localStorage.getItem("Token");
  const [step, setStep] = useState("");
  const [noteData, setNoteData] = useState({
    title: "",
    note: "",
  });
  const onSaveNote = () => {};
  const [noteColor, setNoteColor] = useState("#f1f4fa");
  const onSaveColor = () => {};
  console.log("window location", window.location.pathname);

  const validPage =
    window.location.pathname === "/newUser" || window.location.pathname === "/profile" || window.location.pathname === "/allNote" || window.location.pathname === "/allGoals" || window.location.pathname === "/editProfile" ? true : false;

  return (
    <>
      {isLogin && window.location.pathname !== "/" && validPage ? <Navbar setStep={setStep} /> : null}
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
        <Route exact path="/auth/:type">
          <SignInUpPage />
        </Route>

        <PrivateRoutes exact component={AllNotesCreate} path="/allNote" />

        <PrivateRoutes exact component={AllGoals} path="/allGoals" />

        <PrivateRoutes exact component={Edit} path="/editProfile" />

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
