import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ContextData } from '../App';
import { usePost } from '../hooks/Requests';
import axios from 'axios';

const Signup = () => {
  const { setUserData, setActive } = useContext(ContextData);
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const userImgRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const { loading, data, error, postData } = usePost('/signup');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      name: nameRef.current.value.trim(),
      img: userImgRef.current.value.trim(),
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
        <h2>Signup</h2>
        <label>
          Name:
          <input type="text" ref={nameRef}/>
        </label>
        <label>
          User image (link/optional):
          <input type="text" ref={userImgRef}/>
        </label>
        <label>
          Username:
          <input type="text" ref={usernameRef}/>
        </label>
        { error?.username && <p>Username already taken.</p> }
        <label>
          Password:
          <input type="password" ref={passwordRef}/>
        </label>
        <button>Signup</button>
        { error && <p>Something went wrong.</p> }
        <div className="option">
          <p>Already have an account? </p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup