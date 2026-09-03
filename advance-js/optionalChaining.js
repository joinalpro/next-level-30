// optional chaining ?. will show the undefined.

// const user = {
//     name: "Joinal",
//     address: {
//         city: "Dhaka"
//     }
// };

// console.log(user.address?.city)


// find() + Optional Chaining
const users = [
    { id: 1, name: "Joinal" },
    { id: 2, name: "Rahim" }
];

const user = users.find(user => user.id === 5);
console.log(user?.name)