// function

function add(...numbers){
   let total = 0;
   for(const num of numbers){
    total+= num;
   }
   return total;
}

// console.log(add(1,2,3,4,5))

// object
const obj = {
    name: "Aminul",
    age: 38,
    address: "Dhaka",
    ocupation:"Business",
}

const {name, ...remaining} = obj

// console.log(remaining)

// array
const arr = [1, 2, 3, 4, 100]

const [, , , ...rest] = arr;
// console.log(rest)

function checking(one, ...remaining){
    console.log(one, remaining)
}

console.log(checking("first", 1, 2, 3,4 ,5, 6))