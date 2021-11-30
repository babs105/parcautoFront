import { v4 as uuidv4 } from "uuid";


import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DeleteIcon from '@material-ui/icons/Delete';

function DiagnosticRep({reparations,focused , setFocused, nextStep ,prevStep,values, onChange, setRepaAfaire,repaAfaire,removeItemListeRepa}) {
   
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
      const previous = e => {
        e.preventDefault();
        prevStep();
      }
      
      const addToList =()=>{
      
   
       if(repaAfaire.length > 0 ){
       console.log('tab not empty',  repaAfaire.length )
        let data = repaAfaire.filter(item =>item.actionName !== values['actionName'] 
       )   
       setRepaAfaire([...data,{ id: uuidv4(),actionName:values['actionName']} ])
      }else{
        setRepaAfaire([ ...repaAfaire,{ id: uuidv4(),actionName:values['actionName']}])
      }
       //  defautsConsta.map(item =>{
        
      //   console.log('item', item.defautName)
        //  item.defautName !== values['defautName'] && setDefautsConsta([ ...defautsConsta,{ id: uuidv4(),defautName:values['defautName']} ])
      // })
      //  : setDefautsConsta([ ...defautsConsta,{ id: uuidv4(),defautName:values['defautName']} ])
      
    }
    return (
     <>
        <div className="navigationStep">
          <ul className="nextStepLinkBloc">
         
           <li onClick={previous} className='prevStepLink'>  <ArrowBackIcon/> Retour</li> 
            <li onClick={Continue} className='prevStepLink'>Suivant  <ArrowForwardIcon/></li>
           
          </ul>
        
        </div>
        <form  className="form">
          <h1 className="titleForm">Reparation a faire  </h1>
          {/* <div className="commande"> */}
     {/* <span className="commandeText">Passez une Commande de pieces ?</span>
   <input name='commande' type='checkbox' value={isCommande} onChange={()=>setIsCommande(!isCommande)}/>
     </div>  */}
    
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
      <label className='labelInput'>{"Action a faire"}</label>
        <input className='pieceInputForm'
                    name= "actionName"
                    type ="text"
                    pattern= "^[A-Za-z0-9 ]{3,36}$"
                    required
                    onChange={onChange}
                    onBlur={()=> setFocused(true)}
                    focused={focused.toString()}  
                    value={values['actionName'] }   
                      />
                        {/* {['',...reparations].map((item,index) => (
                          <option key={index} value={item.actionName}>
                            {item.actionName}
                          </option>
                        ))}
                      </select> */}
      <span className='inputError'>{"actionName Obligation"}</span>

    </div>
        <div className='buttonAddList' onClick={()=>{
            values['actionName'] && addToList()}}>
               <PlaylistAddIcon/>
               <span className="buttonAddText">Ajouter</span>
        </div>    
          </div>
        <table className="styled-table">
    <thead>
        <tr>
            <th>Taches a faire</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    {repaAfaire.map((repa ,index) =>
        <tr  key={index} className="active-row">
            <td>{repa.actionName}</td>  
            <td><span className='delItem' onClick={() =>removeItemListeRepa(repa)}> <DeleteIcon/></span></td>
        </tr>
       )
      }   </tbody>
      </table>
        </form>
        
        
    </>
    )
}
export default DiagnosticRep
