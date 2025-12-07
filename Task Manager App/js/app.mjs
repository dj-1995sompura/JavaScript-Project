import {handleAddTask, handleToggle, handleFilter, handleDelete} from './handlers.mjs';
import { renderTasks, updateSummary } from "./ui.mjs";
console.log('App initialized');

// db
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function init() {
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('taskList');
  const filterSelect = document.getElementById('filter-tasks');

  //task addition handler
  addTaskBtn.addEventListener('click', (event) => handleAddTask(event, tasks));

  //task toggle handler
  taskList.addEventListener('change', (event) => handleToggle(event, tasks));

  // filter change handler
  filterSelect.addEventListener('change', (event) => handleFilter(event, tasks));

  // Delete task handler
  taskList.addEventListener('click', (event) => handleDelete(event, tasks));

  // Initial render
  renderTasks(tasks);
  updateSummary(tasks.length, tasks.filter(t => t.completed).length);
}

document.addEventListener('DOMContentLoaded', init);