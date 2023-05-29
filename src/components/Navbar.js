import React from 'react'
import './style/nav.scss'
import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Help from "./Help";

const Navbar = () => {
    return (
        <>
            <div className="navContainer">
                <div className="navLogo">
                    <h1 className="logoHeading">Lasles<span>VPN</span></h1>
                </div>
                <div className="navOptionsBox">
                    <a href={About}><button className="nevOptions">About</button></a>
                    <a href={Features}><button className="nevOptions">Features</button></a>
                    <a href={Pricing}><button className="nevOptions">Pricing</button></a>
                    <a href={Testimonials} ><button className="nevOptions">Testimonials</button></a>
                    <a href={Help}><button className="nevOptions">Help</button></a>
                </div>
                <div className="navButtonsBox">
                    <button className="navBtn">Sign In</button>
                    <button className="navBtn">sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;