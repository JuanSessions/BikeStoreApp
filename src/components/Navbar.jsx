import React, {useState} from 'react'
import "../style/navbar.scss"
import Scroll from "react-scroll"
let Link = Scroll.Link



function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const toggleNavbar = ()=>{
        setIsActive(!isActive)
        console.log("toggle:", isActive);
    }
    return (
        <div className="navbar">
            <div id="hamburger-navbar"
                class={`hamburger ${isActive ? " is-active" : ""}`}
                onClick={toggleNavbar}
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>

          {  isActive?
            ( <div>
                <Link to="home-container"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                - Home -
            </Link>
                    <Link to="products-container"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                       - Products List -
            </Link>
                <Link to="contact-container"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    - Contact - 
                </Link>

            </div>) : null
            }
            
        </div>
    )
}

export default Navbar
