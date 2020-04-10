// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

function validate(num) {
    if (typeof num === "number") {
        return true;
    } else {
        return false;
    }
}

function validate2(num) {
    if (num <= 100) {
        return true;
    } else {
        return false;
    }
}

function validate1(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

function validate3(num) {
    if (num < 0) {
        return false;
    } else {
        return true;
    }
}

/* 
       DO NOT EDIT BELOW THIS LINE
       --------------------------- */

console.log(validate(10));
console.log(validate1(10.5));
console.log(validate2(101));
console.log(validate3(-12));
console.log(validate("16"));

/* 
         EXPECTED RESULT
                      ---------------
                      true
                      true
                      false
                      false
                      false
                    */