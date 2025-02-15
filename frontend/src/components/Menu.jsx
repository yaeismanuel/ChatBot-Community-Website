import { useContext } from 'react';
import { ContextData } from '../App';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaBook, FaNewspaper } from "react-icons/fa";
import { useMainStore } from "../store";

import defaultProfile from '../assets/defaultProfile.png';

const Menu = () => {
  const toggleMenuStatus = useMainStore(state => state.toggleMenuStatus);
  const toggleMenu = useMainStore(state => state.toggleMenu);
  const { views, userData, setUserData } = useContext(ContextData);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserData(null);
    toggleMenu(false);
  }
  
  return (
    <div className="menu" style={{ width: toggleMenuStatus && '180px' }}>
      <div className="profile">
        <div className="profilePic" style={{ backgroundImage: `url("${ userData?.img ? userData?.img : defaultProfile}")` }}></div>
        <div className="profileInfo">
          {
            userData ?
            <>
              <p>{ userData.name }</p>
              <span>{ userData.role }</span>
            </> :
            <>
              <Link to="/login">
                <button onClick={() => toggleMenu(false)}>Login</button>
              </Link>
            </>
          }
        </div>
        <div className="closeMenu" onClick={() => toggleMenu(false)}>
          <FaXmark className="closeIcon" />
        </div>
      </div>
      <div className="menus">
        <ul className="contents">
          <li onClick={() => toggleMenu(false)}>
            <Link to="/feed">
              <FaNewspaper className="plusIcon" />
              Newsfeed
            </Link>
          </li>
          {
            (userData?.role == 'Moderator' || userData?.role == 'Admin') &&
            <>
              <p>MOD ACCESS</p>
              <li onClick={() => toggleMenu(false)}>
                <Link to="/addannounce">
                  <FaPlusCircle className="plusIcon" />
                  Announcement
                </Link>
              </li>
              <li onClick={() => toggleMenu(false)}>
                <Link to="/addwebsite">
                  <FaPlusCircle className="plusIcon" />
                  Website
                </Link>
              </li>
              <li onClick={() => toggleMenu(false)}>
                <Link to="/addfbpage">
                  <FaPlusCircle className="plusIcon" />
                  FB Page
                </Link>
              </li>
              <li onClick={() => toggleMenu(false)}>
                <Link to="/addapi">
                  <FaPlusCircle className="plusIcon" />
                  API
                </Link>
              </li>
            </>
          }
          {
            (userData?.role == 'Admin') &&
            <>
              <p>ADMIN ACCESS</p>
              <li onClick={() => toggleMenu(false)}>
                <Link to="/manage">
                  <FaBook className="plusIcon" />
                  Manage accounts
                </Link>
              </li>
            </>
          }
        </ul>
        <div className="menuFooter">
          <p className="visits">Total Views: <span>{ views }</span></p>
          {
            userData &&
            <Link to="/login">
              <button className="logoutBtn" onClick={handleLogout}>Logout</button>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Menu
