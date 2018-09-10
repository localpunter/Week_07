const FormView = require('./views/form_view.js')
const PrimeNumberChecker = require('./models/prime_number_checker.js')
const ResultView = require('./views/results_view.js')


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const formView = new FormView();
  formView.bindEvents();

  const primeNumberChecker = new PrimeNumberChecker();
  primeNumberChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
