// reduce, sort, chaining

let products = [
    {title: "Mouse", price:500, inStock: true},
    {title: "Keyboard", price:1000, inStock: true},
    {title: "Monitor", price:12000, inStock: false},
    {title: "Headphone", price:1500, inStock: true},
]

let totalPrice = products.reduce((acc, currentV)=>{
    return (acc += currentV.price)
}, 0)

// console.log(totalPrice)

// let sorted = [10, 30, 600, 45, 900].sort((a,b)=> a-b)
// let sorted = [10, 30, 600, 45, 900].sort((a,b)=> b -a)

// let sorted = products.sort((a,b)=> a.price-b.price)
// console.log(sorted)

// let estimatedPrice = products.filter((p)=> p.inStock == true).reduce((acc, currentV)=>{
//     return acc += currentV;
// },0);

// console.log(estimatedPrice)

export let estPrice = products
    ?.filter((p) => p.inStock == true)
    ?.reduce((acc, cur)=> {
        return (acc += cur.price);
    }, 0);

console.log(estPrice)