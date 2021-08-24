import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TaskPage from '../Pages/TaskPage/TaskPage'
import SignInUpPage from '../Pages/SigninPage/SignInBase'
import AllGoals from '../Pages/GoalsPage/AllGoals';

function Router() {
    return (
        <>
     <Switch>
            <Route exact path="/">
                <SignInUpPage />
            </Route>
            <Route exact path="/TaskPage">
                <TaskPage />
            </Route>
            <Route exact path="/AllGoals">
                <AllGoals />
            </Route>
            <Route path="*">
            <div>
                <h1>PAGE NOT FOUND</h1>
            </div>
            </Route>
      </Switch>
    </>
  );
}

export default Router
