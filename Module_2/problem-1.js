let student = {
    name: "Joinal",
    id: 102,
    marks: {
        bangla: 75,
        english:82,
        math: 90,
    }
}

let totalMarks = 0;
let totalSubject = 0;

for(const subject in student.marks){
    totalMarks += student.marks[subject]
    totalSubject++;
}
// console.log(totalMarks, totalSubject)

// let avg = (totalMarks / totalSubject).toFixed(2)
// if(avg >=80){
//     console.log("Passed with distinction. got", avg, "%")
// }else{
//     console.log("fail korla")
// }

// console.log(avg.toFixed(2))

// koto gulo item kinechen and koto tk bill hoyeche sheshe BDT dekhate hobe print kore.

let cart = [
    {name: " Shirt", price:1200, quantity:2},
    {name: " Pants", price:1800, quantity:1},
    {name: " Socks", price:150, quantity:3},
]
// [1200,1800,150]
let totalPrice = 0;
let totalItem = 0;

for(let item of cart){
    totalItem += item.quantity
    totalPrice += item.price
}
console.log(totalItem,"Items", totalPrice,"BDT")