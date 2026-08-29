// console.log('running')

const title = document.getElementById('title');
// console.log(title)

const texts = document.getElementsByClassName('text');
// console.log(texts.length)
// console.log(texts[0])
// Loop

for(let i = 0; i <texts.length; i++){
    // console.log(texts[i].innerText)
}

// getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs.length)
// console.log(paragraphs[0])

const button = document.getElementsByTagName("button")
    // console.log(button)

// querySElector()

const text = document.querySelector('.text');
// console.log(text.innerText)

// querySelectorAll

const textsAll = document.querySelectorAll('.text')
// console.log(textsAll)

const link = document.querySelector('#link');
// console.log(link.getAttribute("href"))

const newTitle = document.querySelector('#title')
// console.log(title.innerText)
title.innerText = "Welcome Joinal"

const box = document.querySelector('#box');
// console.log(box.innerHTML)
box.innerHTML = "<h2>Thanks Joinal</h2>"

// createElement()
// get the parent
const taskList = document.querySelector('#task-List');
// create the child
const lli = document.createElement('li')
lli.innerText = 'Learn JS'

// append the child
taskList.appendChild(lli)

// crateElement() + appendChild()
const newLi = document.createElement('li')
newLi.innerText = "Learning JS DOM"
taskList.appendChild(newLi)