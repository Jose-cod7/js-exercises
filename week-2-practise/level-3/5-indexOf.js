// Write a function that replaces an element in an array
// The function must:
// - get the index of the first item matching `valueToReplace`
// - insert `newValue` at that index
// - NOT change the original array
// - return a new array with the replacement value inserted
//need the value to replace

function replace(arr, valueToReplace, newValue) {
    let indexToReplace = arr.indexOf(valueToReplace);
    //console.log({ indexToReplace });
    let valueToBefore = arr.slice(0, indexToReplace);

    // valueToBefore.concat([newValue]); same result, option 2
    valueToBefore[indexToReplace] = newValue; // origonal option
    // valueToBefore.push(newValue); same result, option 3

    let valueAfter = arr.slice(indexToReplace + 1, arr.length);
    //console.log({ valueToBefore });
    //console.log({ valueAfter });

    return valueToBefore.concat(valueAfter); // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(numbers, 3, 2);
var newNames = replace(names, "Ashleigh", "Rares");

console.log(numbers);
console.log(newNumbers);
console.log(names);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3, 3]
  [1, 2, 3]
  [Irina, Ashleigh, Mozafar]
  [Irina, Rares, Mozafar]
*/