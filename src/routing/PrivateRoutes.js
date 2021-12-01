import React from "react";
import { Route, Switch } from "react-router-dom";
import CommandeModule from "../components/commande/CommandeModule";
import DashboardModule from "../components/dashboard/DashboardModule";
import DefautModule from "../components/defaut/DefautModule";
import DemandeTravailModule from "../components/demandeTravail/DemandeTravailModule";
import DiagnosticModule from "../components/diagnostic/DiagnosticModule";
import InterventionModule from "../components/intervention/InterventionModule";
import ReparationModule from "../components/reparation/ReparationModule";
import SideBar from "../components/sideBar/SideBar";
import StockModule from "../components/stock/StockModule";
import TopBar from "../components/topBar/TopBar";
import VehiculeModule from "../components/vehicule/VehiculeModule";

// import Navigation from "../components/navigation/Navigation";
// import RavitaillementModule from "../components/ravitaillement/RavitaillementModule";
// import StationModule from "../components/station/StationModule";
// import UserModule from "../components/users/UserModule";
// import NotFound from "../components/NoAutorize/NoFound";

// import VehiculeModule from "../components/vehicule/VehiculeModule";
// import { UserContext } from "../context/UserContext";
// import NoAutorize from "../components/NoAutorize/NoAutorize";
// import DashbordModule from "../components/dashbord/DashbordModule";
// import Profile from "../components/profile/Profile";
// import RapportModule from "../components/rapports/RapportModule";
// import CuvePrincipaleModule from "../components/cuve-principale/CuvePrincipaleModule";

// import ForageModule from "../components/forage/ForageModule";
const PrivateRoutes = (props) => {
  // const { user } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <SideBar />
        <div className="containerRight">
          <TopBar />
          <Switch>
            <Route path="/stock" component={StockModule} />
            <Route path="/vehicule" component={VehiculeModule} />
            <Route path="/diagnostic" component={DiagnosticModule} />
            <Route path="/demandeTravail" component={DemandeTravailModule} />
            <Route path="/intervention" component={InterventionModule} />
            <Route path="/commande" component={CommandeModule} />
            <Route path="/defaut" component={DefautModule} />
            <Route path="/reparation" component={ReparationModule} />
            <Route path="/dashboard" component={DashboardModule} />
          </Switch>
        </div>
      </div>
    </>
  );
};
export default PrivateRoutes;
