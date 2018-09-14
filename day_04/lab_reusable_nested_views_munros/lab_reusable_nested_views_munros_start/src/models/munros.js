const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const Munros = function (){
  this.data = null;
}
Munros.prototype.getData = function (url) {
  const request = new Request(url)
  request.get()
  .then((data) => {
    this.data = data;
    PubSub.publish('Munros:all_munros_data', this.data);
  })

};
module.exports = Munros
