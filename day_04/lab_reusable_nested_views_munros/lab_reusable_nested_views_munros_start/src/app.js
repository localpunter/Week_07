const Munros = require('./models/munros.js');
const MunroList = require('./views/munro_list.js');
const MunroListItem = require('./views/munro_item.js');
const Select = require('./views/select.js');


document.addEventListener('DOMContentLoaded', () => {
  const munros = new Munros()
    munros.getData('https://munroapi.herokuapp.com/api/munros');

    const section = document.querySelector('section#munros')

  const munroList = new MunroList(section)
  munroList.bindEvents();

  const select = new Select()


});
