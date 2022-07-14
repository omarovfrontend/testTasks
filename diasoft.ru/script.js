const search = document.getElementById('search');   // находим инпут
const result = document.getElementById('results');  // находим список

let list = ['Шамиль', 'Рома', 'Маша', 'Вова', 'Миша', 'Вася', 'Андрей', 'Витя'];
renderList(list, result);

// ф-я которая отдает нам список
function renderList(_list = [], el = document.body) {
  el.innerHTML = '';

  _list.forEach(item => {
    let new_el = document.createElement('li');       // для каждого элемента создаем узел дом-дерева
    new_el.innerHTML = item;                         // добавляем внутрь узла сам элемент
    el.appendChild(new_el);                          // добавляем его в конец род-го элемента
  })
}

/* 
  функция, которая на вход берет подстроку(запрос пользователя) и массив всех элементов, 
  а на выходе выдает массив отфильтрованных элементов, без учета регистра
*/ 
function filter(val, list) {
  let result = [];
  
  list.forEach(i => {
    (i.toLowerCase().indexOf(val.toLowerCase()) !== -1) ? result.push(i) : '';
  })
  return result;
}

// событие чтоб показывало нам значение которое мы вводим в инпут
search.addEventListener('input', e => {
  let new_arr = filter(e.target.value, list);
  renderList(new_arr, result);
})
