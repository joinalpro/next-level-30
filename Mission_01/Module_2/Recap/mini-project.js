// mini project

let students = [
    {id:101, name:"Rahim", age:20, department:"CSE"},
    {id:102, name:"Karim", age:22, department:"EEE"},
]

function addStudent (name, age, dept){
    let newId = students.length > 0 ? students[students.length -1].id + 1 : 101;

    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department: dept,
    }

    students.push(newStudent);
    console.log("Student added successfully");
}

// addStudent("Joinal", 39, "AI")
// console.log(students)

addStudent("Joinal", 39, "AI")
function getAll(){
    for(const student of students){
        console.log(student)
    }
}
getAll()

function findStudent(id){
    let foundstd = null;
    for(let student of students){
        if(student.id == id){
            foundstd = student;
            break;
        }
    }
    if(foundstd){
        console.log("Found student: ", foundstd)
    }else{
        console.log("404 not found")
    }
}

findStudent(102);

function deleteStd (id){
    let targetStdt = null;
    for(let i = 0; i<students.length; i++){
        if(students[i].id == id){
            foundstd = students;
            break;
        }
    }
}