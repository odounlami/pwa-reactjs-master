/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import '../../Pages/styles/navbar.css';
const Navbar = () =>{
    return(
        <div>
            <nav className="navBar">
                <ul className="navigation">
                    <li className="l1"><Link to="/pourtoi">Pour toi</Link></li>
                    <li className="li2"><Link to="/clubs">Clubs</Link></li>
                    <li className="li3"><Link to="/forums">Forum</Link></li>
                </ul>
            </nav>  
        </div>
             
    )
}

export default Navbar;