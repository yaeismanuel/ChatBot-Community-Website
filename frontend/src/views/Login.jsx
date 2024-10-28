import { useState, useEffect, useRef, useContext } from 'react';
import { ContextData } from '../App';
import { usePost } from '../hooks/Requests';
import axios from 'axios';

const Login = () => {
  const { setUserData, setActive } = useContext(ContextData);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  
  const { loading, data, error, postData } = usePost('/login');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      username: usernameRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    }
    await postData(credentials);
  }
  
  useEffect(() => {
    setActive({});
  }, []);
  
  useEffect(() => {
    if (data) {
      setUserData(data.response);
      localStorage.setItem('token', data.response.token)
  }
  }, [data]);
  
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          username:
          <input type="text" ref={usernameRef}/>
          { error?.username && <p>{ error?.username }</p> }
        </label>
        <label>
          password:
          <input type="password" ref={passwordRef}/>
          { error?.password && <p>{ error?.password }</p> }
        </label>
        <button>{ loading ? 'Logging in...' : 'Login' }</button>
        { error?.network && <p>{error.network}</p>}
      </form>
    </div>
  )
}

export default Login