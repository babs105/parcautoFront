import React from "react";
import { Route, Switch } from "react-router-dom";
import AddParamVidange from "./AddParamVidange";
import AddVehicule from "./AddVehicule";
import EditStatutVehicule from "./EditStatutVehicule";
import EditVehiculeEnPanne from "./EditStatutVehicule";
import ListVehicule from "./ListVehicule";
import ListVehiculeAdiagnostic from "./ListVehiculeAdiagnostic";
import ListVehiculeDispo from "./ListVehiculeDispo";
import ListVehiculeEnDefaillance from "./ListVehiculeEnDefaillance";
import ListVehiculeEnpanne from "./ListVehiculeEnpanne";
import ListVehiculeRappel from "./ListVehiculeRappel";
import ListVehiculeRetard from "./ListVehiculeRetard";
import SuiviKm from "./SuiviKm";

function VehiculeModule() {
  return (
    <>
      <Switch>
        {/* <Route
          exact
          path="/vehicule/list-vehicule"
          component={ListVehicule}
        /> */}
        <Route
          exact
          path="/vehicule/list-vehicule-dispo"
          component={ListVehiculeDispo}
        />
        <Route
          exact
          path="/vehicule/list-vehicule-rappel"
          component={ListVehiculeRappel}
        />
        <Route
          exact
          path="/vehicule/list-vehicule-retard"
          component={ListVehiculeRetard}
        />
        <Route
          exact
          path="/vehicule/list-vehicule-panne"
          component={ListVehiculeEnpanne}
        />
        <Route
          exact
          path="/vehicule/list-vehicule-defaillance"
          component={ListVehiculeEnDefaillance}
        />
        <Route
          exact
          path="/vehicule/list-vehicule-Adiagnostic"
          component={ListVehiculeAdiagnostic}
        />
        <Route exact path="/vehicule/add-vehicule" component={AddVehicule} />
        <Route
          exact
          path="/vehicule/param-vidange"
          component={AddParamVidange}
        />
        <Route exact path="/vehicule/suivi-kilometrage" component={SuiviKm} />
        <Route
          exact
          path="/vehicule/edit-statut"
          component={EditStatutVehicule}
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
export default VehiculeModule;
