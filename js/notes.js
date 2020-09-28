const input = document.getElementById('noteInput');
const output = document.getElementById('noteOutput');
const parent = document.getElementById('noteWrapper');

function addNote() {
    const value = input.value;
    const item = document.createElement('li');
    const checkButton = document.createElement('div');
    const lineThrough = document.createElement('div');
    const trashBtn = document.createElement('div');
    item.className = 'note';
    checkButton.className = 'checkbox';
    lineThrough.className = 'line-through';
    trashBtn.className = 'trash-btn';
    item.innerText = value;
    item.appendChild(checkButton);
    item.appendChild(lineThrough);
    item.appendChild(trashBtn);
    output.appendChild(item);
    let itemsToStore = Array.from(output.children).push(item.innerText);
    localStorage.setItem("my_notes", JSON.stringify(
        itemsToStore
    ));
    document.querySelectorAll(".checkbox").forEach(btn => btn.addEventListener('click', toggleChecked));
    document.querySelectorAll(".trash-btn").forEach(btn => btn.addEventListener('click', removeNote));
    input.value = "";
}

function showHideSubmit() {
    if (input.value.length < 6) {
        parent.classList.remove('show');
    } else {
        parent.classList.add('show');
    }
}

let storedItems = JSON.parse(localStorage.getItem("my_notes"));
document.onload = console.log(storedItems);

function toggleChecked(event) {
    event.target.parentElement.classList.toggle('checked');
}

function removeNote(event) {
    output.removeChild(event.target.parentElement);
}


