import React from "react";
import { Route, Switch } from "react-router-dom";
import AddInterventionForm from "./addIntervention/AddInterventionForm";
import EditInterventionForm from "./editIntervention/EditInterventionForm";
import ListIntervention from "./ListIntervention";

function InterventionModule() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/intervention/list-intervention"
          component={ListIntervention}
        />
        <Route
          exact
          path="/intervention/add-intervention"
          component={AddInterventionForm}
        />
        <Route
          exact
          path="/intervention/edit-intervention"
          component={EditInterventionForm}
        />
      </Switch>
    </>
  );
}
export default InterventionModule;
