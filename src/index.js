import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Cats from "./Cats";
import TableCats from "./Cats";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

export var TabsApp = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <div>
              <Tabs value={location.pathname}>
                <Tab label="Item One" component={Link} to="/" />
                <Tab label="Item Two" component={Link} to="/tab2" />
                <Tab
                  label="Item Three"
                  href="#basic-tabs"
                  component={Link}
                  to="/tab3"
                />
              </Tabs>
              <Switch>
                <Route path="/tab2" render={() => <div>Tab 2</div>} />
                <Route path="/tab3" render={() => <div>Tab 3</div>} />
                <Route path="/" component={Cats} />
              </Switch>
            </div>
          )}
        />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<TableCats />, document.getElementById("root"));
