import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignInUpPage from "../Pages/SigninPage/SignInBase";
import ProfilePage from "../Pages/ProfilePage";
import Edit from "../Pages/ProfilePage/edit";
import AllGoals from "../Pages/GoalsPage/AllGoals";
import CreateTask from "../modal/CreateTask";
import PrivateRoutes from "./privateRoutes";
import Navbar from "../component/navbar/navbar";

function Router() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? <Navbar /> : null}
      <Switch>
        <Route exact path="/">
          <SignInUpPage />
        </Route>
        <PrivateRoutes exact component={ProfilePage} path="/Profile" />

        <PrivateRoutes exact component={CreateTask} path="/CreateTask" />

        <PrivateRoutes exact component={AllGoals} path="/AllGoals" />

        <PrivateRoutes exact component={Edit} path="/editprofile" />
      </Switch>
    </>
  );
}

export default Router;
