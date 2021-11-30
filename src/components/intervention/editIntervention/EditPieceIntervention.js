import { v4 as uuidv4 } from "uuid";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DeleteIcon from "@material-ui/icons/Delete";

function EditPieceIntervention({
  pieces,
  focused,
  setFocused,
  nextStep,
  prevStep,
  values,
  qtePiece,
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
    if (qtePiece >= values.quantite) {
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
          },
        ]);
      } else {
        setPieceAcommande([
          ...pieceAcommande,
          {
            id: uuidv4(),
            quantite: values["quantite"],
            pieceName: values.pieceName,
          },
        ]);
      }
    } else {
    }
  };

  return (
    <>
      <div className="navigationStep">
        <ul className="nextStepLinkBloc">
          <li onClick={previous} className="prevStepLink">
            {" "}
            <ArrowBackIcon /> Retour
          </li>
          <li onClick={Continue} className="prevStepLink">
            Suivant <ArrowForwardIcon />
          </li>
        </ul>
      </div>
      <form className="form">
        <h1 className="titleForm">Pieces ou Elements Remplaces </h1>
        <>
          <div>
            <div className="formInput">
              <label className="labelInput">{"Piece ou Materiel"} </label>
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
              <div style={{ marginTop: "5px" }}></div>
              <span style={{ color: "gray" }}>
                Quantite en Stock: {qtePiece}
              </span>
              <div style={{ marginTop: "25px" }}></div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
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
          </div>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Nom Piece</th>
                <th>Quantite</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pieceAcommande.map((piece, index) => (
                <tr key={index} className="active-row">
                  <td>{piece.pieceName}</td>
                  <td>{piece.quantite}</td>
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
export default EditPieceIntervention;
