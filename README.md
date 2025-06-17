# localStorage To-Do List

This is a simple To-Do List application built with HTML, CSS, and JavaScript. It utilizes `localStorage` to persist the to-do items in the user's browser.

## Features

- Add new tasks to the list.
- Delete existing tasks from the list.
- Tasks are saved in `localStorage` and persist across browser sessions.

## Usage

1.  Open `index.html` in your browser.
2.  Enter a new task in the input field.
3.  Click the "Add" button to add the task to the list.
4.  Click the "Delete" button next to a task to remove it.

## Files

- `index.html`: The main HTML file containing the structure of the application.
- `style.css`: The CSS file containing the styling for the application.
- `script.js`: The JavaScript file containing the logic for the application, including functions for adding, deleting, and rendering tasks, as well as saving and retrieving tasks from `localStorage`.

## JavaScript Functions

- [`getTodos`](script.js): Retrieves the to-do items from `localStorage`.
- [`saveTodos`](script.js): Saves the to-do items to `localStorage`.
- [`renderTasks`](script.js): Renders the to-do items in the `task-list` element.
- [`addTask`](script.js): Adds a new task to the list.
- [`deleteTask`](script.js): Deletes a task from the list.

## Author

[Mariana Guanda](https://github.com/marianagdeveloper)
