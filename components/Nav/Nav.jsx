import React from "react"
import { IoTicketSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import logo from "../img/logo2.png"


export default function Navbar() {
    
    function cherche(e) {
        e.preventDefault()
        const searchvalue= document.getElementById("searchin").value
       

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg" id="navbar">
                <div className="container d-flex justify-content-between">
                    <div >
                        <img className="logo-name" src={logo}/>
                    </div>
                    <nav class="navbar navbar-expand-lg navbar-light ">



                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item " id="navitems">
                                   <Link to='/' id="yahya" className="nav-link nav-links">Home</Link> 
                                </li>
                                <li className="nav-item" id="navitems">
                                <Link to='/sport' id="yahya" className="nav-link nav-links">Sport</Link> 
                                </li>
                                <li className="nav-item" id="navitems">
                                <Link to='/cinema' id="yahya" className="nav-link nav-links">cinema</Link> 
                                </li>
                                <li className="nav-item" id="navitems">
                                <Link to='/Spectacle' id="yahya" className="nav-link nav-links">Théâtre & Humour</Link> 
                                </li>




                            </ul>
                            <div class="input-wrapper">
                                <button class="icon" onClick={cherche}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
                                    </svg>
                                </button>
                                <input placeholder="search.." id="searchin"class="input" name="text" type="text" />
                            </div>

                        </div>
                    </nav>

                </div>
            </nav>
            <div><Outlet /></div>
            

        </div>
        
        
    )
}