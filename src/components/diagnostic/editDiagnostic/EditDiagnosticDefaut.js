import React from "react";
import { v4 as uuidv4 } from "uuid";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DeleteIcon from "@material-ui/icons/Delete";

function EditDiagnosticDefaut({
  defauts,
  focused,
  setFocused,
  nextStep,
  prevStep,
  values,
  onChange,
  setDefautsConsta,
  defautsConsta,
  removeItemListeDefaut,
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
    if (defautsConsta.length > 0) {
      console.log("tab not empty", defautsConsta.length);
      let data = defautsConsta.filter(
        (item) => item.defautName !== values["defautName"]
      );
      setDefautsConsta([
        ...data,
        { id: uuidv4(), defautName: values["defautName"] },
      ]);
    } else {
      setDefautsConsta([
        ...defautsConsta,
        { id: uuidv4(), defautName: values["defautName"] },
      ]);
    }
    //  defautsConsta.map(item =>{

    //   console.log('item', item.defautName)
    //  item.defautName !== values['defautName'] && setDefautsConsta([ ...defautsConsta,{ id: uuidv4(),defautName:values['defautName']} ])
    // })
    //  : setDefautsConsta([ ...defautsConsta,{ id: uuidv4(),defautName:values['defautName']} ])
  };
  return (
    <div className="containerRight">
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
        <h1 className="titleForm">Defauts Constates </h1>
        <div className="formInput">
          <label className="labelInput">{"Panne ou Defaillance"}</label>
          <select
            className="pieceInputForm"
            name="statut"
            type="text"
            pattern="^[A-Za-z0-9 ]{3,36}$"
            required
            onChange={onChange}
            onBlur={() => setFocused(true)}
            focused={focused.toString()}
            value={values["statut"]}
          >
            <option key={1} value={"defaillance"}>
              {"defaillance"}
            </option>
            <option key={2} value={"panne"}>
              {"panne"}
            </option>
          </select>
          <span className="inputError">{"Statut obligatoire"}</span>
          {/* </div> */}
        </div>
        <div className="inputRowContainer">
          <div className="formInput">
            <label className="labelInput">{"Liste defauts"}</label>
            <input
              className="pieceInputForm"
              name="defautName"
              type="text"
              pattern="^[A-Za-z0-9 ]{3,36}$"
              required
              onChange={onChange}
              onBlur={() => setFocused(true)}
              focused={focused.toString()}
              value={values["defautName"]}
            />
            {/* {["", ...defauts].map((item, index) => (
                <option key={index} value={item.defautName}>
                  {item.defautName}
                </option>
              ))}
            </select> */}
            <span className="inputError">{"Defaut Obligation"}</span>
          </div>
          <div
            className="buttonAddList"
            onClick={() => {
              values["defautName"] && addToList();
            }}
          >
            <PlaylistAddIcon />
            <span className="buttonAddText">Ajouter</span>
          </div>
        </div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Defauts</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {defautsConsta.map((defaut, index) => (
              <tr key={index} className="active-row">
                <td>{defaut.defautName}</td>
                <td>
                  <span
                    className="delItem"
                    onClick={() => removeItemListeDefaut(defaut)}
                  >
                    <DeleteIcon />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default EditDiagnosticDefaut;
