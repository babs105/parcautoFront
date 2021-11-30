import './home.css'
import SideBar from "../sideBar/SideBar";
import TopBar from "../topBar/TopBar";
import AddStock from '../stock/AddStock';

function Home() {
  return <> 
      <TopBar/>
      <div className="homeContainer">
        <SideBar/>
        <AddStock/> 
        </div>
    </>;
}

export default Home;
