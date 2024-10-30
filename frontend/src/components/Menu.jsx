import { useContext } from 'react';
import { ContextData } from '../App';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from "react-icons/fa";

import defaultProfile from '../assets/defaultProfile.png';

const Menu = () => {
  const { userData, toggle, setToggle } = useContext(ContextData);
  
  return (
    <div className="menu" style={{ width: toggle && '180px' }}>
      <div className="profile">
        <div className="profilePic" style={{ backgroundImage: `url("${defaultProfile}")`}}></div>
        <div className="profileInfo">
          {
            userData ?
            <>
              <p>{ userData.name }</p>
              <span>{ userData.role }</span>
            </> :
            <>
              <Link to="/login">
                <button onClick={() => setToggle(false)}>Login</button>
              </Link>
            </>
          }
        </div>
        <div className="closeMenu" onClick={() => setToggle(false)}>
          <FaXmark className="closeIcon" />
        </div>
      </div>
      <div className="menus">
        <ul className="contents">
          <li>
            <Link to="#">
              <FaPlusCircle className="plusIcon" />
              Announcement
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaPlusCircle className="plusIcon" />
              Website
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaPlusCircle className="plusIcon" />
              FB Page
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaPlusCircle className="plusIcon" />
              API
            </Link>
          </li>
        </ul>
        <div className="visits">
          <p>Total Views: 1</p>
        </div>
      </div>
    </div>
  )
}

export default Menu