import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import EditDiagnosticInfo from "./EditDiagnosticInfo";

import { StateContext } from "../../../context/StateContext";
import EditDiagnosticDefaut from "./EditDiagnosticDefaut";
import EditDiagnosticRepa from "./EditDiagnosticRepa";
import EditPieceCommande from "./EditPieceCommande";
import FinalEditDiagnostic from "./FinalEditDiagnostic";
function EditDiagnostic({ location }) {
  const {
    pieces,
    getAllPieces,
    defauts,
    getAllDefauts,
    reparations,
    getAllReparations,
    // showPdfButton,
    // pdfDiagnosticData,
    updateDiagnostic,
    loading,
  } = useContext(StateContext);
  const diagnostic = location.state;

  const [values, setValues] = useState({
    id: "",
    dateDebutDiagnostic: "",
    dateFinDiagnostic: "",
    intervenant: "",
    quantite: "",
    pieceName: "",
    statut: "",
    defautName: "",
    actionName: "",
    immatricule: "",
    lieu: "",
    defauts: [],
    reparations: [],
    pieceForCommande: [],
  });
  const [focused, setFocused] = useState(false);
  const [isCommande, setIsCommande] = useState(false);
  const [pieceAcommande, setPieceAcommande] = useState([]);
  const [defautsConsta, setDefautsConsta] = useState([]);
  const [repaAfaire, setRepaAfaire] = useState([]);
  const [step, setStep] = useState(1);

  // go back to previous step

  const prevStep = () => {
    setStep(step - 1);
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    getAllPieces();
    // getAllVehicules();
    getAllDefauts();
    getAllReparations();

    // diagnostic.dateDebutDiagnostic = moment(
    //   diagnostic.dateDebutDiagnostic,
    //   "DD/MM/YYYY HH:mm"
    // ).format("yyyy-MM-DDTHH:mm");
    const dateFinDiagnostic = moment(
      diagnostic.dateFinDiagnostic,
      "DD/MM/YYYY HH:mm"
    ).format("yyyy-MM-DDTHH:mm");
    const dateDebutDiagnostic = moment(
      diagnostic.dateDebutDiagnostic,
      "DD/MM/YYYY HH:mm"
    ).format("yyyy-MM-DDTHH:mm");
    console.log("diag", diagnostic);
    setValues({
      ...diagnostic,
      dateDebutDiagnostic: dateDebutDiagnostic,
      dateFinDiagnostic: dateFinDiagnostic,
    });
    setDefautsConsta(diagnostic.defauts);
    setRepaAfaire(diagnostic.reparations);
    setPieceAcommande(diagnostic.pieceForCommande);
    console.log("useeffer");
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(pieceAcommande);
    console.log("date before moment : ", values.dateDebutDiagnostic);
    // const datedebutDiag = moment(values.dateDebutDiagnostic, "yyyy-MM-DDTHH:mm").format("DD/MM/YYYY HH:mm")
    // const datefinDiag = moment(values.dateDebutDiagnostic, "yyyy-MM-DDTHH:mm").format("DD/MM/YYYY HH:mm")
    values.pieceForCommande = pieceAcommande;
    values.defauts = defautsConsta;
    values.reparations = repaAfaire;
    values.dateDebutDiagnostic = moment(
      values.dateDebutDiagnostic,
      "yyyy-MM-DDTHH:mm"
    ).format("DD/MM/YYYY HH:mm");
    values.dateFinDiagnostic = moment(
      values.dateFinDiagnostic,
      "yyyy-MM-DDTHH:mm"
    ).format("DD/MM/YYYY HH:mm");
    // setValues({...values,pieceForCommande:pieceAcommande,dateDebutDiagnostic:datedebutDiag,dateFinDiagnostic:datefinDiag})
    console.log("values: ", values);
    updateDiagnostic(values);
    // resetValues();
  };

  const onChange = (e) => {
    console.log(" dfeaur valu", e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const resetValues = () => {
    setValues({
      dateDebutDiagnostic: "",
      dateFinDiagnostic: "",
      intervenant: "",
      quantite: "",
      pieceName: "",
      defautName: "",
      actionName: "",
      immatricule: "",
      lieu: "",
      defauts: [],
      reparations: [],
      pieceForCommande: [],
    });
    setPieceAcommande([]);
    setDefautsConsta([]);
    setRepaAfaire([]);
    setIsCommande(false);
  };
  const removeItemListePieceAcommande = (item) => {
    console.log("piece", item);
    setPieceAcommande(
      pieceAcommande.filter((piece) => piece.pieceName !== item.pieceName)
    );
  };
  const removeItemListeDefaut = (item) => {
    console.log("defaut", item);
    setDefautsConsta(
      defautsConsta.filter((defaut) => defaut.defautName !== item.defautName)
    );
  };
  const removeItemListeRepa = (item) => {
    setRepaAfaire(
      repaAfaire.filter((repa) => repa.actionName !== item.actionName)
    );
  };

  switch (step) {
    case 1:
      return (
        <EditDiagnosticInfo
          nextStep={nextStep}
          values={values}
          onChange={onChange}
          // vehicules={vehicules}
        />
      );
    case 2:
      return (
        <EditDiagnosticDefaut
          defauts={defauts}
          focused={focused}
          setFocused={setFocused}
          prevStep={prevStep}
          nextStep={nextStep}
          values={values}
          onChange={onChange}
          setDefautsConsta={setDefautsConsta}
          defautsConsta={defautsConsta}
          removeItemListeDefaut={removeItemListeDefaut}
        />
      );
    case 3:
      return (
        <EditDiagnosticRepa
          reparations={reparations}
          focused={focused}
          setFocused={setFocused}
          prevStep={prevStep}
          nextStep={nextStep}
          values={values}
          onChange={onChange}
          setRepaAfaire={setRepaAfaire}
          repaAfaire={repaAfaire}
          removeItemListeRepa={removeItemListeRepa}
        />
      );
    case 4:
      return (
        <EditPieceCommande
          pieces={pieces}
          focused={focused}
          setFocused={setFocused}
          prevStep={prevStep}
          nextStep={nextStep}
          values={values}
          onChange={onChange}
          setPieceAcommande={setPieceAcommande}
          pieceAcommande={pieceAcommande}
          removeItemListePieceAcommande={removeItemListePieceAcommande}
        />
      );
    case 5:
      return (
        <FinalEditDiagnostic
          values={values}
          // showPdfButton={showPdfButton}
          handleSubmit={handleSubmit}
          prevStep={prevStep}
          defautsConsta={defautsConsta}
          repaAfaire={repaAfaire}
          pieceAcommande={pieceAcommande}
          loading={loading}

          // pdfDiagnosticData={pdfDiagnosticData}
        />
      );
    // case 4:
    //   return (
    //     <Success />
    // // never forget the default case, otherwise VS code would be mad!
    //   )
    default:
    // do nothing
  }
}
export default EditDiagnostic;
