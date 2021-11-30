import React from "react";
import { v4 as uuidv4 } from "uuid";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DeleteIcon from "@material-ui/icons/Delete";
function PiecesCommandesAvalider({
  pieces,
  focused,
  setFocused,
  nextStep,
  prevStep,
  values,
  onChange,
  setPieceAcommande,
  pieceAcommande,
  removeItemListePieceAcommande,
}) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const addToList = () => {
    if (pieceAcommande.length > 0) {
      console.log("tab not empty", pieceAcommande.length);
      let data = pieceAcommande.filter(
        (item) => item.pieceName !== values["pieceName"]
      );
      setPieceAcommande([
        ...data,
        {
          id: uuidv4(),
          quantite: values["quantite"],
          pieceName: values.pieceName,
          prixUnitaire: values.prixUnitaire,
        },
      ]);
    } else {
      setPieceAcommande([
        ...pieceAcommande,
        {
          id: uuidv4(),
          quantite: values["quantite"],
          pieceName: values.pieceName,
          prixUnitaire: values.prixUnitaire,
        },
      ]);
    }
  };
  const inputs = [
    {
      id: 1,
      name: "quantite",
      type: "text",
      errorMessage: "Quantite obligatoire",
      label: "Quantite ",
      placeholder: "quantite",
      pattern: "[0-9]{1,10}",
      required: true,
    },
    // {
    // id: 2,
    // name: "quantite",
    // type: "text",
    // placeholder: "quantite",
    // errorMessage: "Quantite Obligatoire",
    // label: "Quantite",
    // pattern: "[0-9]{1,10}",
    // required: true,
    // },
    // {
    //   id: 3,
    //   name: "prixUnitaire",
    //   type: "text",
    //   placeholder: "Prix Unitaire",
    //   errorMessage: "Prix Unitaire Obligatoire",
    //   pattern: "[0-9]{1,20}",
    //   label: "Prix Unitaire",
    //   required: true,
    // },
  ];

  const inputsSelect = [
    // {
    //   id: 1,
    // name: "pieceName",
    // type: "text",
    // errorMessage: "Piece obligatoire",
    // label: "Materiel a commander",
    // data:['Selectionnez le Materiel',...pieces.map(piece => piece.pieceName)],
    // pattern: "^[A-Za-z0-9 ]{3,36}$",
    // required: true,
    // },
    {
      id: 1,
      name: "pieceName",
      type: "text",
      errorMessage: "Piece obligatoire",
      label: "Nom ou Reference piece",
      data: ["", ...pieces.map((piece) => piece.pieceName)],
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
  ];

  return (
    <>
      <div className="navigationStep">
        <ul className="nextStepLinkBloc">
          <li onClick={previous} className="prevStepLink">
            <ArrowBackIcon /> Retour
          </li>
          <li onClick={Continue} className="prevStepLink">
            Suivant <ArrowForwardIcon />
          </li>
        </ul>
      </div>
      <form className="form">
        <h1 className="titleForm">Besoins Materiels </h1>
        {/* <div className="commande">
          <span className="commandeText">Passez une Commande de pieces ?</span>
          <input
            name="commande"
            type="checkbox"
            value={isCommande}
            onChange={() => setIsCommande(!isCommande)}
          />
        </div> */}

        <>
          <div className="inputRowContainer">
            {/* {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))} */}
            <div className="formInput">
              <label className="labelInput">{"Materiel a commander"}</label>
              <select
                className="pieceInputForm"
                name="pieceName"
                type="text"
                pattern="^[A-Za-z0-9 ]{3,36}$"
                required={true}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                focused={focused.toString()}
                value={values.pieceName}
              >
                {["", ...pieces].map((item, index) => (
                  <option key={index} value={item.pieceName}>
                    {item.pieceName}
                  </option>
                ))}
              </select>
              <span className="inputError">{"Piece obligatoire"}</span>
            </div>
            <div className="formInput">
              <label className="labelInput">{"Quantite"}</label>
              <input
                className="quantiteInput"
                name="quantite"
                type="text"
                placeholder="quantite"
                pattern="[0-9]{1,10}"
                required={true}
                value={values.quantite}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                focused={focused.toString()}
              />
              <span className="inputError">{"Quantite Obligatoire"}</span>
            </div>
            <div className="formInput">
              <label className="labelInput">{"Prix Unitaire"}</label>
              <input
                className="quantiteInput"
                name="prixUnitaire"
                type="text"
                placeholder="prix unitaire"
                pattern="[0-9]{1,10}"
                // required={true}
                value={values.prixUnitaire}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                focused={focused.toString()}
              />
              <span className="inputError">{"Prix Unitaire Obligatoire"}</span>
            </div>
            <div
              className="buttonAddList"
              onClick={() => {
                values["pieceName"] &&
                  Number(values["quantite"]) &&
                  addToList();
              }}
            >
              <PlaylistAddIcon />
              <div className="buttonAddText">Ajouter</div>
            </div>
          </div>
          <h4>{"Materiel / Piece commandes"}</h4>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Nom Piece</th>
                <th>Quantite</th>
                <th>Prix Unitaire</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pieceAcommande.map((piece, index) => (
                <tr key={index} className="active-row">
                  <td>{piece.pieceName}</td>
                  <td>{piece.quantite}</td>
                  <td>{piece.prixUnitaire}</td>
                  <td>
                    <span
                      className="delItem"
                      onClick={() => removeItemListePieceAcommande(piece)}
                    >
                      <DeleteIcon />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </form>
    </>
  );
}
export default PiecesCommandesAvalider;
