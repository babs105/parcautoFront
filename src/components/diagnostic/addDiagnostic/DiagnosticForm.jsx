import { useState, useContext ,useEffect} from "react";
import moment from "moment";
import DiagnosticInfo from "./DiagnosticInfo";
import PieceForCommande from "./PieceForCommande";
import DiagnosticFinal from "./DiagnosticFinal";
import DiagnosticDefaut from "./DiagnosticDefaut";
import DiagnosticRep from "./DiagnosticRepa";
import { StateContext } from "../../../context/StateContext";


function DiagnosticForm({location}) {
  const vehicule = location.state
  const { 
    pieces,
    vehicules,
    defauts,
    reparations,
    getAllPieces,
    getAllVehicules ,
    getAllDefauts,
    getAllReparations,
    addDiagnostic,
    loading
  
    } = useContext(StateContext);
  const [values, setValues] = useState({
    dateDebutDiagnostic: "",
    dateFinDiagnostic:'',
    intervenant:"",
    quantite: "",
    pieceName:'',
    statut:'',
    defautName:'',
    actionName:'',
    immatricule: vehicule.immatricule,
    lieu:'',
    defauts:[],
    reparations:[],
    pieceForCommande:[]
  });
  const [focused, setFocused] = useState(false);
  const [isCommande, setIsCommande] = useState(false);
  const [pieceAcommande,setPieceAcommande] = useState([]);
  const [defautsConsta,setDefautsConsta] = useState([]);
  const [repaAfaire,setRepaAfaire] = useState([]);
  const [step,setStep] = useState(1);

// go back to previous step
 
   const prevStep = () => {
    setStep(step - 1);
  }
  const nextStep = () => {
    setStep(step +1);
  }
 
  useEffect(() => {
   getAllPieces()
   getAllVehicules()
   getAllDefauts()
   getAllReparations()
   console.log('useeffer')
 
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(pieceAcommande);
    console.log('date before moment : ',values.dateDebutDiagnostic);
    // const datedebutDiag = moment(values.dateDebutDiagnostic, "yyyy-MM-DDTHH:mm").format("DD/MM/YYYY HH:mm")
    // const datefinDiag = moment(values.dateDebutDiagnostic, "yyyy-MM-DDTHH:mm").format("DD/MM/YYYY HH:mm")
     values.pieceForCommande=pieceAcommande;
     values.defauts=defautsConsta;
     values.reparations=repaAfaire;
     values.dateDebutDiagnostic=moment(values.dateDebutDiagnostic, "yyyy-MM-DDTHH:mm").format("DD/MM/YYYY HH:mm");
     values.dateFinDiagnostic=moment(values.dateFinDiagnostic, "yyyy-MM-DDTHH:mm").format("DD/MM/YYYY HH:mm");
    // setValues({...values,pieceForCommande:pieceAcommande,dateDebutDiagnostic:datedebutDiag,dateFinDiagnostic:datefinDiag})
    console.log('date after moment  :',values.dateDebutDiagnostic);
    addDiagnostic(values);
    resetValues();
  
    
  };

  const onChange = (e) => {
    console.log(' dfeaur valu', e.target.value )
    setValues({ ...values, [e.target.name]: e.target.value });

  };
  const resetValues =()=>{
    setValues({
      dateDebutDiagnostic: "",
      dateFinDiagnostic:'',
      intervenant:"",
      quantite: "",
      pieceName:'',
      defautName:'',
      actionName:'',
      immatricule:'',
      lieu:'',
      defauts:[],
      reparations:[],
      pieceForCommande:[]
    })
    setPieceAcommande([])
    setDefautsConsta([])
    setRepaAfaire([])
    setIsCommande(false)
  }
  const removeItemListePieceAcommande = (item) => {
    setPieceAcommande(pieceAcommande.filter((piece) => piece.pieceName !== item.pieceName));
  };
  const removeItemListeDefaut = (item) => {
    setDefautsConsta(defautsConsta.filter((defaut) => defaut.defautName !== item.defautName));
  };
  const removeItemListeRepa = (item) => {
    setRepaAfaire(repaAfaire.filter((repa) => repa.actionName !== item.actionName));
  };
 
    switch (step) {
        case 1: 
          return (
            <DiagnosticInfo  nextStep={nextStep} values={values} onChange={onChange} vehicules={vehicules} />
          )
        case 2: 
          return (
            <DiagnosticDefaut defauts={defauts} focused={focused}  setFocused={setFocused} prevStep={prevStep} nextStep={nextStep} values={values}  onChange={onChange} setDefautsConsta={setDefautsConsta} defautsConsta={defautsConsta} removeItemListeDefaut={removeItemListeDefaut} />
          )
        case 3: 
          return (
            <DiagnosticRep reparations={reparations} focused={focused}  setFocused={setFocused} prevStep={prevStep} nextStep={nextStep} values={values}  onChange={onChange} setRepaAfaire={setRepaAfaire} repaAfaire={repaAfaire} removeItemListeRepa={removeItemListeRepa} />
          )
        case 4: 
          return (
            <PieceForCommande pieces={pieces} focused={focused}  setFocused={setFocused} prevStep={prevStep} nextStep={nextStep} values={values} onChange={onChange} isCommande={isCommande}setPieceAcommande={setPieceAcommande} pieceAcommande={pieceAcommande} setIsCommande={setIsCommande} removeItemListePieceAcommande={removeItemListePieceAcommande} />
          )
        case 5: 
          return (
          <DiagnosticFinal defautsConsta={defautsConsta} repaAfaire={repaAfaire} pieceAcommande ={pieceAcommande} values ={values} handleSubmit={handleSubmit} prevStep={prevStep} values={values} pieceAcommande={pieceAcommande} loading={loading} />
          )
        // case 4:
        //   return (
        //     <Success />
        // // never forget the default case, otherwise VS code would be mad!
        //   )
          default: 
           // do nothing
      
    }
}
export default DiagnosticForm;
