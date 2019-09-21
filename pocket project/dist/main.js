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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n  constructor(clockElement) {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n    this.clockElement = clockElement;\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, this.clockElement);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: attachDogLinks, dogLinkCreator, handleEnter, handleLeave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachDogLinks\", function() { return attachDogLinks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dogLinkCreator\", function() { return dogLinkCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleEnter\", function() { return handleEnter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleLeave\", function() { return handleLeave; });\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator() {\n  const dogLinks = [];\n\n  Object.keys(dogs).forEach( dogName => {\n    let a = document.createElement(\"a\");\n    a.innerHTML = dogName;\n    a.setAttribute(\"href\", dogs[dogName]);\n    let li = document.createElement(\"li\");\n    li.appendChild(a);\n    dogLinks.push(li);\n  });\n  return dogLinks;\n}\n\nfunction attachDogLinks() {\n  const dogLinks = dogLinkCreator();\n  \n  const ul = document.getElementsByClassName(\"drop-down-dog-list\");\n  ul.item(0).classList.add(\"hidden\");\n  dogLinks.forEach( link => {\n    ul.item(0).appendChild(link);\n  });\n\n}\n\nfunction handleEnter() {\n  let documentPage = document.getElementsByClassName(\"drop-down-dog-nav\");\n  documentPage.item(0).addEventListener(\"mouseenter\", () => {\n    const ul = document.getElementsByClassName(\"drop-down-dog-list\");\n    ul.item(0).classList.remove(\"hidden\");\n  })\n}\n\nfunction handleLeave() {\n  let documentPage = document.getElementsByClassName(\"drop-down-dog-nav\");\n  documentPage.item(0).addEventListener(\"mouseleave\", () => {\n    const ul = document.getElementsByClassName(\"drop-down-dog-list\");\n    ul.item(0).classList.add(\"hidden\");\n  })\n}\n\n \n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll */ \"./src/slide_scroll.js\");\n\n\n\n\n\n\nconst clockElement = document.getElementById(\"clock\");\nconst clock = new _clock__WEBPACK_IMPORTED_MODULE_1__[\"Clock\"](clockElement);\nObject(_drop_down__WEBPACK_IMPORTED_MODULE_2__[\"attachDogLinks\"])();\nObject(_drop_down__WEBPACK_IMPORTED_MODULE_2__[\"handleLeave\"])();\nObject(_drop_down__WEBPACK_IMPORTED_MODULE_2__[\"handleEnter\"])();\n// window.localStorage.removeItem(\"todos\");\nconst possibleTodos = JSON.parse(window.localStorage.getItem(\"todos\")) || [];\nObject(_todo_list__WEBPACK_IMPORTED_MODULE_3__[\"populateList\"])(possibleTodos);\nObject(_todo_list__WEBPACK_IMPORTED_MODULE_3__[\"handleSubmit\"])();\nObject(_todo_list__WEBPACK_IMPORTED_MODULE_3__[\"handleCheck\"])();\nObject(_slide_scroll__WEBPACK_IMPORTED_MODULE_4__[\"handleScroll\"])();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! exports provided: handleScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleScroll\", function() { return handleScroll; });\nfunction debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\nconst grabbedImages = document.querySelectorAll(\"img\");\nconst scrollCb = (e) => {\n  Array.from(grabbedImages).forEach(img => {\n    console.clear();\n    let top = e.currentTarget.scrollY;\n    let pictureY = img.offsetTop + (img.height / 2);\n    let bottom = e.currentTarget.innerHeight + e.currentTarget.scrollY;\n    console.log(top);\n    console.log(bottom);\n    if (pictureY >= (top - 25) && pictureY <= (bottom + 25)) {\n      img.classList.add('active');\n    } else {\n      img.classList.remove('active');\n    }\n  })\n}\n\nfunction handleScroll() {\n  window.addEventListener(\"scroll\", debounce(scrollCb, 10));\n}\n\n\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! exports provided: populateList, addTodo, handleSubmit, handleCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateList\", function() { return populateList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleSubmit\", function() { return handleSubmit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleCheck\", function() { return handleCheck; });\n\nconst possibleTodos = JSON.parse(window.localStorage.getItem(\"todos\"));\nconst todos = possibleTodos || [];\nconst ul = document.getElementsByClassName(\"todos\").item(0);\nconst form = document.getElementsByClassName(\"add-todo-form\").item(0);\n\nfunction addTodo () {\n  const storage = window.localStorage;\n  const input = document.getElementsByName(\"add-todo\").item(0);\n  const todo = { input: input.value, done: false };\n  todos.push(todo);\n  storage.setItem(\"todos\", JSON.stringify(todos));\n  input.value = \"\";\n  populateList(todos);\n}\n\nfunction populateList(arr) {\n  while (ul.firstChild) {\n    ul.removeChild(ul.firstChild);\n  }\n\n  arr.forEach((listItem, ind) => {\n    let li = document.createElement(\"li\");\n    let label = document.createElement(\"label\");\n    label.innerHTML = listItem.input;\n    let checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.checked = listItem.done;\n    checkbox.dataset.index = ind;\n  \n    li.appendChild(checkbox);\n    li.appendChild(label);\n    ul.appendChild(li);\n  })\n}\n\nfunction handleSubmit() {\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    addTodo();\n  })\n}\n\nfunction handleCheck() {\n  ul.addEventListener(\"click\", (e) => {\n    if (e.target.nodeName === \"INPUT\") {\n      const current = e.target;\n      const index = current.dataset.index;\n      todos[index].done = !todos[index].done;\n      window.localStorage.setItem(\"todos\", JSON.stringify(todos));\n    }\n  })\n}\n\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\n/* <div class=\"welcome\"></div>\n  <h1 id=\"party\">Pocket Projects!</h1>\n</div > */\nconst htmlGenerator = (string, htmlElement) => {\n  if (htmlElement.children) { \n    const children = Array.from(htmlElement.children);\n    children.forEach( ele => htmlElement.removeChild(ele));\n  }\n\n  const p = document.createElement(\"p\");\n  p.textContent = string;\n  htmlElement.appendChild(p);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\nhtmlGenerator('I <3 Vanilla DOM manipulation', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });