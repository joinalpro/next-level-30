const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Mouse" }
];

const index = products.findIndex((product => product.id === 2));

console.log(index)