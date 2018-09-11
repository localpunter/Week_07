const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

ResultView.prototype.render = function (instrument) {
  const infoParagraph = document.createElement('p');
  infoParagraph.setAttribute('style', 'white-space: pre;');
  infoParagraph.textContent = `Instrument family: ${instrument.name}\r\n${instrument.description}
  \r\nSome instruments contained within this family are: ${instrument.instruments}`
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);

};




module.exports = ResultView;
