import styles from "./App.module.css";
import { Route, Routes, useLocation } from "react-router-dom";
//components
import Login from "./Components/Login/Login.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import DayNavBar from "./Components/DayNavBar/DayNavBar.jsx";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";

function App() {
  const location = useLocation();
  const [pedido, setPedido] = useState({
    numeroCel:"",
    direccion:"",
    nombre:"",
    lunes:{
      clasico: 0,
      sinHarina: 0,
      vegetariano:0,
      dieta:0,
    },
    martes:{
      clasico:0,
      sinHarina:0,
      vegetariano:0,
      dieta:0,
    },
    miercoles:{
      clasico:0,
      sinHarina:0,
      vegetariano:0,
      dieta:0,
    },
    jueves:{
      clasico:0,
      sinHarina:0,
      vegetariano:0,
      dieta:0,
    },
    viernes:{
      clasico:0,
      sinHarina:0,
      vegetariano:0,
      dieta:0,
    },
  })

  return (
    <div className={styles.container}>
      {(location.pathname === "/orders" ||
        location.pathname === "/orders/Lunes" ||
        location.pathname === "/orders/Martes" ||
        location.pathname === "/orders/Miercoles" ||
        location.pathname === "/orders/Jueves" ||
        location.pathname === "/orders/Viernes") && (
        <DayNavBar />
        )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/orders/:id" element={<Orders pedido={pedido} setPedido={setPedido}/>} />
        <Route path="/cart" element={<Cart pedido={pedido}/>}/>
      </Routes>
    </div>
  );
}

export default App;
