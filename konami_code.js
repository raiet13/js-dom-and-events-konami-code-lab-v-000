const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// up up down down left right left right b a

function init() {
  // Write your JavaScript code inside the init() function
  
  let codeIndex = 0;
  
  document.body.addEventListener('keydown', function(event) {
    // console.log('which = ', event.which, ' || detail = ', event.detail, ' || location = ', event.location)
    
    const key = parseInt(event.detail || event.which);
    // console.log('key = ', key);
    if (key === code[codeIndex]) {
        codeIndex++;
        // console.log(`${key} is a Konami input!`);
        if (codeIndex === code.length) {
            alert('Congratulations! You entered the Konami Code!');
            codeIndex = 0;
        }
    } else {
        // console.log(`${key} is NOT a Konami input! Restarting Check.`);
        codeIndex = 0;
    }
  });
}


///// EXAMPLE BELOW //////

// // Key codes for A, B, and C keys.
// const alphabet = [65, 66, 67];
 
// // Keep track of index outside of the event handler.
// let index = 0;
 
// // This is the function that would be invoked by the event listener.
// function onKeyDownHandler(e) {
//   const key = parseInt(e.detail || e.which);
 
//   if (key === alphabet[index]) {
//     index++;
 
//     if (index === alphabet.length) {
//       alert("Hurray!");
 
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
// }


///// ERROR WHEN RUNNING TESTS //////

// https://github.com/learn-co-curriculum/js-what-is-a-test-lab/issues/11
// https://github.com/learn-co-curriculum/moving-things-with-javascript/issues/17

// Solution used

// Looks like this is a broader issue affecting multiple JS labs. The solution is to change this line in package.json…

// "mocha-jsdom": "^1.1.0",

// …to this…

// "mocha-jsdom": "~1.1.0",

// …then run npm install.

