import React from 'react'
import { pagelinks,sociallink } from './Data';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      
        <ul className="nav-links" id="nav-links">
         { pagelinks.map((links)=>{
         return (<li key={links.id}>
            <a href={links.href} className="nav-link"> {links.text} </a>
          </li>)
          })}
        </ul>

        <ul className="nav-icons">
          {sociallink.map((link)=>{
            return(
              <li key={link.id}>
              <a href={link.link} target="_blank" className="nav-icon">
                <i className={link.icon}></i></a>
            </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar