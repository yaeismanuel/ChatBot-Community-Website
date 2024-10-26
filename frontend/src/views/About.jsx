import { useEffect, useContext } from 'react';
import { ContextData } from '../App';

const About = () => {
  const { setActive } = useContext(ContextData);
  
  useEffect(() => {
    setActive({ about: true })
  }, [])
  return (
    <div className="container">
      About
    </div>
  )
}

export default About