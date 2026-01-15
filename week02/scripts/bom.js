const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    const chapter = input.value.trim();

    if (chapter === '') { return; }

    // Create elements INSIDE the handler
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = '❌';

    // Add delete behavior for this specific item
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });

    li.append(deleteButton);
    list.append(li);

    // Clear input
    input.value = '';
    input.focus();
});
