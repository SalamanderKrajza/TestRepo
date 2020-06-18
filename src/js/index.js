import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

import {} from './importedFile.js' 

console.log ("file: importedFile.js executed once!")

//I am adding this another time to show that previous import is not executed another time if i am import this
import {} from './importedFile.js' 

console.log("this is last console log (we can see that between first execution and this line there is no console logs")