function addTask() {
    // Get input value
    var taskInput = document.getElementById("TaskInput");
    var taskText = taskInput.value;
 
    // If input is empty show a error message 
    if (taskText.trim() === "") { //'trim' remove the empty spaces from beginning and end of a string 
        alert("Please, insert a taks");
        return;
    }

    // Create a new item
    var newTask = document.createElement("li");
    // newTask.textContent = taskText;

    // Add a checkbox to newTask
    var checkboxInput = document. createElement("input");
    checkboxInput.type = "checkbox";

    // Make checkbox as a child to newTask
    newTask.appendChild(checkboxInput);

    // Add text to newTask
    newTask.appendChild(document.createTextNode(" " + taskText + " "));

    // Add a delete button
    var deleteButton = document.createElement("button"); // Create button
    deleteButton.textContent = "Delete"; // Add text to button
    deleteButton.onclick = function() { // Function of button to remove task
        newTask.remove();
    };

    // Make deleteButton as a child to newTask
    newTask.appendChild(deleteButton);    

    // Add the new task to list
    var taskList = document.getElementById("TaskList");
    taskList.appendChild(newTask);

    // Clean the input
    taskInput.value = "";
}