import { useEffect, useContext } from 'react';
import { useFetch } from '../hooks/Requests';
import { ContextData } from '../App';
import { DisplayManagement } from '../components/DisplayManagement';

const About = () => {
  const { setActive } = useContext(ContextData);
  
  const { loading, data, error, retry } = useFetch('/managements');
  
  useEffect(() => {
    setActive({ about: true })
  }, []);
  
  return (
    <div className="container about">
      <div className="communityInfo">
        <div className="imageCover"></div>
        <div className="description">
          <p><span>ChatBot Community</span> is a vibrant community where you can explore, learn, and share insights. Our mission is to foster collaboration and innovation. Join us for exciting discussions and opportunities!</p>
        </div>
        {
          false &&
          <div className="fbGroup">
            <div className="main">
              <p>Main FB Group:</p>
              <ul>
                <li>
                  <a href="https://facebook.com/groups/coders.dev/">Chatbot Community</a>
                </li>
              </ul>
            </div>
          </div>
        }
      </div>
      <div className="management">
        <h2>Management</h2>
        <div className="admins">
          { 
            loading ? 
              <p style={{ textAlign: 'center', padding: '1rem 0' }}>Loading...</p> : 
              error ? 
                <p style={{ textAlign: 'center', padding: '1rem 0' }}>Unable to load profiles.</p> :
                  data?.response?.length == 0 ?
                    <p style={{ textAlign: 'center', padding: '1rem 0' }}>No data.</p> :
                    <DisplayManagement management={ data?.response } />
            
          }
        </div>
      </div>
    </div>
  )
}

export default About