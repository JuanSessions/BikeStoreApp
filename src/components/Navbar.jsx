import React, {useState, useEffect} from 'react'
import "../style/navbar.scss"
import Scroll from "react-scroll"
let Link = Scroll.Link


function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNavbar = ()=>{
        setIsActive(!isActive)
        console.log("toggle:", isActive);
    }
    return (
        <div className="navbar">
           {width < 600 && <div id="hamburger-navbar"
                class={`hamburger ${isActive ? " is-active" : ""}`}
                onClick={toggleNavbar}
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            }

          {  isActive || width > 600 ?
            ( <div className="links">
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
