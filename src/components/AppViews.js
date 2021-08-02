import { Route, withRouter } from "react-router-dom";
import React from "react";
import ActionCard from "./cards/ActionCard";
import ContactCard from "./cards/ContactCard";
import CertDetail from "./pages/CertDetail";

function AppViews() {
  return (
    <>
      <Route
        path="/certification/:certificationId(\d+)"
        render={(props) => {
          return (
            <>
              <CertDetail {...props} />
              <ContactCard />
              <ActionCard {...props} />
            </>
          );
        }}
      />
      {/* <Route
        path="/certifications"
        render={(props) => {
          return <CertsList {...props} />;
        }}
      /> */}
    </>
  );
}

export default withRouter(AppViews);
