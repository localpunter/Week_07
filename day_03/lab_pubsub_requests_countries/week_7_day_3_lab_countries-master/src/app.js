const Country = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#countries')
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();

  const countryContainer = document.querySelector('div#country');
  const resultView = new ResultView(countryContainer);
  resultView.bindEvents();

  const country = new Country();
  country.getData();
  country.bindEvents();
});
