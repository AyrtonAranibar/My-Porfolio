import React from "react";
import "./NavigationBar.css"

function NavigationBar(){
    return(
        <div className="navigation-bar w-auto h-min  z-10 flex flex-row justify-between">
            <div className="h-fit">   
                <a  href="#">Ayrton Aranibar</a>
            </div>
            <ul className="navigation-items flex flex-row gap-x-6">
                <li><a href="#"> About me </a></li>
                <li><a href="#"> Projects </a></li>
                <li><a href="#"> Skills </a></li>
                <li><a href="#"> Contact me </a></li>
            </ul>
        </div>
    );
}

export { NavigationBar };