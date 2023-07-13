import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AirBnB from "./components/AirBnB";
import "./stylesheets/styles.css";

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Switch>
          <Route exact path="/" component={AirBnB} />
          {/* <Route exact path="/create" component={CreateCharacter} /> */}
        </Switch>
      </main>
    </div>
  );
};

export default App;
