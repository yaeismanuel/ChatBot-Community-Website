import { useState, useEffect, useContext, useRef } from 'react';
import { ContextData } from '../App';
import { DisplayWebsites } from '../components/DisplayWebsites';
import { server } from '../config.json';
import axios from 'axios';

const Websites = () => {
  const { setActive } = useContext(ContextData);
  
  const [loading, setLoading] = useState(true);
  const [webList, setWebList] = useState([]);
  const abortController = useRef(null);
  
  const fetchWebsites = async () => {
    try {
      if (abortController.current) abortController.current.abort();
      abortController.current = new AbortController();
      const { data } = await axios.get(`${server}/api/websites`, { signal: abortController.current.signal });
      if (data) {
        setWebList(data.websites);
        setLoading(false);
      }
    } catch (e) {
      if (e.code === 'ERR_CANCELED') return;
      console.log(e);
    }
  }
  
  useEffect(() => {
    setActive({ sites: true });
    
    fetchWebsites();
  }, []);
  
  if (loading) return <p>Loading...</p>
  
  return (
    <div className="container">
      <h2 className="h2">🌐 Websites</h2>
      <p className="p">Explore the different websites created by our fellow community members and management.</p>
      <div className="tableContents">
        <h3>List of Websites:</h3>
        <ol>
          {
            webList.map((web, id) => (
              <li key={ id + 1 }>
                <a href={`#${ id + 1 }`}>{ web.name }</a>
              </li>
            ))
          }
        </ol>
      </div>
      <div className="websites">
        <DisplayWebsites websites={ webList } />
      </div>
    </div>
  )
}

export default Websites