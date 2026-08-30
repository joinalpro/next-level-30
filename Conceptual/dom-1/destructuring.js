//Object Destructuring

// const user = {
//     name: "Joinal",
//     age: 38,
//     profession: "UI/UX Designer and Developer",
// }
// console.log(user.profession)

// const {name,age, profession} = user;

// const {name: userName} = user;
// console.log(userName)

// const { name, age = 18} = user;
// console.log(age)

// Array Destructuring

// const fruits = ['apple', 'banana', 'mango'];

// Normal way...
// const first = fruits[0]
// console.log(first)

// const [f, , t] = fruits;

// console.log(f,t)

// Rest + destructuring
// const numbers = [10,20,30,40,50];
// const[f, s, ...remaining] = numbers;

// console.log(f,s, remaining)

// function + Object
// const user = {
//     name: "Joinal",
//     age: 38,
//     role: "UI/UX Designer and Developer",
// }

// function showUser ({name, age, role}){
//     console.log(name, age, role)
// }
// showUser(user)

// challenge 4 

const user = {
    name: "Joinal",
    address:{
        city: "Dhaka",
        country:"Bangladesh"
    }
}
// console.log(user.address)

const {name, address:{city}} = user;
console.log(city)