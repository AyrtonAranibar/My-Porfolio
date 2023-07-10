import React from "react";
import cyberBoy from "../../assets/Cyberpunk_head_darker.png";
// import cyberBoyGif from "../../assets/cyber_head_final2.gif";
// import cyberBoyvideo from "../../assets/cyber_head_video.mp4";
import './Header.css';
import { HeaderContent } from "../HeaderContent";


function Header(){

    React.useEffect(()=>{
        const particlesContainer = document.querySelector('.particles-container');

        for (let y = 0; y < particlesContainer.offsetHeight; y += 50) {
            for (let x = 10; x < particlesContainer.offsetWidth; x += 50) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.top = y + 'px';
                particle.style.left = x + 'px';
                particlesContainer.appendChild(particle);
            }
        }
    }, []);

    return(
        <header className="w-full h-screen bg-gray-900 p-10 relative" >
            <img src={cyberBoy} alt="cyber-boy"/>
            <HeaderContent> </HeaderContent>
           
        </header>
    );
}

export { Header }