import { useEffect, useContext } from 'react';
import { ContextData } from '../App';

const Pages = () => {
  const { setActive } = useContext(ContextData);
  
  useEffect(() => {
    setActive({ pages: true })
  }, [])
  return (
    <div className="container">
      Pages
    </div>
  )
}

export default Pages