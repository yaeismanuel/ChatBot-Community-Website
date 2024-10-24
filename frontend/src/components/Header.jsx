import { TiThMenu } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  
  return (
    <header>
      <div className="menu">
        <TiThMenu className="menuBtn" />
      </div>
      <div className="logo">
        <div className="logoIcon">
          community
        </div>
      </div>
      <div className="">
        mode
      </div>
    </header>
  )
}

export default Header
