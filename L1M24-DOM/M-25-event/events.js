//   function makeYellow (){
//             document.body.style.backgroundColor = "Yellow"
//         }

// const { createElement } = require("react");

// const btnMakeBlue = document.getElementById("btn-make-blue");
// // console.log(btnMakeBlue)

// btnMakeBlue.addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'blue';
// })


// let  btnUpdateTitle = document.getElementById("btn-update-title");

// btnUpdateTitle.addEventListener("click", () => {
//     const headerText = document.getElementById("header")
//     headerText.innerText = "New Header Text"
// });

const paraText = document.getElementById("paraText");
const inputText = document.getElementById("inputText");
const btnInputText = document.getElementById("btnInputText");


btnInputText.addEventListener('click', ()=>{
    const newInput = inputText.value;
    paraText.innerText = newInput;

    inputText.value = "";
    
})