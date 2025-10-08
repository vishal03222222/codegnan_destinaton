let student = { sname: "John", age: 20, dept: "CSE", marks: 420 };
console.log(student);

// Destructuring age and marks, and collecting the rest into 'details'
let { age, marks, ...details } = student;

console.log(age, marks);
console.log(details);
