import { useEffect, useContext } from 'react';
import { NavbarContext } from '../App';


const APIs = () => {
  const { setActive } = useContext(NavbarContext);
  
  useEffect(() => {
    setActive({ apis: true })
  })
  return (
    <div className="container">
      APIs
    </div>
  )
}

export default APIs