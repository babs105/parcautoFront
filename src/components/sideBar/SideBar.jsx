import './sideBar.css'
import { NavLink } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import { useContext } from 'react';
import { StateContext } from '../../context/StateContext';
import HomeIcon from '@material-ui/icons/Home';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import PageviewIcon from '@material-ui/icons/Pageview';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import UpdateIcon from '@material-ui/icons/Update';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import BuildIcon from '@material-ui/icons/Build';
import DescriptionIcon from '@material-ui/icons/Description';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import InputIcon from '@material-ui/icons/Input';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import SettingsIcon from '@material-ui/icons/Settings';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
function SideBar() {
    const {sidebarOpen,closeSidebar} = useContext(StateContext)
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar" >
            <div className="sideBar_closeNav">
            <h1 className="sideBar_logo">Parc Auto</h1>  
             <span onClick={() => closeSidebar()}><CloseIcon/></span>
         
            </div>
           <div className="sideBarWrapper">
           <ul className="menuList">  
             <li className="menuItem">
               <NavLink to="/dashboard" activeClassName='menuLinkActive' className='menuLink'>
               <HomeIcon/> <h3 >Tableau de Bord</h3>
            </NavLink>
            </li>
            </ul>
           <h3>VEHICULE</h3> 
               <ul className="menuList"> 
                   <li className="menuItem">
                   <NavLink to="/vehicule/list-vehicule-dispo" activeClassName='menuLinkActive' className='menuLink'>
                    <VerifiedUserIcon className="icon-sideBar"/>   <span className="menuText"> Vehicules disponibles</span>
                   </NavLink>
                   </li>
                   

                   {/* <li className="menuItem">
                   <NavLink to="/diagnostic/add-diagnostic" className='menuLink'>
                   <span className="menuText">DO Diagnostic</span>
                   </NavLink>
                       
                   </li> */}
                     <li className="menuItem">
                   
                   <NavLink to="/vehicule/list-vehicule-Adiagnostic" activeClassName='menuLinkActive' className='menuLink'>
                   <PageviewIcon className="icon-sideBar"/><span className="menuText">Vehicules à diagnostiquer</span>
                   </NavLink>
                   </li>
                   <li className="menuItem">
                   <NavLink to="/vehicule/list-vehicule-defaillance" activeClassName='menuLinkActive' className='menuLink'>
                  <ReportProblemIcon className="icon-sideBar"/> <span className="menuText"> Vehicules en Defaillance</span>
                   </NavLink>
                   </li>
                  
                   <li className="menuItem">
                   <NavLink to="/vehicule/list-vehicule-panne" activeClassName='menuLinkActive' className='menuLink'>
                  <NotInterestedIcon className="icon-sideBar"/> <span className="menuText"> Vehicules en Panne</span>
                   </NavLink>
                   </li>
                  
                  
                   
                
                   {/* <li className="menuItem">
                   <NavLink to="/stock/add-stock" className='menuLink'>
                   <span className="menuText"> Vidange</span>
                   </NavLink>
                      
                   </li> */}

                   <li className="menuItem">
                   <NavLink to="/vehicule/list-vehicule-rappel" activeClassName='menuLinkActive' className='menuLink'>
                  <NotificationsActiveIcon className="icon-sideBar"/> <span className="menuText"> Rappels Vidange</span>
                   </NavLink>
                       
                   </li>
                   <li className="menuItem">
                   <NavLink to="/vehicule/list-vehicule-retard" activeClassName='menuLinkActive' className='menuLink'>
                   <NotificationsOffIcon className="icon-sideBar"/><span className="menuText">Retards Vidange</span>
                   </NavLink>
                   </li>
                 
                   
      </ul>
           {/* <h3>Entretien</h3> 
               <ul className="menuList"> 
                   <li className="menuItem">
                   <NavLink to="/vehicule/add-vehicule" className='menuLink'>
                       <span className="menuText">Parametrage Vidange</span>
                   </NavLink>
                   </li>
                   

                   <li className="menuItem">
                   <NavLink to="/diagnostic/add-diagnostic" className='menuLink'>
                   <span className="menuText"> Rappel Vidange</span>
                   </NavLink>
                       
                   </li>
                   <li className="menuItem">
                   <NavLink to="/diagnostic/add-diagnostic" className='menuLink'>
                   <span className="menuText">Retard</span>
                   </NavLink>
                   </li>
                   <li className="menuItem">
                   <NavLink to="/stock/add-stock" className='menuLink'>
                   <span className="menuText"> Vidange</span>
                   </NavLink>
                      
                   </li>
      </ul> */}
      <h3>{'ENTRETIEN-REPARATION'}</h3> 
               <ul className="menuList"> 
                  
                
                   <li className="menuItem">
                   <NavLink to="/vehicule/suivi-kilometrage" activeClassName='menuLinkActive' className='menuLink'>
                   <UpdateIcon className="icon-sideBar"/><span className="menuText"> Suivi Kilometrage</span>
                   </NavLink>
                   </li>
                   <li className="menuItem">
                     
                     <NavLink to="/demandeTravail/list-demande" activeClassName='menuLinkActive' className='menuLink'>
                    <ListAltIcon className="icon-sideBar"/> <span className="menuText">Les demandes de Travail</span>
                     </NavLink>
                     </li>
                     <li className="menuItem">
                     <NavLink to="/diagnostic/list-diagnostic" activeClassName='menuLinkActive' className='menuLink'>
                     <PlaylistAddCheckIcon className="icon-sideBar"/><span className="menuText">Les Diagnostics</span>
                     </NavLink>
                     </li>
                   <li className="menuItem">
                   <NavLink to="/intervention/list-intervention" activeClassName='menuLinkActive' className='menuLink'>
                     <BuildIcon className="icon-sideBar"/>  <span className="menuText">Les Interventions</span>
                   </NavLink>
                   </li>
      </ul>
            <h3>COMMANDE</h3> 
               <ul className="menuList"> 
               <li className="menuItem">
                   <NavLink to="/commande/list-commande-avalider" activeClassName='menuLinkActive' className='menuLink'>
                   <LibraryAddCheckIcon className="icon-sideBar"/><span className="menuText"> Commande à valider </span>
                   </NavLink>
                   </li>
                   <li className="menuItem">
                   <NavLink to="/commande/list-commande-alivrer"  activeClassName='menuLinkActive' className='menuLink'>
                  <LibraryBooksIcon className="icon-sideBar"/> <span className="menuText"> Commande à livrer </span>
                   </NavLink>
                   </li>
                   <li className="menuItem">
                   <NavLink to="/commande/list-commande-livrer" activeClassName='menuLinkActive' className='menuLink'>
                   <EmojiTransportationIcon className="icon-sideBar"/>  <span className="menuText"> Commandes livrees </span>
                   </NavLink>
                   </li>
                   {/* <li className="menuItem">
                   <NavLink to="/stock/list-stock" activeClassName='menuLinkActive' className='menuLink'>
                   <span className="menuText"> Stock</span>
                   </NavLink>
                      
                   </li> */}
      </ul>
      <h3>STOCK</h3> 
               <ul className="menuList"> 
             
                 
                   <li className="menuItem">
                   <NavLink to="/stock/list-stock" activeClassName='menuLinkActive' className='menuLink'>
                   <EmojiObjectsIcon className="icon-sideBar"/><span className="menuText"> Piece et Materiel</span>
                   </NavLink>
                      
                   </li>
                   <li className="menuItem">
                   <NavLink to="/stock/list-entree" activeClassName='menuLinkActive' className='menuLink'>
                  <InputIcon className="icon-sideBar"/> <span className="menuText"> Les Entrees</span>
                   </NavLink>
                      
                   </li>
                   <li className="menuItem">
                   <NavLink to="/stock/list-sortie" activeClassName='menuLinkActive' className='menuLink'>
                   <KeyboardReturnIcon className="icon-sideBar"/><span className="menuText">Les  Sorties</span>
                   </NavLink>
                      
                   </li>
      </ul>
      <h3>PARAMETRAGE</h3> 
               <ul className="menuList"> 
             
               <li className="menuItem">
                   <NavLink to="/reparation/list-reparation" activeClassName='menuLinkActive' className='menuLink'>
                 <SettingsInputComponentIcon className="icon-sideBar"/>  <span className="menuText">Types de Reparations</span>
                   </NavLink>
                       
                   </li>
                   <li className="menuItem">
                   <NavLink to="/defaut/list-defaut" activeClassName='menuLinkActive' className='menuLink'>
                  <NewReleasesIcon className="icon-sideBar"/> <span className="menuText"> Types de Pannes</span>
                   </NavLink>
                       
                   </li>
                  
                   <li className="menuItem">
                   <NavLink to="/vehicule/param-vidange" activeClassName='menuLinkActive' className='menuLink'>
                     <SettingsIcon className="icon-sideBar"/>  <span className="menuText">Parametrage Vidange</span>
                   </NavLink>
                   </li>
              
      </ul>
           </div>
        </div>
    )
}

export default SideBar
