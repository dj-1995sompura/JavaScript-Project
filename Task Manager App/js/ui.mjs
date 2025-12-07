export function renderTasks(tasks) {
  console.log('Rendering tasks:', tasks);
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  if (tasks.length > 0) {
    taskList.classList.add('task-list-cst');
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      const ul = document.createElement('ul');
      ul.classList.add('list-group', 'list-group-horizontal', 'mb-2', 'list-horizontal-cst');
      
      const taskCheckbox = document.createElement('input');
      taskCheckbox.type = 'checkbox';
      taskCheckbox.id = `task-${index}`;
      taskCheckbox.classList.add('me-2');
      taskCheckbox.checked = task.completed || false;
      ul.appendChild(taskCheckbox);

      const taskItem = document.createElement('li');
      taskItem.textContent = task.title.toUpperCase();
      ul.appendChild(taskItem);
      
      const idItem = document.createElement('li');
      idItem.textContent = task.timeStamp;
      ul.appendChild(idItem);
      
      const btnItem = document.createElement('li');
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.id = `delete-${index}`;
      deleteBtn.className = 'btn btn-danger btn-sm';
      btnItem.appendChild(deleteBtn);
      ul.appendChild(btnItem);
      
      li.appendChild(ul);
      taskList.appendChild(li);
    });
  } else {
    taskList.classList.remove('task-list-cst');
  }
}

export function updateSummary(total, completed = 0, incomplete = 0) {
  document.getElementById('total-tasks').textContent = `Total Tasks: ${total}`;
  document.getElementById('completed-tasks').textContent = `Completed Tasks: ${completed}`;
  document.getElementById('incomplete-tasks').textContent = `Incomplete Tasks: ${total - completed}`;
}