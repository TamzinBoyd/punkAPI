import React from "react";
import { Router } from "@reach/router";
import NotFound from "../../components/NotFound";

const Routes = () => {
  return (
    <Router>
      <NotFound default />
    </Router>
  );
};

export default Routes;
