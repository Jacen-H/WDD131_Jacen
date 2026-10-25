let courses = ["WDD131", "ITM220", "WDD231", "CSE212"];

console.log(courses[0]);
console.log(courses[4]);

let coursesAndGPA0 = ["WDD131", 3.7, "ITM220", 4];

let courseAndGPA = {
    courseName: "WDD131",
    courseGPA: 3.7,
    professor: "Brother Warner"
}

console.log(courseAndGPA);

console.log(courseAndGPA.courseName);

console.log(coursesAndGPA[3]);

let coursesAndGPA = [
    {
    courseName: "WDD131",
    courseGPA: 3.7,
    professor: "Brother Warner"
    },
    {
        courseName: "WDD231",
        courseGPA: 4,
        professor: "Brother Warner"
    }
]

console.log(coursesAndGPA[1].courseName);

for(let i = 0; i < coursesAndGPA.length; i++) {
    console.log(coursesAndGPA[i].courseName)
    console.log(coursesAndGPA[i].courseGPA)
}

let body = document.querySelector('body');