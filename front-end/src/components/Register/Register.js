import React, { useState } from "react";
import { Button } from "reactstrap";
import './Register.css';

export default function Register () {
    const onSubmit = () => {
        fetch('http://127.0.0.1:8000/api/register/', {
            method: "POST",
            body: JSON.stringify({})
        });
  
        const response = fetch("http://127.0.0.1:8000/api/login/status");
        // setSubmissionAns('failed');
        // const data = response.json();
        // if(data.submissionAns == 'true'){
          // setSubmissionAns(data.submissionAns);
          // Cookies.set('username', data.username);
          // Cookies.set('isLoggedIn', data.isLoggedIn);
          // Cookies.set('token', data.token);
        // }
      }

    return (
      <div className="Register_container">
        <div className="Register">
          <form>
            <input type="radio" id="medico" name="fav_language" value="medico"/>
            <label for="medico">Médico</label><br/>
            <input type="radio" id="paciente" name="fav_language" value="paciente"/>
            <label for="paciente">Paciente</label><br/>

            <label for="name">Nome:</label>
            <br />
            <input type="text" id="name"></input>
            <br />

            <label for="pass">Senha:</label>
            <br />
            <input type="password" id="pass"></input>
            <br />

            <label for="pass_conf">Confirme sua senha:</label>
            <br />
            <input type="password" id="pass_conf"></input>
            <br />

            <label for="email">Email:</label>
            <br />
            <input type="email" id="email"></input>
            <br />

            <label for="telephone">Telefone:</label>
            <br />
            <input
              type="tel"
              id="telephone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
            <br />

            <label for="email">Email:</label>
            <br />
            <input type="email" id="email"></input>
            <br />

            <label for="comorbidity">Nos conte sobre suas comorbidades:</label>
            <br />
            <textarea id="comorbidity" rows="4" cols="24"></textarea>
            <br />

            <label for="image">Foto do perfil:</label>
            <br />
            <input type="file" id="image"></input>
            <br />
            <br />

            <Button
              block
              color="success"
              outline
              size="lg"
              onClick={onSubmit}
              href=""
            >
              Registrar
            </Button>
          </form>
        </div>
      </div>
    );
}