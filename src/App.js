import React from "react";
import { Switch, Route } from "react-router-dom";
import Acceuil from "./Acceuil";
import Home from "./home/Home";
import Catalogue from "./Catalogue";

const App = () => {
  return (
    <div className="">
      <Switch>
        <Route exact path="/a" component={Acceuil} />
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogue" component={Catalogue} />
      </Switch>
    </div>
  );
};

export default App;
