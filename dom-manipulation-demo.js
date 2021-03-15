const taskFrom = document.getElementById('task-form');
const taskNameInput = document.getElementById('task-name-input');
const taskList = document.getElementById('task-list');

taskFrom.addEventListener('submit', function (event) {
  event.preventDefault();
  const taskItemElement = document.createElement('li');
  taskItemElement.innerText = taskNameInput.value;
  taskItemElement.addEventListener('click', handleTaskClick);
  taskList.appendChild(taskItemElement);
});

function handleTaskClick(event) {
  const taskElement = event.target;
  taskElement.classList.toggle('task-done');
}
