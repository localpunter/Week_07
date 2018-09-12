const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Country = function () {
this.text = null;
};

Country.prototype.bindEvents = function () {
  PubSub.subscribe('Selectedcountry:index-loaded', (event) => {
    const selectedIndex = event.detail;
    const selectedObject = this.getCountryObject(selectedIndex);
    PubSub.publish('Selectedcountry:object-loaded', selectedObject);
    console.log('p',selectedObject)
  })

};

Country.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  console.log('getData works');
  request.get((data) => {
    this.text = data;
    console.log('getData has data:', data);
    console.log('getData has this.text', this.text)
    PubSub.publish('AllCountries:countries-loaded', this.text);
  });
};

Country.prototype.getCountryObject = function (selectedIndex) {
  return this.text[selectedIndex];
};



module.exports = Country;
