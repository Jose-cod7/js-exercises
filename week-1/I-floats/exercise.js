var numberOfStudents = 15;
var numberOfMentors = 8;
let totalOfPersons = numberOfMentors + numberOfStudents;
let studentsPorcentSum = (numberOfStudents / totalOfPersons) * 100;
let mentorsPorcentSum = (numberOfMentors / totalOfPersons) * 100;
let mentorsPorcent = Math.round(mentorsPorcentSum);
let studentsPorcent = Math.round(studentsPorcentSum);

console.log("Percentage students: " + studentsPorcent + "%");
console.log("Percentage mentors: " + mentorsPorcent + "%");