import { useEffect, useContext } from 'react';
import { NavbarContext } from '../App';

const About = () => {
  const { setActive } = useContext(NavbarContext);
  
  useEffect(() => {
    setActive({ about: true })
  })
  return (
    <div className="container">
      About
    </div>
  )
}

export default About