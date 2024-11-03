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
          <p><span>ChatBot Community</span> is a veniam cillum fugiat id eu id commodo do laborum consequat ad. Excepteur elit cillum non anim laboris. Esse culpa esse dolore velit veniam aute officia amet reprehenderit nisi. Non duis pariatur enim tempor enim ullamco consectetur minim consequat labore adipisicing sint. Aliqua duis irure nulla aliquip esse ad anim pariatur proident elit voluptate. Deserunt anim aute consectetur ipsum.</p>
        </div>
        <div className="fbGroup">
          <div className="main">
            <p>Main Group:</p>
            <ul>
              <li>
                <a href="https://facebook.com/main">https://facebook.com/main</a>
              </li>
            </ul>
          </div>
        </div>
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