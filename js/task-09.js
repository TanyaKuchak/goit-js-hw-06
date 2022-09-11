function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const colorRef = document.querySelector('.color');

changeColorRef.addEventListener('click', handleClick);

function handleClick() {
  colorRef.textContent = getRandomHexColor() ;
  bodyRef.style.background = colorRef.textContent;
  
  console.log('click');
}
console.log(changeColorRef);
