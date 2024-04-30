// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

class tasks{
    constructor(name,date,description){
        this.name = name;
        this.description = description;
        this.date = date;
    }
}

// Todo: create a function to generate a unique task id
function generateTaskId() {
        return Math.floor(Math.random() * 1000);
}

    const taskID = generateTaskId();
    console.log(taskID);

// Todo: create a function to create a task card
function createTaskCard(tasks) {
    var taskCard = document.getElementsByClassName("taskCard")[0];
    var addTask = document.getElementsByClassName("btn btn-success")[0];
    var closeCard = document.getElementsByClassName("btn-close")[0];

    addTask.onclick = function(){
        taskCard.style.display = "block";
    }

    closeCard.onclick = function(){
        taskCard.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == taskCard) {
            taskCard.style.display = "none";
        }
    }
}
/*
taskCard.addEventListener('show.bs.modal', function(){
    var button = event.relatedTarget;
    var recipient = button.getAttribute('data-bs-whatever');
    var taskName = taskCard.querySelector('.taskName');
});
*/

/*
// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
*/