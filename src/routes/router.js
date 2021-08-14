import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TaskPage from '../Pages/TaskPage/TaskPage'


function Router() {
    return (
        <>
     <Switch>
            <Route exact path="/">
                <TaskPage />
            </Route>
            
            <Route path="*">
            <div>
                <h1>PAGE NOT FOUND</h1>
            </div>
            </Route>
      </Switch>
        </>
    )
}

export default Router
