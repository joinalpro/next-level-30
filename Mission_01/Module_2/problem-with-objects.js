let student = {
    name: "Rahim",
    id: 102,
    marks: {
        bangla: 75, 
        english: 82,
        math: 90
    }
}


let totalMarks = 0 ;
let totalSubject = 0;

for(const ele in student.marks){
    totalMarks += student.marks[ele]
    totalSubject++;
}

// let avg = (totalMarks / totalSubject).toFixed(2)
//     if (avg >=80){
//         console.log("Got A+", avg, "%")
//     } else{
//         console.log("Try harder")
//     }

// console.log(avg)

let cart = [
    {name: "Shirt", price: 1200, quantity:2},
    {name: "Pants", price: 1800, quantity: 1},
    {name: "Socks", price: 150, quantity: 3}
]

let totalBill = 0;
let totalItem = 0;
for (let ele of cart){
    totalBill += ele.price 
    totalItem += ele.quantity
}

console.log(totalBill, totalItem)