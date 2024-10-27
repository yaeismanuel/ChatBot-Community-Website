import { useContext } from 'react';
import { ContextData } from '../App';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import defaultProfile from '../assets/defaultProfile.png';

const Menu = () => {
  const { userData, toggle, setToggle } = useContext(ContextData);
  
  return (
    <div className="menu" style={{ width: toggle && '50%' }}>
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
      <div className="menuContents">
        <div className="visits">
          <p>Total Views: 1</p>
        </div>
      </div>
    </div>
  )
}

export default Menu