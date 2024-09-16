    const todoApp = document.getElementById("todo-app");
    const todoInput = document.getElementById("todo-input");
    const addTodo = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");
    
    addTodo.addEventListener("click", function() {
        var newTodo = document.createElement("li");
        newTodo.textContent = todoInput.value;
        todoList.appendChild(newTodo);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        newTodo.appendChild(deleteButton);
        todoInput.value = "";
        
    });
    todoList.addEventListener("click", function(e) {
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }
    });