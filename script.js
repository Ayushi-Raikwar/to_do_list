function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const listItem = createTaskItem(taskText, false);
    taskList.appendChild(listItem);
    
    taskInput.value = '';
}

function createTaskItem(taskText, isCompleted) {
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const dateSpan = document.createElement('span');
    const currentDateTime = new Date().toLocaleString();
    dateSpan.textContent = currentDateTime;
    dateSpan.className = 'time-stamp';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function() {
        markTaskComplete(listItem);
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(dateSpan);

    if (!isCompleted) {
        listItem.appendChild(completeButton);
    } else {
        taskSpan.classList.add('completed');
    }

    return listItem;
}

function markTaskComplete(listItem) {
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');
    
    taskList.removeChild(listItem);

    const taskText = listItem.firstChild.textContent;
    const completedItem = createTaskItem(taskText, true);
    completedTaskList.appendChild(completedItem);
}
