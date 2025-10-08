// ---------- Example 1: Object Destructuring ----------
let student = { sname: "John", age: 20, dept: "CSE", marks: 420 };
console.log("Student Object:", student);

// Destructuring object
let { age, marks, ...details } = student;
console.log("Age:", age, "Marks:", marks);
console.log("Other Details:", details);

// ---------- Example 2: Array Destructuring ----------
let fruits = ['apple', 'mango', 'litchi', 'grapes'];
console.log("\nFruits Array:", fruits);

// Destructuring array
let [a, m, ...res] = fruits;
console.log("First Fruit:", a, "Second Fruit:", m);
console.log("Remaining Fruits:", res);
