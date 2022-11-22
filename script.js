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
const inputField = document.querySelector('.input-field textarea'),
todoLists = document.querySelector('.todoLists'),
pendingNum = document.querySelector('.pending-num'),
clearButton = document.querySelector('.clear-button');


function allTasks(){
    let tasks = document.querySelectorAll(".pending")
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list")
    if(allLists.length > 0){
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.marginTop = "0px"
    clearButton.style.pointerEvents = "none"
}

inputField.addEventListener("keyup",(e) =>{
    let inputVal = inputField.value.trim()

    if(e.key === "Enter" && inputVal.length > 0){
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox" />
        <span class="task">${inputVal}</span>
        <i class="uil uil-trash-alt" onclick='deleteTask(this)'></i>
    </li>`

    todoLists.insertAdjacentHtml("beforeend", liTag)
    inputField.value = ""
    allTasks()
    }
})


function handleStatus(e){
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending")
    allTasks()
}

function deleteStatus(e){
    e.parentElement.remove()
    allTasks()
}


clearButton.addEventListener("click", () => {
    todoLists.innerHTML = '';
    allTasks();
})