import React from "react";
import App from "./App";
import {
  BrowserRouter as Router,
  //    Switch,
  Route,
  //  Redirect
} from "react-router-dom";
import Employee from "./Employee";
import { MyFileBrowser } from "./MyFileBrowser";
import Services from "./Services";

function Dump() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/Employee" component={Employee} />
      <Route exact path="/File" component={MyFileBrowser} />
      <Route exact path="/Services" component={Services} />

      {/* <App /> */}
    </Router>
  );
}

export default Dump;
