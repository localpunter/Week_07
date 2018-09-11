const Instruments = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js')
const ResultView = require('./views/result_view.js')


document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.querySelector('select#instrument-families');
  const instrumentFamilies = new SelectView(selectElement);
  instrumentFamilies.bindEvents();

  const resultsDiv = document.querySelector('div#results')
  const resultsDisplay = new ResultView(resultsDiv);
  resultsDisplay.bindEvents();

  const InstrumentDataSource = new Instruments();
  InstrumentDataSource.bindEvents();
});
