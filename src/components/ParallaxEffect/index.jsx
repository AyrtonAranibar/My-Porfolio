/**
* This function adds parallax effect depending on the container and a list of objects,
 * each object has a class name (string), speed (Number) 0 -> static 1 -> mouse speed
 * and rotation (boolean)
 * @param {String} container 
 * @param {Array}  objectsList 
 * @returns {Void}
 */

function parallaxEffect( container, objectsList){
  const totalContainer = document.querySelector(`.${container}`);

  totalContainer.addEventListener('mousemove',(event)=>{
      const mouseX = event.pageX;
      const mouseY = event.pageY;

      const defaultXSpeed = 0.03;
      const defaultYSpeed = 0.04;

      const containerWidth = totalContainer.offsetWidth  - (totalContainer.offsetWidth/ 2);
      const containerHeight = totalContainer.offsetHeight - (totalContainer.offsetHeight / 2);

      const offsetX = (containerWidth - mouseX) * defaultXSpeed;
      const offsetY = (containerHeight - mouseY) * defaultYSpeed;

      objectsList.map((element)=>{
          
          const node = document.querySelector(`.${element.objectClass}`);
          const translate = (element.objectSpeed > 0) ? `translate(${-offsetX * element.objectSpeed }px, ${-offsetY * element.objectSpeed }px) ` : 'translate(-50% ,-50%)';
          const rotation = (element.objectRotation) ? `rotateY(${-offsetX/2}deg) rotateX(${offsetY/2}deg)` : ' ';
          node.style.transform = `${translate} ${rotation}`;
      });
  });
};

export { parallaxEffect };