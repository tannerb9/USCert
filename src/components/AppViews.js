import { Route, withRouter } from "react-router-dom";
import React from "react";
import CertDetail from "./pages/CertDetail";

function AppViews() {
  return (
    <Route
      path="/certificate/:certificateId(\d+)"
      render={(props) => {
        return (
          <>
            <CertDetail {...props} />
          </>
        );
      }}
    />
  );
}

export default withRouter(AppViews);
