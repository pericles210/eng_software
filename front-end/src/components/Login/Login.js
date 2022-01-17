import React, { useState } from "react";
import { Button } from "reactstrap";
import './Login.css';
import { Navigate } from "react-router-dom";
import AuthContext, { useAuth } from "../../context/auth-context";
import Cookies from 'js-cookie';

export default function Login(){
    const [pass, setPass] = useState('');
    const [user, setUser] = useState("");
    const [auth, setAuth] = useAuth();
    const [submissionAns, setSubmissionAns] = useState('');

    const onSubmit = () => {
      const response = fetch('http://127.0.0.1:8000/api/login/', {
          method: "POST",
          body: JSON.stringify({user: user, password: pass})
      });

      // setSubmissionAns('failed');
      // const data = response.json();
      // if(data.submissionAns == 'true'){
        // setSubmissionAns(data.submissionAns);
        // Cookies.set('username', data.username);
        // Cookies.set('isLoggedIn', data.isLoggedIn);
        // Cookies.set('token', data.token);
      // }
    }

    const onChangeUser = (e) => {
      setUser(e.target.value);
    }
    
    const onChangePass = (e) => {
      setPass(e.target.value);
    }

    let login_form_jsx = (
      <form>
        <label for="user">Username: </label>
        <br />
          <input type="text" id="user" onChange={onChangeUser}></input>
        <br />
        <br />

        <label for="pass">Password:</label>
        <br />
          <input type="password" id="pass" onChange={onChangePass}></input>
        <p>
          Esqueceu a senha? <a href="/login/recuperar">Clique aqui!</a>
        </p>
        <br />
        <Button block color="success" outline size="lg" onClick={onSubmit} href=''>
          Entrar
        </Button>
        {submissionAns == 'failed' && <div className="message_content">Usuário ou senha incorretos.</div>}

      </form>
    );

    return (
      <div className="Login_container">
        <div className="Login">
          <div className="Login_content">{login_form_jsx}</div>
        </div>
      </div>
    );
}

