import React from "react";
import { Route, Switch } from "react-router-dom";
import AddDefaut from "./AddDefaut";
import ListDefaut from "./ListDefaut";

function DefautModule() {
  return (
    <>
      <Switch>
        <Route exact path="/defaut/list-defaut" component={ListDefaut} />
        <Route exact path="/defaut/add-defaut" component={AddDefaut} />
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
export default DefautModule;
