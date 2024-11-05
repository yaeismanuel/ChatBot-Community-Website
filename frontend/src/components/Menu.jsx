import { useContext } from 'react';
import { ContextData } from '../App';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaBook } from "react-icons/fa";

import defaultProfile from '../assets/defaultProfile.png';

const Menu = () => {
  const { views, userData, setUserData, toggle, setToggle } = useContext(ContextData);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserData(null);
    setToggle(false);
  }
  
  return (
    <div className="menu" style={{ width: toggle && '180px' }}>
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
          {
            (userData?.role == 'Moderator' || userData?.role == 'Admin') &&
            <>
              <p>MOD ACCESS</p>
              <li onClick={() => setToggle(false)}>
                <Link to="/addannounce">
                  <FaPlusCircle className="plusIcon" />
                  Announcement
                </Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link to="/addwebsite">
                  <FaPlusCircle className="plusIcon" />
                  Website
                </Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link to="/addfbpage">
                  <FaPlusCircle className="plusIcon" />
                  FB Page
                </Link>
              </li>
              <li onClick={() => setToggle(false)}>
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
              <li onClick={() => setToggle(false)}>
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
          <p className="credits">© CodeBuddy Solutions</p>
          <Link to="/login">
            <button className="logoutBtn" onClick={handleLogout}>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu