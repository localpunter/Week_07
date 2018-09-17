const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunrosListView = function () {
  this.listElement = document.querySelector('#munro-list');
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (event) => {
    const data = event.detail;
    this.createMunros(data);
  })
};

MunrosListView.prototype.createMunros = function (allMunros) {
  allMunros.forEach((munroObj) => {
    // New up a Munro View passing in the munro object and list element
    const munroView = new MunroView(munroObj, this.listElement);
    munroView.render();
  });
};

module.exports = MunrosListView;
