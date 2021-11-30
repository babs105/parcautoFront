import React from "react";
import { Route, Switch } from "react-router-dom";
import DiagnosticForm from "./addDiagnostic/DiagnosticForm";
import EditDiagnostic from "./editDiagnostic/EditDiagnostic";
import DiagnosticList from "./ListDiagnostic/DiagnosticList";

function DiagnosticModule() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/diagnostic/list-diagnostic"
          component={DiagnosticList}
        />
        <Route
          exact
          path="/diagnostic/add-diagnostic"
          component={DiagnosticForm}
        />
        <Route
          exact
          path="/diagnostic/edit-diagnostic"
          component={EditDiagnostic}
        />
        {/* <Route exact path="/cuve/edit-cuve" component={EditCuve} /> */}
        {/* <Route
                    exact
                    path="/cuve/ravitailler-vehicule"
                    component={RavitaillerVehicule}
                  />
                  <Route
                    exact
                    path="/cuve/ravitaillements-vehicules"
                    component={AllRavitaillementVehicule}
                  />
                  <Route
                    exact
                    path="/cuve/approvisionnement-forages"
                    component={AllApprovisionnementsForage}
                  />
                  <Route
                    exact
                    path="/cuve/edit-ravitaillement-vehicule"
                    component={EditRavitaillementVehicule}
                  />
                  <Route
                    exact
                    path="/cuve/ravitailler-forage"
                    component={RavitaillerForage}
                  />
                  <Route
                    exact
                    path="/cuve/edit-ravitaillement-forage"
                    component={EditRavitaillementForage}
                  /> */}
      </Switch>
    </>
  );
}
export default DiagnosticModule;
