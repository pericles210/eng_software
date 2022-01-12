import './Lista_pacientes.css';
import React, { useState } from "react";
import { Button } from 'reactstrap';
import AuthContext, { useAuth } from "../../context/auth-context";
import Cookies from 'js-cookie';


export default function Lista_pacientes(){

  const [state, setState] = useState(
    {
      people: []
    }
  );

  const loadData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/json_response/");
    const data = await response.json();
    setState(data);
  };



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
        <a href='/'>{x[1]}</a>
      </div>
    }
    
    <div className="item3">{x[2]}</div>
    <div className="item4">{x[3]}</div>
    <div className="item5">{x[4]}</div>
    <div className="item6">{x[5]}</div>
  </div>
));

return (
  <div>
    <div className="page">
      <h1 className="page_header">Lista de pacientes</h1>
      <div className="op_lista">
        <Button color="success" size="lg">
          Adicionar
        </Button>
        <Button color="danger" size="lg">
          Remover
        </Button>
      </div>
      <div className="pacient_row">{linhas_lista}</div>
    </div>
  </div>
);
}

var dados = [
    ['id', 'Nome', 'Temp (ºC)', 'Freq (BPM)', 'Oxi (SaO2)', 'Pressão (mmHg)'],
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
