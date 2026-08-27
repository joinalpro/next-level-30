// foreach, map

// foreach
// let fruits = ["Apple", "Banana", "Mango", "jackfruit"];

// let newFruits = fruits.forEach((f, idx)=>{
//     console.log(`${idx + 1} -> ${f}`)
// })
// console.log(newFruits)

// map
// let newFruits = fruits.map((f, idx) => {
//     return `${idx +1} -> ${f}`
// })

// console.log(newFruits)

// let newFruits2 = fruits.map((f) => f.toLowerCase());

// console.log(newFruits2)

// let customFruits = fruits.filter((f)=>f.length > 5);

// console.log(customFruits)

// find
let fruits = ["Apple", "Banana", "Mango", "jackfruit"];

// let customFrt = fruits.find((f)=> f.length >5)
// console.log(customFrt)

// includes
// let findFrt = fruits.includes("Mango")
// console.log(findFrt)

// Sum

let students = [
    {name:"Aminul", marks:95},
    {name:"Taju", marks:75},
    {name:"Joinal", marks:98},
]

// let studentCheck = students.some((s)=>s.marks > 80);

let studentCheck = students.every((s)=>s.marks > 70);
console.log(studentCheck)