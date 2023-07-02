'use strict';

function typeWriter(el) {
  // Get the text content of the element
  const textArray = el.innerHTML.split('');
  // Clear the content of the element
  el.innerHTML = '';
  // Loop through each letter in the text content
  textArray.forEach((letter, i) => {
    // Set a timeout for each letter to be added to the element
    setTimeout(() => {
      el.innerHTML += letter;
      // If this is the last letter, show the element and stop the blinking animation
      if (i === textArray.length - 1) {
        el.style.visibility = 'visible';
        el.style.animationIterationCount = '1';
      }
    }, 95 * i);
  });
}

// Call the typeWriter function on the element with the id of 'elementEl'
const elementEl = document.getElementById('elementEl');
typeWriter(elementEl);