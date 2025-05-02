# Dynamic To-Do List

This is a simple, browser-based to-do list application built using HTML, CSS, and JavaScript. It allows users to add and remove tasks dynamically.

## Features

- Add tasks to a list
- Prevent empty tasks from being added
- Remove individual tasks
- Input field clears after adding a task
- Event listeners

## How It Works

1. The user enters a task in the input field.
2. Clicking the "Add Item" button triggers a JavaScript function that:
   - Retrieves the task text
   - Checks if the input is empty (shows an alert if so)
   - Creates a new list item (`<li>`) with the task text
   - Adds a remove button to the list item
   - Appends the item to the task list
   - Clears the input field
3. Clicking the remove button deletes the associated task

## Files

- `index.html` - Contains the basic structure of the web page
- `style.css` - (Optional) Styles for the to-do list layout
- `todo.js` - Handles all JavaScript functionality for the dynamic list

## License

This project is for educational purposes only.
