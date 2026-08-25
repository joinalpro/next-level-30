// object
// key-value pair - entry
let user = {
    name: "Joinal",
    age: 38,
    address: "Dhaka"
}

// console.log(user.name)
// console.log(user["name"])

delete user.address;
user.address = {
    city: "Chandpur",
    Uposhohor: "Hajigonj"
}
// console.log(user.entries())
console.log(Object.keys(user))