import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";

function DashboardModule() {
  return (
    <>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}
export default DashboardModule;
