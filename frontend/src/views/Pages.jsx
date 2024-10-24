import { useEffect, useContext } from 'react';
import { NavbarContext } from '../App';

const Pages = () => {
  const { setActive } = useContext(NavbarContext);
  
  useEffect(() => {
    setActive({ pages: true })
  })
  return (
    <div className="container">
      Pages
    </div>
  )
}

export default Pages