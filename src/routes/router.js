import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignInUpPage from "../Pages/SigninPage/SignInBase";
import ProfilePage from "../Pages/ProfilePage";
import Edit from "../Pages/ProfilePage/edit";
import AllGoals from "../Pages/GoalsPage/AllGoals";
import CreateTask from "../modal/CreateTask";
import PrivateRoutes from "./privateRoutes";
import Navbar from "../component/navbar/navbar";
import NewUser from "../Pages/CreateTask/NewUser";
import LandingPage from "../Pages/LandingPage/LandingPage";
import SignUp from "../Pages/SigninPage/SignUp";

function Router() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? <Navbar /> : null}
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <PrivateRoutes exact component={SignUp} path="/SignUp" />

        <PrivateRoutes exact component={ProfilePage} path="/Profile" />

        <PrivateRoutes exact component={CreateTask} path="/CreateTask" />

        <PrivateRoutes exact component={AllGoals} path="/AllGoals" />

        <PrivateRoutes exact component={Edit} path="/editprofile" />
      </Switch>
    </>
  );
}

export default Router;
