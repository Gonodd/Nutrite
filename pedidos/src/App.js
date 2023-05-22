
import styles from './App.module.css';
import {Route, Routes, useLocation} from "react-router-dom";
//components
import Login from "./Components/Login/Login.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import DayNavBar from "./Components/DayNavBar/DayNavBar.jsx"


function App() {
  const location = useLocation();
  return (
    <div className={styles.container}> 
      {/*location.pathname === "/orders" && <DayNavBar/>*/}
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
    </div>
  );  
}

export default App;
