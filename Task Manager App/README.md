# Task Manager App

## Overview
The Task Manager App is a simple, interactive web application built with vanilla JavaScript, HTML, and CSS. It allows users to add, toggle completion status, filter, and delete tasks. Tasks are persisted in the browser's local storage, ensuring data remains available across sessions. The app features a clean, responsive UI styled with Bootstrap.

## Features
- **Add Tasks**: Users can input new tasks via a text field and add them to the list with a timestamp indicating when the task was created.
- **Toggle Completion**: Tasks can be marked as completed or incomplete using checkboxes.
- **Filter Tasks**: Options to view all tasks, only completed tasks, or only incomplete tasks.
- **Delete Tasks**: Individual tasks can be removed from the list.
- **Task Summary**: Displays the total number of tasks, completed tasks, and incomplete tasks.
- **Persistence**: Tasks are saved to local storage automatically.

## Architecture
The application is modularized into separate JavaScript modules for better maintainability:
- `app.mjs`: Main application logic, event listeners, and initialization.
- `handlers.mjs`: Event handlers for user interactions (add, toggle, filter, delete).
- `logic.mjs`: Core business logic for managing tasks (add, toggle, filter, delete).
- `ui.mjs`: User interface rendering and updates.

## Key Components
### HTML Structure (`index.html`)
- Form for adding new tasks.
- Dropdown for filtering tasks.
- List container for displaying tasks.
- Summary section showing task counts.

### CSS Styling (`styles.css`)
- Custom styles for layout and responsiveness.
- Integration with Bootstrap for consistent design.

### JavaScript Modules
- **Handlers**: Capture user events and delegate to logic functions.
- **Logic**: Manipulate the tasks array and update local storage.
- **UI**: Render tasks and update the DOM based on the current state.

## Development Process and Fixes
During development, several issues were identified and resolved to ensure the app functions correctly:

1. **Task Object Handling Bug**:
   - **Issue**: The `addTask` function in `logic.mjs` was incorrectly pushing only the task text string instead of the full task object. This caused runtime errors when rendering, as the UI expected objects with properties like `title`, `timeStamp`, and `completed`.
   - **Fix**: Updated the function to accept and push the entire task object, ensuring all task data is stored and accessible.

2. **Summary Update in Filtering**:
   - **Issue**: When filtering tasks, the summary statistics were updated based on the filtered list's length, leading to inaccurate counts (e.g., showing filtered count as total tasks).
   - **Fix**: Modified the `filterTasks` function to always update the summary with counts from the full tasks array, maintaining accurate overall statistics regardless of the current filter.

3. **Timestamp Accuracy**:
   - **Issue**: The task timestamp was generated using `new Date().toLocaleDateString()`, which only captured the date without time, despite the variable and property being named to suggest a full timestamp.
   - **Fix**: Changed to `new Date().toLocaleString()` to include both date and time, providing a more precise creation timestamp.

4. **Code Consistency and Best Practices**:
   - Ensured camelCase naming conventions for variables and functions.
   - Verified no syntax or linting errors across all modules.
   - Tested the app by running a local server and confirming functionality in the browser.

## Technologies Used
- **JavaScript (ES6 Modules)**: For logic and interactivity.
- **HTML5**: For structure.
- **CSS3 & Bootstrap**: For styling and responsiveness.
- **Local Storage API**: For data persistence.

## How to Run
1. Navigate to the project directory.
2. Start a local HTTP server (e.g., using Python: `python -m http.server 8000`).
3. Open `http://localhost:8000` in a web browser.
4. Add tasks, toggle completion, filter, and delete as needed.

## Future Enhancements
- Add due dates and reminders.
- Implement user authentication and cloud storage.
- Enhance UI with animations and themes.
- Add search functionality for tasks.

This project demonstrates fundamental web development concepts, including modular JavaScript, DOM manipulation, event handling, and local data storage.
