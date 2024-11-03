import { Link } from 'react-router-dom';
import defaultProfile from '../assets/defaultProfile.png';

export const DisplayManagement = ({ management }) => {
  return (
    <>
      { 
        management.map((tawo, id) => (
          <div className="admin" key={id}>
            <img src={ tawo.img ? tawo.img : defaultProfile } className="userImg" />
            <div className="info">
              <p>{ tawo.name }</p>
              <span>{ tawo.role }</span>
            </div>
          </div>
        ))
      }
    </>
  )
}