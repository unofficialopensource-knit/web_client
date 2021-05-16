import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/headerFooter"
import Main from "../components/main"

const routes = () => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main}/>
                    {/* <Route exact path="/contact" component={}/> */}
                    {/* <Route exact path="/" component={Home}/>
                    <Route exact path="/Login" component={Home}/>
                    <Route exact path="/SignUp" component={Home}/> */}
                </Switch>
            </Router>
            
        </div>
    );
};

export default routes;