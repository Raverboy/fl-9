const rootNode = document.getElementById('root');
//
//const todoItems = [
//    {isDone: false, id: 12345, description: 'Todo 1'}
//];
//
//// Your code goes here
//
//rootNode.appendChild(/* Append your list item node*/);
let mainPage = document.getElementById('main');
let addPage = document.getElementById('add');
let modifyPage = document.getElementById('modify');
let addItemsBtn = document.getElementById('addItemsBtn');
let cancelBtn = document.getElementById('cancelBtn');
let saveModBtn = document.getElementById('saveModBtn');
let list = document.getElementById('list');
let saveBtn = document.getElementById('saveBtn');
let span = `<span id="todoItem"><span>`
let unDone = `<input class="pushers unDone" 
id="unDone" type="image" name="imageinput" 
onclick="change()" 
>`;
let done = `<input class="pushers unDone" id="Done" type="image" name="imageinput" src="../assets/img/done-s.png">`
let remove = `<input class="pushers btnDelete" type="image" name="imageinput"  src="../assets/img/remove-s.jpg">`;
let checkBox = ''

saveBtn.addEventListener('click', addItem);
//addPage.addEventListener('click', cancelAdd);
//addPage.addEventListener('click', saveAdd);
//modifyPage.addEventListener('click', cancelMod);
//modifyPage.addEventListener('click', saveMod);
//list.addEventListener('click', completeItems);
//list.addEventListener('click', moddifyItem);
list.addEventListener('click', removeItem);
//list.addEventListener('click', check);
location.hash = '';
window.onhashchange = function() {
    let main = document.getElementsByClassName('main');
    let add = document.getElementsByClassName('add');
    let modify = document.getElementsByClassName('modify');

    if (location.hash === add) {
        add.setAttribute('id', 'active');
        return

    }
    if (location.hash === modify) {
        modify.setAttribute('id', 'active');
        return

    }
    if (location.hash === main) {
        main.setAttribute('id', 'active');
        return

    }
}
addItemsBtn.onclick = () => {
  location.hash = '/add';
}
cancelBtn.onclick = () => {
  location.hash = '';
}
saveModBtn.onclick = () => {
  location.hash = '';
}


function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('newItem').value;
    document.getElementById('emptyText').style.display = 'none';
//    let checkBox = unDone;
    let li = document.createElement('li');
    li.className = 'taskItem';
    li.setAttribute('id', 'todoItem');
    li.innerHTML = ` 
                ${unDone}
                ${newItem}
                ${remove}
    `;

    //    list.appendChild(li);
    //    list.addEventListener('click', check);
    //    
    //   function changeBox(){
    //       let checkBox = done;
    //       if(checkBox){
    //           document.getElementById('todoItem').style.backgroundColor = '#f9f9f9';
    //       }
    //       
    //   }

    //    function check(e) {
    //        if (e.target.classList.contains('unDone')) {
    //            let li = e.target.parentElement;
    //            let checkBox = done;
    //            li.innerHTML = ` 
    //                ${checkBox}
    //                ${newItem}
    //                ${remove}
    //            `;
    //            document.getElementById('todoItem').style.backgroundColor = '#f9f9f9';
    //        }
    //    }

    list.appendChild(li);

}
//function change() {
//        document.getElementById('unDone').src = '../assets/img/done-s.png';
//    }
let imgWatcher = 'a';
function change(){
    let img1 = '../assets/img/todo-s.png';
    let img2 = '../assets/img/done-s.png';
    let imgDestination = document.getElementById('unDone');
    imgDestination.src = imgDestination.src === img1 ? img1 : img2;
}



function removeItem(e) {
    if (e.target.classList.contains('btnDelete')) {
        let li = e.target.parentElement;
        list.removeChild(li);
    }
}
