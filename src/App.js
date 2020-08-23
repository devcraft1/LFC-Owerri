import React from "react";
import Home from "./component/Home";
import Header from "./component/Header";
import { Switch, Route, Router } from "./util/router.js";
// import { ProvideAuth } from "./../util/auth.js";

function App() {
  return (
    // <ProvideAuth>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route
          component={({ location }) => {
            return (
              <div
                style={{
                  padding: "50px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                The page <code>{location.pathname}</code> could not be found.
              </div>
            );
          }}
        />
      </Switch>
    </Router>
    // </ProvideAuth>
  );
}

export default App;
