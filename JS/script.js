let buttonAdd = document.querySelector('.button-add');
let inputAdd = document.querySelector('.input-add');
let taskBread = document.querySelector('.task-bread');
let todoList = [];
if (localStorage.getItem('todo')) {
	todoList = JSON.parse(localStorage.getItem('todo'));
	displayMessages();
}
buttonAdd.addEventListener('click', function () {
	let newTodo = {
		todo: inputAdd.value,
		checked: false,
		important: false
	};
	todoList.push(newTodo);
	displayMessages();
	localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages() {
	let displayMessages = '';
	todoList.forEach(function (item, i) {
		displayMessages += `
		<li>
			<input type = 'checkbox' id = 'item_${i}' ${item.checked ? 'checked' : ''}>
			<label for='item_${i}'>${item.todo}</label>
		</li>
		`;
		taskBread.innerHTML = displayMessages;

	});
}