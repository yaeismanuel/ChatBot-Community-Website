import { useEffect, useContext } from 'react';
import { NavbarContext } from '../App';

const Websites = () => {
  const { setActive } = useContext(NavbarContext);
  
  useEffect(() => {
    setActive({ sites: true })
  })
  return (
    <div className="container">
      Websites
    </div>
  )
}

export default Websites