import { useState, useRef, useContext } from 'react';
import { ContextData } from '../App';
import { server } from '../config.json';
import axios from 'axios';

const Login = () => {
  const { setUserData } = useContext(ContextData);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    }
    const { data } = await axios.post(`${server}/login`, credentials);
    setUserData(data.response)
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          username:
          <input type="text" ref={usernameRef}/>
        </label>
        <label>
          password:
          <input type="password" ref={passwordRef}/>
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login