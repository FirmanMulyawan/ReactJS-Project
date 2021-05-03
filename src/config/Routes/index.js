import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "../../components";
import { Detail, List } from "../../pages";

const Routes = () => {
  return (
    <div className="main-app-wrapper">
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default Routes;
