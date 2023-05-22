
import './App.css';
import {Route, Routes} from "react-router-dom"
//components
import Login from "./Components/Login/Login.jsx"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
  );
}

export default App;
