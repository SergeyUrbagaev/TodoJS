const button = document.querySelector('.button-add');
const input = document.querySelector('.input-add');
const taskmeny = document.querySelector('.task-bread');
let prioritet = document.querySelector('.button-imp');

// Функция приоритета задачи
prioritet.onclick = function () {
	prioritet.classList.toggle('is-important');
	if (prioritet.classList.contains('is-important')) {
		prioritet.textContent = 'Важная задача';
	} else {
		prioritet.textContent = 'Обычная задача';
	}
};

// Функция вывода задачи в список
button.onclick = function butClick() {
	let content = document.createElement('li');
	if (prioritet.classList.contains('is-important')) {
		content.classList.add('is-important')
	};
	content.innerHTML = input.value;
	input.value = '';
	taskmeny.append(content);
	//добавление кнопки удаления
	let delet = document.createElement('button');
	delet.classList.add('delete');
	delet.innerHTML = '&#11197';
	content.append(delet);
};

