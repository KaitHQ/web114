//Tomira Jefferson | KaitHQ

// Step 1. Select elements, use document.getElementById
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Step 2. Add event listener to the button
addTaskBtn.addEventListener("click", function () {
// Step 3. Get the task text
  const taskText = taskInput.value.trim();

// Step 4. Check if the input is empty
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

// Step 5. Create new list item
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

// Step 6. Create remove button
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "<span class=\"material-icons\">delete</span>";
  removeBtn.style.marginLeft = "10px";

// Step 7. Add event listener to remove button
  removeBtn.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });

// Step 8. Append the button and list item
  listItem.appendChild(removeBtn);
  taskList.appendChild(listItem);

// Step 9. Clear the input field
  taskInput.value = "";
});

// Additional script for current date. I like to add current dates to projects.
function showCurrentDate() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options); // e.g., "May 2, 2025"
  document.getElementById("current-date").textContent = formattedDate;
}

document.addEventListener("DOMContentLoaded", showCurrentDate);                                                                                                                                                                                                                                                                                   