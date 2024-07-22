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



// Todo: create a function to render the task list and make cards draggable

function renderTaskList() {
    var divEl = document.createElement("div");
    createNamePar(divEl);
    createDescPar(divEl);
    createDatePar(divEl);
    createDeletebutton(divEl);

    document.getElementById("todo-cards");
    divEl.classList.add("todo-cards");
    return divEl;
}

// Todo: create a function to handle adding a new task
function handleAddTask(){
    var taskDescription = document.getElementById("task-description").value;
    var taskDate = document.getElementById("task-due-date").value;
    var taskName = document.getElementById("task-name").value;

    var newTask = addNewTaskDiv();
    console.log("handleAddTask() hit!")
    populateCard(taskDescription, taskName, taskDate, newTask);

    document.getElementById("todo-cards").appendChild(newTask);

    console.log(document.getElementById("todo-cards").childElementCount);
}

function addNewTaskDiv(){
    var divEl = document.createElement("div");
    createNamePar(divEl);
    createDescPar(divEl);
    createDatePar(divEl);
    createDeletebutton(divEl);


    divEl.classList.add("task-card");
    return divEl;
    }



function createNamePar(NewTaskDiv){
    var parEl = document.createElement("p");
    NewTaskDiv.appendChild(parEl);
    parEl.classList.add("name");
}

function createDescPar(NewTaskDiv){
    var parEl = document.createElement("p");
    NewTaskDiv.appendChild(parEl);
    parEl.classList.add("Description");
}

function createDatePar(NewTaskDiv){
    var parEl = document.createElement("p");
    NewTaskDiv.appendChild(parEl);
    parEl.classList.add("date");
}


function populateCard (taskDescription, taskName, taskDate, newTask){
    newTask.children[0].innerHTML = taskName;
    newTask.children[1].innerHTML = taskDescription;
    newTask.children[2].innerHTML = taskDate;

    dueDateToday(newTask);
}
//Adds styling to task cards
var cards = document.getElementById("todo-cards")

function dueDateToday(NewTaskDiv){
    //
    var currentDate = new Date();
    var currentDateFormatted = format(currentDate);
    console.log(currentDateFormatted);

    var timeStamp = Date.parse(NewTaskDiv.children[2].innerHTML);
    var timeStampFormatted = format(timeStamp);
    console.log(timeStampFormatted);

    console.log(timeStamp + "," + currentDate.getTime());


    if (timestamp == currentDate.getTime()){
    cards.classList.add("--bs-warning");
    console.log("dueDateToday was hit!");
    } else {
    cards.classList.add("--bs-success");
    console.log("dueDateToday was not hit!");
}}

function format(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

//Creates Delete button and deletes task
function createDeletebutton(NewTaskDiv){
    var deleteButton = document.createElement("button");
    NewTaskDiv.appendChild(deleteButton);
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "Delete";

deleteButton.addEventListener('click', () => {
    let elementToRemove = NewTaskDiv;
    elementToRemove.remove();
});
}


// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
