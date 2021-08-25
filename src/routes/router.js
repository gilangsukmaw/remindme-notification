import React from "react";
import { Switch, Route } from "react-router-dom";
import SignInUpPage from "../Pages/SigninPage/SignInBase";
import ProfilePage from "../Pages/ProfilePage";
import Edit from "../Pages/ProfilePage/edit";
import AllGoals from "../Pages/GoalsPage/AllGoals";
import CreateTask from "../modal/ModalTask";

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/signup">
          <SignInUpPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/TaskPage">
          <CreateTask />
        </Route>
        <Route exact path="/AllGoals">
          <AllGoals />
        </Route>
        <Route exact path="/editprofile">
          <Edit />
        </Route>
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
