import { useEffect, useContext } from 'react';
import { NavbarContext } from '../App';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
  const { setActive } = useContext(NavbarContext);
  
  useEffect(() => {
    setActive({ announce: true })
  })
  return (
    <div className="container">
      <h2>📢 Announcements</h2>
      <div className="contents">
        <div className="announceCards">
          <div className="announceCard">
            <div className="cardHead">
              <div className="cardAuthor">
                <div className="authorIcon"></div>
                <div className="authorInfo">
                  <p>Juan Dela Cruz</p>
                  <span>Moderator</span>
                </div>
              </div>
            </div>
            <div className="cardBody">
              <p>
                Hello everyone! we are happy to inform you that this website is now the official website for our community.
              </p>
            </div>
          </div>
          <div className="announceCard">
            <div className="cardHead">
              <div className="cardAuthor">
                <div className="authorIcon"></div>
                <div className="authorInfo">
                  <p>Juan Dela Cruz</p>
                  <span>Moderator</span>
                </div>
              </div>
            </div>
            <div className="cardBody">
              <p>
                Hello everyone! we are happy to inform you that this website.
              </p>
            </div>
          </div>
          <div className="announceCard">
            <div className="cardHead">
              <div className="cardAuthor">
                <div className="authorIcon"></div>
                <div className="authorInfo">
                  <p>Juan Dela Cruz</p>
                  <span>Moderator</span>
                </div>
              </div>
            </div>
            <div className="cardBody">
              <p>
                Hello everyone! we are happy to inform you that this website is now the official website for our community.
              </p>
            </div>
          </div>
          <div className="announceCard">
            <div className="cardHead">
              <div className="cardAuthor">
                <div className="authorIcon"></div>
                <div className="authorInfo">
                  <p>Juan Dela Cruz</p>
                  <span>Moderator</span>
                </div>
              </div>
            </div>
            <div className="cardBody">
              <p>
                Hello everyone! we are happy to inform you that this website is now the official website for our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home