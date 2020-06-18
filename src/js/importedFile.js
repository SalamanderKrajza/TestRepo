console.log ('This is some example text from iported file') // some console log
document.querySelector('body').style.backgroundColor = "#f0d" //Change BG color
console.log ('This text is after changing BG color') // some console log
document.querySelector('.hello__logo').src = "http://www.pngmart.com/files/11/Sad-Pepe-The-Frog-PNG-Transparent.png" // change logo
document.querySelector('.hello__logo').style.width = '200px' // Change size
console.log ('Another console log, after changing logo')

const something = "something from other file"
export {something}; 