import './App.css';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import {Routes, Route, useNavigate} from 'react-router-dom';


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
   
      <TopBar />
      <SideBar content={menuList.menu}/>
      <Routes> 
      <Route  path="/Dashboard" element={<Dashboard />} />
      <Route  path="/Board" element={<Board />} />
     </Routes>
    </div>
  );
}

export default App;
