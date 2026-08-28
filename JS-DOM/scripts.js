// Add text inside tags
let headTitle = document.querySelector('h1');
// headTitle.innerText = 'Hello Joinal'
headTitle.innerText = headTitle.innerText + ' '+ 'Joinal'

// Change text
let boxes = document.querySelectorAll('.box');
// boxes[0].innerText = 'New Text'
// boxes[1].innerText = 'New Text'

let newNum = 1;
for(box of boxes){
   box.innerText = `Box No ${newNum}`
   newNum++;
} 


// Create Add Element

let learnBtn = document.createElement('button');
learnBtn.innerText = 'Learn More';

let heroArea = document.querySelector('.hero');
heroArea.append(learnBtn) ; // Last
// heroArea.prepend(learnBtn) ; // Fast
// heroArea.before(learnBtn) ; // Before
// heroArea.after(learnBtn) ; // After


// Add Element

// function addFruits(nameFruits) {
//     const li = document.createElement('li');
//     li.innerHTML = `${nameFruits}`

//     document.querySelector('ul').appendChild(li)
// }

// addFruits('Orange')
// addFruits('Grapes')

// Optimized
function addFruitsOP(nameFruits) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nameFruits));

    document.querySelector('ul').appendChild(li)
}

addFruitsOP('Orange')


// Edit

const editFruits = document.querySelector('li:first-child')
// console.log(editFruits)

// editFruits.innerText = "Bluebarry";
editFruits.textContent = "Bluebarrys";

const newFruits = document.createElement('li');
newFruits.textContent = "Strawberry";

editFruits.replaceWith(newFruits);

// Edit with Tag
const editTag = document.querySelector('li:last-child')
// editTag.outerHTML = '<p>Lemon</P>'

// Remove
editTag.remove();