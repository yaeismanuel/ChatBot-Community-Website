import { Link } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa"; 
import { TbApi } from "react-icons/tb"; 
import { IoIosMegaphone } from "react-icons/io"; 
import { BsMegaphoneFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const Navbar = () => {
  
  return (
    <div className="navbar">
      <nav>
        <li>
          <Link to="/">
            <IoIosMegaphone />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaGlobe />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <TbApi />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaUsers />
          </Link>
        </li>
      </nav>
    </div>
  )
}

export default Navbar