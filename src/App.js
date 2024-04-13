import './App.css';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home';
import {Routes, Route, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard/Dashboard';
import Board from './components/Board/Board';
function App() {
  const menuList = {
    "menu": [
      "Dashboard",
      "Board",
      "Team",
      "Projects",
      "Sign out"
    ]
  };
  const navigate = useNavigate();
  //const location = useLocation();
  return (
    <div className="App">
   <div className="container-fluid">
   <div className='row'>
   <div className='col-md-12'>
      <TopBar />
      </div>
      <div className='col-md-3'>
      <SideBar content={menuList.menu}/>
      </div>
      <div className='col-md-9'>
      <Routes> 
      <Route  path="/" element={<Home />} />
      <Route  path="/Dashboard" element={<Dashboard />} />
      <Route  path="/Board" element={<Board />} />
     </Routes>
     </div>
    </div>
    </div>
    </div>
  );
}

export default App;
