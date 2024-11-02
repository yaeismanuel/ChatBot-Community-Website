import { useEffect, useContext } from 'react';
import { useFetch } from '../hooks/Requests';
import { ContextData } from '../App';
import { DisplayFbpages } from '../components/DisplayFbpages';

const Pages = () => {
  const { setActive } = useContext(ContextData);
  
  const { loading, data, error, retry } = useFetch('/api/fbpages');
  
  useEffect(() => {
    setActive({ pages: true })
  }, []);
  
  if (loading) return (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  );
  
  if (error) return (
    <div className="errorContainer">
      <div className="errorBox">
        <p> Failed to load Fb pages.</p>
        <button onClick={retry}>Retry</button>
      </div>
    </div>
  );
  
  return (
    <div className="container">
      <h2 className="h2">⚙️ FB Bot Pages</h2>
      <p className="p">Browse and engage with Facebook bot pages from our community, featuring cutting-edge conversational AI and clever automation.</p>
      <div className="fbpageList">
        { data?.response?.length == 0 && <p style={{ textAlign: 'center' }}>No data.</p>}
        <DisplayFbpages Fbpages={ data.response } />
      </div>
    </div>
    
    
    
        // <Link to="#">
        //   <div className="fbpage">
        //     <div className="fbpageLogo">
        //       <span>FB</span>
        //     </div>
        //     <div className="fbpageInfo">
        //       <p>Playsbot</p>
        //       <span>Dev: Kenlie</span>
        //     </div>
        //   </div>
        // </Link>
  )
}

export default Pages