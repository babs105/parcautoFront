import React from "react";
import { Route, Switch } from "react-router-dom";
import AddDemandeTravail from "./AddDemandeTravail";
import EditDemandeTravail from "./EditDemandeTravail";
import ListDemandeTravail from "./ListDemandeTravail";
import ListDemandeEnCours from "./ListDemandeTravail";

function DemandeTravailModule() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/demandeTravail/list-demande"
          component={ListDemandeTravail}
        />
        <Route
          exact
          path="/demandeTravail/add-demande"
          component={AddDemandeTravail}
        />
        <Route
          exact
          path="/demandeTravail/edit-demandeTravail"
          component={EditDemandeTravail}
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
export default DemandeTravailModule;
