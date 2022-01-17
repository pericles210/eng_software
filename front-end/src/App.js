import React, {useEffect} from "react";
import Navbar__ from './components/Navbar/Navbar__';
import Login from './components/Login/Login';
import Lista_pacientes from './components/lista_pacientes/Lista_pacientes';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Recovery from "./components/Login/Recovery";
import Register from "./components/Register/Register";
import AuthProvider from "./context/auth-context";
import AuthContext, { useAuth } from "./context/auth-context";
import Cookies from 'js-cookie';
import Profile from "./components/Profile/Profile";
import Historico_paciente from "./components/lista_pacientes/Historico_paciente";
import './styles.css';

import Teste_fetch from "./components/Teste/Teste_fetch";

export default function App() {

  if(Cookies.get('username') == undefined){
    Cookies.set('username', '');
    Cookies.set('isLoggedIn', false);
    Cookies.set('token', '');
  }

  return (
    <AuthProvider>
      <Router>
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
          <Route
            path="/cadastrar"
            element={[<Register />, <Navbar__ />]}
          ></Route>
          <Route
            path="/paciente/dados"
            element={[
              <Profile id={localStorage.getItem("profile_id")} />,
              <Navbar__ />,
            ]}
          ></Route>
          <Route
            path="/paciente/historico"
            element={[
              <Historico_paciente id={localStorage.getItem("profile_id")} />,
              <Navbar__ />,
            ]}
          ></Route>

          <Route path="/teste" element={[<Teste_fetch />]}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );

      
}