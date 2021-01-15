import React from "react";
import { Switch, Route } from "react-router-dom";

import Initial from "./pages/Initial";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Initial} />
    </Switch>
  );
};
