const button = document.querySelector('.button-add');
const input = document.querySelector('.input-add');
const taskmeny = document.querySelector('.task-bread');
let prioritet = document.querySelector('.button-imp');
let mass = [
	{ id: 1, text: 'Купить мыло', completed: false },
	{ id: 2, text: 'Купить хлеб', completed: false },
	{ id: 3, text: 'Купить пиво', completed: false }
];
let pustmass = [];
// for (let i = 0; i < mass.length; i++) {
// 	pustmass.push(mass[i]);
// }
// console.log(pustmass);
function taskAdd(task) {

}
for (let i = 0; i < mass.length; i++) {
	pustmass.push(mass[i].text);
	taskmeny.innerHTML += '<li>' + + '</li>'
}
// //Создание таски
// function createElem(task) {
// 	var listItem = document.createElement('li');
// 	listItem.className = 'task-item';
// 	var checkbox = document.createElement('input')
// 	checkbox.type = "checkbox";
// 	checkbox.className = "custom-checkbox";
// 	var label = document.createElement('label');
// 	label.innerText = task;
// 	var redakt = document.createElement("button");
// 	redakt.className = "redakt";
// 	redakt.innerHTML = "<img src='image/Group 8465.jpg'></img>";
// 	var delet = document.createElement('button');
// 	delet.className = "delete";
// 	delet.innerHTML = '<img src="image/Group 8471.png">';
// 	listItem.appendChild(checkbox);
// 	listItem.appendChild(label);
// 	listItem.appendChild(redakt);
// 	listItem.appendChild(delet);

// 	// Кнопка удаления
// 	function deleteTask() {
// 		let del = document.querySelectorAll('.delete');
// 		delet.parentElement.remove();
// 	};
// 	delet.onclick = deleteTask;

// 	return listItem
// };
// function addTask() {
// 	if (input.value) {
// 		var listItem = createElem(input.value);
// 		taskmeny.appendChild(listItem);
// 		input.value = "";
// 	}
// 	else {
// 		alert('Введите задачу')
// 	}
// }
// button.onclick = addTask;




