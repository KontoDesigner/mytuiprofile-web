import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Staff from '../views/staff/staff'
import Manager from '../views/manager/manager'
import NotFound from '../views/notFound/notFound'
import Unauthorized from '../views/unauthorized/unauthorized'
import { UserRoles as userRoles } from '../constants/userConstants'

const Routes = props => {
    const authorized = props.user ? true : false
    const manager = props.user.roles.includes(userRoles.Manager)

    if (authorized === true) {
        if (manager === true) {
            return (
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/manager" />} />
                    <Route path="/manager" component={Manager} />
                    <Route exact path="/staff" component={Staff} />
                    <Route exact path="/staff/:email" render={props => <Staff {...props} ignoreThis={true} />} />
                    <Route component={NotFound} />
                </Switch>
            )
        } else {
            return (
                <Switch>
                    <Route path="/" exact component={() => <Redirect to={`/staff/${props.user.email}`} />} />
                    <Route path="/staff" component={Staff} />
                    <Route component={NotFound} />
                </Switch>
            )
        }
    } else {
        return (
            <Switch>
                <Route component={Unauthorized} />
            </Switch>
        )
    }
}

export default Routes
