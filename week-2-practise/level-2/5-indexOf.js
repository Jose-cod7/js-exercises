// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the first item matching `valueToRemove` removed
// TIP: Use the .indexOf() method

function remove(arr, valueToRemove) {
    let indexToRemove = arr.indexOf(valueToRemove);
    let arrayBefore = arr.slice(0, indexToRemove);
    let arrayAfter = arr.slice(indexToRemove + 1, arr.length);
    //console.log({ arrayBefore });
    //console.log({ arrayAfter });
    return arrayBefore.concat(arrayAfter);
    // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, "Ashleigh");

console.log(newNumbers);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3]
  [Irina, Mozafar]
*/