import { useState, useEffect, useContext } from 'react';
import { ContextData } from '../App';
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

import defaultProfile from '../assets/defaultProfile.png';
import Logo from '../assets/logo.jpg';

import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
  const { setActive } = useContext(ContextData);
  const [like, setLike] = useState({ status: false, count: 0 });
  const likePost = () => {
    setLike({ status: !like.status, count: !like.status ? like.count + 1 : like.count - 1 });
  }
  
  useEffect(() => {
    setActive({ announce: true })
  }, [])
  return (
    <div className="container">
      <h2 className="h2">📢 Announcements</h2>
      <div className="contents">
        <div className="announceCards">
          <div className="announceCard">
            <div className="cardHead">
              <div className="cardAuthor">
                <div className="authorIcon" style={{ backgroundImage: `url("${defaultProfile}")`}}></div>
                <div className="authorInfo">
                  <p>Juan Dela Cruz</p>
                  <span>Moderator</span>
                </div>
              </div>
              <div className="date">
                <p>25/10/2024</p>
              </div>
            </div>
            <div className="cardBody">
              <pre>
                Hello everyone! we are happy to inform you that this website is now the official website for our community.
              </pre>
              <div className="actions" onClick={likePost}>
                { like.status ? <FaThumbsUp /> : <FaRegThumbsUp /> }
                <span>{ like.count }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home