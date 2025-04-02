// Fonction pour ajouter une tâche à la liste
function addTask() {
    // Récupère l'élément input où l'utilisateur qui est sa tache 
    let taskInput = document.getElementById("taskInput");

    // Récupère la valeur entrée et supprime les espaces 
    let taskText = taskInput.value.trim();

    // Vérifie si l'utilisateur n'a rien entré
    if (taskText === "") {
        alert("Veuillez entrer une tâche !"); 
        return;
    }

    // Récupère l'élément et  affichées les tâches
    let taskList = document.getElementById("taskList");

    // Crée un nouvel élément pour la tâche
    let li = document.createElement("li");

    // ajoute le contenu de la tâche avec  un bouton de suppression
    li.innerHTML = `
        ${taskText} 
        <button class="delete-btn" onclick="removeTask(this)">Supprimer</button>
    `;

    // Ajoute la nouvelle tâche à la liste des tâches
    taskList.appendChild(li);


    taskInput.value = "";
}

// Fonction pour supprimer une tâche
function removeTask(button) {
    // Récupère l'élément parent du bouton cliqué 
    let li = button.parentElement;

    // Supprime l'élément  de la listees
    li.remove();
}
