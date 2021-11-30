import React, { useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loader from "react-loader-spinner";

function EditFinalintervention({
  handleSubmit,
  repaAfaire,
  prevStep,
  values,
  loading,
  pieceAcommande,
}) {
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  useEffect(() => {}, []);
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
        <h1 className="titleForm">Resume Intervention</h1>
        <h4> Date heure debut : {values.dateDebutIntervention}</h4>
        <h4> date heure fin : {values.dateFinIntervention}</h4>
        <h4> Lieu : {values.lieu}</h4>
        <h4>Vehicule : {values.immatricule}</h4>
        <h4>Intervenant : {values.intervenant}</h4>

        <ul className="listCommande">
          <h4> {"reparations effectuees :"}</h4>
          {repaAfaire &&
            repaAfaire.map((repa, index) => (
              <li key={index}>{repa.actionName}</li>
            ))}
        </ul>
        <ul className="listCommande">
          <h4> {"Pieces / elements remplaces :"}</h4>
          {pieceAcommande &&
            pieceAcommande.map((stock, index) => (
              <li key={index}>
                {stock.quantite} - {stock.pieceName}
              </li>
            ))}
        </ul>
        <div className="formNavigation">
          {/* <button
            disabled={
              !values["dateDebutIntervention"] || !values["immatricule"]
            }
            className="buttonForm"
          >
            Valider
          </button> */}
          {
            //   loading
            loading ? (
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
                  loading ||
                  !values["dateDebutIntervention"] ||
                  !values["immatricule"]
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
            )
          }
        </div>
      </form>
      {/* {showPdfButton && pdfDiagnosticData &&<PDFDownloadLink
        document={<DiagnosticPdf data={pdfDiagnosticData} />}
        fileName="Diagnostic.pdf"
        style={{
          margin:'auto',
          textDecoration: "none",
          padding: "10px",
          color: "white",
          backgroundColor: "orange",
          border: "1px solid #4a4a4a"
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Telechargement en cours..." : " Telechargez"
        }
      </PDFDownloadLink>} */}
    </>
  );
}

export default EditFinalintervention;
