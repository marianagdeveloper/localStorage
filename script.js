function getTodos() {
    let todos = localStorage.getItem("todos");
    if (todos) {
        todos = JSON.parse(todos);
    } else {
        todos = [];
    }
    return todos;
}

function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    let todos = getTodos();
    todos.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
                    ${task}
                    <button onclick="deleteTask(${index})">Delete</button>
                `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const newTask = newTaskInput.value.trim();
    if (newTask !== "") {
        let todos = getTodos();
        todos.push(newTask);
        saveTodos(todos);
        newTaskInput.value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    let todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTasks();
}

// Initial render
renderTasks();