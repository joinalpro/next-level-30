const prices = [100, 500, 1200, 300, 2000];

const expensive = prices.filter(price => price > 500)
// console.log(expensive)

const users = [
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 25 },
    { name: "Hasan", age: 30 }
];

const adults = users.filter(user => user.age >= 18)
console.log(adults)
