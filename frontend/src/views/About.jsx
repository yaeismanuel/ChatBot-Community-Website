import { useEffect, useContext } from 'react';
import { ContextData } from '../App';
import defaultProfile from '../assets/defaultProfile.png';

const About = () => {
  const { setActive } = useContext(ContextData);

  useEffect(() => {
    setActive({ about: true });
  }, []);

  return (
    <div className="about-body">
      <div className="community-info">
        <div className="image-cover" />
        <div className="description">
          <p>
            <span className="highlight">ChatBot Community</span> is a vibrant community where you can explore, learn, and share insights. Our mission is to foster collaboration and innovation. Join us for exciting discussions and opportunities!
          </p>
        </div>
        <div className="fb-group">
          <p><span className="label">Management:</span> 15</p>
          <p><span className="label">Members:</span> 12,429</p>
          <div className="main-group">
            <p>Main Group:</p>
            <ul>
              <li><a href="https://facebook.com/main">facebook.com/main</a></li>
            </ul>
          </div>
          <div className="alternative-groups">
            <p>Alternative Groups:</p>
            <ul>
              <li><a href="#">facebook.com/alternative1</a></li>
              <li><a href="#">facebook.com/alternative2</a></li>
              <li><a href="#">facebook.com/alternative3</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="management">
        <h2>Management</h2>
        <div className="admins">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="admin" key={index}>
              <img src={defaultProfile} className="user-img" alt="Admin" />
              <div className="info">
                <p>Juan Dela Cruz</p>
                <span>Admin</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="stats" id="stats">
        <h2>Top Contributors</h2>
        <p>As of October 31, 2024</p>
        <div className="contributors">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="contributor" key={index}>
              <img src={defaultProfile} className="user-img" alt="Contributor" />
              <div className="info">
                <p>Juan Dela Cruz</p>
                <span>2,828,824 points</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
