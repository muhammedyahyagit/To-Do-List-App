var todoInput = document.getElementById('todoInput');
var addTodoBtn = document.getElementById('addTodoBtn');
var todoList = document.getElementById('todoList');

let todos = [];

addTodoBtn.addEventListener('click', addTodo);

function addTodo() {
    var todoText = todoInput.value;
    if (todoText === '') return;

    var todo = {
        id: Date.now(),
        text: todoText
    };

    todos.push(todo);
    renderTodos();
    todoInput.value = '';
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        var li = document.createElement('li');
        li.innerHTML = `
            ${todo.text}
            <span class="edit" onclick="editTodo(${todo.id})">Edit</span>
            <span class="delete" onclick="deleteTodo(${todo.id})">Delete</span>
        `;
        todoList.appendChild(li);
    });
}

function editTodo(id) {
    var todo = todos.find(todo => todo.id === id);
    if (!todo) return;

    var newText = prompt('Edit todo', todo.text);
    if (newText) {
        todo.text = newText;
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}
