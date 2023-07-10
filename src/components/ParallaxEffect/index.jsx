import React from "react";
import './ParallaxEffect.css';
import fondo from '../../assets/cyberfondo.png';
import fondo2 from '../../assets/fondo2.png';

function ParallaxEffect() {
  const handleMouseMove = (event) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    const images = document.querySelectorAll('.parallax-image');

    images.forEach((element) => {
      const imageWidth = element.offsetWidth;
      const imageHeight = element.offsetHeight;

      const imageX = imageWidth - window.innerWidth;
      const imageY = imageHeight - window.innerHeight;

      const offsetX = (mouseX / window.innerWidth) * imageX - imageX / 2;
      const offsetY = (mouseY / window.innerHeight) * imageY - imageY / 2;

      const speedX = 5;

      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  };

  return (
    <div
      className="parallax-container w-full h-screen bg-slate-950 z-0"
      onMouseMove={handleMouseMove}
    >
      <img src={fondo2} className="parallax-image z-10" alt="cyberfondo" />

      <img src={fondo} className="parallax-image z-20" alt="cyberfondo" />

    </div>
  );
}

export { ParallaxEffect };