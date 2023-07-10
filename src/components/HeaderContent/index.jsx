import React, { Children } from "react";
import './HeaderContent.css';
import { NavigationBar } from "../NavigationBar";

function HeaderContent({children}){
    return(
        <div className="header-content w-full h-full border border-zinc-400">
            <NavigationBar/>
            <div className="top-left"></div>
            <div className="top-right"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>

            <h2 className="name-left">Ayrton</h2>
            <h2 className="name-right" >Aranibar</h2>
            <div className="particles-container w-full h-1/2 "></div>
            {children}
        </div>
    );
}

export { HeaderContent };