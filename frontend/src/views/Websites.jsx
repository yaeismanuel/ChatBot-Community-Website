import { useEffect, useContext } from 'react';
import { ContextData } from '../App';
import Logo from '../assets/logo.jpg';

const Websites = () => {
  const { setActive } = useContext(ContextData);
  
  useEffect(() => {
    setActive({ sites: true })
  }, [])
  return (
    <div className="container">
      <h2 className="h2">🌐 Websites</h2>
      <p className="p">Explore the different websites created by our fellow community members and management.</p>
      <div className="tableContents">
        <h3>List of Websites:</h3>
        <ol>
          <li>
            <a href="#web1">Websites 1</a>
          </li>
          <li>
            <a href="#web2">Websites 2</a>
          </li>
        </ol>
      </div>
      <div className="websites">
        <div id="web1" className="website">
          <h3>1. CodeBuddy Solutions Official Website</h3>
          <div className="webImage" style={{ backgroundImage: `url("${Logo}")`}}>
          </div>
          <div className="webLink">
            <a href="https://codebuddysltns.verahost.ph">https://codebuddysltns.verahost.ph</a>
          </div>
          <p>Nulla veniam commodo laboris ad et non cillum duis eiusmod laborum occaecat velit. Duis aliqua quis dolore officia velit veniam. Ex sit qui excepteur sit consectetur occaecat pariatur occaecat anim veniam aute occaecat ipsum sint. Reprehenderit officia adipisicing consequat voluptate officia dolore deserunt commodo cillum tempor culpa dolore.</p>
          <div className="webInfo">
            <p>
              <strong>Developer: </strong>
              <span>Renz Cole</span>
            </p>
            <p>
              <strong>FB Account: </strong>
              <span>@bosscleo3233</span>
            </p>
          </div>
        </div>
        <div id="web2" className="website">
          <h3>2. CodeBuddy Solutions Official Website</h3>
          <div className="webImage" style={{ backgroundImage: `url("${Logo}")`}}>
          </div>
          <div className="webLink">
            <a href="https://codebuddysltns.verahost.ph">https://codebuddysltns.verahost.ph</a>
          </div>
          <p>Nulla veniam commodo laboris ad et non cillum duis eiusmod laborum occaecat velit. Duis aliqua quis dolore officia velit veniam. Ex sit qui excepteur sit consectetur occaecat pariatur occaecat anim veniam aute occaecat ipsum sint. Reprehenderit officia adipisicing consequat voluptate officia dolore deserunt commodo cillum tempor culpa dolore.</p>
          <div className="webInfo">
            <p>
              <strong>Developer: </strong>
              <span>Renz Cole</span>
            </p>
            <p>
              <strong>FB Account: </strong>
              <span>@bosscleo3233</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Websites