const taskFrom = document.getElementById('task-form');
const taskNameInput = document.getElementById('task-name-input');
const taskList = document.getElementById('task-list');
const resetDoneTaskBtn = document.getElementById('reset-all-done-task-btn');

function handleTaskClick(event) {
  const taskElement = event.target;
  taskElement.classList.toggle('task-done');
}

taskFrom.addEventListener('submit', function (event) {
  event.preventDefault();
  const taskItemElement = document.createElement('li');
  taskItemElement.innerText = taskNameInput.value;
  taskItemElement.addEventListener('click', handleTaskClick);
  taskList.appendChild(taskItemElement);
  taskNameInput.value = '';
});

resetDoneTaskBtn.addEventListener('click', function () {
  const doneTasks = document.querySelectorAll('.task-done');
  for (let i = 0; i < doneTasks.length; i += 1) {
    const doneTask = doneTasks[i];
    doneTask.remove();
  }
});
