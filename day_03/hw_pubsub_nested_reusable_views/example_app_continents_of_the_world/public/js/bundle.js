/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ContinentListView = __webpack_require__(/*! ./views/continents_list_view.js */ \"./src/views/continents_list_view.js\");\nconst Continents = __webpack_require__(/*! ./models/continents.js */ \"./src/models/continents.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const continentsListContainer = document.querySelector('#continents');\n  const continentsListView = new ContinentListView(continentsListContainer);\n  console.log('ContinentListView', continentsListContainer);\n  continentsListView.bindEvents();\n\n  const continents = new Continents();\n  continents.getData();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n}\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n}\n\nRequestHelper.prototype.get = function (onComplete) {\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', this.url);\n  xhr.addEventListener('load', function() {\n    if (this.status !== 200) {\n      return;\n    }\n\n    const data = JSON.parse(this.responseText);\n    onComplete(data);\n  });\n  xhr.send();\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/continents.js":
/*!**********************************!*\
  !*** ./src/models/continents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst Continents = function () {\n  this.continents = [];\n};\n\nContinents.prototype.getData = function () {\n  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');\n  requestHelper.get((data) => {\n    console.log('data-ready', data);\n    this.handleDataReady(data);\n    console.log('after manipulation', this.continents);\n    PubSub.publish('Continents:continents-data-ready', this.continents);\n  });\n};\n\nContinents.prototype.handleDataReady = function (countries) {\n  const continentNames = this.getContinentNames(countries);\n  this.modelContinents(countries, continentNames);\n};\n\nContinents.prototype.getContinentNames = function (countries) {\n  return countries\n    .map(country => country.region)\n    .filter((region, index, regions) => regions.indexOf(region) === index);\n};\n\nContinents.prototype.modelContinents = function (countries, continentNames) {\n  this.continents = continentNames.map((continentName) => {\n    console.log('continentArray', continentNames);\n    console.log('continentName', continentName);\n    return {\n      name: continentName,\n      countries: this.countriesByContinent(countries, continentName)\n    };\n  });\n};\n\nContinents.prototype.countriesByContinent = function (countries, continent) {\n  return countries.filter(country => country.region === continent);\n};\n\nmodule.exports = Continents;\n\n\n//# sourceURL=webpack:///./src/models/continents.js?");

/***/ }),

/***/ "./src/views/continent_view.js":
/*!*************************************!*\
  !*** ./src/views/continent_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst ContinentView = function (container, continent) {\n  this.continentsContainer = container;\n  this.continent = continent;\n};\n\nContinentView.prototype.render = function () {\n  const continentContainer = document.createElement('div');\n  continentContainer.classList.add('continent');\n\n  const name = this.createContinentHeading();\n  continentContainer.appendChild(name);\n\n  const countriesList = this.createCountriesList();\n  continentContainer.appendChild(countriesList);\n\n  this.continentsContainer.appendChild(continentContainer);\n};\n\nContinentView.prototype.createContinentHeading = function () {\n  const name = document.createElement('h2');\n  name.classList.add('continent-name');\n  if (!this.continent.name) {\n    name.textContent = \"Misc\";\n    console.log('getContName', name);\n  } else {\n    name.textContent = this.continent.name;\n  }\n  return name;\n};\n\nContinentView.prototype.createCountriesList = function () {\n  const countriesList = document.createElement('ul');\n  countriesList.classList.add('countries');\n  this.populateList(countriesList);\n  console.log('countriesList', countriesList);\n  return countriesList;\n};\n\nContinentView.prototype.populateList = function (list) {\n  this.continent.countries.forEach((country) => {\n    const countryListItem = document.createElement('li');\n    countryListItem.textContent = country.name;\n    list.appendChild(countryListItem);\n  });\n};\n\nmodule.exports = ContinentView;\n\n\n//# sourceURL=webpack:///./src/views/continent_view.js?");

/***/ }),

/***/ "./src/views/continents_list_view.js":
/*!*******************************************!*\
  !*** ./src/views/continents_list_view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst ContinentView = __webpack_require__(/*! ./continent_view.js */ \"./src/views/continent_view.js\");\n\nconst ContinentsListView = function (container) {\n  this.container = container;\n}\n\nContinentsListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Continents:continents-data-ready', (evt) => {\n    this.continents = evt.detail;\n    this.render();\n  });\n};\n\nContinentsListView.prototype.render = function () {\n  this.continents.forEach((continent) => {\n    const continentView = new ContinentView(this.container, continent);\n    // this is where each view is newed up\n    continentView.render();\n  });\n};\n\n\n\nmodule.exports = ContinentsListView;\n\n\n//# sourceURL=webpack:///./src/views/continents_list_view.js?");

/***/ })

/******/ });