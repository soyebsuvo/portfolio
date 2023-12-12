import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./navbar.css"
import link from '../../assets/answers.pdf'
export default function Navbar() {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact Me</a></li>
    </>
    return (
        <div className="md:px-16">
            <nav>
                <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="">
                        <img src={logo} alt="" className="w-32" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href={link} download>
                        <button className="px-6 py-2 bg-gradient-to-r from-[#4155d5] to-[#6868C9] text-white">Resume</button>
                    </a>                    
                </div>
            </div>
            </nav>
            
        </div>
    )
}
