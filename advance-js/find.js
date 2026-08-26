const users = [
    { id: 1, name: "Rahim" },
    { id: 2, name: "Karim" },
    { id: 3, name: "Hasan" }
];

const user = users.find(user => user.id === 2);
// console.log(user)

// find() returns the first matching item. if nothing matches -  undefined..

// filter() - Get all matching items vs find() only this matching items



