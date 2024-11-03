import { useEffect, useContext } from 'react';
import { useFetch } from '../hooks/Requests';
import { ContextData } from '../App';
import { DisplayApis } from '../components/DisplayApis';
import { Link } from 'react-router-dom';

const APIs = () => {
  const { setActive } = useContext(ContextData);
  
  const { loading, data, error, retry } = useFetch('/api/apis');
  
  useEffect(() => {
    setActive({ apis: true })
  }, [])
  
  if (loading) return (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  );
  
  if (error) return (
    <div className="errorContainer">
      <div className="errorBox">
        <p> Failed to load APIs.</p>
        <button onClick={retry}>Retry</button>
      </div>
    </div>
  );
  
  return (
    <div className="container">
      <h2 className="h2">💥 Free APIs</h2>
      <p className="p">Browse and connect with APIs built by fellow developers, featuring a diverse range of projects and ideas from our community.</p>
      <div className="apiList">
        { data?.response?.length == 0 && <p style={{ textAlign: 'center' }}>No data.</p>}
        <DisplayApis APIs={ data.response } />
      </div>
    </div>
  )
}

export default APIs