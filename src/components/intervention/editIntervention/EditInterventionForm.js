import { useState, useContext, useEffect } from "react";
import moment from "moment";
import { StateContext } from "../../../context/StateContext";
// import InterventionInfo from "./InterventionInfo";
// import RepaIntervention from "./RepaIntervention";
// import PieceIntervention from "./PieceIntervention";
// import CpteRenduIntervention from "./CpteRenduIntervention";
// import Finalintervention from "./Finalintervention";
import EditInterventionInfo from "./EditInterventionInfo";
import EditRepaIntervention from "./EditRepaIntervention";
import EditPieceIntervention from "./EditPieceIntervention";
import EditCpteRenduIntervention from "./EditCpteRenduIntervention";
import EditFinalintervention from "./EditFinalintervention";

function EditInterventionForm({ location }) {
  const intervention = location.state;
  const {
    pieces,
    reparations,
    getAllPieces,
    getAllReparations,
    updateIntervention,
    getQuantitePiece,
    qtePiece,
    loading,
  } = useContext(StateContext);
  const [values, setValues] = useState({
    dateDebutIntervention: "",
    dateFinIntervention: "",
    intervenant: "",
    quantite: "",
    pieceName: "",
    actionName: "",
    immatricule: intervention.immatricule,
    kilometrageActuel: "",
    lieu: "",
    categorie: "",
    nature: "",
    cpteRendu: "",
    estTeste: "",
    reparations: [],
    piecesRemplace: [],
  });
  const [focused, setFocused] = useState(false);
  const [pieceAcommande, setPieceAcommande] = useState([]);
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
    getAllReparations();
    const dateDebutIntervention = moment(
      intervention.dateDebutIntervention,
      "DD/MM/YYYY HH:mm"
    ).format("yyyy-MM-DDTHH:mm");
    const dateFinIntervention = moment(
      intervention.dateFinIntervention,
      "DD/MM/YYYY HH:mm"
    ).format("yyyy-MM-DDTHH:mm");
    setValues({
      ...intervention,
      dateDebutIntervention: dateDebutIntervention,
      dateFinIntervention: dateFinIntervention,
    });

    setRepaAfaire(intervention.reparations);
    setPieceAcommande(intervention.piecesRemplace);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(pieceAcommande);
    console.log("date before moment : ", values.dateDebutIntervention);
    // const datedebutDiag = moment(values.dateDebutDiagnostic, "yyyy-MM-DDTHH:mm").format("DD/MM/YYYY HH:mm")
    // const datefinDiag = moment(values.dateDebutDiagnostic, "yyyy-MM-DDTHH:mm").format("DD/MM/YYYY HH:mm")
    values.piecesRemplace = pieceAcommande;

    values.reparations = repaAfaire;
    values.dateDebutIntervention = moment(
      values.dateDebutIntervention,
      "yyyy-MM-DDTHH:mm"
    ).format("DD/MM/YYYY HH:mm");
    values.dateFinIntervention = moment(
      values.dateFinIntervention,
      "yyyy-MM-DDTHH:mm"
    ).format("DD/MM/YYYY HH:mm");
    // setValues({...values,pieceForCommande:pieceAcommande,dateDebutDiagnostic:datedebutDiag,dateFinDiagnostic:datefinDiag})
    console.log("values", values);
    updateIntervention(values);
    // resetValues();
  };

  const onChange = (e) => {
    console.log(" dfeaur valu", e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
    e.target.name === "pieceName" &&
      e.target.value !== "" &&
      getQuantitePiece(e.target.value);
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
      categorie: [],
      nature: [],
      lieu: "",
      reparations: [],
      piecesRemplace: [],
    });
    setPieceAcommande([]);

    setRepaAfaire([]);
  };
  const removeItemListePieceAcommande = (item) => {
    setPieceAcommande(
      pieceAcommande.filter((piece) => piece.pieceName !== item.pieceName)
    );
  };
  // const removeItemListeDefaut = (item) => {
  //   setDefautsConsta(defautsConsta.filter((defaut) => defaut.id !== item.id));
  // };
  const removeItemListeRepa = (item) => {
    setRepaAfaire(
      repaAfaire.filter((repa) => repa.actionName !== item.actionName)
    );
  };

  switch (step) {
    case 1:
      return (
        <EditInterventionInfo
          nextStep={nextStep}
          values={values}
          onChange={onChange}
        />
      );
    // case 2:
    //   return (
    //     <DiagnosticDefaut

    //       focused={focused}
    //       setFocused={setFocused}
    //       prevStep={prevStep}
    //       nextStep={nextStep}
    //       values={values}
    //       onChange={onChange}

    //     />
    //   );
    case 2:
      return (
        <EditRepaIntervention
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
    case 3:
      return (
        <EditPieceIntervention
          qtePiece={qtePiece}
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
    case 4:
      return (
        <EditCpteRenduIntervention
          focused={focused}
          setFocused={setFocused}
          onChange={onChange}
          values={values}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
          loading={loading}
        />
      );
    case 5:
      return (
        <EditFinalintervention
          handleSubmit={handleSubmit}
          values={values}
          prevStep={prevStep}
          pieceAcommande={pieceAcommande}
          repaAfaire={repaAfaire}
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
export default EditInterventionForm;
