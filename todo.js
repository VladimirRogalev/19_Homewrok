addItem.onclick = createDeleteItem;
item.onkeyup = function (e) {
    if(e.key === "Enter") {
        createDeleteItem()
    }
}

function createDeleteItem() {
    const text = item.value.trim();
    if(text) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        todoList.appendChild(li);
        const deleteButton  = document.createElement('button');
        // deleteButton.id = 'deleteItem';
        deleteButton.style.margin = '15px 15px 0';
        deleteButton.innerHTML= 'Delete item';
        li.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });
    }
    item.value = "";
}