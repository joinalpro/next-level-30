// console.log('JS connected')

const taskInput = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

// add event in button
// addBtn.addEventListener('click', ()=>{
//      if(taskInput.value.trim() === ""){
//        return;
//     }
//     const taskText = taskInput.value;
//     const li = document.createElement('li');
//     li.innerText = taskText;
//     taskList.appendChild(li)

//     taskInput.value = "";
// })

// add functon

function addTodo(){
    if(taskInput.value.trim() === ""){
        return
    }
    const taskText = taskInput.value;
    const li = document.createElement('li');

    
    // using Span in inner text
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;
    li.appendChild(taskSpan);
    // Create Edit button
    const editBtn = document.createElement('button');
    editBtn.innerText = "🖊"
    li.appendChild(editBtn)
    editBtn.addEventListener('click', ()=>{
        
    })


    // delete button created
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "❌"
    li.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', ()=>{
       li.remove()
    })
    // create checkbox
    const checkBox = document.createElement("input");
    checkBox.type = 'checkbox'
    li.appendChild(checkBox)
    checkBox.addEventListener("change", ()=>{
        if(checkBox.checked){
            taskSpan.style.textDecoration = "line-through"
        } else{
            taskSpan.style.textDecoration = "none"
        }
    })


    taskList.appendChild(li)
    taskInput.value = "";
}

// Click
addBtn.addEventListener('click', addTodo)

// Enter key
taskInput.addEventListener('keydown', (e)=>{
    if(e.key === "Enter"){
        addTodo()
    }
})
