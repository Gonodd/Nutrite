
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
//components
import Login from "./Components/Login/Login.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import DayNavBar from "./Components/DayNavBar/DayNavBar.jsx"


function App() {
  const location = useLocation();
  return (
    <> 
      {location.pathname === "/orders" && <DayNavBar/>}
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
    </>
  );  
}

export default App;
