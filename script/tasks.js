let list = $('#main__tasks-input-container ul');
let mask = 'tdl_';

showTasks();

function showTasks() {
  // Узнаём размер хранилища
  let storage_size = localStorage.length;
  // Если в хранилище что-то есть…
  if (storage_size > 0) {
    // то берём и добавляем это в задачи
    for (let i = 0; i < storage_size; i++) {
      let key = localStorage.key(i);
      if (key.indexOf(mask) == 0) {
        // и делаем это элементами списка
        $('<li></li>').addClass('main__tasks-list-item')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(list);
      }
    }
  }
}

$('#main__tasks-input-container input').on('keydown', function (e) {
  if (e.keyCode != 13) return;
  let str = e.target.value;
  e.target.value = "";
  // Если в поле ввода было что-то написано — начинаем обрабатывать
  if (str.length > 0) {
    let number_Id = 0;
    list.children().each(function (index, el) {
      let element_Id = $(el).attr('data-itemid').slice(4);
      if (element_Id > number_Id)
        number_Id = element_Id;
    })
    number_Id++;
    // Отправляем новую задачу сразу в память
    localStorage.setItem(mask + number_Id, str);
    // и добавляем её в конец списка
    $('<li></li>').addClass('main__tasks-list-item')
      .attr('data-itemid', mask + number_Id)
      .text(str).appendTo(list);
  }
});

$(document).on('click', '.main__tasks-list-item', function (e) {
  // Находим задачу, по которой кликнули
  let jet = $(e.target);
  // Убираем её из памяти
  localStorage.removeItem(jet.attr('data-itemid'));
  // и убираем её из списка
  jet.remove();
})