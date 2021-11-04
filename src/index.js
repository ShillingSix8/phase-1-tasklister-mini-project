// Got cooked, tried to follow the solution ???

document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.querySelector(`#create-task-form`);
  const taskDescription = document.querySelector(`#new-task-description`);
  const taskPriority = document.querySelector("#new-task-priority");

  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", createTask);
});

const createTask = event => {
  event.preventDefault();

  const taskDescription = document.querySelector("#new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = taskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.querySelector("#tasks").appendChild(task);
};