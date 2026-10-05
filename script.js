let input = document.getElementById("task-input");
let task = document.getElementById("current-task");
let status = document.getElementById("status");

// Add a task to the existing task area.
function addTask() {
  if (input.value !== "") {
    task.value = input.value;
    task.style.display = "block";
    task.style.textDecoration = "none";

    input.value = "";
    status.innerHTML = "Task added. Ready to study!";
  } else {
    status.innerHTML = "Please enter a task first.";
  }
}

// Change the task's appearance when it is complete.
function completeTask() {
  if (task.value !== "") {
    task.style.textDecoration = "line-through";
    status.innerHTML = "Task complete. Well done!";
  } else {
    status.innerHTML = "Add a task before marking it complete.";
  }
}

// Change the page colours.
function changeColours() {
  document.body.style.backgroundColor = "#203b32";
  document.getElementById("planner").style.backgroundColor = "#d8eee0";
}

// Use the browser object to open another tab.
function openPlanner() {
  window.open("index.html", "_blank");
}

document.getElementById("add-button")
  .addEventListener("click", addTask);

document.getElementById("complete-button")
  .addEventListener("click", completeTask);

document.getElementById("colour-button")
  .addEventListener("click", changeColours);

document.getElementById("open-button")
  .addEventListener("click", openPlanner);