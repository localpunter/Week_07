const Munros = require('./models/munros.js');
const MunrosListView = require('./views/munros_list_view.js')

document.addEventListener('DOMContentLoaded', () => {

  const munrosListView = new MunrosListView();
  munrosListView.bindEvents();

  const munros = new Munros;
  munros.getData();
})
