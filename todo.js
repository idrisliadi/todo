document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task) {
      addTask(task);
      input.value = '';
      input.focus();
    }
  });

  document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('add-button').click();
    }
  });

  function addTask(task) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.textContent = task;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(removeButton);
    document.getElementById('todo-list').appendChild(li);
  }