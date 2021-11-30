import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loader from "react-loader-spinner";

function FinalEditDiagnostic({
  handleSubmit,
  prevStep,
  values,
  pieceAcommande,
  defautsConsta,
  repaAfaire,
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
        <h1 className="titleForm">Enrgistrer Modification Diagnostic</h1>

        <h4> Date heure debut : {values.dateDebutDiagnostic}</h4>
        <h4> date heur fin : {values.dateFinDiagnostic}</h4>
        <h4> Lieu : {values.lieu}</h4>
        <h4>Vehicule : {values.immatricule}</h4>
        <h4>Intervenant : {values.intervenant}</h4>
        <ul className="listCommande">
          <h4>{"Defauts constates"}</h4>
          {defautsConsta.map((defaut, index) => (
            <li key={index}>{defaut.defautName}</li>
          ))}
        </ul>
        <ul className="listCommande">
          <h4> {"reparations a faire"}</h4>
          {repaAfaire.map((repa, index) => (
            <li key={index}>{repa.actionName}</li>
          ))}
        </ul>
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
            disabled={!values["dateDebutDiagnostic"] || !values["immatricule"]}
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
                loading ||
                !values["dateDebutDiagnostic"] ||
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
          )}
        </div>
      </form>
      {/* {showPdfButton && pdfDiagnosticData && (
        <PDFDownloadLink
          document={<DiagnosticPdf data={pdfDiagnosticData} />}
          style={{ color: "red", marginTop: "50px" }}
          fileName="Diagnostic.pdf"
        >
          {({ url, loading, error }) =>
            loading ? (
              "..."
            ) : (
              <span>
                {"Telechargez en "}
                <PictureAsPdfIcon />
              </span>
            )
          }
        </PDFDownloadLink>
      )} */}
    </>
  );
}

export default FinalEditDiagnostic;
