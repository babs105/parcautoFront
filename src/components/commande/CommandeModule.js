import React from "react";
import { Route, Switch } from "react-router-dom";
import DetailCommandeAvalider from "./detailCommande/DetailCommandeAvalider";
import ValiderCommande from "./ValiderCommande";
import LivrerCommande from "./LivrerCommande";
import ListCommandeAlivrer from "./ListCommandeAlivrer";
import ListCommandeAvalider from "./ListCommandeAvalider";
import ListCommandeLivrer from "./ListCommandeLivrer";

function CommandeModule() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/commande/list-commande-avalider"
          component={ListCommandeAvalider}
        />
        <Route
          exact
          path="/commande/list-commande-alivrer"
          component={ListCommandeAlivrer}
        />
        <Route
          exact
          path="/commande/valider-commande"
          component={ValiderCommande}
        />
        <Route
          exact
          path="/commande/livrer-commande"
          component={LivrerCommande}
        />
        <Route
          exact
          path="/commande/list-commande-livrer"
          component={ListCommandeLivrer}
        />

        <Route
          exact
          path="/commande/edit-commande"
          component={DetailCommandeAvalider}
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
export default CommandeModule;
