// console.log('connected')

// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(number => number %2 === 0);
// console.log(evenNumbers)

// object array filter()

// const users = [
//     { name: "Rahim", age: 17 },
//     { name: "Karim", age: 25 },
//     { name: "Hasan", age: 30 },
//     { name: "Jamal", age: 16 }
// ];

// const adults = users.filter(user => user.age >= 18);

// console.log(adults)

// const products = [
//     { name: "Laptop", price: 80000 },
//     { name: "Phone", price: 40000 },
//     { name: "Mouse", price: 2000 },
//     { name: "Monitor", price: 30000 }
// ];

// const expensiveProducts = products.filter(product => product.price > 30000).map(product => product.name)
// console.log(expensiveProducts)


// Destructuring + Filter
const users = [
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 25 },
    { name: "Hasan", age: 30 },
    { name: "Jamal", age: 16 }
];

// const adults = users.filter(({age}) => age >= 18)
// const adults = users.filter(user => user.age >= 18)
// console.log(adults)