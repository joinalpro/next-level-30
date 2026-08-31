const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount")
const expenseCategory = document.getElementById("expenseCategory")

const addBtn = document.getElementById("addBtn");

const total = document.getElementById("total")
const expenseList = document.getElementById("expenseList")

addBtn.addEventListener("click", ()=>{
   
})

let expenses = [
    {
        id: 1,
        name: "Burger",
        amount: 300,
        category: "Food"
    },
    {
        id: 2,
        name: "Keyboard",
        amount: 2500,
        category: "Tech"
    },
    {
        id: 3,
        name: "Uber",
        amount: 500,
        category: "Transport"
    }
];
// console.log(expenses[2].amount)

// using find()
const expense = expenses.find(expense => expense.id === 2);
// console.log(expense.amount) 

// using Function to display expenses in browser
function displayExpenses(){
    expenseList.innerHTML = "";

    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.name} - tk${expense.amount} - ${expense.category}`

        expenseList.appendChild(li)
    })
}

displayExpenses()