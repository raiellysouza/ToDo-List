function addTask() {
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('List-container');
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <span onclick="deleteTask(this)">x</span>`;
    li.addEventListener('click', () => li.classList.toggle('checked'));

    listContainer.appendChild(li);
    inputBox.value = ""; 
}

function deleteTask(task) {
    const li = task.parentElement;
    li.remove();
}
