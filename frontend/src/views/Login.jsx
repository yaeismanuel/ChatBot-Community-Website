import { useState, useEffect, useRef, useContext } from 'react';
import { ContextData } from '../App';
import { server } from '../config.json';
import axios from 'axios';

const Login = () => {
  const { setUserData, setActive } = useContext(ContextData);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      username: usernameRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    }
    const { data } = await axios.post(`${server}/login`, credentials);
    setUserData(data.response)
    console.log(data);
  }
  useEffect(() => {
    setActive({});
  }, [])
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