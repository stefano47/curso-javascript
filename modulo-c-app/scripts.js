var appElement = document.querySelector('div#app')

var listElement = document.createElement('ul')
var inputElement = document.createElement('input')
var buttonElement = document.createElement('input')
buttonElement.setAttribute('type', 'button')
buttonElement.setAttribute('value', 'Adicionar')

appElement.appendChild(listElement)
appElement.appendChild(inputElement)
appElement.appendChild(buttonElement)


var todos = JSON.parse(localStorage.getItem('list_todos')) || []
function renderTodos(){
    listElement.innerHTML = ''

    for(todo of todos){
        var todoElement = document.createElement('li')
        var textElement = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')
        var linkText = document.createTextNode('Excluir')
        linkElement.appendChild(linkText)

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', `deleteTodo(${pos})`)

        todoElement.appendChild(textElement)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo(){
    var todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
    saveToStorage()
}

buttonElement.onclick = addTodo

function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

