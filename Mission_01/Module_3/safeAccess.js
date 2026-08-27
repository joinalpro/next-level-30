// Optional Chaining & Nullish Coalescing (?., ??) safe property access

let user1 = {
    name: "Rahim",
    address: {
        city: "Dhaka",
    },
};

let user2 = {
    name: "karim",
    // no address
};

// Optional Chaining
// console.log(user1?.address?.city)
console.log(user2?.address?.city)

// nulish collescing ?? undefined or null
console.log(user2?.address?.city ?? "Chandpur")

