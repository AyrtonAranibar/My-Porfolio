import React, { Children } from "react";
import './HeaderContent.css';
import { NavigationBar } from "../NavigationBar";
import containerImageWhite from "../../assets/cyber_container_white.png"
import containerImage from "../../assets/cyber_container.png"
function HeaderContent({children}){


    return(
        <div className="header-content w-full h-full border border-zinc-400">
            <NavigationBar/>
            <div className="top-left"></div>
            <div className="top-right"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
            <div className="rect-decoration1 absolute top-[27.5%] left-[-2px] w-[3px] h-[150px] bg-white"></div>
            <div className="rect-decoration2  absolute top-[35.5%] right-[-2px] w-[3px] h-[150px] bg-white"></div>
            <div className="content relative h-[80%] w-full z-20">
                <h2 className="name-left z-10">Ayrton</h2>
                <h2 className="name-right z-10" >Aranibar</h2>
                <div className="text-container w-[580px] z-20 absolute">
                    {/* <img src={containerImageWhite}/> */}
                    <p className="description-text  text-gray-50 text-justify"> 
                        ¡Hola! Soy desarrollador web junior, tengo 4 meses de experiencia 
                        trabajando con PHP, y más de 6 meses estudiando Frontend de forma 
                        autodidacta. Mi pasión por la programación y el diseño web me ha 
                        llevado a explorar diferentes tecnologías y trabajar en varios proyectos<br/> 
                        de frontend utilizando HTML, CSS, JavaScript y React.js.
                    </p>
                </div>
            </div>
            
            
            <div className="particles-container w-full h-1/2 z-0"  >

            </div>
            {children}
        </div>
    );
}

export { HeaderContent };