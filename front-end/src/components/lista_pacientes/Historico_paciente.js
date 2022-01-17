import React, {useState} from "react";
import './Historico_paciente.css';
import Cookies from 'js-cookie';

export default function Historico_paciente({id}){

    const [loaded_data, set_loaded_data] = useState({data: ''});

    const load_data = async() => {
        const response = fetch('http://127.0.0.1:8000/api/paciente/historico', {
            method: "POST",
            body: JSON.stringify({id: id, token: Cookies.get('token')})
        });
        const data_a = response.json();
        set_loaded_data({data: data_a});
    }

    const update_content = () => {
        setInterval(()=>{
            load_data();
        }, 1000);
    }

    // useEffect(() => {
    //   update_content();
    // }, []);

    let linhas_lista = dados.map((x) => (
        <div className="grid-container-hist">
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
              <div>{x[1]}</div>
            </div>
          }
          
          <div className="item3">{x[2]}</div>
          <div className="item4">{x[3]}</div>
          <div className="item5">{x[4]}</div>
          <div className="item6">{x[5]}</div>
        </div>
      ));

      const nome = ' -- replace -- ';
      
      return (
        <div className="page">
          <h1 className="page_header">Paciente {nome}</h1>
          <div className="patient_row">{linhas_lista}</div>
        </div>
      );
}

var dados = [
    ['data', 'hora', 'Temp (ºC)', 'Freq (BPM)', 'Oxi (SaO2)', 'Pressão (mmHg)'],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],

];