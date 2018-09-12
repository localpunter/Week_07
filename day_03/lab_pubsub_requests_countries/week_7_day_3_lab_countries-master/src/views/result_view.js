const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Selectedcountry:object-loaded', (event) => {
    const countryObject = event.detail;
    this.render(countryObject);


  });
};

ResultView.prototype.render = function () {

};

// InstrumentFamilyView.prototype.render = function (family) {
//   this.container.innerHTML = '';
//
//   const familyName = this.createElement('h2', family.name);
//   this.container.appendChild(familyName);
//
//   const familyDescription = this.createElement('p', family.description);
//   this.container.appendChild(familyDescription);
//
//   const instrumentListTitle = this.createElement('h3', 'Instruments include:');
//   this.container.appendChild(instrumentListTitle);
//
//   const instrumentList = this.createInstrumentList(family.instruments);
//   this.container.appendChild(instrumentList);
// };
//
// InstrumentFamilyView.prototype.createElement = function (elementType, text) {
//   const element = document.createElement(elementType);
//   element.textContent = text;
//   return element;
// };

module.exports = ResultView;
