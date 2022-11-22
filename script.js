// var form = document.querySelector('form')
// var todosList = document.querySelector('ul')
// var button = document.querySelector('button')
// var input = document.getElementById('user-todo')


// // var todosArray = []
// var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
// localStorage.setItem('todos', JSON.stringify(todosArray))

// var storage = JSON.parse(localStorage.getItem('todos'))

// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     todosArray.push(input.value)        
//     localStorage.setItem('todos', JSON.stringify(todosArray))
//     todoMaker(input.value)
//     input.value = ''

// })

// var todoMaker = function(text) {
//     var todos = document.createElement('li')
//     var checkbox = document.createElement('input')
//     checkbox.type = 'checkbox'
//     checkbox.className = 'check'
//     todos.textContent = text
//     todos.appendChild(checkbox)
//     todosList.appendChild(todos)
// }

// for (var i = 0; i < storage.length;i++){
//     todoMaker(storage[i])
// }

// button.addEventListener('click', function () {
//     localStorage.clear()
//     while (todosList.firstChild) {
//         todosList.removeChild(todosList.firstChild)
//     }
// })


// Getting all required elements
const inputfield = document.querySelector('.input-field textarea')
todoLists = document.querySelector('.todoLists')
pendingNum = document.querySelector('.pending-num')
clearButton = document.querySelector('.clear-button')

console.log(inputfield,todoLists,pendingNum,clearButton)