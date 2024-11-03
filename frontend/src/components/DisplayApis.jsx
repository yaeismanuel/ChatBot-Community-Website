import { Link } from 'react-router-dom';

export const DisplayApis = ({ APIs }) => {
  return (
    <>
      { 
        APIs.map((api, id) => (
          <Link to={ api.link ? api.link : "#" } key={id + 1}>
            <div className="api">
              <div className="apiLogo" style={{ backgroundImage: api.img && `url("${api.img}")`}}>
                { !api.img && <span>API</span> }
              </div>
              <div className="apiInfo">
                <p>{ api.name }</p>
                <span>By: { api.owner }</span>
              </div>
            </div>
          </Link>
        ))
      }
    </>
  )
}