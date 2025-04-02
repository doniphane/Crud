
document.addEventListener("DOMContentLoaded", loadTasks);


function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Veuillez entrer une tâche !");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `
        ${taskText} 
        <button class="delete-btn" onclick="removeTask(this)">Supprimer</button>
    `;

    taskList.appendChild(li);

    saveTask(taskText);
    taskInput.value = "";
}

function removeTask(button) {
    let li = button.parentElement;
    let taskText = li.firstChild.textContent.trim();

    li.remove();
    deleteTask(taskText);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Correction ici
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task} 
            <button class="delete-btn" onclick="removeTask(this)">Supprimer</button>
        `;
        taskList.appendChild(li);
    });
}
