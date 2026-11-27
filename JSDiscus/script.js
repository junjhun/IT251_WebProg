// // // //  4 ways to write a function
// // // Hoisted and Own this

// // // // 1. Function Declaration
// // // function add(firstnum, secondnum) {
// // //     return firstnum + secondnum;
// // // }
// // // hoisted yes
// // // Own this; yes

// // // console.log(add(6,7));

// // // // 2. function expression
// // // const subtract = function(minuend, subtrahend) {
// // //     difference = minuend - subtrahend;
// // //     return difference;
// // // }
// // // number = subtract(55,8);
// // // console.log(number);
// // // hoisted no
// // // own this: yes

// // // // 3. Anonymous Callback -> callback function
// // // // btn.addEventlistener("click", function() {
// // // //     let count = 0
// // // //     return count;
// // // // })
// // //  hoisted no
// // // own this: yes

// // // // 4. Arrow Function
// // // const multiply = (num1, num2) => num1 * num2;
// // // console.log(multiply(2,4));
// // // hoisted no
// // // own this: NO

// // const user = {
// //     fname: "Aldrich",
// //     lname: "Galibo",
// //     sayHi_old: function() { console.log("Hi, I am ", this.fname); },
// //     sayHi_arrow: () => { console.log("Hi, I am ", this.fname);},
// //     age: 24,
// // }

// // user.sayHi_arrow();

// // Destructing
// // Object and Array
// const student = {
//     name: "Rey",
//     course: "BSIT",
//     age: 1,
// }

// const { name, course, age, status="active" } = student1;

// Spread
// const numbers = [1,2,3,4,5];
// const new_numbers = [...numbers, 6,7,8];

// console.log(new_numbers);

// Declarative Array Methods
const students = [
    { id: 1, fname: "Jacob", lname: "Gabo", score: 67 },
    { id: 2, fname: "Sofia", lname: "Dapers", score: 100},
    { id: 3, fname: "AKim", lname: "Avida", score: 71},
]

// .filter()
const passing = students.filter((s) => s.score >= 70);
console.log(passing);

// .map()
const labels = passing.map(({fname, score}) => `${fname} scores ${score}%`);

console.log(labels);

//  .find()
const search_student = students.find((s) => s.id ===2 );
console.log(search_student);

// reduce()
const totalScore = students.reduce((total, s) => total + s.score, 30);
console.log(totalScore);



