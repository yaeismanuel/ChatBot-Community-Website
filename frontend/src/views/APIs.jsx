import { useEffect, useContext } from 'react';
import { ContextData } from '../App';


const APIs = () => {
  const { setActive } = useContext(ContextData);
  
  useEffect(() => {
    setActive({ apis: true })
  }, [])
  return (
    <div className="container">
      APIs
    </div>
  )
}

export default APIs