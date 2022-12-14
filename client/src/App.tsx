import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  HashRouter,
} from "react-router-dom";

import LandingPage from "./pages/landingpage/landingpage";
import AuthPages from "./pages/authforms/authpages";
const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/auth" component={AuthPages} />
        {/* <Route path="/404" component={NotFound} /> */}
      </Switch>
    </HashRouter>
  );
};

export default App;

{
  /* <LandingPage /> */
}
//  <AuthPages />
