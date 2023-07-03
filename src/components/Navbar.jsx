import React, { useState } from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom';
import {links} from '../data';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
        <div className = {`${showMenu ? "navmenu show-menu" : "navmenu"}`}>
            <ul className="navlist">
                {links.map(({name, icon, path}, index) => {
                    return(
                        <li className="navitem" key={index}>
                            <NavLink to = {path} className={({isActive}) => 
                            
                            isActive ? "navlink active-nav" : "navlink"}
                            
                            onClick={() => setShowMenu(!showMenu)}
                            >
                            
                                {icon}
                            
                                <h3 className="navname">{name}</h3>
                            
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>

        <div className={`${showMenu ? "navtoggle animate-toggle" : "navtoggle"}`} 
        
        onClick={() => setShowMenu(!showMenu)}
        
        >
            <span></span>
            <span></span>
            <span></span>
        
        </div>
    </nav>
  )
}

export default Navbar