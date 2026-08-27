// let newArr = [...oldArr]
// let newObj = {...oldObj}


let cart =["furits", "rice"]
// cart.push("egg")
// console.log(cart)

let cart2 = [...cart, "egg"]
// console.log(cart, cart2)

const personalInfo = {
    name: "Aminul",
    age: 28
};

const contactInfo ={
    email: "amin@aminul.com",
    mobile: "01735887442",
};

const fullProfile = {
    ...personalInfo,
    ...contactInfo, 
    zipcode: "6000",
}

console.log(fullProfile)