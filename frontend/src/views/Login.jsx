import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ContextData } from '../App';
import { usePost } from '../hooks/Requests';
import axios from 'axios';

const Login = () => {
  const { setUserData, setActive } = useContext(ContextData);
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const { loading, data, error, postData } = usePost('/login');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      username: usernameRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    }
    postData(credentials);
  }
  
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
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" ref={usernameRef}/>
          { error?.username && <p>User not found.</p> }
        </label>
        <label>
          Password:
          <input type="password" ref={passwordRef}/>
          { error?.password && <p>Incorrect password.</p> }
        </label>
        <div className="remember">
          <input type="checkbox" />
          Remember me
        </div>
        <button>{ loading ? 'Logging in...' : 'Login' }</button>
        { (error?.network || error?.server) && <p>Something went wrong.</p> }
        <div className="option">
          <p>Don't have an account? </p>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  )
}

export default Login