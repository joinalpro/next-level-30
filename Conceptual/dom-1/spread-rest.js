// spread Operator

// const numbers = [10, 20,30];

const fruits = ["Apple", "Mango", "Banana"]

const newFruits = ["Watermelon", ...fruits];
// console.log(newFruits)

// Array Merge

const fronted = ["HTML", "CSS", "Javascript"];
const backend = ["Node.js", "Express"]

const skills = [...fronted, ...backend];
// console.log(skills)

// Object Spread
const user = {
    name: "Joinal",
    age: 38
}

// const newUser = {...user}
// console.log(newUser)

const updateUser = {
    ...user,
    age: 39
}
// console.log(updateUser)


// Object Merge

const userInfo = {
    name: "Joinal",
    age: 38,
}
const userJob ={
    role: "Developer",
    company: "ABC",
}

const user2 = {
    ...userInfo,
    ...userJob,
}

// console.log(user2)

// rest operator with Array Destructuring

const newNumbers = [10, 20, 30, 40, 50];
const [first, second,...rest]= newNumbers;
// console.log(first, rest)

// Rest in Function

function add(...new2Numbers){
    // console.log(new2Numbers)
}
add(1, 2,3, 4, 5, 6, 7)

function showSkills (firstSkills, ...otherSkills){
    // console.log(firstSkills)
    // console.log(otherSkills)
}

showSkills("JS", "React", "Next.js")

const user3 = {
    name: "Joinal",
    age: 38,
    skills: ["JS", "React"],
}

const updateUser3 = {
    ...user3,
    skills: [...user3.skills, "Next.js"]
}

console.log(updateUser3.skills)