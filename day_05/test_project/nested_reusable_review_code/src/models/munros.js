const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.munrosData = [];
}

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros')
  requestHelper.get((data) => {
    PubSub.publish('Munros:data-ready', data);
  });
}

module.exports = Munros;
