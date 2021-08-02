import React from "react";
import TopNavBar from "./components/nav/TopNavBar";
import SideNavBar from "./components/nav/SideNavBar";
import AppViews from "./components/AppViews";
import "./App.css";

function App() {
  return (
    <>
      {/* FOR FUTURE NAV ROUTING */}
      {/* <Route render={props => <TopNavBar {...props} />} /> */}
      {/* <Route render={props => <SideNavBar {...props} />} /> */}

      <TopNavBar />
      <SideNavBar />
      <AppViews />
    </>
  );
}

export default App;
