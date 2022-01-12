import React, {useEffect} from "react";
import Navbar__ from './components/Navbar/Navbar__';
import Login from './components/Login/Login';
import Lista_pacientes from './components/lista_pacientes/Lista_pacientes';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Recovery from "./components/Login/Recovery";
import AuthProvider from "./context/auth-context";
import AuthContext, { useAuth } from "./context/auth-context";
import Cookies from 'js-cookie';

export default function App() {

  if(Cookies.get('username') == undefined){
    Cookies.set('username', '');
    Cookies.set('isLoggedIn', false);
    Cookies.set('token', '');
  }

  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Navbar__ />}></Route>
            <Route path="/login" element={[<Login />, <Navbar__ />]}></Route>
            <Route
              path="/login/recuperar"
              element={[<Recovery />, <Navbar__ />]}
            ></Route>
            <Route
              path="/medico/lista_pacientes"
              element={[<Lista_pacientes />, <Navbar__ />]}
            ></Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );

      
}