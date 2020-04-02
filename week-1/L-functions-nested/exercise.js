/* var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function gretting(a) {
    return "Hello " + a;
}

let mentoruno = gretting(mentor1);
let mentordos = gretting(mentor2);
let mentortres = gretting(mentor3);
let mentorcuatro = gretting(mentor4);
let mentorcinco = gretting(mentor5);

console.log(mentoruno.toUpperCase());

console.log(mentordos.toUpperCase());
console.log(mentortres.toUpperCase());
console.log(mentorcuatro.toUpperCase());
console.log(mentorcinco.toUpperCase()); */

function percentage(a, b) {
    return (a / (a + b)) * 100;
}

let percentageStudents = percentage(15, 8);

let percentageMentors = percentage(8, 15);

function createGreeting(percent, groupName) {
    console.log("Percentage " + groupName + ": " + Math.round(percent) + "%");
}

createGreeting(percentageStudents, "students");
createGreeting(percentageMentors, "mentors");