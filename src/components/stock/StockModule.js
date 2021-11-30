import React from "react";
import { Route, Switch } from "react-router-dom";

import AddStock from "./AddStock";
import EditStock from "./EditStock";
import Stock from "./Stock";

function StockModule() {
  return (
    <>
      <Switch>
        <Route exact path="/stock/list-stock" component={Stock} />
        <Route exact path="/stock/add-stock" component={AddStock} />
        <Route exact path="/stock/edit-stock" component={EditStock} />
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
export default StockModule;
