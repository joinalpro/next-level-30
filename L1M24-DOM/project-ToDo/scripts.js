const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

addBtn.addEventListener('click', ()=>{
    const li = document.createElement('li'); 
    li.innerText = taskInput.value
    taskList.appendChild(li)

    taskInput.value ="";
})

taskInput.addEventListener('keydown', (e)=>{
   if(e.key === "Enter"){
    const li = document.createElement('li')
    li.innerText = taskInput.value;
    taskList.appendChild(li)
    taskInput.value = "";
   }
})