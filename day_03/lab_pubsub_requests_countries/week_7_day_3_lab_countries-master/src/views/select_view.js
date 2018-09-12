const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const SelectView = function (container) {
  this.container = container;
};

SelectView.prototype.bindEvents = function () {
  console.log('SelectView.bindEvents works');
  PubSub.subscribe('AllCountries:countries-loaded', (event) => {
    this.populate(event.detail);
    console.log('SelectView.bindEvents has event.detail:', event.detail)
  });

  this.container.addEventListener('change', (event) => {
    const selectedCountryIndex = event.target.value;
    PubSub.publish('Selectedcountry:index-loaded', selectedCountryIndex);
    console.log('SelectView.addEventListener has selectedCountryIndex', selectedCountryIndex);
  });
};

SelectView.prototype.populate = function (allCountriesData) {
  console.log('SelectView.populate exists');
  allCountriesData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.container.appendChild(option);
  })

};

module.exports = SelectView;
