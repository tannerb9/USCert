import { Route, withRouter } from "react-router-dom";
import React from "react";
import SideNavBar from "./nav/SideNavBar";

function AppViews() {
  return <Route exact path="/" render={() => <SideNavBar />} />;
}

export default withRouter(AppViews);
