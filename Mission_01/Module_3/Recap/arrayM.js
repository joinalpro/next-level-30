// reduce, sort, chaining

let products = [
    {title: "Mouse", price:500, inStock: true},
    {title: "keyboard", price:1200, inStock: false},
    {title: "Monitor", price:8000, inStock: true},
    {title: "Headphone", price:1500, inStock: true},
]

// let totalPrice = products.reduce((accumulator, current) => {
//     return (accumulator += current.price);
// },0)

// console.log(totalPrice)

// let sorted = [10,30,60,35,90,20].sort((a,b)=> a -b);
// let sorted = [10,30,60,35,90,20].sort((a,b)=> b -a);

// let sorted = products.sort((a,b) => a.price - b.price);
// console.log(sorted)

let estimatedPrice = products.filter((p)=> p.inStock == true).reduce((acc, cur) =>{
    return (acc += cur.price);
}, 0)

console.log(estimatedPrice)