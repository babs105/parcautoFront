import React from "react";
import { Route, Switch } from "react-router-dom";
import AddReparation from "./AddReparation";
import ListReparation from "./ListReparation";

function ReparationModule() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/reparation/list-reparation"
          component={ListReparation}
        />
        <Route
          exact
          path="/reparation/add-reparation"
          component={AddReparation}
        />
        {/* <Route
          exact
          path="/commande/edit-commande"
          component={DetailCommandeAvalider}
        /> */}
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
export default ReparationModule;
