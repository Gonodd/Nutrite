import styles from './App.module.css';
import {Route, Routes, useLocation} from "react-router-dom";
//components
import Login from "./Components/Login/Login.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import DayNavBar from "./Components/DayNavBar/DayNavBar.jsx"
import { useState } from 'react';


function App() {
  const location = useLocation();
  const [day, setDay] = useState({});

  return (
    <div className={styles.container}> 
      {(location.pathname === "/orders" || location.pathname ==="/orders/Lunes"
      || location.pathname ==="/orders/Martes" || location.pathname ==="/orders/Miercoles"
      || location.pathname ==="/orders/Jueves"|| location.pathname ==="/orders/Viernes") && <DayNavBar setDay={setDay}/>}
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/orders/:id" element={<Orders/>}/>
      </Routes>
    </div>
  );  
}

export default App;