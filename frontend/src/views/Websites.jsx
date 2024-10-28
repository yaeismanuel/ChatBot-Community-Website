import { useState, useEffect, useContext, useRef } from 'react';
import { useFetch } from '../hooks/Requests';
import { ContextData } from '../App';
import { DisplayWebsites } from '../components/DisplayWebsites';

const Websites = () => {
  const { setActive } = useContext(ContextData);
  
  const { loading, data, error, retry } = useFetch('/api/websites');
  
  useEffect(() => {
    setActive({ sites: true });
  }, []);
  
  if (loading) return (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  );
  
  if (error) return (
    <div className="errorContainer">
      <div className="errorBox">
        <p> Failed to fetch data.</p>
        <button onClick={retry}>Retry</button>
      </div>
    </div>
  )
  
  return (
    <div className="container">
      <h2 className="h2">🌐 Websites</h2>
      <p className="p">Explore the different websites created by our fellow community members and management.</p>
      <div className="tableContents">
        <h3>List of Websites:</h3>
        <ol>
          {
            data.response.map((web, id) => (
              <li key={ id + 1 }>
                <a href={`#${ id + 1 }`}>{ web.name }</a>
              </li>
            ))
          }
        </ol>
      </div>
      <div className="websites">
        <DisplayWebsites websites={ data.response } />
      </div>
    </div>
  )
}

export default Websites