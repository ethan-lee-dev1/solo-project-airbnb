import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AirBnB from "./components/AirBnB";
import "./stylesheets/styles.css";
import { AirBnBdetail } from "./components/AirBnBdetail";

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Switch>
          <Route exact path="/" component={AirBnB} />
          {/* <Route exact path="/create" component={CreateCharacter} /> */}
          <Route exact path="/detail/:id" component={AirBnBdetail} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
