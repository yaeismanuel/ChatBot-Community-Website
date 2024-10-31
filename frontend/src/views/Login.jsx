import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextData } from '../App';
import { usePost } from '../hooks/Requests';
import axios from 'axios';

const Login = () => {
  const { setUserData, setActive } = useContext(ContextData);
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const { loading, data, error, postData } = usePost('/login');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      username: usernameRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    };
    postData(credentials);
  };
  
  useEffect(() => {
    setActive({});
  }, []);
  
  useEffect(() => {
    if (data?.success) {
      setUserData(data.response);
      localStorage.setItem('token', data.response.token);
      navigate('/');
    }
  }, [data]);
  
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label>
            Username:
            <input type="text" ref={usernameRef} className="input" />
            {error?.username && <span className="error-message">User not found.</span>}
          </label>
        </div>
        <div className="input-group">
          <label>
            Password:
            <input type="password" ref={passwordRef} className="input" />
            {error?.password && <span className="error-message">Incorrect password.</span>}
          </label>
        </div>
        <button type="submit" className="submit-button">
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {(error?.network || error?.server) && <p className="error-message">Something went wrong.</p>}
      </form>
    </div>
  );
}

export default Login;
