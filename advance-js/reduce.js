const prices = [100, 200, 300, 400];
// without reduce ------
// let total = 0;

// for(const price of prices){
//     total += price;
// }
// console.log(total)

// With Reduce -------
// const total = prices.reduce((sum, price) => {
//     return sum + price
// }, 0);
// console.log(total)

// accumulator, currentValue, initialValue

// const total = prices.reduce((sum, price) => sum +price, 0);
// console.log(total)

const numbers = [10, 20, 30]
const total = numbers.reduce((sum, number) =>{
    return sum + number;
}, 0)

// console.log(total)

const cart = [
    { name: "Shirt", price: 1200, quantity: 2 },
    { name: "Pants", price: 1800, quantity: 1 },
    { name: "Socks", price: 150, quantity: 3 }
];

const toptal = cart.reduce((sum, item)=>{
    return sum + item.price * item.quantity;
}, 0)

console.log(toptal)