// const numbers = [10, 20, 30, 40];

// const findNumbers = numbers.find(number => number > 20);
// console.log(findNumbers)

const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Phone", price: 40000 },
    { id: 3, name: "Mouse", price: 2000 }
];

// const newProduct = products.find(product => product.id === 2)
// const newProduct = products.find(product => {
//     if(product.id === 2){
//         return product.name
//     }
// })

const newProduct = products.find(product => product.name === "Phone")
console.log(newProduct)