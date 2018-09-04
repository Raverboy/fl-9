let data = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: []
};
let listCount = 0;
let maxItems = 10;
let removeIcon = '<i class="material-icons addIcon">delete</i>';
let completeIcon = '<i class="material-icons addIcon">check_box_outline_blank</i>';
let completeCheck = '<i class="material-icons checkIcon">check_box</i>';
let ten = 10;
let one = 1;
let zero = 0;
document.getElementById('add').disabled = true;

document.getElementById('item').onkeyup = function () {
    btnActive();
}

function btnActive() {
    if (document.getElementById('item').value.trim().length === zero && listCount >= maxItems) {
        document.getElementById('add').disabled = true;
    } else {
        document.getElementById('add').disabled = false;
    }
}
renderTodoList();

document.getElementById('add').addEventListener('click', function () {
    let value = document.getElementById('item').value;
    if (value) {
        addItem(value);
    }
});
document.getElementById('item').addEventListener('keydown', function (e) {
    let value = this.value;
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
        addItem(value);
    }
});

function addItem(value) {
    addItemToDOM(value);
    document.getElementById('item').value = '';
    data.todo.push(value);
    dataObjectUpdated();
    listCount ++;
}

function renderTodoList() {
    if (!data.todo.length) {
        return
    }
    for (let i = 0; i < data.todo.length; i++) {
        let value = data.todo[i];
        addItemToDOM(value);
    }
}

function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}

function removeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;
    listCount --;
    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), one);
    } else {
        data.completed.splice(data.completed.indexOf(value), one);
    }
    dataObjectUpdated();
    parent.removeChild(item);
}

function addItemToDOM(text) {
    let list = document.getElementById('todo');
    let item = document.createElement('li');
    item.setAttribute('class', 'listItem');
    item.setAttribute('draggable', true);
    item.setAttribute('ondragover', 'dragOver(event)');
    item.setAttribute('ondragstart', 'dragStart(event)');
    let taskLine = document.createElement('div');
    taskLine.classList.add('taskLine');
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;
    remove.addEventListener('click', removeItem);
    let spanText = document.createElement('span');
    spanText.classList.add('spanText');
    spanText.innerText = text;
    let complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeIcon;
    complete.onclick = () => {
        complete.innerHTML = completeCheck;
    };
    taskLine.appendChild(spanText);
    taskLine.appendChild(complete);
    taskLine.appendChild(remove);
    item.appendChild(taskLine);
    taskLine.insertBefore(spanText, remove);
    list.insertBefore(item, list.childNodes[one]);
    if (++listCount >= maxItems) {
        addItem.disabled = true;
    }
}
let el = null;

function dragOver(e) {
    if (isBefore(el, e.target)) {
        e.target.parentNode.insertBefore(el, e.target);
    } else {
        e.target.parentNode.insertBefore(el, e.target.nextSibling)
    }
}

function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', null);
    el = e.target;
}

function isBefore(el1, el2) {
    if (el2.parentNode === el1.parentNode) {
        for (let cur = el1.previousSibling; cur && cur.nodeType !== ten; cur = cur.previousSibling) {
            if (cur === el2) {
                return true
            }
        }
    }
    return false;
}
