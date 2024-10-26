import { useContext } from 'react';
import { ContextData } from '../App';
import { FaXmark } from "react-icons/fa6";

const Menu = () => {
  const { toggle, setToggle } = useContext(ContextData);
  
  return (
    <div className="menu" style={{ width: toggle && '50%' }}>
      <div className="profile">
        <div className="profilePic"></div>
        <div className="profileInfo">
          <p>Renz Cole</p>
          <span>Member</span>
        </div>
        <div className="closeMenu" onClick={() => setToggle(false)}>
          <FaXmark className="closeIcon" />
        </div>
      </div>
      <div className="menuContents">
        <div className="visits">
          <p>Total Views: 2782</p>
        </div>
      </div>
    </div>
  )
}

export default Menu