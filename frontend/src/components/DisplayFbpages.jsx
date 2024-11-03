import { Link } from 'react-router-dom';

export const DisplayFbpages = ({ Fbpages }) => {
  return (
    <>
      { 
        Fbpages.map((fbpage, id) => (
          <Link to={ fbpage.link ? fbpage.link : "#" } key={id + 1}>
            <div className="fbpage">
              <div className="fbpageLogo" style={{ backgroundImage: fbpage.img && `url("${fbpage.img}")`}}>
                { !fbpage.img && <span>FB</span> }
              </div>
              <div className="fbpageInfo">
                <p>{ fbpage.name }</p>
                <span>Dev: { fbpage.owner }</span>
              </div>
            </div>
          </Link>
        ))
      }
    </>
  )
}