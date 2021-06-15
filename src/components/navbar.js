import * as React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'gatsby'
// import { Button } from "./Button";
import { FaBeer } from 'react-icons/fa';
import './navbar.css'

const Navbar = ({menuLinks}) => {

    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick (!click);

    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     }else{
    //         setButton(true)
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, [])

    // window.addEventListener("resize", showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={ closeMobileMenu }>
                        CVQ <FaBeer />
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        <FaBeer />
                    </div>
                    <ul className={ click ? "nav-menu active": "nav-menu" }>
                        {menuLinks.map((navLink, index)=>{
                            
                            return(
                            <li className="nav-item">
                                <Link to={navLink.link} className="nav-links" onClick={ closeMobileMenu }>
                                    {navLink.name}
                                </Link>
                            </li>
                        )})}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar