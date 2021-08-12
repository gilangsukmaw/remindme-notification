import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProfilePage from '../Pages/HomePages/ProfilePage'

function router() {
    return (
        <>
     <Switch>
            <Route exact path="/">
                <ProfilePage />
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

export default router
