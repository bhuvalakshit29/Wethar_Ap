// M_O_D_U_L_E & L_I_B_R_A_R_Y
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// C_O_M_P_O_N_E_N_T_S

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contect from './Pages/Contect';
import Login from './Pages/Login';
import Allproduct from './Pages/Allproduct';
import './App.css'
export default function App() {
  
  return (
    <div>
     <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contect" element={<Contect />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Allproduct" element={<Allproduct />} />
          </Routes>
        </Router>
    </div>
  );
}
