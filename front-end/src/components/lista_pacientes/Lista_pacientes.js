import './Lista_pacientes.css';
import React, { useEffect, useState } from "react";
import { Button } from 'reactstrap';
import AuthContext, { useAuth } from "../../context/auth-context";
import Cookies from 'js-cookie';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

export default function Lista_pacientes(){

  const [loaded_data, set_loaded_data] = useState({data: ''});

  const load_data = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/json_response/");
    const data_a = await response.json();
    set_loaded_data({data: data_a});
  };

  const update_content = () => {
    setInterval(()=>{
      load_data();
    }, 1000);
  }

  // useEffect(() => {
  //   update_content();
  // }, []);


let linhas_lista = dados.map((x) => (
  <div className="grid-container">
    <div className="item1">{x[0]}</div>
    {
      x[1] == 'Nome' &&
      <div className="item2">
        {x[1]}
      </div>
    }
    
    {
      x[1] != 'Nome' &&
      <div className="item2">
        <a href='/paciente/historico' onClick={() => {localStorage.setItem('profile_id', x[0])}}>{x[1]}</a>
      </div>
    }
    
    <div className="item3">{x[2]}</div>
    <div className="item4">{x[3]}</div>
    <div className="item5">{x[4]}</div>
    <div className="item6">{x[5]}</div>
  </div>
));

return (
  <div className="page">
    <h1>Lista de pacientes</h1>
    <div className="op_lista">
      <Button color="success" size="lg">
        Adicionar
      </Button>
      <div>
        <Button color="light" size='lg' onClick={load_data}>Atualizar</Button>
      </div>
    </div>

    <div className="patient_row">{linhas_lista}</div>
  </div>
);
}

var dados = [
    ['id', 'Nome', 'ºC', 'BPM', 'SaO2', 'mmHg'],
    [0, 'pericles', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
];
