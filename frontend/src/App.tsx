import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { onLogin, verifyTokens } from './api/user';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitLogin = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    onLogin(email, password);
  }
  const submitRefresh = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    verifyTokens();
  }
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value)
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <form>
          <input placeholder="email" onChange={handleEmail}/>
          <input placeholder="password" onChange={handlePassword}/>
          <button onClick={submitLogin}>login</button>
          <button onClick={submitRefresh}>refresh</button>
        </form>
      
      </header>
    </div>
  );
}

export default App;
