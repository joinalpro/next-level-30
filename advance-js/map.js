const prices = [100, 200, 300, 400];

const newPrices = prices.map(price => price * 1.10);

// console.log(newPrices)

// map returns new array

const users = [
    { name: "Rahim", age: 25 },
    { name: "Karim", age: 30 },
    { name: "Hasan", age: 22 }
];

const names = users.map(user => user.name)
// console.log(names)
const ages = users.map(user => user.age)
// console.log(ages)

// function (user){
//     return user.age;
// }
//  user => user.age


