import { addTask, toggleTask, filterTasks, deleteTask } from './logic.mjs';
export function handleAddTask(event, tasks) {
  event.preventDefault();
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  const taskTimeStamp = new Date().toLocaleDateString();
  const task = { title: taskText, timeStamp: taskTimeStamp, completed: false };
  if (taskText !== '') {
    // Add task to the tasks array
    addTask(task, tasks)
    taskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
}

export function handleToggle(event, tasks) {
  const target = event.target;
  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    console.log('Checkbox changed:', target.id, target.checked);
    const taskIndex = parseInt(target.id.split('-')[1], 10);
    console.log('Toggling task at index:', taskIndex);
    toggleTask(taskIndex, tasks);
  }
}

export function handleFilter(event, tasks) {
  const filterValue = event.target.value;
  console.log('Filter changed:', filterValue);
  let filteredTasks = [];
  filterTasks(filterValue, tasks, filteredTasks);
}

export function handleDelete(event, tasks) {
  const target = event.target;
  if (target.tagName !== 'BUTTON' || !target.id.startsWith('delete-')) {
    return;
  }
  const id = parseInt(target.id.split('-')[1], 10);
  deleteTask(id, tasks);
}




