import './topBar.css'
import MenuIcon from '@material-ui/icons/Menu';
import { StateContext } from '../../context/StateContext';
import { useContext } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
function TopBar() {
  const {openSidebar,user,logout} = useContext(StateContext)
    return (
        <div className='topBar'>
            <div className="topBarLeft">
            <div className="topBar_NavIcon" onClick={() => openSidebar()}>
            <MenuIcon/>
      </div>
             
                {/* <span className="logo">Parc Auto</span> */}
            </div>
            <div className="topBarCenter">
                {/* <input type="text" className="searchInput" /> */}
            </div>
            <div className="topBarRight">
            <span style={{color:"gray"}}> {user.firstName}</span>
             <span style={{marginRight:"20px" ,color:"gray"}}> <AccountCircleIcon/></span>
             
              <span style={{cursor:"pointer",color:"red"}} onClick={()=>logout()}> <PowerSettingsNewIcon/></span>
              
            </div>
        </div>
    )
}

export default TopBar
