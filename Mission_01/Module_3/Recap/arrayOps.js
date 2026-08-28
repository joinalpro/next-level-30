//foreach, map

// let fruits = ["Apple", "Banana", "Mango", "Jackfruit"];

// let newFruits = fruits.forEach((f, idx)=>{
    // console.log(`${idx + 1} -> ${f}`)
    // return `${idx + 1} -> ${f}`; foreach can't return.
// },)

// console.log(newFruits);

// let newFruits2 = fruits.map((f)=> f.toLowerCase());

// console.log(newFruits2,"\n",fruits);


// let customFruits = fruits.filter((f)=> f.length > 5);

// console.log(customFruits)


let fruits = ["Apple", "Banana", "Mango", "Jackfruit"];

let findFr = fruits.includes("Mango")
// console.log(findFr)

// let customFruits = fruits.find((f)=> f.length > 5);
// console.log(customFruits)

let students = [
    {name: "Rahim", marks:85},
    {name: "Karim", marks: 45},
    {name: "Fahim", marks: 70},
]

// let studentCheck = students.some((s) => s.marks > 80);

let studentCheck = students.every((s) => s.marks > 40);
console.log(studentCheck)