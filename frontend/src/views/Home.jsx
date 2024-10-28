import { useEffect, useContext } from 'react';
import { ContextData } from '../App';
import { useFetch } from '../hooks/Requests';

import defaultProfile from '../assets/defaultProfile.png';
import Logo from '../assets/logo.jpg';

// components
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { DisplayAnnouncements } from '../components/DisplayAnnouncements';

const Home = () => {
  const { setActive } = useContext(ContextData);
  
  const { loading, data, error, retry } = useFetch('/api/homepage');
  
  useEffect(() => {
    setActive({ announce: true })
  }, []);
  
  if (loading) return (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  );
  
  if (error) return (
    <div className="errorContainer">
      <div className="errorBox">
        <p> Failed to load announcements.</p>
        <button onClick={retry}>Retry</button>
      </div>
    </div>
  );
  
  return (
    <div className="container">
      <h2 className="h2">📢 Announcements</h2>
      <div className="contents">
        <div className="announceCards">
          <DisplayAnnouncements announcements={data.response} />
        </div>
      </div>
    </div>
  )
}

export default Home