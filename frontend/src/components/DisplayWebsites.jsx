import Logo from '../assets/logo.jpg';

export const DisplayWebsites = ({ websites }) => {
  return (
    <>
      { 
        websites.map((web, id) => (
          <div className="website" id={id + 1} key={id + 1}>
            <h3>{id + 1}. { web.name }</h3>
            <div className="webImage" style={{ backgroundImage: `url("${Logo}")`}}>
            </div>
            <div className="webLink">
              <a href={ web.link }>{ web.link.split('://')[1] }</a>
            </div>
            <p>{ web.description }</p>
            <div className="webInfo">
              <div>
                <strong>Developer: </strong>
                <span>{ web.developer }</span>
              </div>
              <div>
                <strong>FB Account: </strong>
                <a href={ web.devFbLink }>{ web.devFb }</a>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}