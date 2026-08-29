const body = document.getElementById('body');
const button = document.querySelectorAll('li');

// const redColor = document.querySelector('.red')
// redColor.addEventListener('click', ()=>{
//     body.style.backgroundColor = "#ff7675"
// })
// const greeColor = document.querySelector('.green')
// greeColor.addEventListener('click', ()=>{
//     body.style.backgroundColor = "#4ba352"
// })
// const blueColor = document.querySelector('.blue')
// blueColor.addEventListener('click', ()=>{
//     body.style.backgroundColor = "#5831e7"
// })
// const purpleColor = document.querySelector('.purple')
// purpleColor.addEventListener('click', ()=>{
//     body.style.backgroundColor = "#bd37d8"
// })

// button.forEach(function(value){
//     value.addEventListener('click',function (){
//         let className = this.classList.value;
//         body.style.backgroundColor = className;
//         // console.log(className)
//     })
// })
button.forEach(function(value){
    value.addEventListener('click',function (){
        let className = this.classList[0];
        let color = '';
        if (className === 'red'){
            color = '#ff7675'
        }
        if (className === 'green'){
            color = '#4ba352'
        }
        if (className === 'blue'){
            color = '#5831e7'
        }
        if (className === 'purple'){
            color = '#bd37d8'
        }
        body.style.backgroundColor = color;
        // console.log(className)
        // console.log(color)
    })
})