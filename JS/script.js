const button = document.querySelector('.button-add');
const input = document.querySelector('.input-add');
const taskmeny = document.querySelector('.task-bread');
let prioritet = document.querySelector('.button-imp');
let mass = [
	{ id: 1, text: 'Купить мыло', completed: false },
	{ id: 2, text: 'Купить хлеб', completed: false },
	{ id: 3, text: 'Купить пиво', completed: false }
];

function createNewElement(task) {
	let li = document.createElement('li');
	li.classList.add("task-item");

	let checkbox = document.createElement('input');
	checkbox.type = "checkbox";

	let label = document.createElement('label');
	label.innerText = task;

	let redakt = document.createElement('button');
	redakt.classList.add('redakt');
	redakt.innerHTML = "<img src='image/red.png'>";

	let delet = document.createElement('button');
	delet.classList.add('delete');
	delet.innerHTML = "<img src='image/del.png'>";

	li.append(checkbox);
	li.append(label);
	li.append(redakt);
	li.append(delet);
	return li
};

function addTask() {
	if (input.value != "") {
		let li = createNewElement(input.value);
		taskmeny.appendChild(li);
	}
}

button.onclick = addTask;


