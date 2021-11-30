import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { stockService } from "../service/stockService";
import { vehiculeService } from "../service/vehiculeService";
import { diagnosticService } from "../service/diagnosticService";
import { defautService } from "../service/defautService";
import { reparationService } from "../service/reparationService";
import { demandeTravailService } from "../service/demandeTravailService";
import { commandeService } from "../service/commandeService";
import { interventionService } from "../service/interventionService";
import { useAlert } from "react-alert";
import { userService } from "../service/userService";

export const StateContext = createContext();

export const StateProvider = (props) => {
  const alert = useAlert();

  const [vehicules, setVehicules] = useState([]);
  const [demandeTravails, setDemandeTravails] = useState([]);
  const [vehiculesDispo, setVehiculesDispo] = useState([]);
  const [commandes, setCommandes] = useState([]);
  const [qtePiece, setQtePiece] = useState(0);
  const [pieces, setPieces] = useState([]);
  const [diagnostics, setDiagnostics] = useState([]);
  const [interventions, setInterventions] = useState([]);
  const [defauts, setDefauts] = useState([]);
  const [reparations, setReparations] = useState([]);
  const [pdfDiagnosticData, setPdfDiagnosticData] = useState({});
  const [findKey, setFindKey] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPdfButton, setShowPdfButton] = useState(false);
  const [initialUsersState, setInitialUsersState] = useState({
    users: [],
    user: sessionStorage.getItem("user")
      ? { ...JSON.parse(sessionStorage.getItem("user")) }
      : {},
    isLogged: sessionStorage.getItem("user") ? true : false,
  });

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  let history = useHistory();
  useEffect(() => {
    console.log("in state global");
    getAllPieces();
    getAllDefauts();
    getAllDiagnostic();
    getAllVehicules();
    getAllDemandeTravails();
    getAllCommandes();
    getAllInterventions();
    getAllReparations();
  }, []);

  const getAllVehicules = () => {
    setLoading(true);
    console.log();
    vehiculeService
      .getAllVehicules()
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        console.log("response getAllpieces", res);
        setVehicules(res);
        // getAllForage();
        // history.push("/forage");
      })
      .catch((e) => {
        setLoading(false);
        console.log("response error");
      });
  };
  const getAllDemandeTravails = () => {
    setLoading(true);
    console.log();
    demandeTravailService
      .getAllDemandeTravails()
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        console.log("response getAll demande", res);
        setDemandeTravails(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log("response error");
      });
  };
  const getQuantitePiece = (name) => {
    setLoading(true);
    console.log();
    stockService
      .getQuantitePiece(name)
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        console.log("response qte piece ", res);
        setQtePiece(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log("response error");
      });
  };
  const getAllCommandes = () => {
    setLoading(true);
    console.log();
    commandeService
      .getAllCommandes()
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        console.log("response commandes ", res);
        setCommandes(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log("response error");
      });
  };
  const getAllPieces = () => {
    setLoading(true);
    stockService
      .getAllStocks()
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        console.log("response getAllpieces", res);
        setPieces(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log("response error");
      });
  };

  const addPiece = (data) => {
    setLoading(true);
    console.log(data);
    stockService
      .createPiece(data)
      .then((res) => {
        alert.success("Piece Ajout avec Succes");
        setLoaded(true);
        setLoading(false);
        console.log("response  add piece", res);
        setPieces([res, ...pieces]);
      })
      .catch((e) => {
        alert.error("Echec Operation");
        setLoading(false);
        console.log("response error");
      });
  };
  const getAllDiagnostic = () => {
    setLoading(true);
    console.log();
    diagnosticService
      .getAllDiagnostic()
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        console.log("response getAlldiag", res);
        setDiagnostics(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log("response error");
      });
  };
  const getAllDefauts = () => {
    setLoading(true);
    console.log();
    defautService
      .getAllDefauts()
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        console.log("response getAlldefaut", res);
        setDefauts(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log("response error");
      });
  };
  const getAllInterventions = () => {
    setLoading(true);
    console.log();
    interventionService
      .getAllIntervention()
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        console.log("response getAllInterventions", res);
        setInterventions(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log("response error");
      });
  };
  const getAllReparations = () => {
    setLoading(true);
    console.log();
    reparationService
      .getAllReparations()
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        console.log("response getAlldefaut", res);
        setReparations(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log("response error");
      });
  };

  const addVehicule = (data) => {
    setLoading(true);
    console.log(data);
    vehiculeService
      .createVehicule(data)
      .then((res) => {
        alert.success("Ajout Vehicule Reussi");
        setLoaded(true);
        setLoading(false);
        console.log("response  add vehicule", res);
        setVehicules([res, ...vehicules]);
        // getAllForage();
        // history.push("/forage");
      })
      .catch((e) => {
        alert.error("Echec Ajout Vehicule");
        setLoading(false);
        console.log("response error");
      });
  };
  const addParamVidange = (data) => {
    setLoading(true);
    console.log(data);
    vehiculeService
      .addParamVidange(data)
      .then((res) => {
        alert.success("Operation reussie");
        setLoaded(true);
        setLoading(false);
        console.log("response  add peram vidange  ", res);

        // getAllForage();
        // history.push("/forage");
      })
      .catch((e) => {
        alert.error("Echec Operation");
        setLoading(false);
        console.log("response error");
      });
  };
  const addSuiviKm = (data) => {
    setLoading(true);
    console.log(data);
    vehiculeService
      .addSuiviKm(data)
      .then((res) => {
        alert.success("kilometrage mis a jour");
        setLoaded(true);
        setLoading(false);
        console.log("response  add suivi km  ", res);
        getAllVehicules();
      })
      .catch((e) => {
        alert.error("Echec mise a jour kilometrage");
        setLoading(false);
        console.log("response error");
      });
  };

  const changeStatutVehicule = (data) => {
    setLoading(true);
    console.log(data);
    vehiculeService
      .changeStatutVehicule(data)
      .then((res) => {
        alert.success("Statut Vehicule Reussi");
        setLoaded(true);
        setLoading(false);
        console.log("response  statut vehicule change  ", res);
        getAllVehicules();

        // getAllForage();
        // history.push("/forage");
      })
      .catch((e) => {
        alert.error("Echec changement statut");
        setLoading(false);
        console.log("response error");
      });
  };

  const livrerCommande = (data) => {
    setLoading(true);
    console.log(data);
    commandeService
      .livrerCommande(data)
      .then((res) => {
        alert.success("Commande Livree");
        setLoaded(true);
        setLoading(false);
        console.log("response livraison commande  ", res);
        getAllCommandes();
        getAllPieces();
      })
      .catch((e) => {
        alert.error("Echec Livraison commande");
        setLoading(false);
        console.log("response error");
      });
  };
  const validateCommande = (data) => {
    setLoading(true);
    console.log(data);
    commandeService
      .validateCommande(data)
      .then((res) => {
        alert.success("Commande Valide");
        setLoaded(true);
        setLoading(false);
        console.log("response validation commande  ", res);
        getAllCommandes();
      })
      .catch((e) => {
        alert.error("Echec Validation commande");
        setLoading(false);
        console.log("response error");
      });
  };
  const addDemandeTravail = (data) => {
    setLoading(true);
    console.log(data);
    demandeTravailService
      .createDemandeTravail(data)
      .then((res) => {
        alert.success("Demande Travail Enregistre");
        setLoaded(true);
        setLoading(false);
        console.log("response  add demande", res);
        setDemandeTravails([res, ...demandeTravails]);
        // getAllForage();
        getAllVehicules();
        // history.push("/forage");
      })
      .catch((e) => {
        alert.error("Echec Operation");
        setLoading(false);
        console.log("response error");
      });
  };
  const addIntervention = (data) => {
    setLoading(true);
    // setShowPdfButton(false);
    console.log(data);
    interventionService
      .createIntervention(data)
      .then((res) => {
        alert.success("Ajout Intervention Reussi");
        setLoaded(true);
        setLoading(false);
        console.log("response  add Interventions", res);
        setInterventions([res, ...interventions]);
        getAllVehicules();
        getAllPieces();
      })
      .catch((e) => {
        alert.error("Echec Ajout Intervention");
        setLoading(false);
        console.log("response error");
      });
  };
  const addReparation = (data) => {
    setLoading(true);
    // setShowPdfButton(false);
    console.log(data);
    reparationService
      .createReparation(data)
      .then((res) => {
        alert.success("Ajout Reparation Reussi");
        setLoaded(true);
        setLoading(false);
        console.log("response  add Reparation", res);
        setReparations([res, ...reparations]);
        // setPdfDiagnosticData(res);
        // setShowPdfButton(true);
        // getAllVehicules();
        // getAllDemandeTravails();
        // getAllCommandes();
        // getAllPieces();
      })
      .catch((e) => {
        // alertService.error("Echec Ravitaillement ", {
        //   keepAfterRouteChange: true,
        // });
        alert.error("Echec ajout Reparation");
        setLoading(false);
        console.log("response error");
      });
  };
  const addDefaut = (data) => {
    setLoading(true);
    // setShowPdfButton(false);
    console.log(data);
    defautService
      .createDefaut(data)
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        alert.success("Ajout Panne Reussi");
        console.log("response  add defaut", res);
        setDefauts([res, ...defauts]);
        // setPdfDiagnosticData(res);
        // setShowPdfButton(true);
        // getAllVehicules();
        // getAllDemandeTravails();
        // getAllCommandes();
      })
      .catch((e) => {
        // alertService.error("Echec Ravitaillement ", {
        //   keepAfterRouteChange: true,
        // });
        alert.error("Echec Ajout Panne");
        setLoading(false);
        console.log("response error");
      });
  };
  const addDiagnostic = (data) => {
    setLoading(true);
    // setShowPdfButton(false);
    console.log(data);
    diagnosticService
      .createDiagnostic(data)
      .then((res) => {
        alert.success("Ajout Diagnostic Reussi");
        setLoaded(true);
        setLoading(false);
        console.log("response  add diagnostic", res);
        setDiagnostics([res, ...diagnostics]);
        // setPdfDiagnosticData(res);
        // setShowPdfButton(true);
        getAllVehicules();
        getAllDemandeTravails();
        getAllCommandes();
      })
      .catch((e) => {
        alert.error("Echec Ajout Diagnostic");
        setLoading(false);
        console.log("response error");
      });
  };

  const updateDemandeTravail = (data) => {
    setLoading(true);
    // setShowPdfButton(false);
    console.log(data);
    demandeTravailService
      .updateDemandeTravail(data)
      .then((res) => {
        alert.success("Operation Reussie");
        setLoaded(true);
        setLoading(false);
        console.log("response  update demande", res);
        setDemandeTravails(
          demandeTravails.map((demandeTravail) =>
            demandeTravail.id === res.id ? res : demandeTravail
          )
        );
        // getAllCommandes();
        // setPdfDiagnosticData(res);
        // setShowPdfButton(true);
      })
      .catch((e) => {
        alert.error("Echec Operation");
        setLoading(false);
        console.log("response error");
      });
  };
  const updateIntervention = (data) => {
    setLoading(true);
    // setShowPdfButton(false);
    console.log(data);
    interventionService
      .updateIntervention(data)
      .then((res) => {
        alert.success("Operation Reussie");
        setLoaded(true);
        setLoading(false);
        console.log("response  update diagnostic", res);
        setInterventions(
          interventions.map((intervention) =>
            intervention.id === res.id ? res : intervention
          )
        );
        getAllPieces();
      })
      .catch((e) => {
        alert.error("Echec Operation");
        setLoading(false);
        console.log("response error");
      });
  };
  const updateDiagnostic = (data) => {
    setLoading(true);
    // setShowPdfButton(false);
    console.log(data);
    diagnosticService
      .updateDiagnostic(data)
      .then((res) => {
        alert.success("Operation Reussie");
        setLoaded(true);
        setLoading(false);
        console.log("response  update diagnostic", res);
        setDiagnostics(
          diagnostics.map((diagnostic) =>
            diagnostic.id === res.id ? res : diagnostic
          )
        );
        getAllCommandes();
        // setPdfDiagnosticData(res);
        // setShowPdfButton(true);
      })
      .catch((e) => {
        alert.error("Echec Operation");
        setLoading(false);
        console.log("response error");
      });
  };
  const updatePiece = (data) => {
    setLoading(true);
    console.log(data);
    stockService
      .updateStock(data)
      .then((res) => {
        alert.success("Operation Reussie");
        setLoaded(true);
        setLoading(false);
        console.log("response  update piece", res);
        setPieces(
          pieces.map((piece) =>
            piece.pieceName === res.pieceName ? res : piece
          )
        );
      })
      .catch((e) => {
        alert.error("Echec Operation");
        setLoading(false);
        console.log("response error");
      });
  };
  const updateCommande = (data) => {
    setLoading(true);
    // setShowPdfButton(false);
    console.log(data);
    commandeService
      .updateCommande(data)
      .then((res) => {
        alert.success("Operation Reussie");
        setLoaded(true);
        setLoading(false);
        console.log("response  update commande", res);
        setCommandes(
          commandes.map((commande) => (commande.id === res.id ? res : commande))
        );
      })
      .catch((e) => {
        alert.error("Echec Operation");
        setLoading(false);
        console.log("response error");
      });
  };
  const search = (rows) => {
    if (findKey === "") return rows;
    else {
      return rows.filter((row) =>
        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(findKey.toLowerCase())
      );
    }
  };
  const getUserList = () => {
    setLoading(true);
    userService
      .getAllUsers()
      .then((res) => {
        setLoading(false);
        setInitialUsersState({ ...initialUsersState, users: [...res] });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addUser = (data) => {
    setLoading(true);
    console.log(data);
    userService
      .register(data)
      .then((res) => {
        setInitialUsersState({
          ...initialUsersState,
          users: [res, ...initialUsersState.users],
        });

        setLoading(false);
        alert.success("Ajout Utilisateur Reussi ");
      })
      .catch((error) => {
        setLoading(false);
        alert.error("Erreur Ouverture Compte");
      });
  };
  const editUser = (data) => {
    setLoading(true);
    console.log(data);
    userService
      .update(data)
      .then((res) => {
        alert.success("Modification Utilisateur Reussie");
        setLoading(false);
        setInitialUsersState({
          ...initialUsersState,
          users: initialUsersState.users.map((user) =>
            user.id === res.id ? res : user
          ),
        });
        // setUsers((prevState) =>
        //   prevState.map((user) => (user.id === res.id ? res : user))
        // );
      })
      .catch((error) => {
        setLoading(false);

        alert.error("Erreur Modification");
      });
  };

  const login = (data) => {
    setLoading(true);
    console.log(data);
    userService
      .login(data)
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.user) {
          setInitialUsersState({
            ...initialUsersState,
            user: { ...res.user },
            isLogged: true,
          });
          alert.success("Connexion réussite! Bienvenue");

          history.push("/dashboard");
        } else {
          alert.error("Utilisateur non trouve");
        }
      })
      .catch((error) => {
        setLoading(false);

        alert.error("Erreur Connexion ! Utilisateur non retrouvé");

        console.log(error);
      });
  };

  const logout = () => {
    userService.logout();
    setInitialUsersState({ ...initialUsersState, user: {}, isLogged: false });
    history.push("/");
  };
  return (
    <StateContext.Provider
      value={{
        addUser,
        login,
        logout,
        editUser,
        users: initialUsersState.users,
        user: initialUsersState.user,
        isLogged: initialUsersState.isLogged,
        addPiece,
        addVehicule,
        addDiagnostic,
        addIntervention,
        addDemandeTravail,
        addParamVidange,
        addSuiviKm,
        addDefaut,
        addReparation,
        validateCommande,
        livrerCommande,
        updateDiagnostic,
        updateCommande,
        updateDemandeTravail,
        changeStatutVehicule,
        getQuantitePiece,
        qtePiece,
        updateIntervention,
        updatePiece,
        getAllPieces,
        getAllVehicules,
        getAllDefauts,
        getAllReparations,
        getAllDiagnostic,
        search,
        findKey,
        setFindKey,
        loading,
        sidebarOpen,
        openSidebar,
        closeSidebar,
        showPdfButton,
        pdfDiagnosticData,
        pieces,
        vehicules,
        demandeTravails,
        vehiculesDispo,
        diagnostics,
        interventions,
        defauts,
        reparations,
        commandes,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};
