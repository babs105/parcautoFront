import React, { useEffect, useContext, useState } from "react";
import "./main.css";
import hello from "../../assets/hello.svg";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import PageviewIcon from "@material-ui/icons/Pageview";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import { StateContext } from "../../context/StateContext";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";

// import Chart from "../charts/Chart";
function Dashboard() {
  const [vehiculeTotal, setVehiculeTotal] = useState();
  const [vehiculeEnPanne, setVehiculeEnPanne] = useState();
  const [vehiculeEnDefaillance, setVehiculeEnDefaillance] = useState();
  const [vehiculeDiagnostic, setVehiculeDiagnostic] = useState();

  const [vehiculeRetard, setVehiculeRetard] = useState();
  const [vehiculeRappel, setVehiculeRappel] = useState();
  const { vehicules } = useContext(StateContext);
  useEffect(() => {
    console.log("vehicules ", vehicules.length);
    setVehiculeTotal(vehicules.length);
    getVehiculeEnPanne();
    getVehiculeRetardVidange();
    getVehiculeRappelVidange();
    getVehiculeEnDefaillance();
    getVehiculeADiagnostiquer();
  }, [vehicules]);
  const getVehiculeEnPanne = () => {
    setVehiculeEnPanne(
      vehicules.filter((vehicule) => vehicule.statut === "panne").length
    );
  };
  const getVehiculeEnDefaillance = () => {
    setVehiculeEnDefaillance(
      vehicules.filter((vehicule) => vehicule.statut === "defaillance").length
    );
  };
  const getVehiculeADiagnostiquer = () => {
    setVehiculeDiagnostic(
      vehicules.filter((vehicule) => vehicule.statut === "diagnostic").length
    );
  };
  const getVehiculeRetardVidange = () => {
    setVehiculeRetard(
      vehicules.filter((vehicule) => vehicule.etatVidange === "retard").length
    );
  };
  const getVehiculeRappelVidange = () => {
    setVehiculeRappel(
      vehicules.filter((vehicule) => vehicule.etatVidange === "rappel").length
    );
  };
  return (
    <div className="main__container">
      {/* <!-- MAIN TITLE STARTS HERE --> */}

      <div className="main__title">
        <img src={hello} alt="hello" />
        <div className="main__greeting">
          <h1>Parc Auto</h1>
          <p>Votre Tableau de Bord </p>
        </div>
      </div>

      {/* <!-- MAIN TITLE ENDS HERE --> */}

      {/* <!-- MAIN CARDS STARTS HERE --> */}
      <div className="main__cards">
        <div className="card">
          <span className="text-lightblue">
            <LocalShippingIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Vehicule du Parc</p>
            <span className="font-bold text-title">{vehiculeTotal}</span>
          </div>
        </div>
        <div className="card">
          <span className="text-red" aria-hidden="true">
            <NotInterestedIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Vehicule en Panne</p>
            <span className="font-bold text-title">{vehiculeEnPanne}</span>
          </div>
        </div>
        <div className="card">
          <span style={{ color: "orange" }} aria-hidden="true">
            <ReportProblemIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Vehicule en Defaillance</p>
            <span className="font-bold text-title">
              {vehiculeEnDefaillance}
            </span>
          </div>
        </div>
        <div className="card">
          <span style={{ color: "maroon" }} aria-hidden="true">
            <PageviewIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Vehicule a Diagnostic</p>
            <span className="font-bold text-title">{vehiculeDiagnostic}</span>
          </div>
        </div>

        <div className="card">
          <span className=" text-yellow">
            <NotificationsActiveIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Rappels Vidange </p>
            <span className="font-bold text-title">{vehiculeRappel}</span>
          </div>
        </div>

        <div className="card">
          <span className="text-red" aria-hidden="true">
            <NotificationsOffIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Retards Vidange</p>
            <span className="font-bold text-title">{vehiculeRetard}</span>
          </div>
        </div>
      </div>
      {/* <!-- MAIN CARDS ENDS HERE --> */}

      {/* <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Interventions</h1>
              {/* <p>Cupertino, California, USA</p> */}
            </div>
            {/* <i className="fa fa-usd" aria-hidden="true"> </i> */}
          </div>
          {/* <Chart /> */}
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Commandes</h1>
              <p>Suivi des commandes</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>

          <div className="charts__right__cards">
            <div className="card1">
              <h1>A valider</h1>
              <p>4</p>
            </div>

            <div className="card2">
              <h1>A livrer</h1>
              <p>12</p>
            </div>

            <div className="card3">
              <h1>Livrees</h1>
              <p>90</p>
            </div>

            {/* <div className="card4">
              <h1>Orders</h1>
              <p>1881</p>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>
  );
}

export default Dashboard;
