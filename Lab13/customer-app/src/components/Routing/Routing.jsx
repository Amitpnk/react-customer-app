import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Customer from '../Customer/Customer';
import User from '../User/User';


const active = {
    "border-style": "solid",
    "color": "white",
    "background-color": "black"
}
class Routing extends React.Component {

    render() {
        return <Router>
            <NavLink to="/" exact activeStyle={active} >Home</NavLink> &nbsp;
            <NavLink to="/About/" exact activeStyle={active} >About</NavLink>&nbsp;
            <NavLink to="/Customer" exact activeStyle={active} >Customer</NavLink> &nbsp;
            <NavLink to={`/User/${"Amit"}`} exact activeStyle={active} >user Amit</NavLink>

            <Route path="/" strict exact render={() => { return (<h1>Welcome to home page</h1>) }} /><Route />
            <Route path="/About/" strict exact render={() => { return (<h1>Welcome to about <NavLink to={`/User/${"Krishna"}`} exact activeStyle={{ color: 'green' }} >user Krishna</NavLink></h1>) }} />
            <Route path="/Customer" strict exact component={Customer} />
            <Route path="/User/:username" exact render={({ match }) => { return (<User username={match.params.username} />) }} />
        </Router>;
    }
}

export default Routing