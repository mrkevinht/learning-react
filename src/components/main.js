import React from "react";
import { Switch, Route } from "react-router-dom";

import landingpage from "./landingpage";
import contact from "./contact";
import aboutme from "./aboutme";
import project from "./project";
import resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
    <Route path="/home" component={landingpage} />
    <Route path="/contact" component={contact} />
    <Route path="/aboutme" component={aboutme} />
    <Route path="/project" component={project} />
    <Route path="/resume" component={resume} />
  </Switch>
);

export default Main;
