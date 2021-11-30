import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import moment from "moment";
import pic from "../../logoSastrans.png";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  movieContainer: {
    flex: 1,
    backgroundColor: "#f6f6f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    borderWidth: 3,
    // backgroundColor: "grey",
    margin: 15,
  },
});

export function DiagnosticPdf(props) {
  const [dureeIntervention, setDureeIntervention] = useState("");
  console.log("pdf props", props.data);
  const { data } = props;
  useEffect(() => {
    msToTime(data.dateDebutDiagnostic, data.dateFinDiagnostic);
  }, []);
  const msToTime = (dbstring, dfstring) => {
    console.log("debut :", dbstring);
    console.log("fin :", dfstring);
    const dd = moment(dbstring, "DD/MM/YYYY HH:mm").toDate();
    const df = moment(dfstring, "DD/MM/YYYY HH:mm").toDate();
    const duration = df - dd;
    console.log("duration :", duration);
    var days, hours, minutes, seconds, th, tm, ts;
    ts = parseInt(Math.floor(duration / 1000));
    tm = parseInt(Math.floor(ts / 60));
    th = parseInt(Math.floor(tm / 60));
    days = parseInt(Math.floor(th / 24));
    seconds = parseInt(Math.floor(ts % 60));
    minutes = parseInt(Math.floor(tm % 60));
    hours = parseInt(Math.floor(th % 24));

    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = days > 0 ? days * 24 + hours : hours < 10 ? "0" + hours : hours;
    setDureeIntervention(hours + " h " + minutes + " mn ");
    // return diff.asDays();
  };

  return (
    <Document>
      <Page style={styles.page}>
        {data ? (
          <View style={styles.movieContainer}>
            <View
              style={{
                borderWidth: 2,
                height: 80,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Image
                src={pic}
                style={{ width: 70, height: 70, marginRight: 100 }}
              />
              <Text
                style={{
                  fontSize: 22,
                  textAlign: "center",
                  padding: 10,
                  backgroundColor: "grey",
                  // opacity: 0.5,
                }}
              >
                {"DIAGNOSTIC VEHICULE"}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 2,
                padding: 4,
                height: 70,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  marginRight: 150,
                }}
              >
                <Text style={{ fontSize: 12 }}>{"DESIGNATION: "}</Text>
                <Text style={{ fontSize: 12 }}>{"TYPE: "}</Text>
              </View>
              <View
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginRight: 150,
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{ fontSize: 12 }}
                >{`NOM : ${data.immatricule}`}</Text>
                <Text style={{ fontSize: 12 }}>{`LIEU :${data.lieu}`}</Text>
              </View>

              <View
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  marginRight: 150,
                }}
              >
                <Text style={{ fontSize: 12 }}>{"MARQUE: "}</Text>
                <Text style={{ fontSize: 12 }}>{"IMPUTATION: "}</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 2,
                height: 30,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 4,
              }}
            >
              <Text
                style={{ fontSize: 12 }}
              >{`NOM DE L'INTERVENANT : ${data.intervenant}`}</Text>
            </View>
            <View
              style={{
                // borderWidth: 2,
                // padding: 4,
                width: "100%",
                height: 70,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  padding: 4,
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  borderWidth: 2,
                }}
              >
                <Text
                  style={{ fontSize: 12 }}
                >{`DATE HEURE DEBUT : ${data.dateDebutDiagnostic}`}</Text>
                <Text
                  style={{ fontSize: 12 }}
                >{`DATE HEURE FIN : ${data.dateFinDiagnostic}`}</Text>
              </View>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  padding: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  borderWidth: 2,
                }}
              >
                <Text style={{ fontSize: 12 }}>{"DUREE INTERVENTION: "}</Text>
                <Text style={{ fontSize: 12 }}>{`${dureeIntervention} `}</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 2,
                padding: 4,
                width: "100%",
                height: 150,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text>{"DEFAUTS CONSTATES APRES DIAGNOSTIC :"}</Text>

              <View
                style={{
                  padding: 4,
                  // height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {data.defauts.map((defaut, index) => (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                    key={index}
                  >
                    <Text style={{ fontSize: 12, marginRight: 10 }}>
                      {defaut.defautName}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View
              style={{
                borderWidth: 2,
                padding: 4,
                width: "100%",
                height: 150,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text>{"REPARATION / INTERVENTION A EFFECTUER :"}</Text>
              <View
                style={{
                  padding: 4,
                  // height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {data.reparations.map((repa, index) => (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                    key={index}
                  >
                    <Text style={{ fontSize: 12, marginRight: 10 }}>
                      {repa.actionName}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View
              style={{
                borderWidth: 2,
                padding: 4,
                width: "100%",
                height: 150,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text>{"BESOINS MATERIELS / OUTILLAGE :"}</Text>
              <View
                style={{
                  padding: 4,
                  // height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {data.pieceForCommande.map((piece, index) => (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                    key={index}
                  >
                    <Text style={{ fontSize: 12, marginRight: 10 }}>
                      {piece.quantite}
                    </Text>
                    <Text style={{ fontSize: 12 }}>{piece.pieceName}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View>
              <View
                style={{
                  marginTop: 10,
                  padding: 4,
                  width: "100%",
                  height: 100,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    borderBottomWidth: 1,
                  }}
                >
                  {"VISAS"}
                </Text>
                <View
                  style={{
                    padding: 4,
                    // height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      borderBottomWidth: 1,
                    }}
                  >
                    {"L'intervenant(s)"}
                  </Text>
                  <Text style={{ fontSize: 12, borderBottomWidth: 1 }}>
                    {"Chef de Parc Automobile"}
                  </Text>
                </View>
              </View>
              {/* <Text style={{ fontSize: 12 }}>Date :{moment(new Date().now(),)}</Text> */}
            </View>
          </View>
        ) : (
          ""
        )}
      </Page>
    </Document>
  );
}
