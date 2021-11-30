import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import { StateContext } from "../../../context/StateContext";
import CommandeAvalider from "./CommandeAvalider";
import PiecesCommandesAvalider from "./PiecesCommandesAvalider";
import FinalDetailCommande from "./FinalDetailCommande";

function DetailCommandeAvalider({ location }) {
  const { pieces, getAllPieces, updateCommande, loading } =
    useContext(StateContext);
  const commande = location.state;

  const [values, setValues] = useState({
    id: "",
    dateCommande: "",
    idDiagnostic: commande.idDiagnostic,
    prixUnitaire: "",
    immatricule: commande.immatricule,
    piecesCommamdes: [],
  });
  const [focused, setFocused] = useState(false);
  const [pieceAcommande, setPieceAcommande] = useState([]);
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
    const dateCommande = moment(
      commande.dateCommande,
      "DD/MM/YYYY HH:mm"
    ).format("yyyy-MM-DDTHH:mm");

    console.log("diag", commande);
    setValues({
      ...commande,
      dateCommande: dateCommande,
    });

    setPieceAcommande(commande.piecesCommamdes);
    console.log("useeffer");
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    values.piecesCommamdes = pieceAcommande;
    values.dateCommande = moment(
      values.dateCommande,
      "yyyy-MM-DDTHH:mm"
    ).format("DD/MM/YYYY HH:mm");

    // setValues({...values,pieceForCommande:pieceAcommande,dateDebutDiagnostic:datedebutDiag,dateFinDiagnostic:datefinDiag})

    console.log("values: ", values);
    updateCommande(values);
    // resetValues();
  };

  const onChange = (e) => {
    console.log(" dfeaur valu", e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const resetValues = () => {
    setValues({
      dateCommande: "",
      immatricule: "",
      piecesCommamdes: [],
    });
    setPieceAcommande([]);
  };
  const removeItemListePieceAcommande = (item) => {
    setPieceAcommande(
      pieceAcommande.filter((piece) => piece.pieceName !== item.pieceName)
    );
  };

  switch (step) {
    case 1:
      return (
        <CommandeAvalider
          nextStep={nextStep}
          values={values}
          onChange={onChange}
          //   vehicules={vehicules}
        />
      );
    case 2:
      return (
        <PiecesCommandesAvalider
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
    // case 3:
    //   return (
    //     <EditDiagnosticRepa
    //       reparations={reparations}
    //       focused={focused}
    //       setFocused={setFocused}
    //       prevStep={prevStep}
    //       nextStep={nextStep}
    //       values={values}
    //       onChange={onChange}
    //       setRepaAfaire={setRepaAfaire}
    //       repaAfaire={repaAfaire}
    //       removeItemListeRepa={removeItemListeRepa}
    //     />
    //   );
    // case 4:
    //   return (
    //     <EditPieceCommande
    //       pieces={pieces}
    //       focused={focused}
    //       setFocused={setFocused}
    //       prevStep={prevStep}
    //       nextStep={nextStep}
    //       values={values}
    //       onChange={onChange}
    //       setPieceAcommande={setPieceAcommande}
    //       pieceAcommande={pieceAcommande}
    //       removeItemListePieceAcommande={removeItemListePieceAcommande}
    //     />
    //   );
    case 3:
      return (
        <FinalDetailCommande
          handleSubmit={handleSubmit}
          prevStep={prevStep}
          values={values}
          pieceAcommande={pieceAcommande}
          loading={loading}
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

export default DetailCommandeAvalider;
