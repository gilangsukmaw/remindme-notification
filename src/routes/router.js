import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignInUpPage from "../Pages/SigninPage/SignInBase";
import ProfilePage from "../Pages/ProfilePage";
import Edit from "../Pages/ProfilePage/edit";
import AllGoals from "../Pages/GoalsPage/AllGoals";
import CreateTask from "../modal/ModalTask";
import PrivateRoutes from "./privateRoutes";
import Navbar from "../component/navbar/navbar";

function Router() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? <Navbar /> : null}
      <Switch>
        <Route exact path="/">
          <SignInUpPage />
        </Route>
        <PrivateRoutes exact component={ProfilePage} path="/Profile" />

        <PrivateRoutes exact component={CreateTask} path="/TaskPage" />

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
