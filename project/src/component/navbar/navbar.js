import React, { useState } from "react";
import { useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import "./navbar.scss"

import logo from "./ve.jpg"

function Navbar(){

    const [open,setNotOpen]=useState(true)
    return(
    <>
          <div className="navigationn">
            <Link className="logo-container" to={"/"}>
             <img src={logo} alt="" />
            </Link>
            <div className="nav-links-containerrr" >
            <div className={`linkss  ${open ? "":"jal" } `} onClick={()=>{
                setNotOpen(!open)
            }}  >
            <Link className="nav-linkk" to={"/"}> HOME </Link>
            <Link className="nav-linkk" to={"operation"}> About Us</Link>
            <Link className="nav-linkk" to={"orders"}>Contact</Link>
            <Link className="nav-linkk" to={"shop"}> Projects</Link>
            </div>
            <i className="fa-solid fa-bars" onClick={()=>{
                setNotOpen(!open)
            }}></i>
            </div>
      </div>
    </>
    )
}
export default Navbar