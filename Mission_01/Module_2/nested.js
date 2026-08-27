// nested data

let user = {
    name: "Joinal",
    age: 38,
    address: {
        city: "Chandpur",
        uposhohor: "Hajigonj",
        zipcode: 3611
    }
}

// console.log(user["address"]["zipcode"])
// console.log(user.address.zipcode)

// let entry = Object.entries(user)
// console.log(entry[0][1])

let students = [
    {
        name: "Rony",
        id: 101
    },
       {
        name: "Mony",
        id: 102
    },
       {
        name: "Jony",
        id: 103,
        address: {
            area: "Donia",
            thana: "Jatrabari",
            lane: "A.K Schoool lane",
            option: ["DK Chaka","Rojini"]
        }
    }
]
students[2].address.option[1] = "premium";
console.log(students[2].address.option[1])