import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import LandingPage from "./pages/landingpage";
import AuthPages from "./pages/authpages";
import MainMenu from "./pages/mainmenu";
import "./App.css";
import HomePage from "./pages/home";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/auth" component={AuthPages} />
      <Route exact path="/mainmenu" component={MainMenu} />
      <Route exact path="/homepage" component={HomePage} />
      {/* <Route path="/404" component={NotFound} /> */}
    </Switch>
  );
};

export default App;
