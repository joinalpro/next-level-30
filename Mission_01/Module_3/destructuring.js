// Destructuring

const student = {
    name: 'Panu',
    age: 29,
    address: "Dhaka",
}

// const {age, address, name} = student

// console.log(name)

const student1 = {
    name: 'Panu',
    age: 29,
    address: {
        city: "Dhaka",
        zip:1236,
    },
}
// nested and name alias

// const {name:newName,  address: {city, zip}} = student1

// console.log(name)
// console.log(city)
// console.log(zip)
// console.log(newName)

// const arr = [10, 20, 30];

// const [first, second, third] = arr;
// const [, , third] = arr;

// console.log(third)

const student2= {
    name: 'Aminul',
    age: 28,
    address: {
        city: "Dhaka",
        zip:1236,
    },
    hobbies: ["Gardening", "Painting"],
}
const {name, address:{city}, hobbies:[first]} = student2

console.log(name)
console.log(first)