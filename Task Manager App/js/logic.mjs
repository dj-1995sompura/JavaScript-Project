import { renderTasks, updateSummary } from "./ui.mjs";
export function addTask(task, tasks) {
  tasks.push(task);
  renderTasks(tasks);
  updateSummary(tasks.length, tasks.filter(t => t.completed).length);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function toggleTask(taskIndex, tasks) {
  if (tasks[taskIndex]) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    console.log('Toggled task:', tasks);
    renderTasks(tasks);
    updateSummary(tasks.length, tasks.filter(t => t.completed).length);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

export function filterTasks(filterValue, tasks, filteredTasks) {
  switch(filterValue) {
    case 'all':
      filteredTasks = tasks;
      break;
    case 'completed':
      filteredTasks = tasks.filter(task => task.completed);
      break;
    case 'incomplete':
      filteredTasks = tasks.filter(task => !task.completed);
      break;
  }

  renderTasks(filteredTasks);
  updateSummary(tasks.length, tasks.filter(t => t.completed).length);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function deleteTask(taskIndex, tasks) {
  if (tasks[taskIndex]) {
    tasks.splice(taskIndex, 1);
    renderTasks(tasks);
    updateSummary(tasks.length, tasks.filter(t => t.completed).length);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
