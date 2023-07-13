import React from "react";
import cyberBoy from "../../assets/Cyberpunk_head_darker.png";
// import cyberBoyGif from "../../assets/cyber_head_final2.gif";
// import cyberBoyvideo from "../../assets/cyber_head_video.mp4";
import './Header.css';
import { HeaderContent } from "../HeaderContent";
import { parallaxEffect } from "../ParallaxEffect";


function Header(){

    function addParallaxEffect(){
        const container = 'header';
        const objects = [
            {
                objectClass: "particles-container",
                objectSpeed: 0.5,
                objectRotation: true
            },{
                objectClass: "content",
                objectSpeed: 1,
                objectRotation: true
            },{
                objectClass: "header-image",
                objectSpeed: 0,
                objectRotation: true
            }
        ];
        parallaxEffect(container, objects);
    }

    React.useEffect(()=>{

        const particlesContainer = document.querySelector('.particles-container');

        for (let y = 0; y < particlesContainer.offsetHeight; y += 50) {
            for (let x = 30; x < particlesContainer.offsetWidth; x += 50) {
                const particle = document.createElement('div');
                const xPercent = (100 * x) / particlesContainer.offsetWidth;
                const yPercent = (100 * y) / particlesContainer.offsetHeight;
                particle.classList.add('particle','z-0');
                particle.style.top = yPercent + '%';
                particle.style.left = xPercent + '%';
                particlesContainer.appendChild(particle);
            }
        }
        addParallaxEffect();
    }, []);

    return(
        <header className="header w-full h-screen bg-gray-900 p-10 relative"  >
            <img src={cyberBoy} alt="cyber-boy" className="header-image"/>
            <HeaderContent> </HeaderContent>
            <div className="position w-full absolute top-[80%] left-[50%]">
                <button className="download-button bg-transparent text-white cursor-pointer"> Download CV</button>
            </div>
        </header>
    );
}

export { Header }