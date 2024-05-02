# To-Do-List-App

This is a simple To-Do List app that allows users to add tasks to a list, mark tasks as completed, and delete tasks. The app uses HTML, CSS, and JavaScript to create a responsive and user-friendly interface.

## Features
- Add tasks to the list by typing in the input box and clicking the "Add" button or pressing the "Enter" key.
- Mark tasks as completed by clicking the checkbox next to the task.
- Delete tasks by clicking the "x" button next to the task.
- Clear all tasks by clicking the "Clear All" button.
- Persist data across page reloads using local storage.

## Getting Started
To use the app, simply open the `index.html` file in a web browser.

## Usage
### Adding Tasks
To add a task to the list, follow these steps:
1. Type the task in the input box.
2. Click the "Add" button or press the "Enter" key.
The task will be added to the list and displayed in the `list-container` element.

### Marking Tasks as Completed
To mark a task as completed, follow these steps:
1. Click the checkbox next to the task.
The task will be displayed with a line through it to indicate that it has been completed.

### Deleting Tasks
To delete a task, follow these steps:
1. Click the "x" button next to the task.
The task will be removed from the list.

### Clearing All Tasks
To clear all tasks from the list, follow these steps:
1. Click the "Clear All" button.
All tasks will be removed from the list.

## Technology
The app uses the following technologies:
- HTML: for structuring the content.
- CSS: for styling the interface.
- JavaScript: for handling user interactions and persisting data.

## Code Overview
The following is a brief overview of the code:
- The `inputBox` and `listContainer` variables are used to reference the input box and list container elements, respectively.
- The `addTask` function is used to add tasks to the list. It checks if the input box is empty and displays an alert if it is. It then creates a new list item and appends it to the list container.
- The event listener on the `listContainer` element is used to handle user interactions with the list items. It toggles the "checked" class on the list item when the user clicks on it and saves the data to local storage. It also removes the list item when the user clicks on the "x" button and saves the data to local storage.
- The event listener on the `document` element is used to handle the user pressing the "Enter" key when the input box is focused. It triggers a click on the "Add" button.
- The `saveData` function is used to save the data in the list container to local storage.
- The `showData` function is used to display the data from local storage in the list container when the page is loaded.
- The event listener on the `clearButton` element is used to clear all tasks from the list when the "Clear All" button is clicked.

## Conclusion
This To-Do List app is a simple and easy-to-use tool for managing tasks. It uses modern web technologies to provide a responsive and user-friendly interface. The app is open source and can be modified and extended to meet specific needs.

