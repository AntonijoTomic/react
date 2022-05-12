import React from "react";
import Slika from "../slike/logoo.png"
export default function Navbar()
{
    return( 
    <nav className="nav">
    <img src={Slika} className="nav-slika" />
    <h3 className="nav-h3">ReactFacts</h3>
    </nav>)
}