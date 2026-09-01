const numbers = [10, 20, 30, 40];
// accumulator, currentItem and initial value;
const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0)

// console.log(total)

const cart = [
    { name: "Laptop", price: 80000 },
    { name: "Phone", price: 40000 },
    { name: "Mouse", price: 2000 }
];

const totalPrice = cart.reduce((sum, currentPrice)=>{
    return sum + currentPrice.price;
}, 0)

console.log(totalPrice)