import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loader from "react-loader-spinner";
function FinalDetailCommande({
  handleSubmit,
  prevStep,
  values,
  pieceAcommande,
  loading,
}) {
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <>
      <div className="navigationStep">
        <ul className="nextStepLinkBloc">
          <li onClick={previous} className="prevStepLink">
            <ArrowBackIcon /> Retour
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titleForm">Resume commande</h1>

        <h4>Vehicule : {values.immatricule}</h4>

        <ul className="listCommande">
          <h4> {"Besoins Materiels"}</h4>
          {pieceAcommande.map((stock, index) => (
            <li key={index}>
              {stock.quantite} - {stock.pieceName}
            </li>
          ))}
        </ul>
        <div className="formNavigation">
          {/* <button
            disabled={!values["dateCommande"] || !values["immatricule"]}
            className="buttonForm"
          >
            Valider
          </button> */}
          {loading ? (
            <button disabled={true} className="buttonForm">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "green",
                }}
              >
                <Loader type="Puff" color="green" height={20} width={30} />
                Traitement ...
              </div>
            </button>
          ) : (
            <button
              disabled={
                loading || !values["dateCommande"] || !values["immatricule"]
              }
              className="buttonForm"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Enregistrer
              </div>
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default FinalDetailCommande;
