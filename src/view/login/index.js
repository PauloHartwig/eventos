import React, { useState } from 'react';
import './login.css';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login(){
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  function logar(){
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
      setMsgTipo('sucesso');
    }).catch(erro => {
      setMsgTipo('erro');
    })
  }

  return(
    <div className="login-content d-flex align-items-center">
      <form className="form-signin mx-auto text-center mb-4">
        <h1 className="h3 mb-3 text-white fw-bold">Login</h1>

        <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
        <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
        
        <button onClick={logar} className="w-100 btn btn-lg btn-login" type="button">Entrar</button>

        <div className="msg-login text-white text-center my-5">
          { msgTipo === 'sucesso' && <span><strong>WoW!</strong> Você está conectado. &#128526;</span> }
          { msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos. &#128546;</span> }
        </div>

        <div className="opcoes-login mt-5">
          <a href="#" className="mx-2">Recuperar Senha</a>
          <span className="text-white">&#9733;</span>
          <a href="#" className="mx-2">Quero Cadastrar</a>
        </div>
      </form>
    </div>
  )
}

export default Login;
