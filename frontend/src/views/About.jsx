import { useEffect, useContext } from 'react';
import { ContextData } from '../App';
import defaultProfile from '../assets/defaultProfile.png';

const About = () => {
  const { setActive } = useContext(ContextData);
  
  useEffect(() => {
    setActive({ about: true })
  }, [])
  return (
    <div className="container about">
      <div className="communityInfo">
        <div className="imageCover"></div>
        <div className="description">
          <p><span>ChatBot Community</span> is a veniam cillum fugiat id eu id commodo do laborum consequat ad. Excepteur elit cillum non anim laboris. Esse culpa esse dolore velit veniam aute officia amet reprehenderit nisi. Non duis pariatur enim tempor enim ullamco consectetur minim consequat labore adipisicing sint. Aliqua duis irure nulla aliquip esse ad anim pariatur proident elit voluptate. Deserunt anim aute consectetur ipsum.</p>
        </div>
        <div className="fbGroup">
          <p><span>Management:</span> 15</p>
          <p><span>Members:</span> 12,429</p>
          <div className="main">
            <p>Main Group:</p>
            <ul>
              <li>
                <a href="https://facebook.com/main">https://facebook.com/main</a>
              </li>
            </ul>
          </div>
          <div className="alternatives">
            <p>Alternative Groups:</p>
            <ul>
              <li>
                <a href="#">https://facebook.com/alternative</a>
              </li>
              <li>
                <a href="#">https://facebook.com/alternative</a>
              </li>
              <li>
                <a href="#">https://facebook.com/alternative</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="management">
        <h2>Management</h2>
        <div className="admins">
          <div className="admin">
            <img src={defaultProfile} className="userImg" />
            <div className="info">
              <p>Juan Dela Cruz</p>
              <span>Admin</span>
            </div>
          </div>
          <div className="admin">
            <img src={defaultProfile} className="userImg" />
            <div className="info">
              <p>Juan Dela Cruz</p>
              <span>Admin</span>
            </div>
          </div>
          <div className="admin">
            <img src={defaultProfile} className="userImg" />
            <div className="info">
              <p>Juan Dela Cruz</p>
              <span>Admin</span>
            </div>
          </div>
          <div className="admin">
            <img src={defaultProfile} className="userImg" />
            <div className="info">
              <p>Juan Dela Cruz</p>
              <span>Admin</span>
            </div>
          </div>
          <div className="admin">
            <img src={defaultProfile} className="userImg" />
            <div className="info">
              <p>Juan Dela Cruz</p>
              <span>Admin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="stats" id="stats">
        <h2>Top Contributors</h2>
        <p>As of June 36, 1997</p>
        <div className="contributors">
          <div className="contributor">
            <img src={defaultProfile} className="userImg" />
            <div className="info">
              <p>Juan Dela Cruz</p>
              <span>2828824 points</span>
            </div>
          </div>
          <div className="contributor">
            <img src={defaultProfile} className="userImg" />
            <div className="info">
              <p>Juan Dela Cruz</p>
              <span>2828824 points</span>
            </div>
          </div>
          <div className="contributor">
            <img src={defaultProfile} className="userImg" />
            <div className="info">
              <p>Juan Dela Cruz</p>
              <span>2828824 points</span>
            </div>
          </div>
          <div className="contributor">
            <img src={defaultProfile} className="userImg" />
            <div className="info">
              <p>Juan Dela Cruz</p>
              <span>2828824 points</span>
            </div>
          </div>
          <div className="contributor">
            <img src={defaultProfile} className="userImg" />
            <div className="info">
              <p>Juan Dela Cruz</p>
              <span>2828824 points</span>
            </div>
          </div>
        </div>
        <div className="moderators">
          
        </div>
      </div>
    </div>
  )
}

export default About