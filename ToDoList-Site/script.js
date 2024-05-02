const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// List in Container using Enter key in Keyboard

document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  let button = document.getElementById("addButton");

  // Add event listener for key press
  document.addEventListener("keypress", function (event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13 || event.which === 13) {
      // Trigger a click on the button
      button.click();
    }
  });
});

// Function to save Data, prevent loosing data by reloading

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show data always inspite of reloading

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();

// function to clear all the task by clicking clear button!

document.addEventListener("DOMContentLoaded", function () {
  let clearButton = document.getElementById("clear-button");

  clearButton.addEventListener("click", function () {
    // Remove all tasks from the list
    listContainer.innerHTML = "";
  });
});
